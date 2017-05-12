public: yes
location: open-source
image:
  - src: 'projects/true.jpg'
project:
  - name: 'True'
    tagline: 'Unit-testing for Sass developers'
    source: 'https://github.com/oddbird/true'
    status: 'public'
    owner: yes
contributors:
  - author: 'miriam'
    role: 'creator'
  - author: 'carl'
    role: 'core developer'
summary: |
  True is a full-featured unit-testing library for Sass developers.
  The core functionality is written in pure SassScript,
  so it can be used anywhere Sass is compiled.
  Advanced features are available in Node
  with our Mocha test-runner integration,
  and in Ruby using our command-line tools.


True
====

**True**: *Verb*

1. To make true; shape, adjust, place, etc., exactly or accurately:
   *True the wheels of a bicycle after striking a pothole.*

2. To make even, symmetrical, level, etc. (often followed by *up*):
   *True up the sides of a door.*

3. To test your Sass code; debug, perfect, etc. (often using *True*):
   *True your sweet plugin before you deploy.*


Installation
------------

in command line:

.. code-block:: bash

  # ruby gem
  gem install true

  # bower package
  bower install true

  # npm module
  npm install sass-true


Getting Started
---------------

**For more API details**,
Check out the `reference documentation`_.

.. _reference documentation: http://oddbird.net/true/sassdoc/index.html


**Import True**:

.. code-block:: scss

  @import "path/to/true/sass/true";

**Test internal Sass values** by asserting
``is-equal``, ``is-unequal``, ``is-true``, or ``is-false``:

.. code-block:: scss

  // Testing Functions
  @include test('Returns the sum of two numeric maps') {
    $base: (one: 1, two: 1, three: 1);
    $add: (one: 1, two: 2, three: -1);

    @include assert-equal(
      map-add($base, $add),
      (one: 2, two: 3, three: 0));
  }

**Test CSS output**
with the ``assert``, ``output``, and ``expect`` mixins:

.. code-block:: scss

  // Testing Mixins
  @include test('Font Size mixin') {
    @include assert('Outputs a font size and line height based on keyword.') {
      @include output {
        @include font-size(large);
      }

      @include expect {
        font-size: 2rem;
        line-height: 3rem;
      }
    }
  }

Basic unit-tests work across the board,
but testing mixins can be a bit more complex.
At this point,
only Mocha is able to compare/report the results of mixin tests.
Without using Mocha,
you can test any mixin,
but you will have to compare the expected and actual results manually
in the output code.
Version control can make that much easier than it sounds.

**Organize your tests in modules**,
nesting as deep as you need:

.. code-block:: scss

  @include test-module('Math Functions') {
    @include test-module('Multiply [function]') {
      @include test('Returns a multiple') {
        @include assert-equal(
          multiply(3, 5),
          3 * 5);
      }
    }
  }

**Optionally show a summary report**
in the CSS output and/or the command line:

.. code-block:: scss

  @include report;

- If you use Mocha, reporting to the command line is automatic.
- If you use ``true-cli``, ``report(terminal)`` is required for output.


Using ``node-sass`` and ``Mocha`` (or Other JS Test Runners)
------------------------------------------------------------

We recommend using Mocha
in order to automate css-output tests.

1. Install ``true`` via npm (``npm install sass-true``).

2. Write some Sass tests in ``test/test.scss`` (see above).

3. Write a shim JS test file in ``test/test_sass.js``:

   .. code-block:: js

     var path = require('path');
     var sassTrue = require('sass-true');

     var sassFile = path.join(__dirname, 'test.scss');
     sassTrue.runSass({file: sassFile}, describe, it);

4. Run Mocha, and see your Sass tests reported as individual test results.

You can call ``runSass`` more than once,
if you have multiple Sass test files
you want to run separately.

The first argument to ``runSass``
accepts the same options that node-sass'
``renderSync`` function accepts.
The only modification ``runSass`` makes
is to add True's sass path to the ``includePaths`` option,
so ``@import 'true';`` works
in your Sass test file.

Any other JS test runner
with equivalents to Mocha's ``describe`` and ``it``
should be usable in the same way;
just pass your test runner's ``describe`` and ``it``
equivalents into ``runSass``.

If True's Mocha plugin can't parse the CSS output from True,
it'll give you some context lines of CSS
as part of the error message.
This context will likely be helpful in understanding the parse failure.
By default it provides up to 10 lines of context;
if you need more,
you can provide a numeric fourth argument to ``runSass``,
the maximum number of context lines to provide.

At this point,
the parser breaks on arbitrary non-test-related CSS output.


With ``Grunt``
~~~~~~~~~~~~~~

You can run Mocha using the Grunt task
supplied by `grunt-mocha-cli`_

.. _grunt-mocha-cli: https://github.com/Rowno/grunt-mocha-cli

Install ``grunt-mocha-cli``:

.. code-block:: bash

  npm install grunt-mocha-cli --save-dev

Configure task:

.. code-block:: js

  grunt.loadNpmTasks('grunt-mocha');

  mochacli: {
    all: ['test/test_sass.js']
  },

Run the tests:

.. code-block:: bash

  grunt mochacli

Using Ruby-Sass on the Command Line
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We include a Ruby CLI command
as well:

.. code-block:: bash

  true-cli [options] PATH

Options:

- ``-s`` silent
- ``-c`` config file (defaults to ``test/true.yml``)
- ``-d`` debug config file settings

Config file (optional):

.. code-block:: yaml

  options:
    color: true  # enables colored output

  # require ruby sass extension libraries
  require:
    - "compass"
    - "serialy/sassy"


Settings
--------

There is only one setting:
``$true-terminal-output``
toggles output to the terminal on or off.

- ``true`` will show detailed information on failing assertions.
  This is the default, and best for using ``true-cli``.
- ``false`` to turn off all terminal output.
