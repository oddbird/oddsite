public: yes
location: hermansite
template: 'hermansite/layout.html'
grid_template: true
headline:
  - title: 'Herman: Automated Style Guides'
    type: 'An **OddBird** Project'
    tagline: 'Get your design & development teams on the same page'
logo: 'herman'
image:
  - src: 'herman/herman-hero.jpg'
screenshots:
  - image: 'herman/screenshots/sq-colors.jpg'
    alt: 'Color Palettes'
  - image: 'herman/screenshots/sq-icons.jpg'
    alt: 'Icons'
  - image: 'herman/screenshots/sq-ratios.jpg'
    alt: 'Ratio Previews'
  - image: 'herman/screenshots/sq-sizes.jpg'
    alt: 'Size Previews'
  - image: 'herman/screenshots/sq-fonts.jpg'
    alt: 'Typefaces'
  - image: 'herman/screenshots/sq-example.jpg'
    alt: 'Example Code Blocks'
nav:
  - text: 'hermansite-articles'
    display_text: 'articles'
    url: '/herman/articles/'
  - text: 'training'
    url: '/services/design-systems'
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
    docs: '/herman/docs/'
    status: 'pre-release'
    owner: yes
contributors:
  - author: 'oddbird'
    role: 'creators'
quotes:
  - text: |
      Herman is my documentation dream come true,
      especially when it comes to systems design.
    name: 'Claudina Sarahe'
    role: 'Frontend Architect'
    slug: 'dream'
brag: |
  Fully-integrated style documentation
  for **automated pattern libraries**
  and **style guides** on a budget.
summary: |
  **Design systems streamline development,
  communication, and consistency** --
  but often rely on dedicated
  teams and extended budgets.
  We wanted a tool that helps create and maintain
  living style guides & pattern libraries in an
  agile process, and on a budget.
  Herman helps you keep your development process simple --
  and your UX consistent --
  as you iterate on patterns and scale over time.

  Start `using Herman`_ or `hire us`_
  for design systems training.

  .. _`using Herman`: /herman/docs/
  .. _`hire us`: /contact/


Herman: Automated Pattern Libraries
===================================

.. callmacro:: content.macros.j2#rst
  :tag: 'start'

|hack|

.. rstBlog requires content before a subheader…
.. |hack| raw:: html

  <span></span>


Give Your Design System a Home
------------------------------

Documentation should be the default option --
the path of least resistance for developers.
Herman combines documentation of design tokens
and system guidelines, with code patterns, components,
and rendered visual examples -- all driven by Sass and CSS.
By automating as much of the documentation as possible,
you can help ensure that everything stays up-to-date for
long-term maintainability.

Help improve communication across stakeholders,
with consistency in UX, performance, and accessibility --
while reducing technical debt and
minimizing long-term maintenance.
Herman is designed to grow with you,
and keep everything in one place.

Herman's Current Features
~~~~~~~~~~~~~~~~~~~~~~~~~

- Supports all `SassDoc`_ annotations and configuration settings
- Integrated with Sass/CSS for better automation
- Visualize design tokens like fonts, colors, sizes, ratios, and icons
- Display Sass mixins and `Nunjucks`_ macros with expected input and rendered examples
- Include additional prose, pages, and links to third-party docs
- Encourage self-documenting patterns, without locking yourself in
- Optionally integrate with OddBird's `Sass Accoutrement`_ libraries


.. callmacro:: content.macros.j2#gallery
  :slug: 'herman/index'
  :data: 'screenshots'
  :class: 'extend-large img-border'


.. _SassDoc: http://sassdoc.com/
.. _Nunjucks: https://mozilla.github.io/nunjucks/
.. _Sass Accoutrement: /accoutrement/


.. callmacro:: content.macros.j2#rst
  :tag: 'end'


.. callmacro:: content.macros.j2#icon_block
  :slug: 'accoutrement/index'
  :data: 'accoutrement_modules'
