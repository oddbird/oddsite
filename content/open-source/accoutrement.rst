public: yes
location: open-source
grid_template: true
image:
  - src: 'projects/accoutrement.jpg'
project:
  - name: 'Sass Accoutrement'
    tagline: 'Integrated theme-configuration tools'
    status: 'public'
    owner: yes
contributors:
  - author: 'miriam'
    role: 'creator'
accoutrement_intro: 'OddBird’s Accoutrement toolkits
  are designed around the idea that code should be
  meaningful to both humans and machines –
  opening the door for automation,
  while improving readability.
  These tools integrate with
  <a href="/herman/">Herman</a>,
  our automated pattern-library generator.'
accoutrement_modules:
  - title: 'Init'
    url: '/accoutrement-init/'
    icon: 'accoutrement_init'
    text: 'Lightweight, un-opinionated browser-normalization.
          This is the only Accoutrement library
          with direct CSS output when imported.'
  - title: 'Color'
    url: '/accoutrement-color/'
    icon: 'accoutrement_color'
    text: 'Manage your color palettes in one place,
          and access them from anywhere
          with optional accessibility guidance
          from the WCAG.'
  - title: 'Type'
    url: '/accoutrement-type/'
    icon: 'accoutrement_type'
    text: 'Manage your webfonts,
          import them all with a single command,
          and access font-stacks on-the-fly,
          with utilities for generated content and accessibility.'
  - title: 'Scale'
    url: '/accoutrement-scale/'
    icon: 'accoutrement_scale'
    text: 'Manage a system of consistent sizes
          to use across your project
          for typography, spacing, layout, and more.
          Generate sizes based on modular-scale ratios,
          and access sizes in any unit you need.'
  - title: 'Layout'
    url: '/accoutrement-layout/'
    icon: 'accoutrement_layout'
    text: 'Layout utilities including
          named media-queries, shorthand positioning,
          fluid aspect-ratios, box-sizing,
          and float-clearing.'
summary: |
  **Five integrated theme-configuration modules**
  for building and documenting style patterns
  directly in your Sass code,
  as part of the development process:
  `browser normalization`_,
  `color palettes`_,
  `modular scales`_,
  `webfonts & typography`_,
  and `responsive layout`_.

  .. _browser normalization: /accoutrement-init/
  .. _color palettes: /accoutrement-color/
  .. _webfonts & typography: /accoutrement-type/
  .. _modular scales: /accoutrement-scale/
  .. _responsive layout: /accoutrement-layout/


Accoutrement
============

.. callmacro:: content.macros.j2#accoutrement
