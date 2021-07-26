public: yes
location: susysite
template: 'susysite/layout.html'
grid_template: true
headline:
  - title: 'Susy: Web Layout Toolkit'
    type: 'An **OddBird** Project'
logo: 'susy'
image:
  - src: 'projects/susy.png'
nav:
  - text: 'susysite-articles'
    display_text: 'articles'
    url: '/susy/articles/'
  - text: 'susysite-support'
    display_text: 'support'
    subnav:
      - text: 'docs'
        display_text: 'reference documentation'
        url: '/susy/docs/'
      - text: 'github'
        display_text: 'github issues'
        url: 'https://github.com/oddbird/susy/issues'
      - text: 'stack-overflow'
        display_text: 'stack overflow'
        url: 'http://stackoverflow.com/questions/tagged/susy-sass'
      - text: 'twitter'
        display_text: 'twitter'
        url: 'http://twitter.com/sasssusy/'
      - text: 'susysite-styleguide'
        display_text: 'brand styleguide'
        url: '/susy/styleguide/'
  - text: 'susysite-sites'
    display_text: 'sites'
    url: '/susy/sites/'
  - text: 'oddbird'
    display_text: 'oddbird'
    url: '/'
project:
  - name: 'Susy'
    subhead: 'CSS Layout Framework'
    tagline: 'Your Design, Our Math'
    source: 'https://github.com/oddbird/susy'
    docs: '/susy/docs/'
    years: '2009–present'
    status: 'public'
    owner: yes
contributors:
  - author: 'miriam'
    role: 'creator'
brag: |
  Popular
  **CSS layout framework** –
  used by **Virgin America**,
  **The Smithsonian**,
  **Esquire UK**,
  and more.
quotes:
  - text: 'I like the idea of grids-on-demand, rather than a strict framework.'
    name: 'Chris Coyier'
    role: 'CSS-Tricks'
    url: 'http://css-tricks.com/build-web-layouts-easily-susy/'
    slug: 'on-demand'
  - text: |
      My experiments have left me impressed.
      The current state of CSS layout
      means that unless you like to spend a lot of time doing calculations
      something like Susy is really useful.
      The output CSS is pretty much what I'd come up with myself,
      which to me is the acid test for tool use.
    name: 'Rachel Andrew'
    role: 'Invited Expert to the CSS Working Group'
    url: 'https://rachelandrew.co.uk/archives/2015/02/04/css-grid-layout-creating-complex-grids/'
    slug: 'impressed'
  - text: |
      If you're interested in reading Sass poetry,
      be sure to look at Susy's source code!
    name: 'Kitty Giraudel'
    role: 'SitePoint'
    url: 'http://www.sitepoint.com/my-favorite-sass-tools/'
    slug: 'poetry'
  - text: |
      **Susy** & **Zendesk** have been getting along magically…
      It's precisely what you need and nothing more.
    name: 'Stephany Varga'
    role: 'Zendesk Creative Collection'
    url: 'https://medium.com/zendesk-creative-blog/responsive-a-harrowing-meditation-on-the-brutal-realities-of-web-content-organization-in-5-acts-1d33ce25f062'
    slug: 'zendesk'
summary: |
  **Susy is a lightweight grid-layout engine for Sass**,
  designed to simplify and clarify responsive grid layouts
  without ever getting in your way.
  You can use Susy with floats, flexbox, tables,
  or any other CSS technique.
  You're the expert,
  we're just here to make your job easier.


Susy: Your Layout, *Our Math*
=============================

.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'

Lightweight & Flexible
----------------------

.. image:: https://badge.fury.io/js/susy.svg
  :alt: 'npm package'
  :target: https://www.npmjs.com/package/susy

.. image:: https://travis-ci.org/oddbird/susy.svg
  :alt: 'build status'
  :target: https://travis-ci.org/oddbird/susy

With the advent of `flexbox`_
and the `CSS Grid module`_,
there are fewer and fewer reasons to use a grid library like Susy –
*and that's wonderful*!
Grid libraries were always a temporary fix,
waiting for the browser to take over.
Still,
not everyone can play with the latest specs,
and there will always be edge-cases
that require manual grid-math.

Susy3 is trimmed down to the most basic features:
a lightweight library of functions
that can be used along with ``float``,
or ``flexbox``
or any other CSS –
anywhere, any time.

.. code:: bash

  npm install susy

