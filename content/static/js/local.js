var OBC = (function (OBC) {

    'use strict';

    OBC.defuscate = function () {
        var find = /\b([A-Z0-9._%\-]+)\([^)]+\)((?:[A-Z0-9\-]+\.)+[A-Z]{2,6})\b/gi;
        var replace = '$1@$2';
        var is_link;
        var links = document.getElementsByClassName('email');
        var defuscateLink = function (el) {
            var html = el.innerHTML;
            var replacedHTML;
            if (el.hasAttribute('href')) {
                var replaced = el.getAttribute('href').replace(find, replace);
                el.setAttribute('href', replaced);
                is_link = true;
            }
            if (is_link) {
                replacedHTML = html.replace(find, replace);
            } else {
                replacedHTML = html.replace(find, '<a href="mailto:' + replace + '">' + replace + '</a>');
            }
            el.innerHTML = replacedHTML;
        };
        var i;
        for (i = 0; i < links.length; i++) {
            defuscateLink(links[i]);
        }
    };

    window.onload = function () {
        OBC.defuscate();
    };

    return OBC;

}(OBC || {}));