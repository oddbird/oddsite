/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
/*global jQuery:false*/
/*global OBC:false*/

(function (OBC, $) {

    'use strict';

    /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
        expect(numAssertions)
        stop(increment)
        start(decrement)
    Test assertions:
        ok(value, [message])
        equal(actual, expected, [message])
        notEqual(actual, expected, [message])
        deepEqual(actual, expected, [message])
        notDeepEqual(actual, expected, [message])
        strictEqual(actual, expected, [message])
        notStrictEqual(actual, expected, [message])
        raises(block, [expected], [message])
    */

    module('defuscate', {
        setup: function () {
            this.elems = [
                $('<a href="mailto:test1(which is \'at\' the)test.com" class="email">test1(which is "at" the)test.com</a>'),
                $('<a href="mailto:test2(at)test.eu" class="email">test2(at)test.eu</a>'),
                $('<a href="test.3(still at)test.info" class="email">contact me:test.3(still at)test.info</a>'),
                $('<span class="email">test1(which is /"at/" the)test.com</span>'),
                $('<span class="email">test2(at)test.eu</span>'),
                $('<span class="email">contact me:test.3(still at)test.info</span>')
            ];
            this.results = [
                $('<a href="mailto:test1@test.com" class="email">test1@test.com</a>'),
                $('<a href="mailto:test2@test.eu" class="email">test2@test.eu</a>'),
                $('<a href="test.3@test.info" class="email">contact me:test.3@test.info</a>'),
                $('<span class="email"><a href="mailto:test1@test.com">test1@test.com</a></span>'),
                $('<span class="email"><a href="mailto:test2@test.eu">test2@test.eu</a></span>'),
                $('<span class="email">contact me:<a href="mailto:test.3@test.info">test.3@test.info</a></span>')
            ];
        }
    });

    test('defuscateHref', 3, function () {
        strictEqual(OBC.defuscate.defuscateHref(this.elems[0].attr('href')), this.results[0].attr('href'));
        strictEqual(OBC.defuscate.defuscateHref(this.elems[1].attr('href')), this.results[1].attr('href'));
        strictEqual(OBC.defuscate.defuscateHref(this.elems[2].attr('href')), this.results[2].attr('href'));
    });

    test('defuscateHtml', 6, function () {
        strictEqual(OBC.defuscate.defuscateHtml(this.elems[0].html(), true), this.results[0].html());
        strictEqual(OBC.defuscate.defuscateHtml(this.elems[1].html(), true), this.results[1].html());
        strictEqual(OBC.defuscate.defuscateHtml(this.elems[2].html(), true), this.results[2].html());
        strictEqual(OBC.defuscate.defuscateHtml(this.elems[3].html(), false), this.results[3].html());
        strictEqual(OBC.defuscate.defuscateHtml(this.elems[4].html(), false), this.results[4].html());
        strictEqual(OBC.defuscate.defuscateHtml(this.elems[5].html(), false), this.results[5].html());
    });

    test('updateHref', 3, function () {
        strictEqual(
            OBC.defuscate.updateHref(this.elems[0], this.results[0].attr('href')).attr('href'),
            this.results[0].attr('href')
        );
        strictEqual(
            OBC.defuscate.updateHref(this.elems[1], this.results[1].attr('href')).attr('href'),
            this.results[1].attr('href')
        );
        strictEqual(
            OBC.defuscate.updateHref(this.elems[2], this.results[2].attr('href')).attr('href'),
            this.results[2].attr('href')
        );
    });

    test('updateHtml', 6, function () {
        strictEqual(
            OBC.defuscate.updateHtml(this.elems[0], this.results[0].html()).html(),
            this.results[0].html()
        );
        strictEqual(
            OBC.defuscate.updateHtml(this.elems[1], this.results[1].html()).html(),
            this.results[1].html()
        );
        strictEqual(
            OBC.defuscate.updateHtml(this.elems[2], this.results[2].html()).html(),
            this.results[2].html()
        );
        strictEqual(
            OBC.defuscate.updateHtml(this.elems[3], this.results[3].html()).html(),
            this.results[3].html()
        );
        strictEqual(
            OBC.defuscate.updateHtml(this.elems[4], this.results[4].html()).html(),
            this.results[4].html()
        );
        strictEqual(
            OBC.defuscate.updateHtml(this.elems[5], this.results[5].html()).html(),
            this.results[5].html()
        );
    });

    test('integration', 6, function () {
        var results = OBC.defuscate.init(this.elems);
        strictEqual(results[0].outerHTML, this.results[0].outerHTML);
        strictEqual(results[1].outerHTML, this.results[1].outerHTML);
        strictEqual(results[2].outerHTML, this.results[2].outerHTML);
        strictEqual(results[3].outerHTML, this.results[3].outerHTML);
        strictEqual(results[4].outerHTML, this.results[4].outerHTML);
        strictEqual(results[5].outerHTML, this.results[5].outerHTML);
    });

    module('susyOffCanvasToggle', {
        setup: function () {
            this.elems = [
                $('<a href="#left" class="toggle">show left</a>'),
                $('<a href="#right" class="toggle">show right</a>')
            ];
        },
        teardown: function () {
            $('body').removeClass('show-left show-right');
        }
    });

    test('toggleClasses', 3, function () {
        strictEqual(OBC.susyOffCanvasToggle.toggleClasses(this.elems[0]), 'show-left');
        strictEqual(OBC.susyOffCanvasToggle.toggleClasses(this.elems[1]), 'show-right');
        strictEqual(OBC.susyOffCanvasToggle.toggleClasses(this.elems[1]), '');
    });

    test('toggleText', 6, function () {
        var body = $('body');
        $.each(this.elems, function () {
            $(this).appendTo('#qunit-fixture');
        });
        var elems = $('#qunit-fixture .toggle');
        body.addClass('show-left');

        OBC.susyOffCanvasToggle.toggleText(elems);

        strictEqual(elems.first().text(), 'hide left');
        strictEqual(elems.last().text(), 'show right');

        body.removeClass('show-left').addClass('show-right');
        OBC.susyOffCanvasToggle.toggleText(elems);

        strictEqual(elems.first().text(), 'show left');
        strictEqual(elems.last().text(), 'hide right');

        body.removeClass('show-left show-right');
        OBC.susyOffCanvasToggle.toggleText(elems);

        strictEqual(elems.first().text(), 'show left');
        strictEqual(elems.last().text(), 'show right');
    });

}(OBC, jQuery));