OddBird
=======

Development
-----------

If you want to run this project in a `virtualenv`_ to isolate it from other
Python projects on your system, create a virtualenv and activate it.  Then run
``pip install -r requirements/dev.txt`` to install the dependencies for this
project into your Python environment.

The ``output/`` directory is a git submodule (it is the repo
"github.com/oddbird/oddbird.github.com", which is also the deployment on
Github Pages).  Run ``git submodule init; git submodule update`` to get the
submodule in place.

The site templates are in ``_templates/``, and static files are in ``static/``.

To view the site live locally, run ``make serve`` and visit
``http://localhost:5000`` in your browser.

To regenerate the site as static HTML files under the ``output/`` directory,
run ``make build``.

After doing this, change into the ``output`` directory and commit the
changes, and if you're ready to deploy them, ``git push``.  Then change back
into the outer repo and you can commit the changes there along with the
updated submodule.

.. _virtualenv: http://www.virtualenv.org

To install the necessary Ruby gems for Compass/Sass development,
first ``gem install bundler``, then ``bundle install``.
Update the ``Gemfile`` if newer gems should be used.

Deployment
----------

The site is deployed on Github Pages; "git push"ing the submodule under
output/ deploys the changes live.
