public: yes
location: susysite
template: 'susysite/layout.html'
grid_template: true
image:
  - src: 'projects/susy.png'
project:
  - name: 'Susy'
    tagline: 'Your layout, our math'
    source: 'https://github.com/oddbird/susy'
    years: '2009-present'
    status: 'public'
    owner: yes
contributors:
  - author: 'miriam'
    role: 'creator'
quotes:
  - text: 'I like the idea of grids-on-demand, rather than a strict framework.'
    name: 'Chris Coyier'
    role: 'CSS Tricks'
    url: 'http://css-tricks.com/build-web-layouts-easily-susy/'
  - text: 'My experiments have left me impressed. The current state of CSS layout means that unless you like to spend a lot of time doing calculations something like Susy is really useful. The output CSS is pretty much what I’d come up with myself, which to me is the acid test for tool use.'
    name: 'Rachel Andrew'
    role: 'Invited Expert to the CSS Working Group'
    url: 'https://rachelandrew.co.uk/archives/2015/02/04/css-grid-layout-creating-complex-grids/'
  - text: 'If you’re interested in reading Sass poetry,
           be sure to look at Susy’s source code!'
    name: 'Hugo Giraudel'
    role: 'SitePoint'
    url: 'http://www.sitepoint.com/my-favorite-sass-tools/'
  - text: '<b>Susy</b> and <b>Zendesk</b> have been getting along magically…
           It’s precisely what you need and nothing more.'
    name: 'Stephany Varga'
    role: 'Zendesk Creative Collection'
    url: 'https://medium.com/zendesk-creative-blog/responsive-a-harrowing-meditation-on-the-brutal-realities-of-web-content-organization-in-5-acts-1d33ce25f062'
screenshots:
  - image: 'susy/screenshots/sasslang.jpg'
    alt: 'Sass'
    target: 'http://sass-lang.com/'
  - image: 'susy/screenshots/virginamerica.jpg'
    alt: 'Virgin America'
    target: 'https://www.virginamerica.com/'
  - image: 'susy/screenshots/squaremarket.jpg'
    alt: 'Square Market'
    target: 'http://squareup.com/market'
  - image: 'susy/screenshots/esquire.jpg'
    alt: 'Esquire UK'
    target: 'http://www.esquire.co.uk'
  - image: 'susy/screenshots/python.jpg'
    alt: 'Python'
    target: 'http://python.org/'
  - image: 'susy/screenshots/mediamolecule.jpg'
    alt: 'Media Molecule'
    target: 'http://mediamolecule.com'
  - image: 'susy/screenshots/simple.jpg'
    alt: 'Simple'
    target: 'http://simple.com/'
  - image: 'susy/screenshots/smithsonian.jpg'
    alt: 'Smithsonian'
    target: 'http://smithsonian.com/'
summary: |
  **Rapid prototypes are only the start to a long process**
  with customization, revisions, handoffs, and ongoing maintenance.
  Susy is built to evolve with your project over the long haul.
  You're the expert,
  we're just here to make your job easier.


Susy
====

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
there are less reasons to use a grid library like Susy –
*and that's wonderful*!
Grid libraries were always a temporary fix,
waiting for the browser to take over.
Still,
not everyone can play with the latest specs,
and there will always be edge-cases
that require manual grid-math.

Susy Three is trimmed down to the most basic features:
a lightweight library of functions
that can be used along with ``float``,
or ``flexbox``
or any other CSS –
anywhere, any time.

.. _flexbox: #@@@
.. _CSS Grid module: #@@@

.. callmacro:: content.macros.j2#link_button
  :url: '#@@@'

  Read the article

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------


.. callmacro:: content.macros.j2#divider
.. callmacro:: content.macros.j2#get_quotes
  :slug: 'susy/index'
  :index: 1
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

.. _introduction to spread: http://oddbird.net/2017/06/13/susy-spread/
.. _full reference documentation: http://susydocs.oddbird.net/


.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------


.. callmacro:: content.macros.j2#divider
.. callmacro:: content.macros.j2#get_quotes
  :slug: 'susy/index'
  :index: 2
.. callmacro:: content.macros.j2#divider


.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'


Read the (Susy 2) Book!
-----------------------

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
