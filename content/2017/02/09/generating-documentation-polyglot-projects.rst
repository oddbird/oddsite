public: yes
author: david
tags: [
  Docs,
  Tools,
  Javascript,
  Python,
  Sass
  ]
summary: |
  Code documentation is ideally written as close to the actual code
  as possible, but compiled into a comprehensive set of documentation
  that includes code from all languages in use. Here's how we intend
  to do that.


Generating Code Documentation for Polyglot Projects
===================================================

At OddBird we believe that undocumented code is unfinished code.
The act of documenting clarifies what we are building,
and the resulting documentation guides consistency in how we do things
in different parts of a project built by different team members
at different times.

In a typical project, one of our documentation deliverables is a
living style guide which serves as documentation of the visual elements
used in the app as well as guidelines for and examples of usage.
The style guide is built automatically whenever we build the code, and
it is delivered as a static HTML website which can be served alongside the app.
For example, the style guide for this website can be found here:
http://oddbird.net/styleguide/

SassDoc
-------

We are currently building our style guides using a tool called `Sassdoc <http://sassdoc.com/>`_
which compiles the documentation based on special comments written
inline in our stylesheets. For example, the triple-slash commented lines
in the following Sass:

.. code:: scss

  // Selection
  // ---------
  /// Selected text is highlighted in orange,
  /// with any text-shadows removed.
  /// @group typography
  ::selection {
    @include contrasted('select');
    text-shadow: none;
  }

gets rendered in the style guide like this:

.. image:: /static/images/blog/2017/docs/sassdoc.png

We are working on our own theme for Sassdoc, called
`Herman <https://github.com/oddbird/sassdoc-theme-herman/>`_,
which provides extra tools for rendering samples of things like
colors, fonts, and icons. (Alas, while we are using it to produce
documentation, it is not yet very well documented itself.)

The Multi-language Challenge
----------------------------

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

The Python documentation tool `Sphinx <http://www.sphinx-doc.org/>`_
has a nice pattern for this: rather than only fetching documentation
from one particular kind of code source file, it allows for
writing free-form documentation organized in whatever way makes sense,
but with the ability to use "autodoc" directives to pull in documentation
from inline source comments wherever makes sense. For example, this
directive would add documentation generated from the code and comments
in the ``rstblog`` module:

.. code:: rst

  .. automodule:: rstblog

But this option still suffers from the single-language problem! Sphinx's autodoc
extension is focused on Python code. And while it is extensible,
there is a challenge in creating good autodoc extensions for other languages:
different languages use different syntaxes, so need to be parsed by a tool
that understands the language. But often a high-quality parser of a particular language
is not available in the Python ecosystem. So Sphinx autodoc extensions to pull in
inline documentation from other languages are not consistently available
or well-maintained.

A Way Forward
-------------

In order to provide more flexibility, I propose tackling this challenge
using a decoupled architecture: a central documentation formatter that
parses source code using separate processes.

The central formatter would work similarly to Sassdoc or Sphinx:
read a file that specifies the overall structure of the documentation
and look for directives that ask to include automatic documentation
from other source files.

A parsing utility would have the limited responsibility of reading
a source file of one particular type. The central formatter would run
the parser as a separate process and output a JSON representation of the code
structure and comments for the central formatter to make use of.
This way the parsing utility can be written in whatever language best
supports parsing the source language.

As a proof of concept, in the near future we intend to add a feature to
Herman to automatically include documentation of macros from Nunjucks templates.
