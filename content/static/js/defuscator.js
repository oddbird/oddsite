/*
 * Email Defuscator - jQuery plugin 1.0-beta2
 *
 * Copyright (c) 2007 Joakim Stai
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id$
 *
 */

/**
 * Converts obfuscated email addresses into normal, working email addresses.
 *
 * @name defuscate
 * @param Boolean link If true, all defuscated email addresses will be turned into links, defaults to true (optional)
 * @param String find The regular expression used to search for obfuscated email addresses (optional)
 * @param String replace Replacement text for defuscating email addresses (optional)
 * @descr Converts obfuscated email addresses into normal, working email addresses
 */

jQuery.fn.defuscate = function( settings ) {
    settings = jQuery.extend({
        link: true,
        find: /\b([A-Z0-9._%-]+)\([^)]+\)((?:[A-Z0-9-]+\.)+[A-Z]{2,6})\b/gi,
        replace: '$1@$2'
    }, settings);
    return this.each(function() {
        if ( $(this).is('a[@href]') ) {
            $(this).attr('href', $(this).attr('href').replace(settings.find, settings.replace));
            var is_link = true;
        }
        $(this).html($(this).html().replace(settings.find, (settings.link && !is_link ? '<a href="mailto:' + settings.replace + '">' + settings.replace + '</a>' : settings.replace)));
    });
};