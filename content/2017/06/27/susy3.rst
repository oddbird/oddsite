public: yes
author: miriam
location: 'susysite-articles'
template: 'susysite/layout.html'
tags: [Susy, Susy3, CSS, Sass, Grids, Code]
headline:
  - type: 'Tutorial'
    tagline: 'Make grid systems the fallback plan'
image:
  - src: 'blog/2017/spread/susy-spread.jpg'
summary: |
  **We're excited to introduce Susy 3.0**,
  a major update to our popular grid-math calculator –
  now more focussed and flexible than ever.
  Susy was designed to make layout math easy,
  without forcing you into generic patterns
  and ugly markup.
  But we also want to show you a few ways
  to avoid using grid-systems all-together.


Using (And Avoiding) Susy3
==========================

I remember when `Blueprint`_ first came out.
Besides `Eric Meyer's Reset`_,
it was one of the first open-source CSS libraries
that our industry started using en-masse.
That's how I remember things, at least.
I had just quit my day job as junior print designer
to start freelancing.
A year later, I'd join forces with `Carl`_ and then `Jonny`_
to form OddBird.

At that point,
every layout required extensive hacks
to work across browsers.
All CSS was a mess,
but having someone else write your hacks for you
felt like a game-changer.

A year later,
CSS frameworks had taken over the world,
but there are some things you can't do
in a pure CSS API based on classes.
Natalie Downe was proposing
a more flexible approach to grids and toolkits,
and Chris Eppstein was pushing hard
to show how Sass and Compass
could revolutionize CSS-sharing and tool APIs.

Susy came out of that mix in July, 2009.
Nothing terribly original,
just putting the pieces together.
I didn't have a github account at the time,
and Carl had to publish it on my behalf.
The first draft was kinda ugly –
but a few people took interest,
and helped me clean it up.
Three years later,
it had become the baseline
for an entire genre of Sass grid systems –
some creative adaptations like `Singularity`_,
and some direct ripoffs with marketing teams behind them.


A Whole New World
-----------------

We work in a different web now.
Browser-hacks are mostly a thing of the past,
and we have real control over the box-model
(one thing IE got right the first time).
Flexbox and the CSS Grid module are providing
real layout tools in the browser,
with flexibility baked in.
Singularity recently `shut down development`_,
and I understand why.
I considered doing the same thing.

Our tools are on the decline,
for good reason.
It's time to start moving away from grid systems,
and put your layouts back in the browser.
Instead of shutting the doors, though,
I thought we'd provide one more update
truely designed for the edge-cases.

Susy3 is stripped down to the core –
a grid-math module we call ``Su``,
and a syntax module to add API sugar over top.
There are two primary API functions,
``span()`` and ``gutter()``,
and a total of 4 configuration settings.

