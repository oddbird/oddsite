public: yes
grid_template: true
headline:
  - type: 'Open Source'
    tagline: 'Manage design tokens & systems in Sass'
image:
  - src: 'projects/accoutrement.jpg'
project:
  - name: 'Sass Accoutrement'
    tagline: 'Integrated Design-System Management in Sass'
    source: 'https://github.com/oddbird/accoutrement'
    docs: '/accoutrement/docs/'
    status: 'public'
    owner: yes
contributors:
  - author: 'miriam'
    role: 'creator'
  - author: 'jonny'
    role: 'core developer'
accoutrement_modules:
  - title: 'Core'
    url: '/accoutrement/docs/core.html'
    icon: 'accoutrement_core'
    text: 'Generic syntax for managing design tokens
          and arbitrary patterns in a format
          that encourages maintenance and automation.'
  - title: 'Init'
    url: '/accoutrement/docs/init.html'
    icon: 'accoutrement_init'
    text: 'Lightweight browser normalization.
          This is the only Accoutrement library
          with direct CSS output when imported.'
  - title: 'Plugin: Animate'
    url: '/accoutrement/docs/animate.html'
    icon: 'accoutrement_animate'
    text: 'Manage timing, easing, transitions and animations —
          with built-in shortcuts for common patterns.'
  - title: 'Plugin: Color'
    url: '/accoutrement/docs/color.html'
    icon: 'accoutrement_color'
    text: 'Manage your color palettes in one place,
          and access them from anywhere
          with optional accessibility guidance
          from the WCAG.'
  - title: 'Plugin: Layout'
    url: '/accoutrement/docs/layout.html'
    icon: 'accoutrement_layout'
    text: 'Layout utilities including
          named media-queries, shorthand positioning,
          fluid aspect-ratios, box-sizing,
          and float-clearing.'
  - title: 'Plugin: Scale'
    url: '/accoutrement/docs/scale.html'
    icon: 'accoutrement_scale'
    text: 'Manage a system of consistent sizes
          to use across your project
          for typography, spacing, layout, and more.
          Generate sizes based on modular-scale ratios,
          and access sizes in any unit you need.'
  - title: 'Plugin: Type'
    url: '/accoutrement/docs/type.html'
    icon: 'accoutrement_type'
    text: 'Manage your webfonts,
          import them all with a single command,
          and access font-stacks on-the-fly,
          with utilities for generated content and accessibility.'
summary: |
  OddBird’s Accoutrement tools
  (now merged into a single npm package)
  are designed around the idea that
  design systems should be
  meaningful to both humans and machines –
  opening the door for automation,
  while improving readability.
  These tools integrate with
  `Herman`_,
  our automated pattern-library generator.

  .. _Herman: /herman/


Accoutrement
============

.. ---------------------------------
.. callmacro:: content.macros.j2#divider

.. callmacro:: content.macros.j2#rst

  All your patterns in one place
  ------------------------------

  .. image:: https://badge.fury.io/js/accoutrement.svg
    :alt: 'npm package'
    :target: https://www.npmjs.com/package/accoutrement

  .. image:: https://api.travis-ci.org/oddbird/accoutrement.svg
    :alt: 'build status'
    :target: https://travis-ci.org/oddbird/accoutrement

  By storing all our design tokens and patterns in Sass maps,
  we can improve both organization and automation –
  making our design systems meaningful to
  both developers and the Sass language.

  .. code:: bash

    # npm
    npm install accoutrement

    # yarn
    yarn add accoutrement

  .. callmacro:: content.macros.j2#link_button
    :url: '/accoutrement/docs/index.html'

    Get started

.. ---------------------------------
.. callmacro:: content.macros.j2#divider
  :title: 'Accoutrement Modules'

.. callmacro:: content.macros.j2#icon_block
  :slug: 'accoutrement/index'
  :data: 'accoutrement_modules'
