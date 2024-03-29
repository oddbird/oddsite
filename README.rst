DEPRECATED
==========


Development setup
-----------------


Install Node.js
~~~~~~~~~~~~~~~

The project-local versions of `Node.js`_ and `yarn`_ can be downloaded and
unpacked locally (in the git-ignored ``node/`` directory), so you don't have to
install it system-wide (and possibly conflict with other projects wanting other
Node versions).

To download and install the project-local version of Node (and yarn)::

    bin/unpack-node

Next you need to make sure that whenever you are working on OddSite, you use
that OddSite-specific Node instead of any system-wide Node you may have.
Updating your ``PATH`` will achieve that::

    export ODDSITE=$HOME/projects/oddsite
    export PATH=$ODDSITE/node/bin:$ODDSITE/node_modules/.bin:$PATH

Make sure you adjust the first line to match the actual directory where your
clone of the OddSite repo lives (you can run ``pwd`` from within the OddSite
repo to find out the full path to it).

There are a variety of tools that let you set up environment variables
temporarily for a particular "environment" or directory. We use
`virtualenvwrapper`_, in which case you can add the above two lines to the
``bin/postactivate`` script file inside your OddSite virtualenv directory (if
you don't know where that is, you can run ``cdvirtualenv`` with your OddSite
virtualenv activated to find it). Your ``PATH`` will be updated when you
``workon oddsite`` and restored when you ``deactivate``.

If you can run ``which yarn`` and see a path inside your OddSite repo ending
with ``.../node/bin/yarn``, then you've got it set up right and can move on.


Install front-end dependencies
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To install the necessary Node dependencies, run ``yarn``. You should re-run
this command whenever ``package.json`` and/or ``yarn.lock`` changes; it's safe
to run anytime.

After running ``yarn``, make sure that ``which gulp`` returns a path inside
your OddSite repo (should end with ``.../node_modules/.bin/gulp``), not a
system-wide path. If it doesn't, you may have set your ``PATH`` environment
variable incorrectly in the last step.

To **add** or **update** a front-end package, install the package with ``yarn
add <package_name>@<version> [--dev]``.


Install back-end dependencies
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Local development on this project requires `Python`_ 2.7. To install the Python
dependencies, run ``pip install -r requirements.txt`` (you may want to run this
in a `virtualenv`_ to isolate it from other Python projects on your system).


Development tasks
~~~~~~~~~~~~~~~~~

In commit messages or pull request titles, we use the following emojis to label
which development commands need to be run before serving locally:

- 📦 (``:package:``) -> ``pip install -r requirements.txt``
- 🐈 (``:cat2:``) -> ``yarn``

When a new version of any OddBird-owned packages (Susy, True, Herman, or
Accoutrement-*) is published, run ``bin/update-subproject-docs`` to pull their
updated documentation into OddSite.


Directory Structure
~~~~~~~~~~~~~~~~~~~

The site templates are in ``templates/``, content is in ``content/``, and
static files are in ``static/``.

To view the site live locally, run ``gulp serve`` and visit
``http://localhost:3000`` in your browser.

``gulp serve`` will also watch for changes to local files and automatically
perform an appropriate selection of the following tasks whenever changes are
detected to files in the ``templates/`` and ``content/`` directories:

* validate JS with `ESLint`_
* validate Sass with `stylelint`_
* compile the static assets with `Webpack`_
* regenerate the site as static HTML files under the ``dev-output/`` directory

To perform these tasks manually, run ``gulp``. To watch for changes without
starting a local server, run ``gulp watch``. Refer to the ``gulpfile.js``
source and `gulp`_ documentation for more info.

.. _Node.js: http://nodejs.org
.. _yarn: https://yarnpkg.com/
.. _virtualenvwrapper: http://virtualenvwrapper.readthedocs.org/en/latest/
.. _Python: https://www.python.org/
.. _virtualenv: http://www.virtualenv.org
.. _ESLint: http://eslint.org/
.. _stylelint: https://stylelint.io/
.. _Webpack: http://webpack.github.io/
.. _gulp: http://gulpjs.com/


Deployment
----------

The site is auto-deployed on Netlify from the `master` branch on GitHub. Deploys
are automated on push to master, and triggered nightly via IFTTT webhooks.

For testing production locally, run ``gulp prod`` to build the site under
``output/`` (git-ignored). Run ``gulp prod-serve`` to view your changes to the
production code before committing.

Use branches and PRs for major changes, and Netlify will create staging previews
for functional review before merge.
