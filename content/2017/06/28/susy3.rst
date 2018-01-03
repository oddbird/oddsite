public: yes
author: miriam
tags: [Susy, Susy3, CSS, Sass, Grids, Code]
headline:
  - type: 'Tutorial'
    tagline: 'Make grid systems your fallback plan'
image:
  - src: 'blog/2017/susy3/susy-ag.jpg'
summary: |
  **We're excited to introduce Susy 3.0**,
  a major update to our popular grid-math calculator –
  now more focused and flexible than ever.
  Susy was designed to make layout math easy,
  without forcing you into generic patterns
  and ugly markup.
  But grid systems are on the way out,
  replaced by real CSS layout specs
  that live in the browser.
  With Susy3,
  we want to help make that a smooth transition.


Welcome to Susy3!
=================


.. callmacro:: content.macros.j2#link_button
  :url: '/susy/'

  Susy3 Website

.. callmacro:: content.macros.j2#link_button
  :url: '/susy/docs/'

  Susy3 Reference Docs

I remember when `Blueprint`_ first came out.
Besides `Eric Meyer’s Reset`_,
it was one of the first open-source CSS libraries
that our industry started using en-masse.
That's how I remember things, at least.
I had just quit my day job as a junior print designer
to start freelancing.
A year later, I joined forces with `Carl`_ and then `Jonny`_
to form OddBird.

.. _Blueprint: http://www.blueprintcss.org/
.. _`Eric Meyer’s Reset`: https://meyerweb.com/eric/tools/css/reset/
.. _Carl: /authors/carl/
.. _Jonny: /authors/jonny/

At that point,
every layout required extensive hacks
to work across browsers,
and CSS frameworks quickly took over.
But there are some things you can't do
in a pure CSS API based on classes.
`Natalie Downe`_ was proposing
a more flexible approach to grids and toolkits,
and `Chris Eppstein`_ was pushing hard
to show how `Sass`_ and `Compass`_
could revolutionize CSS-sharing and tool APIs.

.. _Natalie Downe: http://blog.natbat.net/post/46614243624/css-systems
.. _Chris Eppstein: http://chriseppstein.github.io/blog/
.. _Sass: http://sass-lang.com/
.. _Compass: http://compass-style.org/

Susy came out of that mix in July, 2009.
Nothing terribly original,
just putting the pieces together.
I didn't have a GitHub account at the time,
so Carl published Susy on my behalf.
The first draft was kind of ugly –
but a few people took interest,
and helped me clean it up.
Three years later,
it had become the inspiration
for an entire genre of Sass grid systems –
with several creative adaptations like `Singularity`_
to keep us on our toes.

.. _Singularity: https://github.com/at-import/Singularity


A Whole New World
-----------------

We work on a different web now.
Browser-hacks are mostly a thing of the past,
and we have real control over the box-model
(one thing IE got right the first time).
Flexbox and the CSS Grid module are providing
real layout tools in the browser,
with flexibility baked in.

Singularity recently `shut down development`_,
and we considered doing the same thing.
Grid systems are on the decline for a good reason.
It's time to move away from these tools,
and put our layouts back in the browser.
Instead of closing shop, though,
we wanted to provide one more major update
truly designed for the edge-cases
that remain.

.. _shut down development: https://snugug.com/musings/saying-goodbye-to-singularity/

Susy3 is stripped down to the core –
a grid-math module we call ``Su``,
and a syntax module to add API sugar over top.
There are two primary API functions,
``span()`` and ``gutter()``,
and a total of four configuration settings.

That's right, Susy3 has no mixins.
When we wrote the mixins for Susy1 and Susy2,
floats were (practically) the only option,
and required a fair amount of hacking help.
Mixins provided those shortcuts,
at the expense of user flexibility.
But mixins also created a black-box of CSS output,
which made it more difficult for users
to understand the code they were writing.

The core of Susy has always been the math,
and the "natural-language" API.
Accessing that math only through functions
will allow Susy to get out of your way,
and work with any future layout technique you need:
floats, flexbox, tables, inline-block,
even CSS Grids.


CSS Grids
---------

If you have the `browser-support matrix`_
to start using the `CSS Grid module`_ directly,
you should do it,
and forget about Susy.
Brilliant developers
like `Rachel Andrew`_ and `Jen Simmons`_
have been working hard to provide tutorials,
so I won't go into detail –
but the results really do feel like magic.

