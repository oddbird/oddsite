public: yes
author: jonny
tags: [
  'single-page-applications',
  'server-side-rendering',
  javascript,
  jinja2,
  django,
  python,
  code,
  backbone,
  marionette
  ]
image:
  - src: '2017/server-client/spa2.jpg'
summary: |
  We want the convenience of a client-side single-page application using our
  `MV* framework`_ `of choice`_, but don't want to sacrifice the SEO and UX
  benefits of rendering the initial markup on the server. And while we're not
  here to trash on Node.js, we're also not ready to commit to an all-JavaScript
  tech stack. Here's our attempt to have the best of both worlds, all the while
  keeping duplication of logic or code between the front-end and back-end
  worlds to a minimum.

  .. _MV* framework: http://backbonejs.org/
  .. _of choice: http://marionettejs.com/


Server-Side Rendering For Client-Side Apps
==========================================

Here at OddBird, we're lucky enough to mostly work on `greenfield projects`_ —
which means we choose our own tech stack. One of the first questions is how to
render templates for the initial page-load. There are many reasons to prefer
server-side rendering over a "pure" single-page app which always renders
content in the browser — it's better for SEO, users don't have to wait for the
JavaScript to initialize before seeing content on the page, etc. But it's also
more work to convince a client-side `MV* framework`_ to play nicely — and
efficiently — with server-rendered markup.

.. _greenfield projects: https://en.wikipedia.org/wiki/Greenfield_project
.. _MV* framework: http://backbonejs.org/

`Kit`_ has `already laid out`_ some of the options for sharing templates
between client and server, and outlined one way we've tried to reduce
code/logic duplication in the API layer. That's a great start, but we still
need to turn that server-rendered markup into an interactive single-page
application.

.. _Kit: /birds/#bird-kit
.. _already laid out: /2016/12/16/server-side-rendering-spa/


Getting the Data
----------------

There are a few ways we could transfer data from the server to our client-side
application:

1. Request JSON from the API via an XHR
2. Embed JSON in a ``<script>`` tag (either ``type="text/javascript"`` or
   |type="application/json"|_)
3. Embed JSON in data-attributes on DOM elements corresponding to models or
   collections

.. |type="application/json"| replace:: ``type="application/json"``
.. _type="application/json": http://stackoverflow.com/a/7956249/854407

The first option is the "cleanest" (allowing the JS to consistently fetch data
through the API), but adds an unnecessary XHR and wait-time before the page is
ready for user interaction.

The second and third options are similar. Using a ``<script>`` tag is probably
the most efficient (using only one DOM interaction to acquire the entire data
set), but requires careful namespacing and patterns to know which data should
be attached to which existing markup. In cases involving large collections,
this is my preferred approach.

Storing JSON in data-attributes on individual DOM elements has the advantage of
coupling the data and markup together for each component, but requires
consistent markup patterns if the JS is to be reusable for various pieces of
the app. It necessitates DOM interactions to fetch the data, which could easily
cause performance issues with larger collections. In our case — with a
relatively small data set for each page — this option provides both reasonable
performance and a clear relationship between the data and its corresponding
markup.

For example, let's say that we want to attach models and views to a
server-rendered list of comments. Using `Jinja2`_/`Nunjucks`_, our markup might
look like this:

.. code:: jinja

    <div class="comment-list">
      <article class="comment" data-js-model="{{ comment|json }}">
        <p>{{ comment.body }}</p>
        <p>{{ comment.author }}</p>
      </article>
    </div>

.. _Jinja2: http://jinja.pocoo.org/docs/dev/
.. _Nunjucks: https://mozilla.github.io/nunjucks/


Brief ``<aside>``
-----------------

You'll note that we're using a custom ``json`` filter to convert an object into
a JSON string. One downside of sharing templates between front-end and back-end
(Nunjucks written in JS on the front-end, and Jinja2 written in Python on the
back-end) is that any custom filters used in shared templates must be written
in both languages. So for this to work, we have a ``json`` filter added to our
Nunjucks environment:

.. code:: js

    import nunjucks from 'nunjucks';

    const env = new nunjucks.Environment();
    env.addFilter('json', (val) => JSON.stringify(val));

And a corresponding filter added to our Jinja2 environment:

