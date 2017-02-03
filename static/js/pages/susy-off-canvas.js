const body = $('body');

export const susyOffCanvasToggle = {
  init (triggers) {
    $(triggers).click(function (evt) {
      evt.preventDefault();
      susyOffCanvasToggle.toggleClasses(this);
      susyOffCanvasToggle.toggleText(triggers);
    });
    return triggers;
  },
  toggleClasses (el) {
    const dir = $(el).attr('href');
    if (dir === '#left') {
      body.toggleClass('show-left').removeClass('show-right');
    }
    if (dir === '#right') {
      body.toggleClass('show-right').removeClass('show-left');
    }
    return body.attr('class');
  },
  toggleText (triggers) {
    const left = $(triggers).filter('[href="#left"]');
    const right = $(triggers).filter('[href="#right"]');
    if (body.hasClass('show-left')) {
      left.text('hide left');
    } else {
      left.text('show left');
    }
    if (body.hasClass('show-right')) {
      right.text('hide right');
    } else {
      right.text('show right');
    }
  }
};

/* istanbul ignore next */
$(() => { susyOffCanvasToggle.init($('.toggle')); });
