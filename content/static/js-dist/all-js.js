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
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
        document.body.addEventListener('gesturestart', function () {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
}