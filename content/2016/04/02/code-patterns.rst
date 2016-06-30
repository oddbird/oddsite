public: no
author: miriam
tags: [speaking]
.. before:
  - include: 'blog/_speaking.html.j2'
    title: 'Code Patterns for Pattern-Making'
    slides: 'http://oddbooksapp.com/book/pattern-making'
    author: miriam
    events:
      - venue: 'Clarity Conference'
        date: ['04', '01', '2016']
        video: 'https://www.sitepoint.com/premium/courses/clarity-conference-2016-2925/lesson/4/step/1'


Code Patterns for Pattern Making
================================

Among other things:

- We use the cascade and pattern-specificity
  as our primary guide for organizing Sass/CSS,
  moving from the most general to the most specific.
- We use Jinja in Python, and Nunjucks in Javascript
  to write HTML templates that are less repetative and more meaningful.
  I recommend strong template logic that can be rendered
  on either the server or the client side,
  because data formatting is often a presentation concern,
  and should be accessible to the entire team.
- We use design-agnostic tools that move with us from project to project,
  our own modular html/css `system`_,
  so that we can build `tiny bootstraps for every client`_.
- We discuss naming conventions across the entire team,
  so we're all on the same page, and not stepping on toes.

.. _system: #@@@
.. _tiny bootstraps for every client: #@@@

