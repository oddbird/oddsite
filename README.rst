OddBird
=======

Development
-----------

If you want to run this project in a `virtualenv`_ to isolate it from other
Python projects on your system, create a virtualenv and activate it.  Then run
``pip install -r requirements.txt`` to install the dependencies for this
project into your Python environment.

`Node.js`_ is required for local development, as are the Ruby gems for
Compass/Sass development. To install the Ruby gems, first ``gem install
bundler``, then ``bundle install``. Update the ``Gemfile`` if newer gems
should be used.

The ``output/`` directory is a git submodule (it is the repo
`github.com/oddbird/oddbird.github.com`_, which is also the deployment on
Github Pages).  Run ``git submodule init; git submodule update`` to get the
submodule in place.

The site templates are in ``templates/``, content is in ``content/``, and
static files are in ``content/static/``.

To view the site live locally, run ``bin/grunt serve`` and visit
``http://localhost:8000`` in your browser.

This will also watch for changes and automatically perform the following tasks
whenever changes are detected to files in the ``templates/``, ``content/``,
and ``sass/`` directories:

* validate JS with `JSHint`_
* concatenate JS
* minify JS with `UglifyJS`_
* compile Sass to CSS
* minify CSS
* regenerate the site as static HTML files under the ``output/`` directory

To perform these tasks manually, run ``bin/grunt``. To watch for changes
without starting a local server, run ``bin/grunt watch``.

After making changes, cd into the ``output/`` directory and commit the
changes, and if you're ready to deploy them, ``git push``.  Then change back
into the outer repo and you can commit (and push) the changes there along with
the updated submodule.

.. _virtualenv: http://www.virtualenv.org

.. _Node.js: http://nodejs.org/

.. _github.com/oddbird/oddbird.github.com: https://github.com/oddbird/oddbird.github.com

.. _JSHint: http://www.jshint.com/

.. _UglifyJS: https://github.com/mishoo/UglifyJS/

Deployment
----------

The site is deployed on Github Pages; ``git push`` the submodule under
``output/`` to deploy the changes live.
