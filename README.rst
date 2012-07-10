OddBird
=======

Development
-----------

If you want to run this project in a `virtualenv`_ to isolate it from
other Python projects on your system, create a virtualenv and activate
it.  Then run ``bin/install-reqs`` to install the dependencies for
this project into your Python environment.

The ``output/`` directory is a git submodule (it is the repo
"github.com/oddbird/oddbird.github.com", which is also the deployment on
Github Pages).  Run ``git submodule init; git submodule update`` to get the
submodule in place.

At this point everything in the site is done via the theme templates, in
``theme/templates``.

After editing theme templates, to regenerate the site as static HTML files
under the ``output/`` directory, just run::

   $ bin/gen

After doing this, change into the ``output`` directory and commit the
changes, and if you're ready to deploy them, ``git push``.  Then change back
into the outer repo and you can commit the changes there along with the
updated submodule.

.. _virtualenv: http://www.virtualenv.org

To install the necessary Ruby gems for Compass/Sass development, run
``bin/install-gems``.  Update ``requirements/gems.txt`` if newer gems
should be used.

Deployment
----------

The site is deployed on Github Pages; "git push"ing the submodule under
output/ deploys the changes live.
