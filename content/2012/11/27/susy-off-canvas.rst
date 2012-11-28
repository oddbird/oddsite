public: yes
tags: [susy, demo, rwd]
author: eric
summary: |
  The off-canvas design pattern
  for creating responsive websites
  has been getting all the attention lately,
  and I've had several people ask
  how Susy might play along.


Off-canvas design with Susy
===========================

The `off-canvas`_ design pattern
for creating responsive websites
has been getting all the attention lately,
and I've had several people ask
how Susy might play along.

.. _off-canvas: http://jasonweaver.name/lab/offcanvas/

The truth is,
off-canvas design is as easy with Susy
as any other design.
All you need to do
is pull some of your columns off the screen.
I'll show you how,
following Jason's directions,
and just adding in the Susy bits.

Check out the `demo`_.

.. _demo: /demos/susy-off-canvas/

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
we have links that we'll hijack in JavaScript
to toggle our active styles.

Susy Settings:
--------------

.. code:: scss

  $total-columns    : 5;
  $column-width     : 4em;
  $gutter-width     : 1em;
  $grid-padding     : 1em;

Since this is a mobile-first design pattern,
we'll start with settings for a
standard mobile-first Susy grid.
You can change those any way you like,
that's the beauty of using Sass & Susy.

I'm also going to establish my
medium and large column settings right away:

.. code:: scss

  $medium-columns   : 8;
  $large-columns    : 12;

And I'll set Susy's
|code| $container-width |/code|
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
I also set |code| overflow |/code|
to |code| hidden |/code|
so that our off-canvas elements
don't trigger a horizontal scrollbar.

Small Layout:
-------------

For our smallest layout
the |code| .main |/code| section is visible at all times,
full-width by default
or pushed to one side to make room
for the |code| .left |/code| or |code| .right |/code|
sections to appear.

.. code:: scss

  $anchor : 1;
  $side   : $total-columns - $anchor;

I've created an |code| $anchor |/code| setting
to control how much of the main section
remains visible while side-sections are displayed.
The |code| $side |/code| width of our left & right sections
is based on the remaining space.

.. code:: scss

  .left {
    @include span-columns($side);
    margin-left: -100%;
    .show-left & { margin-left: 0; }
  }

  .main {
    @include span-columns($total-columns);
    margin-right: 0;
    .show-left & { margin-right: - space($side); }
    .show-right & { margin-left: - space($side); }
  }

  .right {
    @include span-columns($side omega);
    margin-right: -100%;
    .show-right & { margin-right: 0; }
  }

The |code| span-column |/code| mixins establish our spacing,
just like any other Susy site.
The main difference here is that our total columns-spanned
is much larger than the number of columns available.
A few |code| margin |/code| adjustments,
and we've pulled the left and right sections off the canvas.
I also removed the |code| margin-right |/code| gutter
on our main column, since it spans the full width.

The |code| .show-left |/code| and |code| .show-right |/code|
selectors allow us to move everything around
when we want to show and hide the sidebars.
The |code| space() |/code| function is used to push
our main section only as far as it needs to go:
|code| space() |/code| represents the space taken by
a given number of |code| columns() |/code|
with the final |code| gutter() |/code| included.

Medium Layout:
--------------

.. code:: scss

  $main : 5;
  $side : $medium-columns - $main;

These settings simply establish
the widths we will use for our columns.
You could, of course,
set different right and left widths.
I'll leave that as an excercise for the reader.

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
      .show-left & { margin-right: 0; }
    }

    .right {
      width: columns($side);
      .show-right & { margin-right: 0; }
    }
  }

At our medium breakpoint,
we change the styles to show both the
left and main sections by default.
I used |code| width: columns() |/code|
instead of |code| span-columns |/code|
on the main & right sections
because only the width actually needs to change,
while our left column needs the gutter adjusted as well.

We also hide the left toggle
( |code| [href="#left"] |/code| )
as it is no longer needed.

Large Layout:
-------------

.. code:: scss

  $main : 6;
  $side : ($large-columns - $main)/2;

Nothing new here, we're just dividing up the space
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
No more off-canvas malarky here.
Hide the other toggle-link,
make sure everything stays put
even if we have leftover classes,
and you're done.

Final Tweaks
------------

I've added a number of styles
to make it obvious what is going on,
and highlight the transitions.
You also need a bit of JS
to make the toggles work,
but this is all you need for the Susy setup.

Play around with all the numbers,
it's amazingly flexible.
It works the same as any other Susy grid:
any reasonable settings should work.

.. |code| raw:: html

  <code>

.. |/code| raw:: html

  </code>