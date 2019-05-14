public: yes
grid_template: true
headline:
  - type: 'Open Source'
    title: 'True: Sass Unit Testing'
    tagline: 'Write your tests in Sass, and report with Mocha'
logo: 'true'
image:
  - src: 'projects/true.jpg'
project:
  - name: 'True'
    tagline: 'Unit-testing for Sass developers'
    source: 'https://github.com/oddbird/true'
    docs: '/true/docs/'
    status: 'public'
    owner: yes
contributors:
  - author: 'miriam'
    role: 'creator'
  - author: 'carl'
    role: 'core developer'
  - author: 'jonny'
    role: 'core developer'
brag: |
  True is the only
  **comprehensive Sass testing framework**,
  allowing developers to write and run tests
  **directly in SassScript**.
summary: |
  **True is a full-featured unit-testing library for Sass**.
  The core functionality is written in pure SassScript,
  so it can be used anywhere Sass is compiled.
  Advanced features are available
  with our test-runner integration and Mocha.


True
====

.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'

For Sass developers, by Sass developers
---------------------------------------

.. image:: https://badge.fury.io/js/true.svg
  :alt: 'npm package'
  :target: https://www.npmjs.com/package/true

.. image:: https://api.travis-ci.org/oddbird/true.svg
  :alt: 'build status'
  :target: https://travis-ci.org/oddbird/true

We designed True as one of the first testing frameworks
for the `Sass`_ language,
in order to provide tests for `Susy`_,
our Sass layout toolkit.
Since then, True has become the only
full-featured unit-testing software that
allows you to write and compile your tests with plain Sass mixins.

Write your tests in Sass,
compile them with Sass,
and then (optionally) pass the results
to a Javascript test-runner for
command-line control and reporting.

.. _Sass: http://sass-lang.com/
.. _Susy: /susy/

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------


.. callmacro:: content.macros.j2#divider


.. ---------------------------------
.. callmacro:: content.macros.j2#rst
  :tag: 'start'

Getting Started
---------------

Install the ``sass-true`` module using yarn or npm:

.. code-block:: bash

  yarn add sass-true --dev
  npm install sass-true --save-dev

Then import the library,
along with the code you are testing in Sass:

.. code-block:: scss

  @import "<path/to/node_modules>/sass-true/sass/true";

**Define tests in Sass** with a BDD (``describe``/``it``)
or TDD (``test-module``/``test``) syntax:

.. code-block:: scss

  @include describe('multiply() function') {
    @include it('Returns the result of multiplication') {
      // …
    }
  }

  @include test-module('multiply() function') {
    @include test('Returns the result of multiplication') {
      // …
    }
  }

**Compare internal Sass values**
(variables and functions) by asserting
``is-equal``, ``is-unequal``, ``is-true``, or ``is-false``:

.. code-block:: scss

  // Testing Functions
  @include assert-equal(
    multiply(12, 2),
    24
  );

**Test CSS output** (mixins)
with the ``assert``, ``output``, and ``expect`` mixins:

.. code-block:: scss

  // Testing Mixins
  @include assert {
    @include output {
      @include font-size('large');
    }

    @include expect {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

**Optionally show a summary report**
in the CSS output and/or the command line:

.. code-block:: scss

  @include report;

**Or use our Javascript integration**
to run and report tests directly in the command line.
`Read the docs`_ for more!

.. _Read the docs: /true/docs/

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
.. ---------------------------------