That's right, Susy3 has no mixins.
When we wrote the mixins for Susy1 and Susy2,
floats were (practically) the only option for layout,
and required a fair amount of hacking help.
Mixins provided those shortcuts,
at the expense of flexibility.
But the core of Susy is the math,
and accessing that math with functions
allows Susy to get out of your way,
and work with any layout technique you need:
floats, flexbox, tables, inline-block,
even CSS Grids (though there's no reason for it).


Don't Assume You Need Susy
--------------------------

Susy3 is available,
but it's not the right place to start your layout.
Let's look at some simpler options,
before we get a third-party toolkit involved.


Flexbox and CSS Grids
~~~~~~~~~~~~~~~~~~~~~

If you have the browser-support matrix
to start using CSS Grids directly,
you should do it.
In most cases,
you can also provide a float, flexbox, or css-table fallback
by wrapping your grid code in the ``@supports (display: grid) {}``
feature-query.
Brilliant developers
like Rachel Andrew and Jen Simmons
have been working hard to provide tutorials,
so I won't go into detail –
but the results really do feel like magic.

Remember the old 3-column "Holy Grail" layout,
with equal height fixed-width sidebars
and a fluid center?
Here it is,
in a few lines of code:

.. raw:: html

  <figure class="extend-small">
    <p data-height="600" data-theme-id="0" data-slug-hash="0229f885f9a574c6d049b9d30dffc609" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="CSS Grid Demo" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/0229f885f9a574c6d049b9d30dffc609/">CSS Grid Demo</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>

If you can't use CSS Grid yet,
maybe flexbox will do the trick.

.. raw:: html

  <figure class="extend-small">
    <p data-height="265" data-theme-id="0" data-slug-hash="657a71f05b9c044d0235bab212abdbdc" data-default-tab="css,result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Full-height Flexbox" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/657a71f05b9c044d0235bab212abdbdc/">Full-height Flexbox</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>

Both grid and flexbox offer way more
power and flexibility
than any external toolkit can provide.
If you are able to use both,
They do solve slightly different problems.
I think of flexbox as a more powerful variation on floating –
great for allowing content to flow and flex –
while grids provide a better tool for broad layouts
and image galleries.


Simplify Your Math
~~~~~~~~~~~~~~~~~~

Grid math is only complex
when you add margin-gutters to the equation.
With gutters, fluid grid math looks somthing like this:

.. code:: scss

  $columns: 12;
  $gutter-width: 0.25;
  $span: 3;

  $width: ($span + (($span - 1) * $gutter-width)) / ($columns + (($columns - 1) * $gutter-width));

Without gutters in the way,
spanning ``3`` columns out of ``12`` is a simple fraction:
``percentage(3/12)`` in Sass.
If you are able to drop the gutters,
or even move them into ``padding`` rather than ``margins``,
you can avoid grid math entirely.

To safely move your gutters from ``margin`` to ``padding``,
you'll want to set a global ``box-sizing: border-box``.
I recommend doing this everywhere by default,
no matter how you handle layouts.
Border-box sizing means you can set a width,
without worrying that padding or borders will ruin the calculation.

.. code:: css

  * { box-sizing: border-box; }

I've seen other global box-sizing snippets that use ``inherit``.
Please don't do that.
There are good reasons that box-related properties
don't inherit the way fonts and colors do.
Inheriting layout properties will only cause problems later.

With your box-model fixed,
fluid grids can be handled in a readable way
without any outside tools or complex calculations:

.. code:: scss

  // With Sass
  .simple-grid {
    float: left;
    width: percentage(3/12);
  }

  /* Without Sass */
  .simple-grid {
    float: left;
    width: calc(3/12 * 100%);
  }

That will also work with flexbox, css-tables, etc.
Add any padding you like,
and you're good to go with Susy-less fluid grids.

Calc can also help you with mixed-unit grids,
combining fluid and fixed.
Because ``calc`` has access to the DOM,
it provides much more power than any pre-compiled toolkit.
This is a bit more fragile and manual
than allowing grid or flexbox to do the work for you,
but it can be a powerful fallback:

.. raw:: html

  <figure class="extend-small">
    <p data-height="265" data-theme-id="0" data-slug-hash="70b5a2cf411542e74d1cd42d5ddbe446" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Floats with Calc" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/70b5a2cf411542e74d1cd42d5ddbe446/">Floats with Calc</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>

If you want to get real wild with `calc()` and CSS variables,
also known as custom properties,
you can build a relatively simple grid syntax of your own
directly in the browser:

.. raw:: html

  <figure class="extend-small">
    <p data-height="265" data-theme-id="0" data-slug-hash="d05d2ea9339419df7070f9c393a9c080" data-default-tab="css,result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Calc() + Custom Properties" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/d05d2ea9339419df7070f9c393a9c080/">Calc() + Custom Properties</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>

We've even built a nearly-complete Susy3
in pure CSS variables,
though I don't recommend using it.
This is way more complexity than you should need
on any one site:

.. raw:: html

  <figure class="extend-small">
    <p data-height="600" data-theme-id="0" data-slug-hash="PboVrw" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="SusyCSS Demo" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/PboVrw/">SusyCSS Demo</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>


Last Resort: Susy3
------------------

Now that you have some tools for avoiding grid-systems,
you still may run into special cases
where a grid tool really is the best option.
Susy3 can help calculate margin-gutters,
asymmetrical grids,
and mixed-unit calculations.

We recommend installing Susy as an npm/yarn module:

.. code:: bash

  # npm
  npm install susy

  # yarn
  yarn add susy

There are two imports to choose from.
The default ``susy`` import
comes with un-prefixed versions
of the core API functions.
If you want Susy to be name-spaced,
import ``susy-prefix`` instead.

.. code:: scss

  // un-prefixed functions
  @import '<path-to>/susy/sass/susy';

  // susy-prefixed functions
  @import '<path-to>/susy/sass/susy-prefix';

`See the documentation`_ for more
installation/setup options.

Global settings are still stored
in the `$susy` map variable,
just like Susy2,
but now we only have 4 total settings.
Here they are, with their default values:

.. code:: scss

$susy: (
  'columns': susy-repeat(4),
  'gutters': 0.25,
  'spread': 'narrow',
  'container-spread': 'narrow',
);

By pulling out the mixins,
we've vastly reduced the configuration options
while expanding the possible configurations.
That sounds great, technically,
but it also requires a bit more knowledge of the options.
I believe you can get the hang of it.

In Susy3 there is no single ``container`` element.
Every grid element acts as a container for its contents.
When we talk about containers in Susy3,
we're referring to the parent context
for a given element.


"Columns" Setting
~~~~~~~~~~~~~~~~~

The ``columns`` setting requires a list of column-sizes,
similar to `grid-template-columns`_ in the CSS Grid module.
Since that can sometimes get repetative,
we've added a ``susy-repeat`` function
which works exactly like the new CSS ``repeat``.
The default setting (``susy-repeat(4)``)
generates a list of 4 equal fluid columns,
identical to a setting of ``1 1 1 1``.
Unitless grid values in Susy
work much the same as ``fr`` units in CSS grids.

Here are a few examples of different column settings:

.. code:: scss

  // 12-column em-based grid… (these have same result)
  $columns: susy-repeat(12, 5em);
  $columns: 5em 5em 5em 5em 5em 5em 5em 5em 5em 5em 5em 5em;

  // holy grail grid from above…
  $columns: 12em 1 200px;

  // add more columns in the fluid area of holy grail…
  $columns: 12em susy-repeat(4) 200px;
  $columns: 12em 1 1 1 1 200px;

  // repeated alternating columns…
  $columns: susy-repeat(3, 8em 200px);
  $columns: 8em 200px 8em 200px 8em 200px;

The ``columns`` setting no longer accepts a single number, like ``12``,
to represent 12 equal-and-fluid columns.
That has been replaced with ``susy-repeat(12)`` for clarity.

When you mix non-comparable units,
or units with untiless fractions,
Susy will generate ``calc()`` output
for the browser to handle.


"Gutters" Setting
~~~~~~~~~~~~~~~~~

The ``gutters`` setting hasn't changed from Susy2,
though you are no longer restricted to comparable units.
A unitless gutter setting will act as a fraction,
on the same scale as any unitless columns.
Gutters with units will remain static.

.. code:: scss

  // unitless fluid gutters…
  $gutters: 0.25;

  // static gutters…
  $gutters: 10px;

Any number or length is valid.
If Susy can't compare the gutter units to column unties,
we'll trigger ``calc()`` output again.


"Spread" & "Container-Spread"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Spread isn't new in Susy3,
though it's never been a global setting before.
Susy2 managed spread for you,
depending on a combination of other settings,
like ``gutter-position``.
We wrote an article last week
`explaining how spread works`_.

.. _explaining how spread works: /2017/06/13/susy-spread/

To summarize,
there are three spread options,
and most people will only use two of them:
``narrow``, ``wide``, and (rarely) ``wider``.

- A ``narrow`` spread has one less gutter than columns.
- A ``wide`` spread has an equal number of columns and gutters.
- A ``wider`` spread has one more gutter than columns.

Susy needs to know how an element spreads,
and also how containers spread.
In Susy2,
we would generate both spread values based on ``gutter-position``,
using roughly this logic:

.. code:: scss

  // gutter-position: before | after (margins)
  $susy: (
    'spread': 'narrow',
    'container-spread': 'narrow',
  );

  // gutter-position: split (margins)
  $susy: (
    'spread': 'narrow',
    'container-spread': 'wide',
  );

  // gutter-position: inside (padding)
  $susy: (
    'spread': 'wide',
    'container-spread': 'wide',
  );

Those are great defaults,
but there are many reasons to override those settings on-the-fly –
from pushing and pulling elements,
to allowing more flexibility in where gutters are used.
Learning to mange ``spead`` and ``container-spread`` in Susy3
will give you much more control over your layout experience.


Susy3 Shorthand Syntax
----------------------

All Susy3 functions
draw on the same shorthand syntax in two parts –
seperated by the word ``of``.
The first part describes a **span**
``width``, ``location``, and ``spread`` (in any order):

.. code:: scss

  // <width> <location> <spread>
  $span: 2;
  $spread: 3 wide;

  // location is only needed with asymmetrical grids
  $location: 3 at 2 narrow;

You can also span explicit asymmetrical columns,
using a column-list instead of span-count and location:

.. code:: scss

  // span 120px and one fraction of the container
  $span: (120px 1) narrow;

The second half of Susy's shorthand
describes the **grid-context** –
or available space –
with ``columns``, ``container-spread``, and ``gutters``
(in any order).
None are required:

.. code:: scss

  // of <columns> <container-spread> <gutters>
  $columns: of susy-repeat(6);
  $spread: of (120px 1 1 14em) wide;
  $gutters: of 12 set-gutters 2em;

As you can see, the ``columns`` value here
is identical to the global ``columns`` setting,
with one difference.
Unlike the global setting,
shorthand column-context can be described as a unitless span-count
rather than a list.
A single unitless number for columns
will be treated as a slice of the parent grid:

.. code:: scss

  // columns: susy-repeat(12, 120px)
  $shorthand: of 4;
  $meaning: of susy-repeat(4, 120px);

If you are using asymmetrical grids,
Susy can't slice it for you.
We provide a slice function with exactly the same shorthand syntax,
but it returns a list of columns,
rather than a calculated width:

.. code:: scss

  // columns: 1 1 2 3 5 8 13
  $shorthand: of slice(first 4);
  $meaning: of (1 1 2 3);


Function API
------------

Use the ``span()`` and ``gutter()`` functions
to build the grid system that fits you best.

Span
~~~~

The ``span()`` function will return the width of a span
across grid-columns,
and any intermediate gutters.
Apply the results to a ``width`` or ``flex-basis`` property
to size your grid elements –
or use it with ``padding``, ``margin``, and ``translateX()``
to move your elements around.

The ``span()`` mixin only requires a span width,
but accepts the full shorthand:

.. code:: scss

  // Common Use…
  $width: span(3);

  // Much less common…
  $width: span(first 3 wide of (1 1 2 3 5 8) wide set-gutters 20px);


Gutter
~~~~~~

Gutter will return the width of a single gutter,
and only accepts the second half (context) of the shorthand –
with or without ``of``:

.. code:: scss

  // Common Use…
  $padding: gutter();

  // With Context…
  $padding: gutter(of 4);
  $same-meaning: gutter(4);

With those two functions, you can build anything – using floats, flexbox, tables, inline-block, or any other layout technique you love.

.float {
  width: span(3);
  margin-right: gutter();
}

.flexbox {
  flex: 1 1 span(3);
  padding: 0 gutter() / 2;
}

.push-3 {
  margin-left: span(3 wide);
}
Here's a real-quick class system, like you might find in one of the other frameworks:

.span {
  float: left;
  margin-right: gutter();

  &:last-child {
    margin-right: 0;
  }
}

@for $span from 1 through length(susy-get('columns')) {
  .span-#{$span} {
    width: span($span);
  }
}
Read the docs for more details on configuration and available functions.


