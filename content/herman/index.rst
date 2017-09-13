public: yes
location: open-source
grid_template: true
image:
  - src: 'projects/herman.jpg'
project:
  - name: 'Herman'
    tagline: 'Automated Style Guides'
    source: 'https://github.com/oddbird/sassdoc-theme-herman'
    status: 'pre-release'
    owner: yes
contributors:
  - author: 'oddbird'
    role: 'creators'
summary: |
  **Herman is an automated pattern-library generator,**
  built on top of SassDoc,
  and designed to integrate with OddBird's
  `Sass Accoutrement`_ libraries
  for quick theme configuration,
  color palettes, font specimens, icon libraries,
  and documentation of UI patterns
  in both Sass and Nunjucks.

  .. _Sass Accoutrement: /open-source/accoutrement/


Herman
======

.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'

Make Documentation the Default
------------------------------

.. image:: https://badge.fury.io/js/sassdoc-theme-herman.svg
  :alt: 'npm package'
  :target: https://www.npmjs.com/package/sassdoc-theme-herman

.. image:: https://circleci.com/gh/oddbird/sassdoc-theme-herman.svg?style=shield
  :alt: 'build-status'
  :target: https://circleci.com/gh/oddbird/sassdoc-theme-herman

Pattern libraries and style guides help
keep the code and style of your site consistent,
while facilitating communication between designers and developers.
But documentation can be difficult,
especially if it lives outside the source code being documented –
and there's nothing worse than an out-of-date pattern library.
Herman is here to help make documentation simple,
keeping it inline with the source code of the project,
and updating pattern libraries on-the-fly.

.. code:: bash

  npm install sassdoc
  npm install sassdoc-theme-herman

.. callmacro:: content.macros.j2#link_button
  :url: 'docs/'

  Read The Docs


Accoutrement Integration
------------------------

OddBird's Accoutrement toolkits
are designed around the idea that code should be
meaningful to both humans and machines –
opening the door for automation,
while maintaining and improving readability.
These tools also integrate with Herman,
our automated living pattern-library generator
built on SassDoc.

- `Color`_ helps manage color-palettes and color-accessibility patterns
- `Init`_ provides lightweight browser-normalization.
- `Scale`_ helps manage sizing patterns like font-scales, margins, and gutters
- `Type`_ provides webfont management tools, and other typography helpers
- `Layout`_ provides layout utilities such as box-sizing,
  intrinsic ratios, z-index management, named media-queries, and a clearfix

.. _Color: /accoutrement-color/
.. _Init: /accoutrement-init/
.. _Scale: /accoutrement-scale/
.. _Type: /accoutrement-type/
.. _Layout: /accoutrement-layout/

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------