.. code:: python

    from json import dumps
    from jinja2 import Environment

    def environment(**options):
        env = Environment(**options)
        env.filters.update({
            'json': json,
        })
        return env

    def json(val):
        """Return given value as a JSON string."""
        return dumps(val)

This isn't ideal, but seems like a reasonable trade-off since it allows us to
avoid duplicating all the template files themselves.

Ok, ``</aside>``.


Using the Data
--------------

So we've made the model/collection data available in the DOM without requiring
an additional XHR. Now we need to add our JS layer, turning the data into
actual models or collections that are managed by views.

The details differ here from one framework to another. Since we're using
`Backbone.js`_ and `Marionette`_ (^3.0.0), let's look at one approach with
those frameworks.

.. _Backbone.js: http://backbonejs.org/
.. _Marionette: http://marionettejs.com/

.. code:: js

    import BB from 'backbone';
    import Mnt from 'backbone.marionette';

    const ViewWithModel = Mnt.View.extend({
      initialize () {
        // Only run this code if an ``el`` option is passed in, signifying
        // that the view is being attached to existing markup in the DOM.
        if (this.options.el) {
          this.attachModel();
        }
      },
      // Find the existing [data-js-model] element, adding a model to the view.
      attachModel () {
        const child = this.$('[data-js-model]');
        const modelData = child.data('js-model');
        this.model = new BB.Model(modelData);
        // Trigger any onRender handlers attached to the view.
        this.triggerMethod('render', this);
      }
    });

    const myView = new ViewWithModel({ el: $('.comment') });

Or for a view with a collection of models:

.. code:: js

    import BB from 'backbone';
    import Mnt from 'backbone.marionette';

    // Create a child view (used for each individual model).
    const MyChildView = Mnt.View.extend({
      // ...
    });

    const ViewWithCollection = Mnt.CollectionView.extend({
      collection: new BB.Collection(),
      childView: MyChildView,
      initialize () {
        // Only run this code if an ``el`` option is passed in, signifying
        // that the view is being attached to existing markup in the DOM.
        if (this.options.el) {
          this.attachChildren();
        }
      },
      // Look through existing child [data-js-model] elements, adding models
      // to the collection, and attaching views to the models.
      attachChildren () {
        const view = this;
        const collection = view.collection;
        const children = this.$('[data-js-model]');
        children.each((idx, el) => {
          const $el = $(el);
          const modelData = $el.data('js-model');
          // Check to see if this model already exists in the collection.
          let model = collection.get(modelData.id);
          if (!model) {
            // Create the new model, and add it to the collection.
            model = collection.add(modelData, { silent: true });
          }
          const childView = new view.childView({ model, el });
          view.addChildView(childView, idx);
        });
        // Prevent the collectionView from rendering children initially.
        view._isRendered = true;
        // Trigger any onRender handlers attached to the view.
        view.triggerMethod('render', view);
      }
    });

    const myView = new ViewWithCollection({ el: $('.comment-list') });

Now we have a model (or collection of models) instantiated with data from our
server-rendered markup, all being managed by Marionette views! 🎉


Where Do We Go From Here?
-------------------------

In the end, we're moving toward the best of both worlds: a server-rendered page
(easily indexable by search engines, with content immediately visible to
users), with the client-side benefits of a single-page app (live-updating
components, and no page refreshes).

There are a number of improvements we could make — prioritizing the most
important pieces of interactivity and lazy-loading the rest, abstracting our
code into a Marionette `behavior`_ that can be added to any view where we want
to pre-load with data from the DOM — but this is a good start. Every step of
the way, we strive to minimize the amount of duplicated code or logic — no need
for a JavaScript process on the server, and no duplicated templates.

.. _behavior: http://marionettejs.com/docs/v3.1.0/marionette.behavior.html

We have a number of other tricks for sharing canonical data — global settings,
third-party API keys, minified asset mappings, and even color maps generated
directly from SCSS — but those will wait for a later installment in this
series.

How have you tackled the problem of wiring up a single-page application with
server-side rendering? What are we missing, or where could we improve our
methods? Drop us a line via `Twitter`_ or chime in on our public `Slack
channel`_!

.. _Twitter: https://twitter.com/oddbird
.. _Slack Channel: http://friends.oddbird.net/
