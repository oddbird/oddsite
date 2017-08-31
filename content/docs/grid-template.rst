public: no
tags: [CSS, RST, Code]
grid_template: true
headline:
  - type: 'Documentation'
project:
  - name: 'Grid Template'
    tagline: 'Sample Documentation'
    url: 'http://www.oddbird.net/'
    source: 'https://github.com/oddbird/oddsite/'
    years: '2008–2016'
    status: 'live'
my-blocks:
  - title: 'Optional subtitles (uses h3)'
    icon: 'miriam'
    text: 'Icon-block data must be structured as YAML
      at the start of a document.
      The <code>icon-block</code> macro takes a title,
      slug, and data – all strings.
      The data argument should provide the root name
      of the YAML block to use.'
  - icon: 'miriam'
    text: 'Titles are optional, but icon and text are required.
      Text is a simple string, put inside a paragraph tag,
      but inline html is acceptable for links, emphasis, code, etc.'


Grid Template
=============

.. callmacro:: content.macros.j2#rst
  :tag: 'start'

To use the optional grid-template,
set ``grid_template: true`` in the page YAML.
This is currently recommended mainly for case studies.
When using the grid template,
simple rst content will need to be wrapped using
the ``rst`` macro,
providing ``'start'`` and ``'end'`` values
to the ``:tag:`` argument.
See `using macros <../sample/#using-macros>`_
for more on general macro use.
This is an ugly workaround,
but it will have to do for now.


Icon Blocks
-----------

To create blocks of content with out-dented icons,
we provide a ``content.macros.j2#icon_block`` macro,
that uses YAML data from the page header.
This should be used outside the ``rst`` wrapper macro.
You can have more than one group of icons, but each
would have their own unique group name. For instance,
the ``my-blocks`` example below is one group, and you
could have a second titled ``best-blocks``.

.. code:: yaml

  my-blocks:
    - title: 'Optional subtitles (uses h3)'
      icon: 'filename-of-icon-without-svg-extension'
      text: 'Icon-block data must be structured as YAML.'
    - icon: 'miriam'
      text: 'Titles are optional, but icon and text are required.'

.. code:: rst

  .. callmacro:: content.macros.j2#icon_block
    :title: 'Icon Block Sample (title uses h2)'
    :slug: 'docs/grid-template'
    :data: 'my-blocks'


.. callmacro:: content.macros.j2#rst
  :tag: 'end'


.. callmacro:: content.macros.j2#icon_block
  :title: 'Icon Block Sample (title uses h2)'
  :slug: 'docs/grid-template'
  :data: 'my-blocks'


.. callmacro:: content.macros.j2#rst
  :tag: 'start'


Case Studies
------------

The ``projects/case-study.macros.j2`` file
contains special macros specific to our case-study patterns.
These macros rely on specific YAML patterns as well.

.. code:: yaml

  project:
    - name: 'OddSite'
      tagline: 'Oddly Human Web Apps'
      url: 'http://www.oddbird.net/'
      source: 'https://github.com/oddbird/oddsite/'
      years: '2008–2016'
      status: 'live'

Case Studies should start with a brief
descriptive hidden-title
(which will be used as the html metadata title),
followed by call to the ``front-matter`` macro.

.. code:: rst

  OddSite Case Study
  ==================

  .. callmacro:: projects/case-study.macros.j2#front_matter
    :slug: 'work/oddsite'


The project ``front-matter`` macro
combines calls to ``header`` and ``description``.

The ``header`` requires
a project ``name`` and ``tagline``,
with optional ``url`` and ``source`` links.
The ``years`` and ``status`` will be used eventually.

The ``description`` requires
a standard page-``summary`` and a list of ``tasks``:

.. code:: yaml

  tasks:
    - Product Branding
    - User Experience Design
    - Project Architecture
    - Responsive Styles


.. callmacro:: content.macros.j2#rst
  :tag: 'end'
