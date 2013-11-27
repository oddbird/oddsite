public: yes
tags: [susy, "2.0", layout, grids, rwd]
author: eric
summary: |
  `Susy Next alpha 5`_ is out.

  .. _Susy Next alpha 5: http://rubygems.org/gems/susy/versions/2.0.0.alpha.5


Susy Next: Alpha 5
==================

Susy Next is almost feature complete!
Alpha 5 is loaded with changes —
some as a result of alpha testing,
but mostly in response to the new power of Sass 3.3.
This is likely to be our final alpha.
With a bit more user testing
and some minor cleanup,
we hope to hit beta soon
and then land a stable version
along side the upcoming releases of Compass and Sass.


Sass and Compass
----------------

Sass 3.3 is awesome,
and we've made a lot of changes in Susy
to take full advantage of the new toys.
We started integrating the new `SassScript Maps`_ data type
(not to be confused with `Source Maps`_),
and the side benefits were huge.
We're also using the new ``variable-exists()``
and ``mixin-exists()`` functions
to check for the presence of various compass features,
and degrade gracefully if they aren't available.

In brief:
**Sass 3.3 is now required**
and
**Compass is no longer required**,
although we do tie in with Compass features
such as vertical-rhythms
if they are available.

.. _SassScript Maps: https://github.com/nex3/sass/blob/master/doc-src/SASS_CHANGELOG.md#sassscript-maps
.. _Source Maps: https://github.com/nex3/sass/blob/master/doc-src/SASS_CHANGELOG.md#source-maps


Settings
--------

The first thing to do,
after upgrading Sass,
is to translate your Susy settings
into a single map of key/value pairs.
For a long time the only way to establish defaults
and user overrides in a Sass plugin has been to use variables.
In Susy 1 and the early alpha releases, we did the same:

.. code:: scss

  $columns: 6;
  $gutters: 1/4;
  $gutter-position: inside;

But that clogs up the global namespace in ugly ways.
Now, thanks to SassScript Maps,
we have a new solution that keeps everything contained,
and comes with side-benefits for anyone using multiple grids:

.. code:: scss

  $susy: (
    columns: 6,
    gutters: 1/4,
    gutter-position: inside,
  );

There is only one variable, named ``$susy``,
that takes a map of all your settings.
You can still use the grid shorthand
with ``set-grid`` or ``use-grid``:

.. code:: scss

  @include set-grid(6 1/4 inside);

But you can also mix-and-match shorthand with maps,
both for grid-settings and for spans:

.. code:: scss

  $large: (
    columns: 12,
    container: 90em,
  );

  @include use-grid($large inside) {
    // ...
  }

  @include span(3 $large);


Split Gutters
-------------

Susy Next supports several gutter styles:
``after`` (the Susy 1 approach), ``before``, ``inside``, ``inside-static``,
and ``split``. Before, after, and split all use margins.
Inside and inside-static use padding.

In previous alphas, ``split`` worked like ``before`` and ``after``,
and you had to remove the ``first`` and ``last`` edge-gutters.
That felt wrong, so we fixed it.
Split gutters now work similar to inside gutters,
and there is no reason to remove them at the edges of the grid.
That simplifies most things, but it complicates nesting.
You don't want gutters added to the edges of an outer element,
and then added again to the edges of inner elements.

Susy is very flexible,
and there are many ways you can work around that problem already,
but we added a ``container`` shortcut to make it easier.

.. code:: scss

  .outer-element {
    @include span(6 of 12 container);
    .inner-element { @include span(3 of 6); }
  }

Full
----

People are often confused about spanning full widths in Susy.
I often see ``@include span(12 of 12);`` or the Susy 1 equivalent.
That's not necessary, and adds a fair amount of extra output
that you don't need.
Really, in most cases you don't need anything at all —
block elements span the full width by default.
Sometimes, though, you need to clear the previous floats (``clear: both``),
or you need to clear internal floats (``clearfix``),
but those seemed simple enough that we didn't bake them in.

That's changing.
Thanks to the added complexity of inside and split gutters,
which also need to be applied on full-width elements,
we've added a ``full`` mixin. Use it!

.. code:: scss

  // Wrong! (usually)
  @include span(12 of 12);

  // Right!
  @include full(of 12);


Other Changes
-------------

* ``bleed`` now takes standard span syntax, with multiple (TRBL) spans,
  e.g. ``bleed(1em 2 of 8)`` for 1em top/bottom and 2-columns left/right.
  Use ``bleed-x`` and ``bleed-y`` mixins for horizontal and vertical shortcuts.

* Span arguments now accept ``narrow``, ``wide``, or ``wider`` keywords.
  The ``wide`` keyword replaces the old ``outer`` keyword.
  A standard ``span`` is called ``narrow``,
  ``wide`` adds the width of one gutter,
  and ``wider`` adds two gutters.

* Re-wrote grid debugging for more concise & accurate output.

  * Changed ``grid-background()`` to ``show-grid()``/``show-grids()``.
  * Changed ``overlay-grid()`` to ``grid-overlay()``.
  * Moved settings into ``$debug`` map:
    ``$debug: (color: rgba(#66f, .25), toggle: top right);``
  * Removed the overlay-position setting.
  * Only display vertical-rhythms when ``$base-line-height`` is available.

* ``first``/``alpha``/``last``/``omega``/``nth-`` mixins now require grid context.

We're in the final stages here,
working hard to get the last pieces in place
and give it a coat of polish before it lands.
Any help or feedback is appreciated,
just file an issue on `GitHub`_, and we'll talk.

.. _GitHub: https://github.com/ericam/susy/issues?milestone=4&state=open