.. _browser-support matrix: http://caniuse.com/#feat=css-grid
.. _CSS Grid module: https://css-tricks.com/snippets/css/complete-guide-grid/
.. _Rachel Andrew: https://gridbyexample.com/
.. _Jen Simmons: http://jensimmons.com/post/feb-27-2017/learn-css-grid

Remember the old 3-column "Holy Grail" layout,
with equal-height fixed-width sidebars
and a fluid center?
Here it is,
in a few lines of code:

.. raw:: html

  <figure class="extend-small">
    <p data-height="450" data-theme-id="0" data-slug-hash="0229f885f9a574c6d049b9d30dffc609" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="CSS Grid Demo" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/0229f885f9a574c6d049b9d30dffc609/">CSS Grid Demo</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>

In most cases,
you can also provide a float, flexbox, or css-table fallback
by wrapping your grid code in the ``@supports (display: grid) {}``
feature-query.
You may still want Susy around
to help with the fallback options,
until all your required browsers catch up.


Susy Columns & ``grid-template-columns``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The Susy3 syntax has a lot in common with CSS Grid,
because we want to start moving people in that direction.

Our ``columns`` setting now matches
the basic features of CSS ``grid-template-columns``
– requiring a list of column-sizes,
with the optional ``susy-repeat()`` shortcut function,
matching the CSS ``repeat()`` option:

.. code:: scss

  // Symmetrical layouts
  $grid-template-columns: repeat(12, 120px);
  $columns: susy-repeat(12, 120px);

  // Asymmetrical and mixed-unit layouts
  $grid-template-columns: 120px repeat(4, 1fr) 30em;
  $columns: 120px susy-repeat(4) 30em;

Where CSS Grid uses the ``fr`` unit
for fluid columns,
we use unitless numbers.
A column of width ``2`` in Susy
will work similarly to a ``2fr`` column in CSS.
The default setting (``susy-repeat(4)``)
defines a grid of 4 fluid columns,
identical to a setting of ``1 1 1 1``.

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

This is a breaking change from Susy2,
which allowed a single number ``12``
to represent 12 equal-and-fluid columns.
That has been replaced with ``susy-repeat(12)``
for clarity and consistency with CSS.

Since Susy does not have direct access to the DOM,
we generate ``calc()`` output
for non-comparable and mixed fluid/static grids.


Susy Gutters & ``grid-column-gap``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Susy gutters haven't changed at all since version two,
although our new ``calc`` output
allows you to mix units in new ways.
This is similar to the CSS ``grid-column-gap`` property,
accepting any gutter-length
to place between columns.
A unitless gutter setting will act as a fraction,
on the same scale as any unitless columns.
Gutters with units will remain static:

.. code:: scss

  // unitless fluid gutters…
  $gutters: 0.25;

  // static gutters…
  $gutters: 10px;


Simplify Your Math
------------------

If you can't use CSS Grids yet,
you might want Susy to help simplify grid-math calculations.
Or you might be able to avoid that with a few tricks
to simplify your math,
and handle it manually.


Box-Sizing: Border-Box
~~~~~~~~~~~~~~~~~~~~~~

First, fix the browser `box-model`_
by setting a global ``box-sizing``:

.. _box-model: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model

.. code:: css

  * { box-sizing: border-box; }

I recommend setting this globally by default,
no matter how you handle layouts.
Border-box sizing means you can set a width,
without worrying that padding or borders will ruin the calculation.

I've seen other global box-sizing snippets
based on a value of ``inherit``,
and I strongly advise against it.
There are good reasons that box-related properties
like ``width``, ``padding``, and ``box-sizing``
don't inherit the way fonts and colors do.
Inheriting layout properties will only cause problems later.


Use Padding for Gutters
~~~~~~~~~~~~~~~~~~~~~~~

In reality, grid math is only complex
when you add margin-gutters to the equation.
Without gutters in the way,
spanning ``3`` columns out of ``12`` is a simple fraction:
``percentage(3/12)`` in Sass.
If you are able to drop the gutters,
or even move them into ``padding`` rather than ``margins``,
you can avoid grid math entirely:

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

If you want to get really clever,
you can build your own grid-system out of
CSS `custom properties`_ (aka variables):

.. _custom properties: https://developer.mozilla.org/en-US/docs/Web/CSS/--*

