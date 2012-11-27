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

I've thrown together a `rough demo`_
showing how it works.
With a little time,
you could add a no-js fallback
and smooth the transitions.

.. _rough demo: /demos/susy-off-canvas/

Simple Markup:
--------------

.. code:: html

  <div class="container">
    <header>
      <a href="#left" class="show-left">show-left</a>
      <a href="#right" class="show-right">show-right</a>
      header
    </header>
    <div class="left" id="left">left</div>
    <div class="main">main</div>
    <div class="right" id="right">right</div>
    <footer>footer</footer>
  </div>

The Susy/Sass Part:
-------------------

