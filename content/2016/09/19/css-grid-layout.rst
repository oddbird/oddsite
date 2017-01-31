public: yes
author: stacy
tags: ['grids', 'css grid', 'layout', 'design', 'code']
image:
  - src: 'cssgriddemo.jpg'
summary: |
  CSS Grid Layout is shaping up to be the layout tool we've always wanted
  on the web. How can we use it to start creating interesting layouts?
after:
  - include: 'blog/_tag-module.html.j2'
    title: 'Posts about CSS Grid Layout'
    tag: 'css grid'
    id: 'css-grid-layout'


Will CSS Grid Layout Enable Creative Design?
============================================

I couldn’t be more excited about CSS grid layout. For far too many years we’ve been dealing with CSS solutions that were never made for the layouts we have been creating. Working with tables then floats and positioning have conditioned us to avoid anything outside of these standard patterns we’ve come to settle upon. But designers and CSS developers can soon rejoice when the CSS Grid Layout Module hits browsers.

In the meantime, Flexbox has been a great addition to our CSS Toolbox, giving us a way to lay content out easier than before. Remember when vertical centering used to be a huge ordeal? There are a number of issues that are `“Solved by Flexbox,”`_ but it is still not a complete grid solution.

.. _“Solved by Flexbox,”: https://philipwalton.github.io/solved-by-flexbox/

If you haven’t used Flexbox yet, I highly suggest studying this CodePen demo:

.. raw:: html

   <p data-height="688" data-theme-id="21914" data-slug-hash="adLPwv" data-default-tab="result" data-user="enxaneta" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/enxaneta/pen/adLPwv/">Flexbox playground</a> by Gabi (<a href="http://codepen.io/enxaneta">@enxaneta</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="//assets.codepen.io/assets/embed/ei.js"></script>


Flexbox is great for single direction elements but lacks the ability to create structure on both x and y axis’. A container with `display: flex;` can either go horizontally or vertically as selected by the flex-direction property.

CSS Grid Layout to the rescue
-----------------------------

Well, CSS Grid Layout is in the far distant future. It doesn’t have much browser support at the moment so if you want to use it on a production site you may want to use Feature Queries. By wrapping your code in an ``@supports`` conditional, it will check to see if the browser has support for the property/value pair in the parentheses, and if so, will use what is inside the @supports brackets. If the browser doesn't have support for `display: grid` or if the browser doesn't even know what Feature Queries are, then it ignores the block of code.

.. code:: scss

  .container {
    display: flex;

    @supports ( display: grid ) {
       display: grid;
    }
  }

Currently, Feature Queries are supported in most browsers except Internet Explorer and Opera Mini:

.. image:: /static/images/blog/feature-queries.jpg
   :target: http://caniuse.com/#feat=css-featurequeries
   :class: align-center
   :alt: Feature Queries support in browsers looks good



Grid introduces new vocabulary
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


**Grid line**
  The lines that create the grid, separating the grid cells.

  .. raw:: html

    <svg data-icon="grid-line" data-size="chart">
      <use xlink:href="#icon-grid-line"></use>
    </svg>


**Grid track**
  The horizontal or vertical space between two grid lines, often spanning multiple grid cells.

  .. raw:: html

    <svg data-icon="grid-track" data-size="chart">
      <use xlink:href="#icon-grid-track"></use>
    </svg>


**Grid cell**
  A single unit of the grid made from the space between four grid lines.

  .. raw:: html

    <svg data-icon="grid-cell" data-size="chart">
      <use xlink:href="#icon-grid-cell"></use>
    </svg>


**Grid area**
  A group of space between four grid lines, often containing a group of grid cells. Grid areas can be named in CSS.

  .. raw:: html

    <svg data-icon="grid-area" data-size="chart">
      <use xlink:href="#icon-grid-area"></use>
    </svg>


Grid-specific CSS Properties
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Over the next few months we will be writing more about CSS Grid Layout. In the meantime, `CSS-Tricks posted a guide`_ from Chris House `Chris House`_ that explains each of the below properties in great detail.

CSS Grid Layout Properties you would use on a grid container:
*************************************************************

  - display
  - grid-template-columns
  - grid-template-rows
  - grid-template-areas
  - grid-column-gap
  - grid-row-gap
  - grid-gap
  - justify-items
  - align-items
  - justify-content
  - align-content
  - grid-auto-columns
  - grid-auto-rows
  - grid-auto-flow
  - grid


CSS Grid Layout Properties you would use on a grid item:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  - grid-column-start
  - grid-column-end
  - grid-row-start
  - grid-row-end
  - grid-column
  - grid-row
  - grid-area
  - justify-self
  - align-self


