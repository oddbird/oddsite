public: yes
tags: [Susy, Susy1, Layout, Grids, 'Sub-pixel Rounding', Code]
author: miriam
image:
  - src: 'blog/susy.jpg'
summary: |
  A few new features have landed in Susy 1.0.7,
  even as we work on more integrated syntaxes for 2.0.
  The ``isolate()`` and ``isolate-grid()`` mixins
  help you manage the worst effects of
  `sub-pixel rounding`_,
  while ``bleed()`` helps you break items out of the box.

  .. _sub-pixel rounding: http://palantir.net/blog/responsive-design-s-dirty-little-secret


Isolation and Bleed in Susy
===========================

A few new features have landed in Susy 1.0.7,
even as we work on more integrated syntaxes for 2.0.

Isolation
---------

`Sub-pixel rounding`_ has always been a problem for fluid design.
Susy takes care of the most egregious layout-breaking cases,
but there is no way to entirely eliminate the problem.

John Albin Wilkins has a `demo`_ of the problem,
as well as a proposed `solution`_.
He hasn't eliminated rounding errors,
he just found a way to keep them from piling up.
Every float is positioned relative to its container,
rather than the float before it.
It's a bit of a hack,
and removes content from the flow,
so I don't recommned building your entire layout on isolated floats,
but it can be very useful as a spot-check
when rounding errors are really causing you a headache.

(*Note that rounding errors can still stack up when you use
a gradient background for testing.
Gradient background grids are useful,
but you should never trust them as a pixel-exact guide.*)

Using John's method,
you can now `isolate any grid element in susy`_,
with the simple ``isolate()`` mixin:


.. raw:: html

  <figure class="extend-small">
    <p data-height="265" data-theme-id="0" data-slug-hash="ad41121d402b5faccd1dbee4e88e35d1" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Susy Isolation Demo: Syntax" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/ad41121d402b5faccd1dbee4e88e35d1/">Susy Isolation Demo: Syntax</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>


When you put several of those together,
you can see how they have been removed from the flow:

.. raw:: html

  <figure class="extend-small">
    <p data-height="265" data-theme-id="0" data-slug-hash="93faa807c78fb4e9b1e15af2727d22d1" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Susy Isolation Demo: Multiple" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/93faa807c78fb4e9b1e15af2727d22d1/">Susy Isolation Demo: Multiple</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>

The items can overlap, and stack in any order –
almost as though they are positioned absolutely.

Isolation Grid
--------------

Isolation is most useful when
you are repeating the same grid math again and again,
such as image-galleries.
To help with that use-case,
we've added the ``isolate-grid()`` mixin.
You just tell us how wide each item should be,
and we'll calculate the locations,
applying them with nth-child selectors.

Change the span-width, and we'll update everything for you:

.. raw:: html

  <figure class="extend-small">
    <p data-height="400" data-theme-id="0" data-slug-hash="c891305b8d32d1306fc305846cfd926f" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Susy Isolation Demo: Gallery" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/c891305b8d32d1306fc305846cfd926f/">Susy Isolation Demo: Gallery</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>


Bleed
-----

Bleed has nothing to do with isolation,
it just happened to appear in the same update.
`Bleed`_ uses negative margins and equal-but-positive padding
to let an element's background "bleed" outside
the area it would normally occupy.

Here's an element bleeding 1-column outside our 6-column page layout:

.. raw:: html

  <figure class="extend-small">
    <p data-height="265" data-theme-id="0" data-slug-hash="351a144615300d48574188af838764ea" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Susy1 Bleed Demo: Syntax" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/351a144615300d48574188af838764ea/">Susy1 Bleed Demo: Syntax</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>

You'll notice that the context syntax is a bit different here:
``(1 of 9)`` instead of ``(1,9)``.
That's the direction we're heading with Susy 2.0,
and it's very helpful in this case,
because there's another argument we want to access easily.
Use the second argument to list which sides should do the bleeding
(defaults to "left right").
You can also pass arbitrary widths in the first argument:

.. raw:: html

  <figure class="extend-small">
    <p data-height="265" data-theme-id="0" data-slug-hash="c8eb354821f8441e8c4b28864f92a8dd" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Susy1 Bleed Demo: Sides" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/c8eb354821f8441e8c4b28864f92a8dd/">Susy1 Bleed Demo: Sides</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>

This can be especially useful to bleed across ``$grid-padding``.
Simply ``bleed($grid-padding)`` and you're there.

Happy coding!

.. _Sub-pixel rounding: http://ejohn.org/blog/sub-pixel-problems-in-css/
.. _demo: http://johnalbin.github.com/fluid-grid-rounding-errors/
.. _solution: http://palantir.net/blog/responsive-design-s-dirty-little-secret
.. _isolate any grid element in susy: https://susyone.oddbird.net/guides/reference/#ref-helper-isolation
.. _Bleed: https://susyone.oddbird.net/guides/reference/#ref-bleed
