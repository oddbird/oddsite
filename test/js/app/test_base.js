import * as base from 'js/app/base.js';

describe('initializeToggles', function() {
  beforeEach(function() {
    this.body = $('body');
    this.toggle = $(
      '<div data-toggle="button" aria-controls="target &foo" ' +
        'aria-pressed="false" tabindex="0">',
    ).appendTo(this.body);
    this.toggle2 = $(
      '<button data-toggle="button" aria-controls="target &foo" ' +
        'aria-pressed="true">',
    ).appendTo(this.body);
    this.syncedToggle = $(
      '<button data-toggle="button" aria-controls="target &foo" ' +
        'data-toggle-synced="true">',
    ).appendTo(this.body);
    this.syncedToggle2 = $(
      '<button data-toggle="button" aria-controls="target &foo" ' +
        'data-toggle-synced="true">',
    ).appendTo(this.body);
    this.target = $(
      '<div data-toggle="target" data-target-id="target &foo" ' +
        'aria-expanded="false">',
    ).appendTo(this.body);
    this.targetContents = $('<button>').appendTo(this.target);
    this.targetContents2 = $('<button>').appendTo(this.target);
    this.close = $(
      '<button data-toggle="close" aria-controls="target &foo">',
    ).appendTo(this.body);
    this.otherElement = $('<button>').appendTo(this.body);
    const toggleClose = (this.toggleClose = sinon.fake());
    const toggleOpen = (this.toggleOpen = sinon.fake());
    const targetClose = (this.targetClose = sinon.fake());
    const targetOpen = (this.targetOpen = sinon.fake());
    this.toggle.on('toggle:close', toggleClose);
    this.toggle2.on('toggle:close', toggleClose);
    this.toggle.on('toggle:open', toggleOpen);
    this.toggle2.on('toggle:open', toggleOpen);
    this.target.on('target:close', targetClose);
    this.target.on('target:open', targetOpen);
    base.initializeToggles();
  });

  afterEach(function() {
    this.toggle.remove();
    this.toggle2.remove();
    this.syncedToggle.remove();
    this.syncedToggle2.remove();
    this.target.remove();
    this.close.remove();
    this.otherElement.remove();
    this.body.off(
      'click keyup focusin toggle:close toggle:open target:close target:open',
    );
  });

  it('toggle click toggles aria-pressed and aria-expanded', function() {
    this.toggle.click();

    expect(this.toggle).to.have.attr('aria-pressed', 'true');
    expect(this.toggle2).to.have.attr('aria-pressed', 'false');
    expect(this.target).to.have.attr('aria-expanded', 'true');
    expect(this.toggleOpen).to.have.been.calledOnce;
    expect(this.targetOpen).to.have.been.calledOnce;

    this.toggle2.attr('aria-pressed', 'true');
    this.toggle.click();

    expect(this.toggle).to.have.attr('aria-pressed', 'false');
    expect(this.toggle2).to.have.attr('aria-pressed', 'false');
    expect(this.target).to.have.attr('aria-expanded', 'false');
    expect(this.toggleClose).to.have.been.calledOnce;
    expect(this.targetClose).to.have.been.calledOnce;
  });

  it('ENTER triggers toggle click', function() {
    const ENTER = $.Event('keyup', { which: base.KEYCODES.ENTER });
    const notENTER = $.Event('keyup', { which: base.KEYCODES.ESC });
    this.toggle.trigger(notENTER);

    expect(this.toggle).to.have.attr('aria-pressed', 'false');
    expect(this.toggle2).to.have.attr('aria-pressed', 'true');
    expect(this.target).to.have.attr('aria-expanded', 'false');
    expect(this.toggleOpen).not.to.have.been.called;
    expect(this.targetOpen).not.to.have.been.called;

    this.toggle.trigger(ENTER);

    expect(this.toggle).to.have.attr('aria-pressed', 'true');
    expect(this.toggle2).to.have.attr('aria-pressed', 'false');
    expect(this.target).to.have.attr('aria-expanded', 'true');
    expect(this.toggleOpen).to.have.been.calledOnce;
    expect(this.targetOpen).to.have.been.calledOnce;

    this.toggle.trigger(ENTER);

    expect(this.toggle).to.have.attr('aria-pressed', 'false');
    expect(this.toggle2).to.have.attr('aria-pressed', 'false');
    expect(this.target).to.have.attr('aria-expanded', 'false');
    expect(this.toggleClose).to.have.been.calledOnce;
    expect(this.targetClose).to.have.been.calledOnce;
  });

  it('synced toggles remain in sync (both open or both closed)', function() {
    this.syncedToggle.click();

    expect(this.syncedToggle).to.have.attr('aria-pressed', 'true');
    expect(this.syncedToggle2).to.have.attr('aria-pressed', 'true');
    expect(this.target).to.have.attr('aria-expanded', 'true');

    this.syncedToggle2.click();

    expect(this.syncedToggle).to.have.attr('aria-pressed', 'false');
    expect(this.syncedToggle2).to.have.attr('aria-pressed', 'false');
    expect(this.target).to.have.attr('aria-expanded', 'false');
  });

  it(
    'toggle:close and toggle:open events do not change aria-expanded if ' +
      'triggered on nested elements',
    function() {
      const targetInner = $('<div data-toggle="target">').appendTo(this.target);
      targetInner.trigger('target:open');

      expect(targetInner).to.have.attr('aria-expanded', 'true');
      expect(this.target).to.have.attr('aria-expanded', 'false');
      expect(this.targetOpen).to.have.been.calledOnce;

      targetInner.trigger('target:close');

      expect(targetInner).to.have.attr('aria-expanded', 'false');
      expect(this.target).to.have.attr('aria-expanded', 'false');
      expect(this.targetClose).to.have.been.calledOnce;
    },
  );

  it('close click sets aria-pressed and aria-expanded to "false"', function() {
    this.toggle.attr('aria-pressed', 'true');
    this.close.click();

    expect(this.toggle).to.have.attr('aria-pressed', 'false');
    expect(this.toggle2).to.have.attr('aria-pressed', 'false');
    expect(this.target).to.have.attr('aria-expanded', 'false');
    expect(this.toggleClose).to.have.been.calledTwice;
    expect(this.targetClose).to.have.been.calledTwice;

    this.targetClose.resetHistory();
    this.target.attr('aria-expanded', 'true');
    this.close.click();

    expect(this.target).to.have.attr('aria-expanded', 'false');
    expect(this.targetClose).to.have.been.calledOnce;
  });

  describe('auto-closing', function() {
    beforeEach(function() {
      sinon.stub($, 'doTimeout').callsArg(2);
      this.target.attr('data-auto-closing', 'true');
      this.toggle.click();
    });

    it('closes on any click outside the target', function() {
      this.target.click();

      expect(this.toggle).to.have.attr('aria-pressed', 'true');
      expect(this.target).to.have.attr('aria-expanded', 'true');
      expect(this.toggleClose).not.to.have.been.called;
      expect(this.targetClose).not.to.have.been.called;

      this.body.click();

      expect(this.toggle).to.have.attr('aria-pressed', 'false');
      expect(this.target).to.have.attr('aria-expanded', 'false');
      expect(this.toggleClose).to.have.been.calledOnce;
      expect(this.targetClose).to.have.been.calledOnce;
    });

    it('does not close if clicked el is removed from DOM', function() {
      const el = $('div').appendTo(this.body);
      el.on('click', () => {
        el.remove();
      });
      el.click();

      expect(this.toggle).to.have.attr('aria-pressed', 'true');
      expect(this.target).to.have.attr('aria-expanded', 'true');
      expect(this.toggleClose).not.to.have.been.called;
      expect(this.targetClose).not.to.have.been.called;
    });

    it('does not close if exception is clicked', function() {
      this.target.attr('data-auto-closing-exception', '.exception');
      const el = $('<div class="exception">').appendTo(this.body);
      el.click();

      expect(this.toggle).to.have.attr('aria-pressed', 'true');
      expect(this.target).to.have.attr('aria-expanded', 'true');
      expect(this.toggleClose).not.to.have.been.called;
      expect(this.targetClose).not.to.have.been.called;

      el.remove();
    });
  });

  it('auto-closing-on-any-click toggle closes on any click', function() {
    sinon.stub($, 'doTimeout').callsArg(2);
    this.target.attr('data-auto-closing', 'true');
    this.target.attr('data-auto-closing-on-any-click', 'true');
    this.toggle.click();

    expect(this.toggle).to.have.attr('aria-pressed', 'true');
    expect(this.target).to.have.attr('aria-expanded', 'true');
    expect(this.toggleOpen).to.have.been.calledOnce;
    expect(this.targetOpen).to.have.been.calledOnce;

    this.target.click();

    expect(this.toggle).to.have.attr('aria-pressed', 'false');
    expect(this.target).to.have.attr('aria-expanded', 'false');
    expect(this.toggleClose).to.have.been.calledOnce;
    expect(this.targetClose).to.have.been.calledOnce;
  });

  it('multiple auto-closing toggles work independently', function() {
    sinon.stub($, 'doTimeout').callsArg(2);
    const otherTarget = $(
      '<div data-toggle="target" data-target-id="target2"' +
        ' data-auto-closing="true" aria-expanded="false">',
    ).appendTo(this.body);
    const otherToggle = $(
      '<div data-toggle="button" aria-controls="target2" ' +
        'aria-pressed="false">',
    ).appendTo(this.body);
    this.target.attr('data-auto-closing', 'true');
    this.toggle.click();

    expect(this.toggle).to.have.attr('aria-pressed', 'true');
    expect(this.target).to.have.attr('aria-expanded', 'true');
    expect(otherToggle).to.have.attr('aria-pressed', 'false');
    expect(otherTarget).to.have.attr('aria-expanded', 'false');

    otherToggle.click();

    expect(this.toggle).to.have.attr('aria-pressed', 'false');
    expect(this.target).to.have.attr('aria-expanded', 'false');
    expect(otherToggle).to.have.attr('aria-pressed', 'true');
    expect(otherTarget).to.have.attr('aria-expanded', 'true');

    this.toggle.click();

    expect(this.toggle).to.have.attr('aria-pressed', 'true');
    expect(this.target).to.have.attr('aria-expanded', 'true');
    expect(otherToggle).to.have.attr('aria-pressed', 'false');
    expect(otherTarget).to.have.attr('aria-expanded', 'false');

    otherTarget.remove();
    otherToggle.remove();
  });

  it('focus within target opens toggle', function() {
    const TAB = $.Event('keyup', { which: base.KEYCODES.TAB });
    sinon.stub($, 'doTimeout').callsArg(2);
    this.targetContents.focus();

    expect(this.toggle).to.have.attr('aria-pressed', 'true');
    expect(this.target).to.have.attr('aria-expanded', 'true');
    expect(this.toggleOpen).to.have.been.calledOnce;
    expect(this.targetOpen).to.have.been.calledOnce;

    this.targetContents2.focus();
    this.body.trigger(TAB);

    expect(this.toggle).to.have.attr('aria-pressed', 'true');
    expect(this.target).to.have.attr('aria-expanded', 'true');

    this.target.removeData('auto-opened');
    this.otherElement.focus();
    this.body.trigger(TAB);

    expect(this.toggle).to.have.attr('aria-pressed', 'true');
    expect(this.target).to.have.attr('aria-expanded', 'true');

    this.target.data('auto-opened', true);
    this.body.trigger(TAB);

    expect(this.toggle).to.have.attr('aria-pressed', 'false');
    expect(this.target).to.have.attr('aria-expanded', 'false');
    expect(this.toggleClose).to.have.been.called;
    expect(this.targetClose).to.have.been.called;
  });
});

