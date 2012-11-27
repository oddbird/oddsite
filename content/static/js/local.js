var OBC = (function (OBC) {

    'use strict';

    OBC.defuscate = {
        defaults: {
            find: /\b([A-Z0-9._%\-]+)\([^)]+\)((?:[A-Z0-9\-]+\.)+[A-Z]{2,6})\b/gi,
            replace: '$1@$2'
        },
        init: function (links) {
            var i, el, newHref, newHtml, is_link;
            for (i = 0; i < links.length; i++) {
                el = links[i];
                is_link = false;
                if (el.hasAttribute('href')) {
                    is_link = true;
                    newHref = this.defuscateHref(el.getAttribute('href'));
                    this.updateHref(el, newHref);
                }
                newHtml = this.defuscateHtml(el.innerHTML, is_link);
                this.updateHtml(el, newHtml);
            }
            return links;
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
            el.setAttribute('href', newHref);
            return el;
        },
        updateHtml: function (el, newHtml) {
            el.innerHTML = newHtml;
            return el;
        }
    };

    window.onload = function () {
        OBC.defuscate.init(document.getElementsByClassName('email'));
    };

    return OBC;

}(OBC || {}));