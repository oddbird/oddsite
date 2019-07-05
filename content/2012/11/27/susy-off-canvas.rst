public: yes
tags: [Susy, Susy1, Demos, Layout, Code]
author: miriam
image:
  - src: 'blog/susy.jpg'
summary: |
  The `off-canvas`_ layout pattern
  for responsive web design
  has been getting all the attention lately,
  and I've had several people ask
  how `Susy One`_ might play along.
  I'll show you how easy it is,
  and how much flexibility Susy can add
  along the way.

  .. _off-canvas: http://jasonweaver.name/lab/offcanvas/
  .. _Susy One: https://susyone.oddbird.net/


Off-Canvas Layout with Susy
===========================

**UPDATE**:
*I fixed a bug with show-left failing on small screens.
The main area was dropping below the left sidebar,
as floats sometimes do.
The fix is actually simpler than the original code:
just set and leave a 100% negative right-margin
on the main area,
removing all state changes to that margin.*

The `off-canvas`_ layout pattern
for responsive websites
has been getting all the attention lately,
and I've had several people ask
how `Susy`_ might play along.

.. _off-canvas: http://jasonweaver.name/lab/offcanvas/
.. _Susy: /susy/

The truth is,
Susy handles off-canvas layout the same
as any other layout.
All you need to do
is pull some of your columns off the screen.
I'll show you how,
following Jason's lead,
and adding in the Susy bits.

Check out the `demo`_,
and make sure you understand
`off-canvas`_ layouts
before you go on.

I've used a few shortcuts
that require the `latest Susy release`_
(1.0.5),
but the concepts remain true
in older versions as well.

.. _demo: https://codepen.io/mirisuzanne/pen/c84837d2f8c478b6a3accca409c790eb
.. _latest Susy release: http://rubygems.org/gems/susy


Basic Markup:
-------------

.. code:: html

  <div class="container">
    <header>
      <a href="#left" class="toggle">show-left</a>
      <a href="#right" class="toggle">show-right</a>
      header
    </header>
    <div class="left" id="left">left</div>
    <div class="main">main</div>
    <div class="right" id="right">right</div>
    <footer>footer</footer>
  </div>

We have a simple container
with header, footer,
and three body columns:
left, right, and main.
Inside the header
we have links we can hijack in JavaScript
to toggle state body-classes.

Susy Settings:
--------------

.. code:: scss

  $total-columns    : 5;
  $column-width     : 4em;
  $gutter-width     : 1em;
  $grid-padding     : 1em;

Since this is a mobile-first design pattern,
we'll start with settings for a
typical mobile-first Susy grid.
You can change those any way you like.

I'm also going to establish my
medium and large column settings right away:

.. code:: scss

  $medium-columns   : 8;
  $large-columns    : 12;

And I'll set Susy's
``$container-width``
override to the largest layout width,
so the container is fluid up to that point:

.. code:: scss

  $container-width  : container-outer-width($large-columns);


Establish the Container:
------------------------

.. code:: scss

  .container {
    @include container;
    overflow: hidden;
  }

Besides establishing the usual Susy container,
I also set ``overflow`` to ``hidden``
so that our off-canvas elements
don't trigger a horizontal scrollbar.

Small Layout:
-------------

For our smallest layout
the ``.main`` section is visible at all times,
full-width by default
or pushed to one side to make room
for the ``.left`` or ``.right``
sections to appear.

.. code:: scss

  $anchor : 1;
  $side   : $total-columns - $anchor;

I've created an ``$anchor`` variable
to control how many columns of the main section
remain visible while side-sections are displayed.
The ``$side`` width of our left & right sections
is based on the remaining space.

.. code:: scss

  .left {
    @include span-columns($side);
    margin-left: -100%;
    .show-left & { margin-left: 0; }
  }

  .main {
    @include span-columns($total-columns);
    margin-right: -100%;
    .show-right & { margin-left: - space($side); }
  }

  .right {
    @include span-columns($side omega);
    margin-right: -100%;
    .show-right & { margin-right: 0; }
  }

The ``span-column`` mixins establish our spacing,
just like any other Susy site.
The main difference here is that our total columns-spanned
is much larger than the number of columns available.
A few ``margin`` adjustments,
and we've pulled the left and right sections off the canvas.
I also removed the ``margin-right`` gutter
on our main column, since it spans the full width.

The ``.show-left`` and ``.show-right``
selectors allow us to move everything around
when we want to show and hide the sidebars.
The ``space()`` function is used to push
our main section only as far as it needs to go:
``space()`` represents the space taken by
a given number of ``columns()``
with the final ``gutter()`` included.


Medium Layout:
--------------

.. code:: scss

  $main : 5;
  $side : $medium-columns - $main;

These variables simply establish
the widths we will use for our columns.
You could, of course,
set different right and left widths.
I'll leave that as an exercise for the reader.

.. code:: scss

  @include at-breakpoint($medium-columns) {
    [href="#left"] { visibility: hidden; }

    .left {
      @include span-columns($side);
      margin-left: 0;
      .show-right & { margin-left: - 100%; }
    }

    .main {
      width: columns($main);
      .show-right & { margin-left: 0; }
    }

    .right {
      width: columns($side);
      .show-right & { margin-right: 0; }
    }
  }

At our medium breakpoint,
we change the styles to show both the
left and main sections by default.
I used ``width: columns()``
instead of ``span-columns``
on the main & right sections
because only the width actually needs to change,
while our left column needs the gutter adjusted as well.

We also hide the left toggle
( ``[href="#left"]`` )
as it is no longer needed.


Large Layout:
-------------

.. code:: scss

  $main : 6;
  $side : ($large-columns - $main)/2;

Nothing new here; we're just dividing up the space
into variables we can use.

.. code:: scss

  @include at-breakpoint($large-columns) {
    [href="#right"] { visibility: hidden; }

    .left {
      @include span-columns($side);
      .show-right & { margin-left: 0; }
    }

    .main {
      width: columns($main);
    }

    .right {
      @include span-columns($side omega);
    }
  }

At our largest breakpoint
we are simply overriding everything
to get ourselves back to a normal layout.
No more off-canvas malarkey here.
Hide the other toggle-link,
make sure everything stays put
even if we have leftover classes,
and you're done.

.. raw:: html

  <figure class="extend-small">
    <p data-height="500" data-theme-id="0" data-slug-hash="c84837d2f8c478b6a3accca409c790eb" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Susy1 Off-Canvas Demo" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/c84837d2f8c478b6a3accca409c790eb/">Susy1 Off-Canvas Demo</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </figure>


Final Tweaks
------------

I've added a number of styles
to make it obvious what's going on
and highlight the transitions
in our `demo`_.
You also need a bit of JS
to make the toggles work,
but this is all you need for the Susy setup.

Play around with all the numbers;
it's amazingly flexible.
It works the same as any other Susy grid:
any reasonable settings should work.