describe('initializeDynamicNav', function() {
  beforeEach(function() {
    this.toggle = $('<div aria-controls="title-dropdown">').appendTo('body');
    this.target = $('<div id="title-dropdown">').appendTo('body');
    this.radio = $(
      '<input type="radio" name="title-option" value="foobar">',
    ).appendTo(this.target);
    this.subtitle = $('<div class="tagline-option" id="foobar">').appendTo(
      'body',
    );
    this.subtitle2 = $('<div class="tagline-option">').appendTo('body');
    const toggleClose = (this.toggleClose = sinon.fake());
    this.toggle.on('toggle:close', toggleClose);
    base.initializeDynamicNav();
  });

  afterEach(function() {
    this.toggle.remove();
    this.target.remove();
    this.subtitle.remove();
    this.subtitle2.remove();
  });

  it('click updates .is-active and subtitles', function() {
    this.radio.click();

    expect(this.toggle).to.have.text('foobar');
    expect(this.subtitle).to.have.class('is-active');
    expect(this.subtitle2).not.to.have.class('is-active');
    expect(this.toggleClose).to.have.been.calledOnce;
  });

  it('does not close toggle on keyboard-triggered click', function() {
    const click = $.Event('click', { clientX: 0, clientY: 0 });
    this.radio.trigger(click);

    expect(this.toggle).to.have.text('foobar');
    expect(this.subtitle).to.have.class('is-active');
    expect(this.subtitle2).not.to.have.class('is-active');
    expect(this.toggleClose).not.to.have.been.called;
  });
});

