var OBC = (function (OBC, $) {

    'use strict';

    OBC.susyOffCanvasToggle = {
        init: function (triggers) {
            $(triggers).click(function (e) {
                e.preventDefault();
                OBC.susyOffCanvasToggle.toggle(this);
            });
            return triggers;
        },
        toggle: function (el) {
            var dir = $(el).attr('href');
            if (dir === '#left') {
                $('body').toggleClass('show-left').removeClass('show-right');
            }
            if (dir === '#right') {
                $('body').toggleClass('show-right').removeClass('show-left');
            }
            return $('body').attr('class');
        }
    };

    $(function () {
        OBC.susyOffCanvasToggle.init($('.toggle'));
    });

    return OBC;

}(OBC || {}, jQuery));