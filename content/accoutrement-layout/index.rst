public: yes
location: open-source
grid_template: true
headline:
  - type: 'Open Source'
    tagline: 'Layout utilities for Sass projects'
image:
  - src: 'projects/layout.jpg'
project:
  - name: 'Accoutrement-Layout'
    tagline: 'Layout utilities for Sass projects'
    source: 'https://github.com/oddbird/accoutrement-layout'
    status: 'public'
    owner: yes
contributors:
  - author: 'miriam'
    role: 'creator'
summary: |
  **Accoutrement-Layout provides
  essential layout utilities** –
  including media-query helpers,
  a clearfix for floated elements,
  global box-sizing,
  positioning shortcuts,
  and fluid aspect ratios.


Accoutrement Layout
===================

.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'

Layout & Positioning
--------------------

.. image:: https://badge.fury.io/js/accoutrement-layout.svg
  :alt: 'npm package'
  :target: https://www.npmjs.com/package/accoutrement-layout

.. image:: https://api.travis-ci.org/oddbird/accoutrement-layout.svg
  :alt: 'build status'
  :target: https://travis-ci.org/oddbird/accoutrement-layout

Organize named media-query breakpoints in a single map,
or integrate with existing `accoutrement-scale`_ sizes.
Position elements using a shorthand mixin,
set box-sizing for any nested context,
establish intrinsic ratios,
use our micro-clearfix,
and organize named z-index values
with nesting for extra contextual control.

.. _accoutrement-scale: /accoutrement-scale/

.. code:: bash

  npm install accoutrement-layout

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
our automated living pattern-library generator
built on SassDoc.

- `Color`_ helps manage color-palettes and color-accessibility patterns
- `Init`_ provides lightweight browser-normalization
- `Scale`_ helps manage sizing patterns like font-scales, margins, and gutters
- `Type`_ provides webfont management tools, and other typography helpers
- `Layout`_ provides layout utilities such as box-sizing,
  intrinsic ratios, z-index management, named media-queries, and a clearfix

.. _Herman: /herman/
.. _Color: /accoutrement-color/
.. _Init: /accoutrement-init/
.. _Scale: /accoutrement-scale/
.. _Type: /accoutrement-type/
.. _Layout: /accoutrement-layout/

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------
