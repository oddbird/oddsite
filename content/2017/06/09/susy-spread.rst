public: yes
author: miriam
tags: [Susy, CSS, Sass, Grids]
image:
  - src: 'blog/2017/spread/susy-spread.jpg'
summary: |
  **Susy 3.0** will be released next week,
  if all goes well,
  and there's a lot to write about it.
  I wanted to start with a detailed overview
  of one core concept: **spread**.


Understanding ``Spread`` in Susy3
=================================

Spread isn't new to Susy3,
`or even to Susy generally`_,
but its full power is usually hidden behind
other settings (like ``gutter-position``),
or opinionated assumptions about your grid.
In Susy3 we've gone the other direction,
making it central to the API,
and giving you full control over the math.

.. _or even to Susy generally: http://susydocs.oddbird.net/en/latest/settings/#spread


What is spread?
---------------

We didn't invent the idea,
but we did come up with the term,
because I haven't seen anyone else talking about it.


On Containers
~~~~~~~~~~~~~

Container-spread describes how a grid-parent
handles available gutters:

Most grids only put gutters between the columns.
That means there will be one less gutter than there are columns.
We call that a ``narrow`` container-spread, and make it the default.

.. image:: /static/images/blog/2017/spread/context-narrow.jpg
   :alt: container-spread: narrow
   :class: extend-small

Some grids use "split" gutters,
with half of a gutter on either size of a column –
forming full-gutters between columns,
and an extra half at the edges.
Mathematically, that means we have an equal number
of gutters and columns.
We call that a ``wide`` spread.

.. image:: /static/images/blog/2017/spread/context-wide.jpg
   :alt: container-spread: wide
   :class: extend-small

Occasionally, a grid will have full gutters on both sides,
meaning there is one more gutter than columns.
We call that a ``wider`` spread.

.. image:: /static/images/blog/2017/spread/context-wider.jpg
   :alt: container-spread: wider
   :class: extend-small


On Spans
~~~~~~~~

Spread describes the same concept
as it relates to internal grid-spanning elements.
In most systems,
including the new CSS Grids,
all spans are ``narrow`` –
meaning they only span intermedite gutters.

.. image:: /static/images/blog/2017/spread/span-narrow.jpg
   :alt: spread: narrow
   :class: extend-small

Occasionally it's useful to span as many gutters as columns –
a ``wide`` spread –
if you have split-padding gutters, for example,
or if you want elements to touch at certain places,
or if you are pushing and pulling elements in the grid.

.. image:: /static/images/blog/2017/spread/span-wide.jpg
   :alt: spread: wide
   :class: extend-small

It's rare that you need to span a ``wider`` spread,
but we'll let you decide if it's useful.

.. image:: /static/images/blog/2017/spread/span-wider.jpg
   :alt: spread: wider
   :class: extend-small



Fluid Context
-------------

In Susy3 there is no single grid "container" element
that receives special treatment.
Instead, container spans are described
in the same syntax as any other span –
and any element containing other grid elements
is a container for those elements.

Fluid-span calculations require understanding
both the container width and span-width.
The Sass math looks like this:

.. code:: scss

  $fluid-width: percentage($span-width / $container-width);

For that reason,
it's important to be explicit with Susy
about the spread of both containers and spans.
In the Susy3 syntax, that looks like:

.. code:: scss

  $width: span(3 wide of 6 narrow);

If it comes before ``of``, it describes the span.
If it comes after ``of``, it describes the container.
In most cases,
there will be sensible default for both values,
and you can set those in the global settings:

.. code:: scss

  // Both default to "narrow"…
  $susy: (
    'spread': 'narrow',
    'container-spread': 'narrow',
  );



Common Use Cases
----------------

Commonly, all spans have a ``narrow`` spread.
In fact, CSS Grid doesn't provide any way
to span across extra edge gutters.
You would have to achieve a ``wide`` or ``wider`` span
using negative ``grid-gap``-sized margins.

There are times when you simply want to span across a gutter,
for the sake of style.
But there are other common reasons
to span extra gutters.
Let's look at a few.


Pushing, Pulling, & Padding Elements
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

It's sometimes necessary to "push" and "pull" elements
out of their usual flow position,
or add grid-aligned padding.
You can do that by using the ``span`` functions
on the ``margin`` or ``padding`` of an element.
Push with positive left margins,
pull with negative right margins,
and pad either side with the padding property.

In all those cases,
you'll probably need a ``wide`` span
in order to align your content with the proper column:

|push|

.. |push| raw:: html

  <figure class="extend-small">
    <p data-height="480" data-theme-id="0" data-slug-hash="BZjMXK" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Susy3: Pushing and Pulling" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/BZjMXK/">Susy3: Pushing & Pulling</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>


Split Gutters
~~~~~~~~~~~~~

Some grid systems use "split" gutters,
with half a gutter on either some of an element.
That will add an extra gutter to your total grid width,
giving your common ``container`` a ``wide`` spread.
If you are using split gutters,
you likely want to set ``container-spread: wide``
in your global settings.

Here's a ``wide`` container,
with ``narrow`` spans
and split gutters:

|split|

.. |split| raw:: html

  <figure class="extend-small">
    <p data-height="230" data-theme-id="0" data-slug-hash="bREZWW" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Susy3: Split Gutters" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/bREZWW/">Susy3: Split Gutters</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>

If you move the gutters inside,
using the ``padding`` property,
both ``spread`` and ``container-spread`` may need to be ``wide``.
I say "may" because it also depends on your ``border-box-sizing``.
That's a whole new article,
and honestly:
padding gutters make the math much simpler.
If you use padding gutters,
there's a good chance you don't need Susy.

More about that in my next post.
Until then: Happy coding!

Keep an eye out for the Susy3 release, coming soon!
Follow us on `Twitter`_, join our `public Slack channel`_,
or `contact us`_ online.
We're excited to hear from you!

.. _Twitter: https://twitter.com/oddbird
.. _public Slack channel: http://friends.oddbird.net
.. _contact us: /contact/

