import 'jquery-dotimeout';

// Store keycode variables for easier readability
export const KEYCODES = {
  SPACE: 32,
  ENTER: 13,
  TAB: 9,
  ESC: 27,
  BACKSPACE: 8,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  CAPS: 20,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46,
  COMMA: 44,
  Y: 89,
  Z: 90,
};

export const closeToggle = function(target) {
  // Close a target and update any attached toggles
  const id = target.attr('data-target-id');
  const openToggles = $(
    `[data-toggle="button"][aria-controls="${id}"][aria-pressed="true"]`,
  );
  if (openToggles.length) {
    openToggles.trigger('toggle:close');
  } else {
    target.trigger('target:close');
  }
};

export const initializeToggles = function() {
  const body = $('body');

  body.on('toggle:close', '[data-toggle="button"]', function cb() {
    const id = $(this).attr('aria-controls');
    const target = $(`[data-target-id="${id}"]`);
    const openToggles = $(
      `[data-toggle="button"][aria-controls="${id}"][aria-pressed="true"]`,
    );
    openToggles.attr('aria-pressed', 'false');
    target.trigger('target:close');
  });

  body.on('toggle:open', '[data-toggle="button"]', function cb() {
    const toggle = $(this);
    const targetID = toggle.attr('aria-controls');
    const target = $(`[data-target-id="${targetID}"]`);
    const otherToggles = $(
      `[data-toggle="button"][aria-controls="${targetID}"]`,
    ).not(toggle);
    // If this is a synced toggle, open all other attached toggles
    if (toggle.data('toggle-synced')) {
      otherToggles
        .filter('[data-toggle-synced="true"]')
        .attr('aria-pressed', 'true');
      // Otherwise, close other attached toggles.
    } else {
      otherToggles
        .filter('[aria-pressed="true"]')
        .attr('aria-pressed', 'false');
    }
    toggle.attr('aria-pressed', 'true');
    target.trigger('target:open');
  });

  body.on('target:close', '[data-toggle="target"]', function cb(evt) {
    const target = $(this);
    // Prevent event firing on multiple nested targets
    if ($(evt.target).is(target)) {
      target.attr('aria-expanded', 'false');
      target.removeData('auto-opened');
    }
  });

  body.on('target:open', '[data-toggle="target"]', function cb(evt) {
    const target = $(this);
    // Prevent event firing on multiple nested targets
    if ($(evt.target).is(target)) {
      target.attr('aria-expanded', 'true');
    }
  });

  body.on('click keyup', '[data-toggle="button"]', function cb(evt) {
    const toggle = $(this);
    // Browsers trigger `click` on button `ENTER` by default
    if (
      evt.type === 'keyup' &&
      (evt.which !== KEYCODES.ENTER || toggle.is('button'))
    ) {
      return;
    }
    if (toggle.attr('aria-pressed') === 'true') {
      toggle.trigger('toggle:close');
    } else {
      toggle.trigger('toggle:open');
    }
  });

  body.on('click', '[data-toggle="close"]', function cb(evt) {
    evt.preventDefault();
    const target = $(`[data-target-id="${$(this).attr('aria-controls')}"]`);
    closeToggle(target);
  });

  body.on(
    'focusin',
    '[data-toggle="target"][aria-expanded="false"]',
    function cb() {
      const target = $(this);
      const id = target.attr('data-target-id');
      const toggle = $(`[data-toggle="button"][aria-controls="${id}"]`).first();
      target.data('auto-opened', true);
      toggle.trigger('toggle:open');
    },
  );

  const autoClose = function(newTarget, target) {
    const targetID = target.attr('data-target-id');
    const toggleClicked = Boolean(
      newTarget.closest(`[aria-controls="${targetID}"]`).length,
    );
    const clickedElInDOM = document.contains(newTarget.get(0));
    const clickedOutsideTarget = !newTarget.closest(target).length;
    const exception = target.attr('data-auto-closing-exception');
    const clickedException = exception
      ? Boolean(newTarget.closest(exception).length)
      : false;
    if (
      !toggleClicked &&
      !clickedException &&
      (target.data('auto-closing-on-any-click') ||
        (clickedElInDOM && clickedOutsideTarget))
    ) {
      closeToggle(target);
    }
  };

  body.on('click keyup', evt => {
    if (evt.type === 'keyup' && evt.which !== KEYCODES.TAB) {
      return;
    }
    $.doTimeout(
      'toggle-autoclose',
      75,
      () => {
        const openTargets = $('[data-toggle="target"][aria-expanded="true"]');
        openTargets.each((index, target) => {
          target = $(target);
          // Do not close unless auto-opened or auto-closing toggle
          if (
            !(
              target.data('auto-closing') === true ||
              target.data('auto-opened') === true
            )
          ) {
            return;
          }
          const newTarget =
            evt.type === 'keyup' ? $(document.activeElement) : $(evt.target);
          autoClose(newTarget, target);
        });
      },
      true,
    );
  });
};

export const initializeDynamicNav = function() {
  const toggle = $('[aria-controls="title-dropdown"]');
  const target = $('#title-dropdown');
  const radios = target.find('input[type="radio"][name="title-option"]');
  const subtitles = $('.tagline-option');
  radios.on('click', evt => {
    const val = $(evt.currentTarget).val();
    subtitles
      .removeClass('is-active')
      .filter(`#${val}`)
      .addClass('is-active');
    toggle.text(val);
    // Close menu if this was an actual `click` (not a change using arrow keys)
    if (evt.clientX !== 0 && evt.clientY !== 0) {
      toggle.trigger('toggle:close');
    }
  });
};

export const initializeLogoFadeOnScroll = function() {
  const logo = $('.no-hero');
  if (logo.length) {
    const $window = $(window);
    const bannerLogo = $('.brand');
    let opacity = 0;
    let logoHeight, logoTopPadding;
    const calculateSizes = () => {
      logoHeight = logo.height();
      logoTopPadding = (logo.outerHeight() - logoHeight) / 2;
      logoHeight = logoHeight + logoTopPadding;
    };
    const updateOpacity = () => {
      const scrolled = $window.scrollTop();
      const newOpacity = Math.min(scrolled / logoHeight, 1);
      if (newOpacity !== opacity) {
        opacity = newOpacity;
        bannerLogo.css('--opacity', opacity.toString());
      }
    };

    calculateSizes();
    updateOpacity();

    $window.scroll(() => {
      $.doTimeout('scroll', 5, () => {
        updateOpacity();
      });
    });

    $window.resize(() => {
      $.doTimeout('resize', 100, () => {
        calculateSizes();
        updateOpacity();
      });
    });
  }
};
