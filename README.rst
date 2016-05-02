OddBird
=======

Development
-----------

Local development on this project requires `Python`_ 2.7 and `Node.js`_ >=
0.10.0. To install the necessary Node dependencies, first ``npm install -g
grunt-cli`` (once per system), then ``npm install`` (whenever ``package.json``
changes).

To install the Python dependencies, run ``pip install -r requirements.txt``
(you may want to run this in a `virtualenv`_ to isolate it from other Python
projects on your system).

The ``output/`` directory is a git submodule (it is the repo
`github.com/oddbird/oddbird.github.com`_, which is also the deployment on
Github Pages).  Run ``git submodule init; git submodule update`` to get the
submodule in place.

The site templates are in ``templates/``, content is in ``content/``, and
static files are in ``content/static/``.

To view the site live locally, run ``grunt serve`` and visit
``http://localhost:8000`` in your browser.

``grunt serve`` will also watch for changes to local files and automatically
perform an appropriate selection of the following tasks whenever changes are
detected to files in the ``templates/``, ``content/``, and ``sass/``
directories:

* validate JS with `JSHint`_
* concatenate JS
* minify JS with `UglifyJS`_
* compile Sass to CSS
* minify CSS with `clean-css`_
* run the JS unit tests
* regenerate the site as static HTML files under the ``dev-output/`` directory

To perform these tasks manually, run ``grunt``. To watch for changes without
starting a local server, run ``grunt watch``. Refer to the `Gruntfile.js
source`_ and `Grunt`_ documentation for more info.

.. _Python: http://www.python.org
.. _virtualenv: http://www.virtualenv.org
.. _Node.js: http://nodejs.org
.. _github.com/oddbird/oddbird.github.com: https://github.com/oddbird/oddbird.github.com
.. _JSHint: http://www.jshint.com
.. _UglifyJS: https://github.com/mishoo/UglifyJS
.. _clean-css: https://github.com/GoalSmashers/clean-css
.. _Gruntfile.js source: https://github.com/oddbird/oddsite/blob/master/Gruntfile.js
.. _Grunt: http://gruntjs.com/


Deployment
----------

The site is deployed on Github Pages. To deploy, run ``grunt prod`` to build
the site under ``output/``; commit those changes to the submodule and then
``git push`` the submodule to deploy it live.  Then change back into the outer
repo and you can commit (and push) the changes there along with the updated
submodule.
