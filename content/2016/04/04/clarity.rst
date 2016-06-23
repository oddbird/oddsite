public: yes
author: miriam
tags: [speaking, conference]
.. before:
  - include: 'blog/_speaking.html.j2'
    title: 'Code Patterns for Pattern-Making'
    date: ['04', '01', '2016']
    author: miriam
    venue: 'Clarity Conference'
    slides: 'http://oddbooksapp.com/book/pattern-making'
    video: '@@@'


Clarity Conference
==================

It was an honor to be part of the first ever
`Clarity Conference`_ in San Francisco —
a beautiful event,
completely focussed on Style Guides.

`Chris Coyier`_ and `Brad Frost`_
both posted extensive notes on all the speakers,
and I recommend reading them.

I talked about the `code patterns`_ we use
to represent design patterns,
especially in our front-end Sass,
HTML (Jinja?),
and Javascript code.

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


.. _Clarity Conference: #@@@
.. _Chris Coyier: #@@@
.. _Brad Frost: #@@@
.. _code patterns: #@@@
.. _system: #@@@
.. _tiny bootstraps for every client: #@@@
