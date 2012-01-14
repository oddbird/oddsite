OddBird
=======

Development
-----------

If you want to run this project in a `virtualenv`_ to isolate it from
other Python projects on your system, create a virtualenv and activate
it.  Then run ``bin/install-reqs`` to install the dependencies for
this project into your Python environment.

To generate the site as static HTML files under the ``output/`` directory, just
run::

   $ bin/gen

.. _virtualenv: http://www.virtualenv.org

To install the necessary Ruby gems for Compass/Sass development, run
``bin/install-gems``.  Update ``requirements/gems.txt`` if newer gems
should be used.

Deployment
----------

Deployment just means copying the generated HTML files under ``output/`` to
within a web server's document root.

A Fabric task is provided to simplify this even further::

   $ fab deploy
