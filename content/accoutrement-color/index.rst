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

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------

.. callmacro:: content.macros.j2#accoutrement
