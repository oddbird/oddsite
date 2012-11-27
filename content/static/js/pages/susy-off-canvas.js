var OBC = (function (OBC) {

    'use strict';

    OBC.susyOffCanvasToggle = {
        init: function (triggers) {
            var i;
            for (i = 0; i < triggers.length; i++) {
                triggers[i].addEventListener('click', this.toggleListener);
            }
            return triggers;
        },
        toggleListener: function (e) {
            e.preventDefault();
            OBC.susyOffCanvasToggle.toggle(this);
        },
        toggle: function (el) {
            var dir = el.getAttribute('href');
            if (dir === '#left') {
                document.body.classList.toggle('show-left');
                document.body.classList.remove('show-right');
            }
            if (dir === '#right') {
                document.body.classList.toggle('show-right');
                document.body.classList.remove('show-left');
            }
            return document.body.getAttribute('class');
        }
    };

    window.onload = function () {
        OBC.susyOffCanvasToggle.init(document.getElementsByClassName('toggle'));
    };

    return OBC;

}(OBC || {}));