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
off-canvas design is as simple with Susy
as any other design pattern.
All you need to do
is pull some of your columns off the screen.
It's that simple.

I've thrown together a very `rough demo`_
that only shows Susy's part of the equation.
You still need to add JS interaction
and no-js fallbacks.

.. _rough demo: /demos/susy-off-canvas/

If anyone wants to take what I've done,
and flesh it out,
I would be glad to pull that in.

Simple Markup:
--------------

.. code:: html

  <div class="container">
    <header>header</header>
    <div class="left">left</div>
    <div class="main">main</div>
    <div class="right">right</div>
    <footer>footer</footer>
  </div>

The Susy/Sass Part:
-------------------

.. code:: scss

  @import "compass";
  @import "susy";

  // --------------------------------------------
  // settings

  $total-columns  : 12;
  $column-width   : 5em;
  $gutter-width   : 1em;
  $grid-padding   : 0;

  // --------------------------------------------
  // layout
  //
  // we only need to set the container once
  // (for our largest layout)
  // because it will automatically remain full-width
  // at any smaller size.

  body { padding: 0; margin: 0; }
  * { @include box-sizing(border-box); }

  .container {
    @include container;
    @include box-sizing(content-box);
    overflow: hidden;
  }

  header, footer { clear: both; }

  // --------------------------------------------
  // phone
  //
  // No need for Susy here -
  // we're not dealing with columns.

  .left, .right, .main {
    @include transition(.2s all ease);
    float: left;
    width: 100%;
  }

  .left {
    margin-left: -100%;
  }

  .right {
    float: right;
    margin-right: -100%;
  }

  // --------------------------------------------
  // tablet
  //
  // You can set this to any min-width
  // and any column-count that you want for tablets.
  // No need for a max-width,
  // because most of it works towards the desktop
  // and we can override the rest.
  // We're not setting a container,
  // so the column-count is just how you want to divide up
  // the 100% space that we have available.

  $tablet   : 30em;   // tablet min-width breakpoint
  $columns  : 8;      // divide into as many columns as you want
  $main     : 6;      // main content uses most of them
  $side     : $columns - $main; // room for one sidebar at a time

  @include at-breakpoint($tablet $columns) {
    .main {
      @include span-columns($main);
      margin-right: 0;
    }
    .left {
      @include span-columns($side);
      margin-left: 0;
    }
    .right {
      @include span-columns($side omega);
      margin-right: -100%;
    }
  }

  // --------------------------------------------
  // desktop
  //
  // Now we're just bringing things back to normal.

  $desktop    : 60em;           // desktop breakpoint
  $columns    : $total-columns; // use all the columns
  $main       : 6;              // main uses some
  $side       : floor(($columns - $main)/2); // the rest are divided between sidebars

  @include at-breakpoint($desktop $columns) {
    .main {
      @include span-columns($main);
    }
    .left, .right {
      @include span-columns($side);
    }
    .right {
      @include omega;
      margin-right: 0;
    }
  }

  // --------------------------------------------
  // styles (for demo only)

  .left, .right, .main {
    height: 20em;
    padding: 1em;
  }
  .left { background: #cff; }
  .right { background: #ffc; }

  header, footer {
    height: 3em;
    padding: 1em;
    background: #fcf;
  }

