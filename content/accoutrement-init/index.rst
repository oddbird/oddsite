public: yes
location: open-source
grid_template: true
headline:
  - type: 'Open Source'
    tagline: 'Lightweight browser normalization for Sass projects'
image:
  - src: 'projects/init.jpg'
project:
  - name: 'Accoutrement-Init'
    tagline: 'Lightweight browser normalization for Sass projects'
    source: 'https://github.com/oddbird/accoutrement-init'
    status: 'public'
    owner: yes
contributors:
  - author: 'miriam'
    role: 'creator'
summary: |
  We try to curate
  only the most essential and low-impact normalization,
  for cross-browser consistency
  at the start of every project.
  This is loosely based on the open-source
  `Sanitize`_ and `Normalize`_ projects.

  .. _Sanitize: http://github.com/10up/sanitize.css
  .. _Normalize: https://github.com/necolas/normalize.css


Accoutrement Init
=================

.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'

Lightweight Browser Normalization
---------------------------------

.. image:: https://badge.fury.io/js/accoutrement-init.svg
  :alt: 'npm package'
  :target: https://www.npmjs.com/package/accoutrement-init

A mix of low-impact normalizations
for accessibility, forms,
media, typography,
and html5 elements –
along with global ``border-box`` sizing,
and other sensible defaults.

.. callmacro:: content.macros.j2#link_button
  :url: 'docs/'

  Read The Docs


More Accoutrement
-----------------

OddBird's Accoutrement toolkits
are designed around the idea that code should be
meaningful to both humans and machines –
opening the door for automation,
while maintaining and improving readability.
These tools also integrate with `Herman`_,
our automated living patter-library generator
built on SassDoc.

- `Color`_ helps manage color-palettes and color-accessibility patterns
- `Init`_ provides light-weight browser-normalization.
- `Scale`_ helps manage sizing patterns like font-scales, margins, and gutters
- `Type`_ provides webfont management tools, and other typography helpers
- `Layout`_ provides layout utilities such as box-sizing,
  intrinsic ratios, z-index management, named media-queries, and a clearfix

.. _Herman: /open-source/herman/
.. _Color: /accoutrement-color/
.. _Init: /accoutrement-init/
.. _Scale: /accoutrement-scale/
.. _Type: /accoutrement-type/
.. _Layout: /accoutrement-layout/

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------