Putting It All Together
-----------------------

With those two functions,
you can build anything –
using floats, flexbox, tables, inline-block,
or any other layout technique you love.

.. code:: scss

  // class names are for demonstration only…
  .float {
    width: span(3);
    margin-right: gutter();
  }

  .flexbox {
    flex: 1 1 span(3);
    padding: 0 gutter() / 2;
  }

  .push-3 {
    margin-left: span(3 wide);
  }

You can build mixins to manage the most common patterns:

.. raw:: html

  <figure class="extend-small">
    <p data-height="300" data-theme-id="0" data-slug-hash="VWzwXj" data-default-tab="css,result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Susy3: Making Mixins" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/VWzwXj/">Susy3: Making Mixins</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>

Or build a class system of your own,
like you might find in one of the other grid frameworks:

.. code:: scss

  .span {
    float: left;
    margin-right: gutter();

    &:last-child {
      margin-right: 0;
    }
  }

  @for $span from 1 through length(susy-get('columns')) {
    .span-#{$span} {
      width: span($span);
    }
  }


SVG Grids for Debugging
-----------------------

If you want help visualizing and debugging your grids
import the SVG Grid Plugin:

.. code:: scss

  // unprefixed
  @import '<path-to>/susy/sass/plugins/svg-grid';

  // prefixed
  @import '<path-to>/susy/sass/plugins/svg-grid/prefix';

The plugin adds an ``svg-grid-colors`` setting to your global defaults,
which you can override in the ``$susy`` settings map.
It also provides you with a new function,
``susy-svg-grid()``,
which will return an inline svg image
for use on the background of an element:

.. code:: scss

  .container {
    background: susy-svg-grid() no-repeat scroll;
  }


Build Your Own System
---------------------

Once you get the basics,
Susy3 also provides tools to help you
build your own mixins
and define your own system.
See the `Plugin Utilities`_
for more detail.

.. _Plugin Utilities: http://susydocs.oddbird.net/plugin-utils.html