Susy is also available
in the `CodeKit`_ editor,
with 10% of your purchase going to `Black Girls Code`_
when you follow the link from our site.

.. _flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
.. _CSS Grid module: https://css-tricks.com/snippets/css/complete-guide-grid/
.. _CodeKit: https://codekitapp.com/index.html?referrer=susy
.. _Black Girls Code: http://blackgirlscode.com

.. callmacro:: content.macros.j2#link_button
  :url: '/susy/docs/'

  Susy3 Documentation

.. callmacro:: content.macros.j2#link_button
  :url: 'https://susy.readthedocs.io/'

  Susy2 Documentation

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------


.. callmacro:: content.macros.j2#divider
.. callmacro:: content.macros.j2#get_quotes
  :page: 'susy/index'
  :slug: 'on-demand'
.. callmacro:: content.macros.j2#divider


.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'

Getting Started
---------------

All Susy3 API functions draw on the same shorthand syntax,
which consists of two parts,
seperated by the word ``of``.
The first part describes a grid-**span**
``width``, ``location`` (if needed), and ``spread`` (in any order):

.. code:: scss

  // <width> at <location> <spread>
  $span: span(2);
  $span-spread: span(3 wide);

  // location is only needed with asymmetrical grids
  $span-location-spread: span(3 at 2 narrow);

The second half
describes the grid-**context**
``columns``, ``container-spread``, and ``gutters``
in any order:

.. code:: scss

  // of <columns> <container-spread> set-gutters <gutters>
  $of-columns: of 6;
  $of-columns-spread: of 12 wide;
  $of-columns-gutters: of 12 set-gutters 2em;

There are two primary functions,
``span`` and ``gutter``,
which can be used anywhere
you need to calculate grid math.

- ``span`` accepts the full shorthand syntax
- ``gutter`` only uses the second half (with or without ``of``)

.. code:: scss

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

Except for span-width and location,
all of those settings have global defaults,
which can be set in the ``$susy`` configuration map:

.. code:: scss

  // default settings
  $susy: (
    'columns': susy-repeat(4),
    'gutters': 0.25,
    'spread': 'narrow',
    'container-spread': 'narrow',
  );

Note that the ``columns`` setting
no longer accepts a single number (e.g. ``12``)
to represent 12 equal columns.
Instead, we've borrowed syntax from the official CSS Grid module,
requiring a list of column widths,
with the ``susy-repeat`` function to help
when your list is repetative.

You can also pass in new configurations
to a function on-the-fly:

.. code:: scss

  $large-screens: (
    'columns': susy-repeat(12, 4em),
    'gutters': 1em,
  );

  nav {
    @media (min-width: 40em) {
      width: span(3 wide, $large-screens);
    }
  }

You can also mix-and match non-comparable
static and fluid units in your grid,
and Susy will output a ``calc()`` value
to make the math work.

.. code:: scss

  // 120px 1 1 1 1 12em
  $columns: 120px susy-repeat(4) 12em;
  $calc: span(first 3 of $columns);

For more details,
check out our `introduction to spread`_,
and `full reference documentation`_.

.. _introduction to spread: /2017/06/13/susy-spread/
.. _full reference documentation: /susy/docs/


.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------


.. callmacro:: content.macros.j2#divider
.. callmacro:: content.macros.j2#get_quotes
  :page: 'susy/index'
  :slug: 'impressed'
.. callmacro:: content.macros.j2#divider


.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'


Read the (Susy2) Book!
----------------------

.. image:: /static/images/susy/book-cover.png
  :alt: 'Learning Susy'
  :class: 'susy-book'
  :target: http://zell-weekeat.com/learnsusy/#signup

Learning Susy
~~~~~~~~~~~~~

`Zell Liew`_ wrote a great book to get you started with Susy.
You can even `Get the first five chapters for free`_!
Here are some of the things that you'll learn:

- How to use the **Span Mixin**
- How to output the **Background Grid**
- How to configure the **Global Settings** to your needs
- How to do **mobile-first responsive coding** with Susy and Breakpoint
- How different **gutter-positions** affect your layout
- How to build **asymmetric layouts** without breaking a sweat
- How to use the **isolation to prevent subpixel rounding** errors

.. _Zell Liew: http://zell-weekeat.com/
.. _Get the first five chapters for free: http://zell-weekeat.com/learnsusy/#signup


.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------
