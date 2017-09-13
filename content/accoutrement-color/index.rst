public: yes
location: open-source
grid_template: true
headline:
  - type: 'Open Source'
    tagline: 'Manage color-palettes and contrast-ratios in Sass'
image:
  - src: 'projects/color.jpg'
project:
  - name: 'Accoutrement-Color'
    tagline: 'Color-management for Sass developers'
    source: 'https://github.com/oddbird/accoutrement-color'
    status: 'public'
    owner: yes
contributors:
  - author: 'miriam'
    role: 'creator'
summary: |
  **Accoutrement-Color provides essential color-management utilities.**
  Organize all your colors into self-contained palettes,
  document color relationships directly in the code,
  automate WCAG-appropriate contrast checking,
  and generate color-palette documentation with `Herman`_.

  .. _Herman: /herman/


Accoutrement Color
==================

.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'

Color Palettes & Accessibility
------------------------------

.. image:: https://badge.fury.io/js/accoutrement-color.svg
  :alt: 'npm package'
  :target: https://www.npmjs.com/package/accoutrement-color

.. image:: https://api.travis-ci.org/oddbird/accoutrement-color.svg
  :alt: 'build status'
  :target: https://travis-ci.org/oddbird/accoutrement-color

By storing all our colors in Sass maps,
we can improve both organization and automation –
making our color-palettes meaningful to
both developers and the Sass language.
Keep your colors in one place,
generate palettes programmatically,
check contrast-ratios,
and loop through colors easily.

.. code:: bash

  npm install accoutrement-color

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
