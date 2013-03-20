public: yes
tags: [susy, layout, grids, rwd, "sub-pixel rounding"]
author: eric
summary: |
  A few new features have landed in Susy 1.0.7,
  even as we work on more integrated syntaxes for 2.0.
  The ``isolate()`` and ``isolate-grid()`` mixins
  help you manage the worst effects of
  `sub-pixel rounding`_,
  while ``bleed()`` helps you break items out of the box.

  .. _sub-pixel rounding: http://palantir.net/blog/responsive-design-s-dirty-little-secret


Isolation and bleed in Susy
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

.. code:: scss

  .span {
    @include span-columns(6);
  }

.. raw:: html

  <div class="subpixel-demo">
    <div class="span">span 6</div>
  </div>

.. code:: scss

  .isolate {
    @include span-columns(6);
    @include isolate(3);
  }

.. raw:: html

  <div class="subpixel-demo">
    <div class="isolate">span 6 isolate 3</div>
  </div>

When you put several of those together,
you can see how they have been removed from the flow:

.. code:: scss

  .first {
    @include span-columns(3);
    @include isolate(2);
  }
  .second {
    @include span-columns(4);
    @include isolate(9);
  }
  .third {
    @include span-columns(6);
    @include isolate(4);
  }

.. raw:: html

  <div class="subpixel-demo">
    <div class="first">first</div>
    <div class="second">second</div>
    <div class="third">third</div>
  </div>

The items can overlap, and stack in any order —
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
applying them with nth-child selectors:

.. code:: scss

  .gallery-item {
    @include isolate-grid(1);
  }

.. raw:: html

  <div class="subpixel-demo">
    <div class="gallery-item">1</div>
    <div class="gallery-item">2</div>
    <div class="gallery-item">3</div>
    <div class="gallery-item">4</div>
    <div class="gallery-item">5</div>
    <div class="gallery-item">6</div>
    <div class="gallery-item">7</div>
    <div class="gallery-item">8</div>
    <div class="gallery-item">9</div>
    <div class="gallery-item">10</div>
    <div class="gallery-item">11</div>
    <div class="gallery-item">12</div>
    <div class="gallery-item">13</div>
    <div class="gallery-item">14</div>
    <div class="gallery-item">15</div>
    <div class="gallery-item">16</div>
    <div class="gallery-item">17</div>
    <div class="gallery-item">18</div>
    <div class="gallery-item">19</div>
    <div class="gallery-item">20</div>
    <div class="gallery-item">21</div>
    <div class="gallery-item">22</div>
    <div class="gallery-item">23</div>
    <div class="gallery-item">24</div>
  </div>

Change the width, and we'll update everything for you:

.. code:: scss

  .gallery-item2 {
    @include isolate-grid(3);
  }

.. raw:: html

  <div class="subpixel-demo">
    <div class="gallery-item2">1</div>
    <div class="gallery-item2">2</div>
    <div class="gallery-item2">3</div>
    <div class="gallery-item2">4</div>
    <div class="gallery-item2">5</div>
    <div class="gallery-item2">6</div>
    <div class="gallery-item2">7</div>
    <div class="gallery-item2">8</div>
    <div class="gallery-item2">9</div>
    <div class="gallery-item2">10</div>
    <div class="gallery-item2">11</div>
    <div class="gallery-item2">12</div>
    <div class="gallery-item2">13</div>
    <div class="gallery-item2">14</div>
    <div class="gallery-item2">15</div>
    <div class="gallery-item2">16</div>
    <div class="gallery-item2">17</div>
    <div class="gallery-item2">18</div>
    <div class="gallery-item2">19</div>
    <div class="gallery-item2">20</div>
    <div class="gallery-item2">21</div>
    <div class="gallery-item2">22</div>
    <div class="gallery-item2">23</div>
    <div class="gallery-item2">24</div>
  </div>

Bleed
-----

Bleed has nothing to do with isolation,
it just happened to appear in the same update.
`Bleed`_ uses negative margins and equal-but-positive padding
to let an element's background "bleed" outside
the area it would normally occupy.

Here's an element bleeding 1-column outside our 9-column page layout:

.. code:: scss

  .bleed-demo {
    @include bleed(1 of 9);
  }

.. raw:: html

  <div class="bleed-demo"><span>bleed!</span></div>

You'll notice that the context syntax is a bit different here:
``(1 of 9)`` instead of ``(1,9)``.
That's the direction we're heading with Susy 2.0,
and it's very helpful in this case,
because there's another argument we want to access easily.
Use the second argument to list which sides should do the bleeding
(defaults to "left right").
You can also pass arbitrary widths in the first argument:

.. code:: scss

  .bleed-sides-demo {
    @include bleed(3 of 9, left);
    @include bleed(3em, top);
    @include bleed(6px, right bottom);
  }

.. raw:: html

  <div class="bleed-sides-demo"><span>bleed all the sides!</span></div>
  <br />

This can be especially useful to bleed across ``$grid-padding``.
Simply ``bleed($grid-padding)`` and you're there.

Happy coding!

.. _Sub-pixel rounding: http://ejohn.org/blog/sub-pixel-problems-in-css/
.. _demo: http://johnalbin.github.com/fluid-grid-rounding-errors/
.. _solution: http://palantir.net/blog/responsive-design-s-dirty-little-secret
.. _isolate any grid element in susy: http://susy.oddbird.net/guides/reference/#ref-helper-isolation
.. _Bleed: http://susy.oddbird.net/guides/reference/#ref-bleed