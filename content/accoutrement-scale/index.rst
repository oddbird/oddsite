public: no
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
    docs: '/accoutrement-scale/docs/'
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

Organized Spacing & Modular Scales
----------------------------------

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

.. _Herman: /herman/

.. code:: bash

  npm install accoutrement-scale

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------

.. callmacro:: content.macros.j2#accoutrement
