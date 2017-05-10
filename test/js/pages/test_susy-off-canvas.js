import { susyOffCanvasToggle } from 'js/pages/susy-off-canvas';

describe('susyOffCanvasToggle', function() {
  beforeEach(function() {
    this.left = $('<a href="#left" class="toggle">show left</a>').appendTo(
      'body'
    );
    this.right = $('<a href="#right" class="toggle">show right</a>').appendTo(
      'body'
    );
    this.body = $('body');
    susyOffCanvasToggle.init($('.toggle'));
  });

  afterEach(function() {
    this.body.removeClass('show-left show-right');
    this.left.remove();
    this.right.remove();
  });

  it('toggles classes', function() {
    this.left.click();

    expect(this.body).to.have.class('show-left');
    expect(this.body).not.to.have.class('show-right');

    this.right.click();

    expect(this.body).not.to.have.class('show-left');
    expect(this.body).to.have.class('show-right');

    this.right.click();

    expect(this.body).not.to.have.class('show-left');
    expect(this.body).not.to.have.class('show-right');
  });

  it('toggles text', function() {
    this.left.click();

    expect(this.left).to.have.text('hide left');
    expect(this.right).to.have.text('show right');

    this.right.click();

    expect(this.left).to.have.text('show left');
    expect(this.right).to.have.text('hide right');

    this.right.click();

    expect(this.left).to.have.text('show left');
    expect(this.right).to.have.text('show right');
  });
});
