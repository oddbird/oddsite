public: yes
location: open-source
grid_template: true
image:
  - src: 'projects/susy.png'
project:
  - name: 'Susy'
    tagline: 'Your layout, our math'
    url: 'http://susy.oddbird.net'
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
summary: |
  In a world of agile development
  and super-tablet-multi-magic-laptop-phones,
  the best layouts can’t be contained in a single framework or technique.
  CSS Libraries are a bloated mess of opinions about how to do your job.
  Why let the table-saw tell you where to put the kitchen?


Susy
====


.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'

Getting Started
---------------

Get started quickly
with the flexible ``span`` mixin:

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

For more details,
`check out our reference documentation`_.

.. _check out our reference documentation: http://susydocs.oddbird.net/en/latest/install/

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------


.. callmacro:: content.macros.j2#divider
.. callmacro:: content.macros.j2#get_quotes
  :slug: 'open-source/susy'
.. callmacro:: content.macros.j2#divider


.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'


Better Together
---------------

*Responsive Design* —
Susy integrates smoothly with `Breakpoint`_
for powerful media-query controls.
See the `documentation`_ for details.

*Vertical Rhythms* —
If you're using the `Compass`_,
we add support for ``$rem-with-px-fallback``,
and show your baseline grids for debugging.

*Package Managers* —
We love `Compass`_ and highly recommend it,
but you can use Susy 2 anywhere `Sass`_ is compiled.
Try it with `Bundler`_, `Bower`_, `Yeoman`_, `Bourbon`_,
or copied directly into your project.
Then check out `Sache.in`_ for more great Sass extensions.

*Community Effort* —
Susy was originaly based on Natalie Downe's `CSS Systems`_,
but has grown much more powerful and flexible than any one system.
For Susy 2 we joined forces with `Salsa`_,
and borrowed back from `Singularity`_, `Zen Grids`_, and elsewhere.
We'd love to `hear your ideas`_ as well.

.. _Breakpoint: http://breakpoint-sass.com
.. _documentation: http://susydocs.oddbird.net/
.. _Compass: http://compass-style.org/
.. _Sass: http://sass-lang.com/
.. _Bundler: http://bundler.io/
.. _Bower: http://bower.io/
.. _Yeoman: http://yeoman.io/
.. _Bourbon: http://bourbon.io/
.. _`Sache.in`: http://sache.in/
.. _CSS Systems: http://www.slideshare.net/nataliedowne/css-systems-presentation
.. _Salsa: http://tsi.github.io/Salsa/
.. _Singularity: http://singularity.gs/
.. _Zen Grids: http://next.zengrids.com/
.. _hear your ideas: http://github.com/oddbird/susy/issues


Read the Book!
--------------

`Zell Liew`_ wrote a great book to get you started with Susy.
You can even `Get the first five chapters for free`_!
Here are some of the things that you'll learn:

.. or use the discout code ``oddbirds`` for 20% off the entire package!

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
