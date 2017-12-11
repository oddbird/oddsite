public: yes
location: 'hermansite'
template: 'hermansite/layout.html'
grid_template: true
headline:
  - title: 'Herman: Automated Style Guides'
    type: 'An **OddBird** Project'
    tagline: 'Get your design & development teams on the same page'
logo: 'herman'
image:
  - src: 'herman/herman-hero.jpg'
nav:
  - text: 'hermansite-articles'
    display_text: 'articles'
    url: '/herman/articles/'
  - text: 'training'
    url: '/services/design-systems-training'
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
  **Design systems streamline development,
  communication, and consistency**
  -- but often rely on dedicated
  teams and extended budgets.
  We wanted a tool that helps create and maintain
  living style guides & pattern libraries in an
  agile process, and on a budget.
  Herman helps us keep our development process simple,
  and our UX consistent, as we iterate on patterns
  and scale over time.


Herman: Automated Pattern Libraries
===================================


.. callmacro:: content.macros.j2#rst
  :tag: 'start'


Give your design system a home
------------------------------

Documentation should be the default option --
the path of least resistence for developers.
Herman combines documentation of design tokens
and system guidelines, with code patterns, components,
and rendered visual examples -- all driven by Sass and CSS.
By automating as much of the documentation as possible,
we can help ensure that everything stays up to date for
long-term maintainability.

Help improve communication across stakeholders,
with consistency in UX, performance, and accessibility --
while reducing technical debt and
minimizing long-term maintainance.
Herman is designed to grow with you,
and keep everything in one place.


Are we dropping benefits?
~~~~~~~~~~~~~~~~~~~~~~~~~

If not, those would go here according to the prototype.


Current Features
~~~~~~~~~~~~~~~~

- Supports all `SassDoc`_ annotations and configuration settings
- Integrated with Sass/CSS for better automation
- Visualize design tokens like fonts, colors, sizes, ratios, and icons
- Display Sass mixins and Nunjucks macros with expected input and rendered examples
- Include additional prose, pages, and link to third-party docs
- Encourage self-documenting patterns, without locking you in
- Optionally integrate with OddBird's `Sass Accoutrement`_ libraries

.. _SassDoc: http://sassdoc.com/
.. _Sass Accoutrement: /open-source/accoutrement/



.. callmacro:: content.macros.j2#rst
  :tag: 'end'


.. callmacro:: content.macros.j2#accoutrement