.. raw:: html

  <figure class="extend-small">
    <p data-height="300" data-theme-id="0" data-slug-hash="d05d2ea9339419df7070f9c393a9c080" data-default-tab="css,result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Calc() + Custom Properties" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/d05d2ea9339419df7070f9c393a9c080/">Calc() + Custom Properties</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>

That will also work with css-tables, etc.
Add any padding you like,
and you have on-the-fly fluid grids
without any third-party tools.

We've even built a nearly-complete Susy3
in pure CSS.
This is a fun experiment,
but I don't recommend using it
in production:

.. raw:: html

  <figure class="extend-small">
    <p data-height="500" data-theme-id="0" data-slug-hash="PboVrw" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="SusyCSS Demo" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/PboVrw/">SusyCSS Demo</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>

Susy is designed to handle any layout,
but if you are designing grids in pure CSS,
it's better to describe your actual needs
more simply.
Why solve all layout problems,
when you can solve only the problems you have?


Use Flexbox
~~~~~~~~~~~

The great thing about flexbox
is that it allows items to flex in specific relationship
with each other,
including equal-height columns and vertical centering.
I often find that I don't need Susy for a flexbox layout,
because I'd rather define relationships
instead of explicit grid-columns.

Here's an example flexbox layout,
without Susy:

.. raw:: html

  <figure class="extend-small">
    <p data-height="450" data-theme-id="0" data-slug-hash="657a71f05b9c044d0235bab212abdbdc" data-default-tab="css,result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Full-height Flexbox" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/657a71f05b9c044d0235bab212abdbdc/">Full-height Flexbox</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>

If you do want to use Susy with flexbox
to achieve more consistent grids,
you only need to replace any ``flex-basis`` values
with Susy's ``span()`` function.

.. code:: scss

  .flex {
    flex: 1 1 span(3 of 12);
  }

I can't think of any way to improve that with mixins,
unless you want a few flexing defaults:

.. code:: scss

  @mixin span(
    $span,
    $config: ()
  ) {
    flex: 1 1 span($span, $config);
    // split the gutter on each side of the element…
    padding: gutter($span, $config) / 2;
  }


Use Calc to Mix Units
~~~~~~~~~~~~~~~~~~~~~

Calc can also help you with mixed-unit grids,
combining fluid and fixed columns and gutters.
Because ``calc`` has access to the DOM in the browser,
it can calculate the results of otherwise non-comparable units.
This is a bit more fragile and manual
than allowing grid or flexbox to do that work for you,
but it can be a powerful fallback:

.. raw:: html

  <figure class="extend-small">
    <p data-height="350" data-theme-id="0" data-slug-hash="70b5a2cf411542e74d1cd42d5ddbe446" data-default-tab="css,result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Floats with Calc" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/70b5a2cf411542e74d1cd42d5ddbe446/">Floats with Calc</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>


Introducing Susy3
-----------------

If you can't simplify your math
with padding-gutters and flexbox,
you may still run into some difficult calculations
that require complex grid math.

Susy3 is here to help calculate margin-gutters,
asymmetrical grids,
and mixed-unit calculations
that are difficult to handle without CSS Grid.
In those cases, Susy can turn this:

.. code:: scss

  $width: ($span + (($span - 1) * $gutter-width)) / ($columns + (($columns - 1) * $gutter-width));

Into something more manageable:

.. code:: scss

  $width: span(3);


Grids on Demand
---------------

One user asked if Susy3
forces you to build
"an entire grid system from scratch".
While Susy certainly allows and facilitates that option,
we're really suggesting
that you might not need a more complex system
when you can access Susy's math directly, on-the-fly.

The primary API of Susy3
consists of 2 functions,
``span`` and ``gutter``,
which you can use anywhere.
Why build an entire system of mixins or classes
when you can simply use these two functions
wherever you need to align with the grid?
This is more readable
and more flexible than most grid systems,
because no CSS properties are hidden
from view:

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

If you find that too repetitive for your needs,
you can build mixins to manage a few common patterns.
Here's a simple ``span`` mixin for floated grids,
with margin-gutters on the right:

.. code:: scss

  @mixin span(
    $span,
    $config: $susy
  ) {
    width: span($span, $config);

    @if index($span, 'last') {
      float: right;
    } @else {
      float: left;
      margin-right: gutter();
    }
  }

You can also build a class system of your own,
like you might find in other grid frameworks:

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

