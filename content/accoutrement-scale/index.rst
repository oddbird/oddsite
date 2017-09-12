public: yes
location: open-source
grid_template: true
headline:
  - type: 'Open Source'
    tagline: 'Manage sizes and modular-scales in Sass'
image:
  - src: 'projects/scale.jpg'
project:
  - name: 'Accoutrement-Scale'
    tagline: 'Manage sizes and modular-scales in Sass'
    source: 'https://github.com/oddbird/accoutrement-scale'
    status: 'public'
    owner: yes
contributors:
  - author: 'miriam'
    role: 'creator'
summary: |
  **Accoutrement-Scale provides size-management utilities.**
  Gather all your sizes into organized maps,
  generate new sizes based on modular scale ratios
  or arbitrary functions,
  access sizes by name,
  and automate scale previews in `Herman`_.

  .. _Herman: /herman/


Accoutrement Scale
==================

.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'

Organized Spacing &  Modular Scales
-----------------------------------

.. image:: https://badge.fury.io/js/accoutrement-scale.svg
  :alt: 'npm package'
  :target: https://www.npmjs.com/package/accoutrement-scale

.. image:: https://api.travis-ci.org/oddbird/accoutrement-scale.svg
  :alt: 'build status'
  :target: https://travis-ci.org/oddbird/accoutrement-scale

Organize named modular-scales
and generate text/component sizes along any scale,
with built-in unit-conversion,
and ``calc()``-generating options.
Integrate with `Herman`_ to generate scale-previews
for an automated pattern library.

.. code:: bash

  npm install accoutrement-scale

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

.. _Herman: /herman/
.. _Color: /accoutrement-color/
.. _Init: /accoutrement-init/
.. _Scale: /accoutrement-scale/
.. _Type: /accoutrement-type/
.. _Layout: /accoutrement-layout/

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------
