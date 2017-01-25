export const initializeToggles = function () {
  const body = $('body');

  body.on('toggle:close', '[data-toggle="button"]', function () {
    const id = $(this).attr('aria-controls');
    const target = $(`[data-target-id="${id}"]`);
    const openToggles =
      $(`[data-toggle="button"][aria-controls="${id}"][aria-pressed="true"]`);
    openToggles.attr('aria-pressed', 'false');
    target.trigger('target:close');
  });

  body.on('toggle:open', '[data-toggle="button"]', function () {
    const toggle = $(this);
    const targetID = toggle.attr('aria-controls');
    const target = $(`[data-target-id="${targetID}"]`);
    const otherToggles =
      $(`[data-toggle="button"][aria-controls="${targetID}"]`).not(toggle);
    // If this is a synced toggle, open all other attached toggles
    if (toggle.data('toggle-synced')) {
      otherToggles.filter('[data-toggle-synced="true"]').attr(
        'aria-pressed', 'true');
    // Otherwise, close other attached toggles.
    } else {
      otherToggles.filter('[aria-pressed="true"]').attr(
        'aria-pressed', 'false');
    }
    toggle.attr('aria-pressed', 'true');
    target.trigger('target:open');
  });

  body.on('target:close', '[data-toggle="target"]', function (evt) {
    const target = $(this);
    // Prevent event firing on multiple nested targets
    if ($(evt.target).is(target)) {
      target.attr('aria-expanded', 'false');
    }
  });

  let counter = 0;
  const closeTarget = function (target) {
    // Close a target and update any attached toggles
    const id = target.attr('data-target-id');
    const openToggles =
      $(`[data-toggle="button"][aria-controls="${id}"][aria-pressed="true"]`);
    if (openToggles.length) {
      openToggles.trigger('toggle:close');
    } else {
      target.trigger('target:close');
    }
  };
  const autoClose = function (evtName, evt) {
    // "this" is bound to the original target
    const targetID = this.attr('data-target-id');
    const newTarget = $(evt.target);
    if (this.data('auto-closing-on-any-click') ||
        !newTarget.closest(this).length ||
        newTarget.closest(`[data-close-toggle="${targetID}"]`).length) {
      body.off(evtName);
      closeTarget(this);
    }
  };

  body.on('target:open', '[data-toggle="target"]', function (evt) {
    const target = $(this);
    // Prevent event firing on multiple nested targets
    if ($(evt.target).is(target)) {
      target.attr('aria-expanded', 'true');
      if (target.data('auto-closing')) {
        counter = counter + 1;
        const evtName = `click.toggle_${counter}`;
        body.on(evtName, autoClose.bind(target, evtName));
      }
    }
  });

  body.on('click', '[data-toggle="button"]', function (evt) {
    evt.preventDefault();
    const toggle = $(this);
    if (toggle.attr('aria-pressed') === 'true') {
      toggle.trigger('toggle:close');
    } else {
      toggle.trigger('toggle:open');
    }
  });

  body.on('click', '[data-toggle="close"]', function (evt) {
    evt.preventDefault();
    const target = $(`[data-target-id="${$(this).attr('aria-controls')}"]`);
    closeTarget(target);
  });
};
