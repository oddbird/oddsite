public: yes
author: miriam
tags: [Tools, Color, Typography, 'Style Guides', Accoutrement, Herman, OddSite, 'Open Design']
image:
  - src: '2017/get-started-designing/cafe-computer.jpg'
summary: |
  Something about style guides…


Code Patterns & Style Guides, Part 1
====================================

OddBird has always been a small team,
and our clients often need a proof-of-concept
or MVP on a very tight budget.
Developer hours are precious,
and style guides are rarely
the top priority.

Our job is to get usable features
in front of real users
as fast as we can,
but someone will have to build on that foundation —
and it might be us,
four years later.
If the code isn't well-tested,
or the pattens aren't well documented,
we're shipping legacy code
on day one.
That's not a good sign.

Without a special budget
and dedicated full-time style guide team,
we have to integrate style guides
and pattern documentation into our daily process.
We need tools that encourage pattern-making,
and tools that understand the patterns we make —
so automation can happen wherever possible.

Over time
we've slowly built a set of tools
that help us manage style patterns in code,
and document the results as we go,
with as little extra effort as possible.
Now we're using those tools
as we re-design this OddSite,
and `the results`_ are updated live.

.. _the results: /styleguide/


Enter Accoutrement
------------------

One of our first steps
in setting up any new project,
including this OddSite open design,
is to install the latest Sass
along with our `Accoutrement`_ toolkits.
These are Sass libraries
that we've been slowly
improving and simplifying for years.

We currently have five modules,
`color`_, `scale`_, `type`_, `init`_, and `layout`_
but I want to focus on the
first three.
While *init* and *layout*
are fairly standard normalization
and utility libraries (clearfix, etc),
*color*, *scale*, and *type*
are there to help us define and document
abstract style patterns.
They are highly opinionated about process,
forcing us to write patterns in a consistent way,
while being completely un-opinionated
about style and output.

.. _Accoutrement: @@@
.. _color: @@@
.. _scale: @@@
.. _type: @@@
.. _init: @@@
.. _layout: @@@


Grouping Variables into Maps
----------------------------

When I talk about "abstract" style patterns,
I mean things like color-palette,
font-families,
and font-or-spacing sizes
(including support for modular scales) —
patterns that exist in a theoretical way
before they are ever applied
to a specific UI element on the site.

It's common
to store these abstract patterns in Sass variables.
Here are some example variables from `Bootstrap-Sass`_,
where they define nearly `400 variables in a single file`_:

.. _Bootstrap-Sass: https://github.com/twbs/bootstrap-sass
.. _400 variables in a single file: https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss

.. code:: scss

  // brand colors:
  $brand-primary:         darken(#428bca, 6.5%) !default; // #337ab7
  $brand-success:         #5cb85c !default;
  $brand-info:            #5bc0de !default;
  $brand-warning:         #f0ad4e !default;
  $brand-danger:          #d9534f !default;

  // applied colors:
  $link-color:            $brand-primary !default;
  $link-hover-color:      darken($link-color, 15%) !default;

  // font stacks:
  $font-family-sans-serif:  "Helvetica Neue", Helvetica, Arial, sans-serif !default;
  $font-family-serif:       Georgia, "Times New Roman", Times, serif !default;

  // font sizes:
  $font-size-base:          14px !default;
  $font-size-large:         ceil(($font-size-base * 1.25)) !default; // ~18px
  $font-size-small:         ceil(($font-size-base * 0.85)) !default; // ~12px

  // spacing sizes:
  $padding-base-vertical:     6px !default;
  $padding-base-horizontal:   12px !default;

There's nothing wrong about that approach,
and certainly nothing unique to Bootstrap —
I'm not trying to pick on them.
This is what variables are designed for,
and patterns defined this way are easy to access
without any help from a toolkit.

What's missing is an explicit sense
of the patterns developing here:
brand-colors, link-colors, fonts, etc.
Variables are only related in implicit ways,
by giving them similar names.
We assume that ``$brand-primary``,
``$brand-success``, and ``$brand-info``
are part of the same pattern
because they look similar —
but that implicit relationship
relies on naming conventions,
code proximity,
and human interpretation.
Sass has no way of understanding
these relationships,
or automating style guides from them.

To address those issues,
we group all our common settings
into a few map variables.
If you haven't used Sass Maps,
they are a variable type
similar to arrays, dictionaries, or objects
in other languages —
a set of ``key: value`` pairs
contained in a single variable.

Converting the brand-colors above
might look something like this:

.. code:: scss

  $brand-colors: (
    'primary':  darken(#428bca, 6.5%),
    'success':  #5cb85c,
    'info':     #5bc0de,
    'warning':  #f0ad4e,
    'danger':   #d9534f,
  ) !default;

Now the brand-colors are grouped explicitly,
clear to both humans and compilers,
with less clutter in the global namespace.


Other Map Advantages
--------------------

Maps provide other advantages over variables,
especially when you want to make programmatic adjustments.
In fact, maps were added to Sass
to replace *variable-name interpolation*.
New variables can't be generated in Sass,
but new map keys can.
The following code attempts to create and save
lighter and darker versions
of our primary brand color.
This won't work, using variables:

.. code:: scss

  @for each $adjustment in ('lighten', 'darken') {
    $new-color: call($adjustment, $brand-primary, 10%);

    // There is no Sass syntax for this…
    $brand-primary-#{$adjustment}: $new-color;
  }

But it does work, using map keys:

.. code:: scss

  @for each $adjustment in ('lighten', 'darken') {
    $new-color: call($adjustment, $brand-primary, 10%);
    $new-color-map: ('primary-#{$adjustment}': $new-color);

    $brand-colors: map-merge($brand-colors, $new-color-map);
  }

The same is true with accessing
variable names and map keys programmatically.
Using variables, it fails:

.. code:: scss

  @for each $header in ('h1', 'h2', 'h3') {
    #{$header} {
      @if variable-exists('font-size-#{$header}') {
        // There is no Sass syntax for this…
        font-size: $font-size-#{$header};
      }
    }
  }

Again, it works great with a map key:

.. code:: scss

  @for each $header in ('h1', 'h2', 'h3') {
    #{$header} {
      @if map-has-key($text-sizes, $header) {
        font-size: map-get($text-sizes, $header);
      }
    }
  }

