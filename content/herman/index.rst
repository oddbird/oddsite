public: yes
location: 'hermansite'
template: 'hermansite/layout.html'
grid_template: true
headline:
  - title: 'Herman: Automated Pattern Libraries'
    type: 'An **OddBird** Project'
    tagline: "Documentation, or it didn't happen"
logo: 'herman'
image:
  - src: 'projects/herman.jpg'
nav:
  - text: 'hermansite-articles'
    display_text: 'articles'
    url: '/herman/articles/'
  - text: 'source'
    url: 'https://github.com/oddbird/sassdoc-theme-herman/issues'
  - text: 'hermansite-docs'
    display_text: 'docs'
    url: '/herman/docs/'
  - text: 'oddbird'
    display_text: 'oddbird'
    url: '/'
project:
  - name: 'Herman'
    tagline: 'Automated Style Guides'
    source: 'https://github.com/oddbird/sassdoc-theme-herman'
    status: 'pre-release'
    owner: yes
contributors:
  - author: 'oddbird'
    role: 'creators'
quotes:
  - text:
      'Herman is my documentation dream come true,
      especially when it comes to systems design'
    name: 'Claudina Sarahe'
    role: 'Frontend Architect'
    slug: 'dream'
brag: |
  Created by OddBird,
  Herman provides
  **fully-integrated style documentation** –
  from **font specimens** and **color palettes** to
  nunjucks macros and rendered components –
  for **automated pattern libraries**,
  and **style guides**.
summary: |
  **Herman is an automated pattern-library generator,**
  built on top of SassDoc,
  and designed to integrate with OddBird's
  `Sass Accoutrement`_ libraries
  for quick theme configuration,
  color palettes, font specimens, icon libraries,
  and documentation of UI patterns
  in both CSS and HTML.

  .. _Sass Accoutrement: /open-source/accoutrement/


Herman: Automated Pattern Libraries
===================================

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
keep the code and design of your site consistent,
while facilitating communication between designers and developers.
But documentation can be difficult to maintain,
especially if it lives too far from the code –
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

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------

.. callmacro:: content.macros.j2#accoutrement