describe('initializeLogoFadeOnScroll', function() {
  beforeEach(function() {
    this.logo = $('<div class="no-hero">').appendTo('body');
    this.bannerLogo = $('<div class="brand">').appendTo('body');
    sinon.stub($, 'doTimeout').callsArg(2);
    sinon.spy($.fn, 'scroll');
    sinon.spy($.fn, 'resize');
    sinon.stub($.fn, 'height').returns(10);
    sinon.stub($.fn, 'outerHeight').returns(20);
    sinon.stub($.fn, 'scrollTop');
    this.triggerScroll = scrollTop => {
      $.fn.scrollTop.returns(scrollTop);
      $.fn.scroll.args[0][0]();
    };
  });

  afterEach(function() {
    this.logo.remove();
  });

  after(function() {
    $(window).off('scroll resize');
  });

  describe('scroll', function() {
    it('updates opacity (if changed)', function() {
      base.initializeLogoFadeOnScroll();
      this.triggerScroll(0);

      expect(this.bannerLogo).to.have.css('--opacity', '0');

      this.triggerScroll(10);

      expect(this.bannerLogo).to.have.css('--opacity', '0.666667');

      this.triggerScroll(20);

      expect(this.bannerLogo).to.have.css('--opacity', '1');
    });

    it('does update if no logo', function() {
      this.logo.remove();
      base.initializeLogoFadeOnScroll();

      expect($.fn.scroll).not.to.have.been.called;
    });

    it('recalculates on window resize', function() {
      base.initializeLogoFadeOnScroll();
      this.triggerScroll(20);

      expect(this.bannerLogo).to.have.css('--opacity', '1');

      $.fn.outerHeight.returns(50);
      this.triggerScroll(20);

      expect(this.bannerLogo).to.have.css('--opacity', '1');

      $.fn.resize.args[0][0]();

      expect(this.bannerLogo).to.have.css('--opacity', '0.666667');
    });
  });
});