That may not be a common use-case,
but it can come in handy
for automating repetitive patterns.
More important to OddBird's daily use,
we can also automate some basic style guides
with very little effort —
looping through the maps
to get all the data we need.
We'll get to that later.


The Map Problem
---------------

Of course,
no solution is perfect,
and maps come with their own problems.
Or *problem*, singular.
There's really one issue that ruins the mood.
Sass variables can easily reference other variables —
e.g ``$blue-gray: desaturate($blue, 20%);`` —
but **map values cannot reference other values in the same map**.

.. code:: scss

  $colors: (
    'blue': #339,
    'blue-gray': desaturate(map-get($colors, blue), 20%),
  );

  // SASS ERROR: Undefined variable: "$colors".

That's ugly,
and it doesn't work.
The simplest fix, technically,
is to only reference values across maps,
but that gets even uglier:

.. code:: scss

  $colors: (
    'blue': #339,
  );

  $colors: map-merge($colors, (
    'blue-gray': desaturate(map-get($colors, blue), 20%),
  ));

What's the point of grouping all your values
in a single variable,
if you have to define it
over and over,
one small piece at a time?
I would have given up at this point,
but there's nothing I love
more than over-engineering a solution in Sass.


The Accoutrement Solution
-------------------------

At their core,
the Accoutrement toolkits each contain
one single function
to help us solve that problem.
In the color module,
that function is aptly called ``color()``.

We start by defining
what we want to happen,
using a syntax that we invented —
loosely based on functional programming ideas.
These definitions are human-readable,
but will require processing
in order to work.
That's where our function comes into play:

.. code:: scss

  // Define first…
  $colors: (
    'blue': #339,
    'blue-gray': 'blue' ('desaturate': 20%),
  );

  // Calculate on-the-fly…
  $result: color('blue-gray');

While ``'blue' ('desaturate': 20%)``
doesn't mean anything special to Sass,
our ``color()`` function understands
how to parse that syntax,
and make the necessary conversions.
The syntax has two parts:
a reference color,
which can be a color-value or map-key,
and a map of adjustment functions with arguments.

.. code:: scss

  $color: (
    <color>: <reference-color> (<function>: <arguments...>, …),
  );

The ``color()`` function will look up the reference color
(``#339`` above),
and then call the adjustment functions
(``desaturate``)
with the argument supplied (``20%``).
Give it a spin
in this CodePen demo:

.. raw:: html

  <p data-height="420" data-theme-id="0" data-slug-hash="xqOwxe" data-default-tab="css,result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Accoutrement Color Example" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/mirisuzanne/pen/xqOwxe/">Accoutrement Color Example</a> by Miriam Suzanne (<a href="http://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="http://codepen.io">CodePen</a>.</p>
  <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

As you can see,
we're also generating a rough style guide
on-the-fly,
with nothing but Sass empty ``div`` elements —
a pretty good proof-of-concept
for what we want our more robust
style guide generator to do.


The Theming Option
~~~~~~~~~~~~~~~~~~

There's an interesting side effect of our solution
that I've never really dug into before now.
While variable relationships are static,
calculated at the point they are defined,
our relationships remain dynamic until they are called.

Let's start with a few colors
defined as variables,
with one color based on the other color:

.. code:: scss

  $brand: #339;
  $brand-light: lighten($brand, 10%); // #4040bf

If I override the value of ``$brand``
later in the document,
that will have no affect
on the value of ``$brand-light``:

.. code:: scss

  $brand: #339;
  $brand-light: lighten($brand, 10%); // #4040bf

  $brand: #933;

  .static-variables {
    background: $brand-light; // #4040bf — still the same…
  }

The lighten-10% relationship is lost,
unless we re-define both colors at once.
If we do the same thing using Sass maps,
we get a different result:

.. code:: scss

  $colors: (
    'brand': #339,
    'brand-light': 'brand' ('lighten': 10%), // #4040bf
  );

  $colors: map-merge($colors, ('brand': #933));

  .dynamic-values {
    background: color('brand-light'); // #bf4040 — it changed!
  }
