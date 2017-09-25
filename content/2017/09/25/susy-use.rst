public: yes
tags: [Susy, Susy3, CSS, Sass, Grids, Code]
author: miriam
image:
  - src: 'projects/susy.png'
headline:
  - type: 'Code Snippets'
    tagline: 'Practical media helpers for Susy3'
summary: |
  **Most grids change with the viewport –
  and Susy needs new settings at each breakpoint.**
  Susy3 is designed without mixins
  for complete flexibility from project to project,
  but it can be useful to build additional tools
  and shortcuts as you go.
  Here are some snippets to help you get started
  working with Susy across different media queries.


Susy3 Media-Queries & Grid Settings
===================================

CSS Variables & Media Queries
-----------------------------

The ideal combination of media queries and grid-changes
would automatically apply changed variables
at different screen-widths.
We can actually see that ideal in action
with CSS variables,
where the change can be scoped to DOM states,
like viewport-width:

.. code:: css

  /* ideal setup, using CSS variables */
  @media (min-width: 30em) {
    /* the new settings will apply to all elements */
    /* above a viewport width of 30em */
    :root { --columns: 5; }
  }

Because CSS variables inherit in the DOM
like any other CSS property,
the effects of a variable-change propogate out
to each grid element.
Here's a more complete example of
CSS-Variable grids and breakpoints in action:

.. raw:: html

  <figure class="extend-small">
    <p data-height="400" data-theme-id="0" data-slug-hash="NadbNR" data-default-tab="css,result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="CSS Variable Breakpoints" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/NadbNR/">CSS Variable Breakpoints</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>


Sass Limitations
----------------

In Sass,
variables inherit based on source order rather than DOM structure.
That means variables are not able to propogate
based on a DOM concept like viewport width.
We have to apply the *results* of our variable-changes explicitly
anywhere we want them used.

Rather than simply setting a new variable at our desired query,
we also have to explicitly call any grid-functions –
like ``span`` or ``gutter`` –
that will generate new output with those new settings.
We have to reset the variables *and* redo the math.
If we set width earlier using ``span``
and expect that width to change,
we'll have to call ``span`` again to get the new output:

.. code:: css

  // Initial Sass Layout
  $susy: (
    'columns': susy-repeat(4),
    'gutters': 0.5rem,
  );

  .item {
    width: span(2); // 2 of 4
    padding: gutter(); // 0.5rem
  }

  // Sass Media-Query
  @media (min-width: 30em) {
    // We have to change the global variable
    $susy: (
      'columns': susy-repeat(6),
      'gutters': 1rem,
    );

    // And explicitly re-do all the math…
    .item {
      width: span(2); // 2 of 6
      padding: gutter(); // 1rem
    }
  }

  // If we're not careful,
  // the $susy variable changes aren't contained to the media query

This is a major limitation of pre-processing,
and one of the main reasons I'm excited about CSS variables.
In the meantime,
there are some tricks we can use
to help simplify grid changes in Sass and Susy.


Susy-Use Mixin
--------------

We'll need a mixin that changes our global settings
for a block of wrapped code –
using the ``@content`` argument.
We can pair that with a media query
to define the proper settings for a particular screen:

.. code:: scss

  $medium: (
    'columns': susy-repeat(8),
    'gutters': 1em,
  );

  // any code out here uses the global $susy settings…

  @media (min-width: 30em) {
    @include susy-use($medium) {
      // any code in this block will use the $medium settings…
    }
  }

Of course, Susy3 doesn't have a ``susy-use`` mixin,
so we'll have to add one:

.. code:: scss

  @mixin susy-use(
    $config
  ) {
    //  parse and normalize any shorthand arguments
    $config: susy-compile($config);

    // record the global settings -
    // and update the global variable with our new settings
    $global: $susy;
    $susy: map-merge($susy, $config) !global;

    // any content inside this mixin
    // will use the local settings
    @content;

    // return the global variable to its initial value
    $susy: $global !global;
  }


Susy-At Mixin
-------------

If we want to be more explicit
about linking breakpoints and settings,
we can write another mixin to associate the two.
Each breakpoint will need a map of Susy settings,
as well as the media query values (e.g. ``min-width: 30em``):

.. code:: scss

  // it is safe to add non-Susy data to Susy maps
  $medium: (
    'min-width': 30em,
    'columns': susy-repeat(8),
    'gutters': 1em,
  );

  // any code out here uses the global $susy settings…

  @include susy-at($medium) {
    // this block establishes a new breakpoint,
    // and any code in this block will use the $medium settings…
  }

Again, we'll have to define the mixin.
There are several ways to do it,
depending on the exact syntax you want,
but here's my first attempt
(using the ``susy-use`` mixin we created above):

.. code:: scss

  @mixin susy-at(
    $config
  ) {
    //  parse and normalize any shorthand arguments
    $config: susy-compile($config);

    // build min-and-max queries
    $min: map-get($config, 'min-width');
    $min: if($min, '(min-width: #{$min})', null);
    $max: map-get($config, 'max-width');
    $max: if($max, '(max-width: #{$max})', null);

    // combine them if we need both
    $and: if($min and $max, '#{$min} and #{$max}', null);
    // or fall back to the value we need…
    $query: $and or $min or $max;

    // apply the results…
    @media #{$query} {
      @include susy-use($config) {
        @content;
      }
    }
  }


Adjust for Your Project
-----------------------

Since this is not core Susy code,
we can change the syntax however we like
to fit our individual projects and conventions more closely.
If we wanted to match the Susy2 syntax,
we can rename ``susy-use`` to ``with-layout``,
and add an argument for cleanly overriding
(rather than inheriting) the global defaults.

.. code:: scss

  @mixin with-layout($config, $clean: false) { /* … */ }

For the Susy2 media-query syntax,
we would rename ``susy-at`` to ``susy-breakpoint``
and separing the media-query from the Susy settings,
rather than storing them inside the same map:

.. code:: scss

  @mixin susy-use($breakpoint, $config) { /* … */ }

That's a bit more flexible –
allowing you to associate any breakpoint
with any layout configuration on-the-fly –
but I'm not sure that flexibility is very useful.
In most cases, the two should remain connected.

Your milage will almost certainly vary,
so we recommend experimenting
to find an approach that works for you.


Sharing Snippets
----------------

We'll keep sharing snippets as we encounter them.
You can copy-paste this code and use it as-is –
but we recommend playing around,
and making it fit your own project and processes.

If you have more snippets that you've written for Susy3,
send them our way!
We love to see how other people are using these tools,
and we're always happy to share the shortcuts you find most useful.

Follow us on `Twitter`_, join our `public Slack chat`_
(there's even a **#susy** channel),
or `contact us`_ online.
We're excited to hear from you!

.. _Twitter: https://twitter.com/oddbird
.. _public Slack chat: http://friends.oddbird.net
.. _contact us: /contact/
