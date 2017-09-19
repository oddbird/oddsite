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
  Susy3 is designed without mixins,
  for complete flexibility,
  but it can be useful to build additional tools
  and shortcuts as we go.
  Here are some snippets to help you get started
  working with Susy across different media-queries.


Susy3 Media-Queries & Grid Settings
===================================

Since Sass in not aware of the browser or DOM,
there is no way to change Susy settings in the browser dynamically –
where the adjusted variables would apply automatically
at screen-widths.
We'd have to use `CSS variables to achieve that`_.

.. _CSS variables to achieve that: https://codepen.io/mirisuzanne/pen/PboVrw

.. code:: css

  /* ideal setup, using CSS variables */
  @media (min-width: 30em) {
    /* the new settings will apply to all elements */
    /* above a viewport width of 30em */
    :root { --susy-columns: 5; }
  }

In Sass
we have to apply the *results* of our variable-changes explicitly,
anywhere we want them used.
Only the functions given new settings
will generate CSS output based on those settings.


Susy-Use Mixin
--------------

We can do that with a mixin that changes our global settings
for a block of wrapped code –
using the ``@content`` argument.
We can pair that with a media-query
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
    $settings
  ) {
    //  parse and normalize any shorthand arguments
    $settings: susy-compile($settings);

    // record the global settings -
    // and update the global variable with our new settings
    $global: $susy;
    $susy: map-merge($susy, $settings) !global;

    // any content inside this mixin
    // will use the local settings
    @content;

    // return the global variable to its initial value
    $susy: $global !global;
  }


Susy-At Mixin
-------------

If you want to get more explicit
about linking specific breakpoints to specific settings,
we can write another mixin to associate the two.
Each breakpoint will need a map of Susy settings,
as well as the media-query values (e.g. `min-width: 30em`):

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
    $settings
  ) {
    //  parse and normalize any shorthand arguments
    $settings: susy-compile($settings);

    // build min-and-max queries
    $min: map-get($settings, 'min-width');
    $min: if($min, '(min-width: #{$min})', null);
    $max: map-get($settings, 'max-width');
    $max: if($max, '(max-width: #{$max})', null);

    // combine them if we need both
    $and: if($min and $max, '#{$min} and #{$max}', null);
    // or fall back to the value we need…
    $query: $and or $min or $max;

    // apply the results…
    @media #{$query} {
      @include susy-use($settings) {
        @content;
      }
    }
  }


Sharing Snippets
----------------

We'll keep sharing snippets as we encounter them.
You can copy-paste this code and use it as-is –
but we recommend playing around,
and making it fit your own project and processes.

If you have more snippets that you've written for Susy3,
send them are way!
We love to see how other people are using these tools,
and we're always happy to share the shortcuts you find most useful.

Follow us on `Twitter`_, join our `public Slack chat`_
(there's even a #susy channel),
or `contact us`_ online.
We're excited to hear from you!

.. _Twitter: https://twitter.com/oddbird
.. _public Slack chat: http://friends.oddbird.net
.. _contact us: /contact/
