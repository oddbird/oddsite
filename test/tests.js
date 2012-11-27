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
                $('<a href="mailto:test1(which is \'at\' the)test.com" class="email">test1(which is "at" the)test.com</a>').get(0),
                $('<a href="mailto:test2(at)test.eu" class="email">test2(at)test.eu</a>').get(0),
                $('<a href="test.3(still at)test.info" class="email">contact me:test.3(still at)test.info</a>').get(0),
                $('<span class="email">test1(which is /"at/" the)test.com</span>').get(0),
                $('<span class="email">test2(at)test.eu</span>').get(0),
                $('<span class="email">contact me:test.3(still at)test.info</span>').get(0)
            ];
            this.results = [
                $('<a href="mailto:test1@test.com" class="email">test1@test.com</a>').get(0),
                $('<a href="mailto:test2@test.eu" class="email">test2@test.eu</a>').get(0),
                $('<a href="test.3@test.info" class="email">contact me:test.3@test.info</a>').get(0),
                $('<span class="email"><a href="mailto:test1@test.com">test1@test.com</a></span>').get(0),
                $('<span class="email"><a href="mailto:test2@test.eu">test2@test.eu</a></span>').get(0),
                $('<span class="email">contact me:<a href="mailto:test.3@test.info">test.3@test.info</a></span>').get(0)
            ];
        }
    });

    test('defuscateHref', 3, function () {
        strictEqual(OBC.defuscate.defuscateHref(this.elems[0].getAttribute('href')), this.results[0].getAttribute('href'));
        strictEqual(OBC.defuscate.defuscateHref(this.elems[1].getAttribute('href')), this.results[1].getAttribute('href'));
        strictEqual(OBC.defuscate.defuscateHref(this.elems[2].getAttribute('href')), this.results[2].getAttribute('href'));
    });

    test('defuscateHtml', 6, function () {
        strictEqual(OBC.defuscate.defuscateHtml(this.elems[0].innerHTML, true), this.results[0].innerHTML);
        strictEqual(OBC.defuscate.defuscateHtml(this.elems[1].innerHTML, true), this.results[1].innerHTML);
        strictEqual(OBC.defuscate.defuscateHtml(this.elems[2].innerHTML, true), this.results[2].innerHTML);
        strictEqual(OBC.defuscate.defuscateHtml(this.elems[3].innerHTML, false), this.results[3].innerHTML);
        strictEqual(OBC.defuscate.defuscateHtml(this.elems[4].innerHTML, false), this.results[4].innerHTML);
        strictEqual(OBC.defuscate.defuscateHtml(this.elems[5].innerHTML, false), this.results[5].innerHTML);
    });

    test('updateHref', 3, function () {
        strictEqual(
            OBC.defuscate.updateHref(this.elems[0], this.results[0].getAttribute('href')).getAttribute('href'),
            this.results[0].getAttribute('href')
        );
        strictEqual(
            OBC.defuscate.updateHref(this.elems[1], this.results[1].getAttribute('href')).getAttribute('href'),
            this.results[1].getAttribute('href')
        );
        strictEqual(
            OBC.defuscate.updateHref(this.elems[2], this.results[2].getAttribute('href')).getAttribute('href'),
            this.results[2].getAttribute('href')
        );
    });

    test('updateHtml', 6, function () {
        strictEqual(
            OBC.defuscate.updateHtml(this.elems[0], this.results[0].innerHTML).innerHTML,
            this.results[0].innerHTML
        );
        strictEqual(
            OBC.defuscate.updateHtml(this.elems[1], this.results[1].innerHTML).innerHTML,
            this.results[1].innerHTML
        );
        strictEqual(
            OBC.defuscate.updateHtml(this.elems[2], this.results[2].innerHTML).innerHTML,
            this.results[2].innerHTML
        );
        strictEqual(
            OBC.defuscate.updateHtml(this.elems[3], this.results[3].innerHTML).innerHTML,
            this.results[3].innerHTML
        );
        strictEqual(
            OBC.defuscate.updateHtml(this.elems[4], this.results[4].innerHTML).innerHTML,
            this.results[4].innerHTML
        );
        strictEqual(
            OBC.defuscate.updateHtml(this.elems[5], this.results[5].innerHTML).innerHTML,
            this.results[5].innerHTML
        );
    });

    test('defuscate integration', 6, function () {
        var results = OBC.defuscate.init(this.elems);
        strictEqual(results[0].outerHTML, this.results[0].outerHTML);
        strictEqual(results[1].outerHTML, this.results[1].outerHTML);
        strictEqual(results[2].outerHTML, this.results[2].outerHTML);
        strictEqual(results[3].outerHTML, this.results[3].outerHTML);
        strictEqual(results[4].outerHTML, this.results[4].outerHTML);
        strictEqual(results[5].outerHTML, this.results[5].outerHTML);
    });

}(OBC, jQuery));