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
  - text: '<b>Susy</b> and <b>Zendesk</b> have been getting along magically…
           It’s precisely what you need and nothing more.'
    name: 'Stephany Varga'
    role: 'Zendesk Creative Collection'
    url: 'https://medium.com/zendesk-creative-blog/responsive-a-harrowing-meditation-on-the-brutal-realities-of-web-content-organization-in-5-acts-1d33ce25f062'
  - text: 'If you’re interested in reading Sass poetry,
           be sure to look at Susy’s source code!'
    name: 'Hugo Giraudel'
    role: 'SitePoint'
    url: 'http://www.sitepoint.com/my-favorite-sass-tools/'
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
  :slug: 'open-source/susy'
  :index: 1
.. callmacro:: content.macros.j2#divider

.. callmacro:: content.macros.j2#gallery
  :title: 'Featured Sites'
  :slug: 'open-source/susy'
  :data: 'screenshots'
  :caption: '<a href="#@@@">See the full list, and add your site »</a>'
  :module: true
  :duo: true

.. callmacro:: content.macros.j2#divider
.. callmacro:: content.macros.j2#get_quotes
  :slug: 'open-source/susy'
  :index: 2
.. callmacro:: content.macros.j2#divider


.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'

Getting Started
---------------



.. code-block:: scss

  nav { @include span(25%); }
  main { @include span(75%); }

Then stick around for fully customizable grids:

.. code-block:: scss

  $susy: (
    columns: 12,
    gutter-position: inside,
    math: fluid,
    output: float,
    flow: rtl,
  );

And take complete control of the math
when you need it:

.. code-block:: scss

  nav {
    float: left;
    width: span(3);
    margin-right: gutter();
  }

  main {
    @include span(isolate 9 at 4 no-gutters);
  }


.. _Get started: http://susydocs.oddbird.net/en/latest/install/


For more details,
`check out our reference documentation`_.

.. _check out our reference documentation: http://susydocs.oddbird.net/en/latest/install/


.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------


.. callmacro:: content.macros.j2#divider
.. callmacro:: content.macros.j2#get_quotes
  :slug: 'open-source/susy'
  :index: 3
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
