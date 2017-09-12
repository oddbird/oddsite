public: yes
location: open-source
grid_template: true
headline:
  - type: 'Open Source'
    tagline: 'Manage typography and webfonts in Sass projects'
image:
  - src: 'projects/type.jpg'
project:
  - name: 'Accoutrement-Type'
    tagline: 'Manage typography and webfonts in Sass projects'
    source: 'https://github.com/oddbird/accoutrement-type'
    status: 'public'
    owner: yes
contributors:
  - author: 'miriam'
    role: 'creator'
summary: |
  **Accoutrement-Type provides typography
  and font-management utilities.**
  Gather all your webfont data into organized maps,
  access them by name,
  and easily import local font-files.
  We also include helpers for test-accessibility
  and pseudo-elements.


Accoutrement Type
=================

.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'

Typography Helpers & Webfont Management
---------------------------------------

.. image:: https://badge.fury.io/js/accoutrement-type.svg
  :alt: 'npm package'
  :target: https://www.npmjs.com/package/accoutrement-type

.. image:: https://api.travis-ci.org/oddbird/accoutrement-type.svg
  :alt: 'build status'
  :target: https://travis-ci.org/oddbird/accoutrement-type

Organize all your webfont data in organized maps,
to automate local font-file imports,
and generate full font-specimens with `Herman`_.
Fonts can be named and accessed by any alias.
We also include a small set of utilities
for managing type-accessability,
and pseudo-elements with generated content.

.. code:: bash

  npm install accoutrement-type

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
