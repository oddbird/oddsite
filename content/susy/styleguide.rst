public: yes
location: susysite-articles
template: 'susysite/layout.html'
grid_template: true
headline:
  - tagline: 'How to talk about Susy…'
    type: 'Susy Support'
logos:
  - image: 'susy/susy-logos/logo.svg'
    alt: 'Susy logo'
  - image: 'susy/susy-logos/logo-knockout.svg'
    alt: 'Susy logo-knockout'
summary: |
  **So you're working on an article**,
  book, video, tutorial, podcast, or presentation about Susy?
  That's great!
  Here are a few things to keep in mind…


Brand Style Guide
=================

.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'

- "Susy" (``Soo•zee``) is pronounced like the common name
  (often spelled "Suzy").
  It's not an acronym,
  so there's no reason to use all-caps.
- The name may be feminine, but software has no sex.
  Please refrain from overly-gendered personifications (in text or images).
  In English, you can use a neutral pronoun (``it``) —
  in other languages you can use your judgement.
- We love being part of a broad and diverse Sass community,
  and we care deeply about the
  `Community Guidelines`_.
  Take a minute to read through them!

.. _Community Guidelines: http://sass-lang.com/community-guidelines


Logo & Brand
------------

- Please don't stretch or distort the logo. Obvs.
- Susy is an `OddBird`_ project,
  using the `OddBird brand colors`_.
  The logo should always use our brand pink,
  or a grayscale variation
  (``black``, ``white``, or anything between).

.. _OddBird: /
.. _OddBird brand colors: /styleguide/color.html

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------

.. callmacro:: content.macros.j2#divider
.. callmacro:: content.macros.j2#gallery
  :title: 'Logo Files'
  :slug: 'susy/styleguide'
  :data: 'logos'
  :caption: '<a href="/static/images/susy/susy-logos.zip">Download the SVG files »</a>'
