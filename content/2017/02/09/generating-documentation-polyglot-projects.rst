public: no
author: david
tags: [
  Docs,
  Herman,
  Javascript,
  Sass
  ]
summary: |
  summary


Generating code documentation for polyglot projects
===================================================

At OddBird we believe that undocumented code is unfinished code.
The act of documenting clarifies what we are building,
and the resulting documentation guides consistency in how we do things
in different parts of a project built by different team members
at different times.

In a typical project, one of our documentation deliverables is a
living styleguide [link?]
which serves as documentation of the visual elements used in the app.
The styleguide is built automatically whenever we build the code, and
it is delivered as a static HTML website which can be served alongside the app.
For example, the styleguide for this website can be found here:
http://oddbird.net/styleguide/

SassDoc
-------

We are currently building our styleguides using a tool called `Sassdoc <http://sassdoc.com/>`_
which compiles the documentation based on special comments written
inline in our stylesheets. For example, the triple-slash commented lines
in the following Sass::

.. code:: sass

  // Selection
  // ---------
  /// Selected text is highlighted in orange,
  /// with any text-shadows removed.
  /// @group typography
  ::selection {
    @include contrasted('select');
    text-shadow: none;
  }

get rendered in the styleguide like this::

.. image:: /static/images/blog/2017/docs/sassdoc.png

We are working on our own theme for Sassdoc, called Herman,
which provides extra tools for rendering samples of things like
colors, fonts, and icons.

Documenting other things
------------------------

Generating documentation from inline comments like this is ideal
for developer-oriented documentation (that is, documentation of
how the system is built rather than how to use it). It keeps
the documentation right next to the code that it documents,
which both makes it more accessible and increases the chances
that it will be kept up to date.

But SassDoc only knows how to read comments from Sass.
And the projects we work on implement patterns using multiple languages
working together: Sass for stylesheets, Nunjucks/Jinja2 for markup,
Javascript for interactivity, Python on the backend.
How can we generate documentation for a pattern that involves
multiple languages, without giving up on the goal of writing
documentation inline?
