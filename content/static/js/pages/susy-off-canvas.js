var OBC = (function (OBC, $) {

    'use strict';

    OBC.susyOffCanvasToggle = {
        init: function (triggers) {
            $(triggers).click(function (e) {
                e.preventDefault();
                OBC.susyOffCanvasToggle.toggleClasses(this);
                OBC.susyOffCanvasToggle.toggleText(triggers);
            });
            return triggers;
        },
        toggleClasses: function (el) {
            var body = $('body');
            var dir = $(el).attr('href');
            if (dir === '#left') {
                body.toggleClass('show-left').removeClass('show-right');
            }
            if (dir === '#right') {
                body.toggleClass('show-right').removeClass('show-left');
            }
            return body.attr('class');
        },
        toggleText: function (triggers) {
            var left = $(triggers).filter('[href="#left"]');
            var right = $(triggers).filter('[href="#right"]');
            var body = $('body');
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

    $(function () {
        OBC.susyOffCanvasToggle.init($('.toggle'));
    });

    return OBC;

}(OBC || {}, jQuery));