Only users with very specific and complicated needs
may still want to "build an entire system"
on top of Susy,
in which case we'll provide the syntax and math –
but most use-cases should be handled by the functions
we provide.


Susy3 Configuration
-------------------

Global settings are still stored
in the ``$susy`` map variable,
just like Susy2,
but now we only have four total settings.
Here they are, with their default values:

.. code:: scss

  $susy: (
    'columns': susy-repeat(4),
    'gutters': 0.25,
    'spread': 'narrow',
    'container-spread': 'narrow',
  );

We've already introduced you to
``columns`` and ``gutters``,
so let's take a look at the remaining options.


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
Note that Susy3 has no single ``container`` element.
Every grid element acts as a container for its contents.
When we talk about containers in Susy3,
we're referring to the parent context
for a given element.

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

We also override those options
when pushing, pulling, padding, and bleeding:

.. code:: scss

  .push-3 {
    margin-left: span(3 wide);
  }

  .pull-3 {
    margin-left: 0 - span(3 wide);
  }

  .pad-left-3 {
    padding-left: span(3 wide);
  }

  .bleed-left-3 {
    margin-left: 0 - span(3 wide);
    padding-left: span(3 wide);
  }

Susy3 defaults both values to ``narrow``,
which will work the same as CSS Grid
and most other grid systems.
If you're not doing anything special,
you can probably ignore these settings
and move on.

Those are great defaults,
but there are many reasons to override those settings on-the-fly
to allow more flexibility where gutters are used.
Learning to manage ``spread`` and ``container-spread`` in Susy3
will give you much more control over your layout experience.


Susy3 Shorthand Syntax
----------------------

All Susy3 functions
draw on the same shorthand syntax in two parts –
separated by the word ``of``.
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
but it returns a list of columns
rather than a calculated width:

.. code:: scss

  // columns: 1 1 2 3 5 8 13
  $shorthand: of slice(first 4);
  $meaning: of (1 1 2 3);


Primary API Functions
---------------------

Use the ``span()`` and ``gutter()`` functions
to build the grid system that fits you best.

Span
~~~~

The ``span()`` function will return the width of a span
across grid-columns
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


Installation & Other Options
----------------------------

There are full installation instructions
in the `reference docs`_,
but you should note that we now provide the Susy API
with or without prefixes:

.. _reference docs: /susy/docs/

.. code:: scss

  // unprefixed
  @import '<path-to>/susy/sass/susy';

  // prefixed
  @import '<path-to>/susy/sass/susy-prefix';

By default we assume you want Susy without any prefix,
but importing ``susy-prefix`` will include
``susy-`` before all function names.
You can use that if you are worried about name collisions
with other functions in your project.


SVG grids for debugging
~~~~~~~~~~~~~~~~~~~~~~~

If you want help visualizing and debugging your grids,
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

SVG grids are much more reliable
than the old background-image gradient,
because background gradients have subpixel rounding issues.


Building your own Susy system
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Once you get the basics,
Susy3 also provides tools to help you
build your own mixins
and define your own system,
if that's something you need.
See the `Plugin Utilities`_
for more detail.

.. _Plugin Utilities: /susy/docs/plugin-utils.html


Feedback is Always Welcome
--------------------------

We know we're taking some risks with this release,
not providing what most people expect from a grid system.
Some may prefer working with Susy2,
and that's a solid option as well.
Over time,
we hope the CSS Grid module
will replace all third-party systems.

While we're confident that this is a step forward for Susy,
we never claim to know what's best for you.
We'd love your feedback,
and real-world examples of how you
make Susy work for you.

We'll keep providing our own tutorials and demos,
based on the questions we hear most,
but we also love linking to your
`sites built with Susy`_,
and any `third-party tutorials`_
that we hear about.
`Contact us`_,
or `submit a pull request`_.
You can also
talk to `SassSusy`_ or `OddBird`_ on twitter,
or join our `public Slack`_ (with a #Susy channel).
We're excited to hear from you!

.. _sites built with Susy: /susy/sites/
.. _third-party tutorials: /susy/articles/
.. _Contact us: /contact/
.. _submit a pull request: https://github.com/oddbird/oddsite/tree/master/content/susy
.. _OddBird: https://twitter.com/oddbird
.. _SassSusy: https://twitter.com/sasssusy
.. _public Slack: http://friends.oddbird.net