.. _CSS-Tricks posted a guide: https://css-tricks.com/snippets/css/complete-guide-grid
.. _Chris House: http://chris.house/blog/a-complete-guide-css-grid-layout/


I’ve been creating a few demos in CodePen using Grid and it has been exciting to see the flexibility we will have once this rolls out. I encourage you to start experimenting on your own as well.

.. raw:: html

  <p data-height="568" data-theme-id="21914" data-slug-hash="rLyErg" data-default-tab="result" data-user="stacy" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/stacy/pen/rLyErg/">CSS Grid Layout Demo</a> by Stacy (<a href="http://codepen.io/stacy">@stacy</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="//assets.codepen.io/assets/embed/ei.js"></script>


In the CodePen demo below, you'll see we start with floats then wrap everything else in ``@supports ( display: flex ) {}`` or ``@supports ( display: grid ) {}``. Within the first Flexbox conditional, we over-write the float, max-width, and clearing properties we defined for the older browsers.

.. raw:: html

  <p data-height="642" data-theme-id="21914" data-slug-hash="vXBvNE" data-default-tab="css,result" data-user="stacy" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/stacy/pen/vXBvNE/">CSS Grid Layout with float and flexbox fallbacks</a> by Stacy (<a href="http://codepen.io/stacy">@stacy</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="//assets.codepen.io/assets/embed/ei.js"></script>


What types of layouts can we create with this more flexible system? I would love for some very experimental design to start taking place. I can hear the sighs from usability experts everywhere so let me be clear, I am not saying that we need to create crazy, chaotic designs with unpredictable navigation patterns. I am only asking how we can explore and create new ways to layout out content that are still intuitive but perhaps different from what we've always done in the past.

Flexbox and CSS Grid Layout Resources
-------------------------------------

Flexbox
~~~~~~~

- `Stacy’s Flexbox Bookmark Collection`_
- `Codrops CSS Flexbox Reference`_
- `CSS-Tricks Guide to Flexbox`_
- `Flexbox Froggy`_
- `Flexbox Defense`_
- `Flexbox Patterns`_

.. _CSS-Tricks Guide to Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
.. _Flexbox Patterns: http://www.flexboxpatterns.com/home
.. _Flexbox Defense: http://www.flexboxdefense.com/
.. _Flexbox Froggy: http://flexboxfroggy.com/
.. _Codrops CSS Flexbox Reference: http://tympanus.net/codrops/css_reference/flexbox/
.. _Stacy’s Flexbox Bookmark Collection: https://raindrop.io/collection/1328630


CSS Grid Layout
~~~~~~~~~~~~~~~

- `Stacy’s CSS Grid Layout Bookmark Collection`_
- `Grid by Example`_
- `Jen Simmons Labs`_
- `Should I Use Grid or Flexbox`_
- `Get Ready for CSS Grid Layout`_
- `CSS Grid Layout`_
- `Where Things Are at in the CSS Grid Layout Working Draft`_
- `CSS Grid Layout CodePen Collection`_

.. _Grid by Example: http://gridbyexample.com/
.. _Jen Simmons Labs: http://labs.jensimmons.com/
.. _Should I Use Grid or Flexbox: https://www.rachelandrew.co.uk/archives/2016/03/30/should-i-use-grid-or-flexbox/
.. _Get Ready for CSS Grid Layout: https://abookapart.com/products/get-ready-for-css-grid-layout
.. _CSS Grid Layout: https://blogs.igalia.com/mrego/tag/css-grid-layout/
.. _Where Things Are at in the CSS Grid Layout Working Draft: https://www.sitepoint.com/where-things-are-at-in-the-css-grid-layout-working-draft/
.. _CSS Grid Layout CodePen Collection: http://codepen.io/collection/XRRJGq/
.. _Stacy’s CSS Grid Layout Bookmark Collection: https://raindrop.io/collection/1295293


Related Conference Talks
~~~~~~~~~~~~~~~~~~~~~~~~

There have been a number of wonderful conference talks from CSS Grid advocates including Rachel Andrew, Christopher Wright and Jen Simmons demonstrating the *how*, *why* and *what* is possible when it comes to CSS Grid Layout. If you have any resources to share with us, we'd love to hear from you, too!

.. raw:: html

  <iframe width="640" height="360" src="https://www.youtube.com/embed/QsjXSU2pflg" frameborder="0" allowfullscreen></iframe>


.. raw:: html

  <iframe src="https://player.vimeo.com/video/160593669?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


.. raw:: html

  <iframe allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" src="https://fast.wistia.com/embed/iframe/n8q1rasfdb" width="640" height="468"></iframe>
