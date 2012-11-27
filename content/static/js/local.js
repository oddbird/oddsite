var OBC = (function (OBC, $) {

    'use strict';

    OBC.defuscate = {
        defaults: {
            find: /\b([A-Z0-9._%\-]+)\([^)]+\)((?:[A-Z0-9\-]+\.)+[A-Z]{2,6})\b/gi,
            replace: '$1@$2'
        },
        init: function (elems) {
            var i, el, newHref, newHtml, is_link;
            for (i = 0; i < elems.length; i++) {
                el = $(elems[i]);
                is_link = false;
                if (el.is('a[href]')) {
                    is_link = true;
                    newHref = this.defuscateHref(el.attr('href'));
                    this.updateHref(el, newHref);
                }
                newHtml = this.defuscateHtml(el.html(), is_link);
                this.updateHtml(el, newHtml);
            }
            return elems;
        },
        defuscateHref: function (href) {
            return href.replace(this.defaults.find, this.defaults.replace);
        },
        defuscateHtml: function (html, is_link) {
            var find = this.defaults.find;
            var replace = this.defaults.replace;
            var replacedHTML;
            if (is_link) {
                replacedHTML = html.replace(find, replace);
            } else {
                replacedHTML = html.replace(find, '<a href="mailto:' + replace + '">' + replace + '</a>');
            }
            return replacedHTML;
        },
        updateHref: function (el, newHref) {
            el.attr('href', newHref);
            return el;
        },
        updateHtml: function (el, newHtml) {
            el.html(newHtml);
            return el;
        }
    };

    $(function () {
        OBC.defuscate.init($('.email'));
    });

    return OBC;

}(OBC || {}, jQuery));