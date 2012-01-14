/**
 * jQuery html5accordion 0.1.6
 *
 * Copyright (c) 2011, Jonny Gerig Meyer
 * All rights reserved.
 *
 * Licensed under the New BSD License
 * See: http://www.opensource.org/licenses/bsd-license.php
 *
 * Based on code by Mathias Bynens
 * See: http://mathiasbynens.be/notes/html5-details-jquery
 */

/*jslint    browser:    true,
            indent:     4,
            regexp:     true */
/*global    jQuery */

(function ($) {

    'use strict';

    $.fn.html5accordion = function (opts) {

        var options = $.extend({}, $.fn.html5accordion.defaults, opts);

        return this.each(function () {
            // Store a reference to the current `details` element in a variable
            var details = $(this),
                // Store a reference to the `summary` element of the current `details` element (if any) in a variable
                detailsSummary = $(options.summarySelector + ':first', details),
                // Do the same for the info within the `details` element
                detailsNotSummary = details.children(':not(' + options.summarySelector + ':first)'),
                // This will be used later to look for direct child text nodes
                detailsNotSummaryContents = details.contents(':not(' + options.summarySelector + ':first)');

            // If there is no `summary` in the current `details` element...
            if (!detailsSummary.length) {
                // ...create one with default text
                detailsSummary = $(document.createElement('summary')).text('Details').prependTo(details);
            }

            // Look for direct child text nodes
            if (detailsNotSummary.length !== detailsNotSummaryContents.length) {
                // Wrap child text nodes in a `span` element
                detailsNotSummaryContents.filter(function () {
                    // Only keep the node in the collection if it's a text node containing more than only whitespace
                    return (this.nodeType === 3) && (/[^\t\n\r ]/.test(this.data));
                }).wrap('<span>');
                // There are now no direct child text nodes anymore - they're wrapped in `span` elements
                detailsNotSummary = details.children(':not(' + options.summarySelector + ':first)');
            }

            // Hide content unless the `open` attribute is truthy, or `details` element hasClass `open` (options.expandedClass).
            // [NOTE: ``details.prop('open')`` should work for real <details> elements to check if the `open`
            // attribute is set, but this is buggy in Firefox 5.0.]
            if (details.prop('open') || details.hasClass(options.expandedClass)) {
                details.addClass(options.expandedClass).prop('open', true);
                detailsNotSummary.slideDown(options.slideSpeed);
            } else {
                detailsNotSummary.hide();
            }

            // Set the `tabindex` attribute of the `summary` element to 0 to make it keyboard accessible
            detailsSummary.attr('tabindex', 0).click(function (event) {
                if ($(event.target).is(options.ignoredElements) && $(event.target).parents(options.summarySelector).length) {
                    // prevent clicks on summary-internal buttons or links from triggering accordion
                    return;
                }
                // Focus on the `summary` element
                detailsSummary.focus();
                // Toggle the `open` property of the `details` element
                if (details.prop('open')) { details.prop('open', false); } else { details.prop('open', true); }
                // Toggle the additional information in the `details` element
                detailsNotSummary.slideToggle(options.slideSpeed);
                details.toggleClass(options.expandedClass);
            }).keyup(function (event) {
                if (13 === event.keyCode || 32 === event.keyCode) {
                    // Enter or Space is pressed - trigger the `click` event on the `summary` element
                    // Opera already seems to trigger the `click` event when Enter is pressed
                    if (!($.browser.opera && 13 === event.keyCode)) {
                        event.preventDefault();
                        detailsSummary.click();
                    }
                }
            });
        });
    };

    /* Setup plugin defaults */
    $.fn.html5accordion.defaults = {
        summarySelector: '.summary',                // Selector for summary text
        slideSpeed: 200,                            // Slide animation speed (ms)
        expandedClass: 'open',                      // Class to be added when details are visible (expanded)
        ignoredElements: 'button, a, input, label'  // Elements within `summary` that will *not* trigger expand/collapse
    };
}(jQuery));
