public: yes
author: stacy
tags: [css, css-grid-layout, design]
image:
  - src: 'cssgriddemo.jpg'
summary: |
  CSS Grid Layout is shaping up to be the layout tool we've always wanted
  on the web. How can we use it to start creating interesting layouts that
  since we've been restricted in our past?
after:
  - include: 'blog/_tag-module.html.j2'
    title: 'Posts about CSS Grid Layout'
    tag: css-grid-layout
    id: 'css-grid-layout'


Will CSS Grid Layout Enable Creative Design?
============================================

I couldn’t be more excited about CSS grid layout. For far too many years we’ve been dealing with CSS solutions that were never made for the layouts we have been creating. Working with tables then floats and positioning have conditioned us to avoid anything outside of these standard patterns we’ve come to settle upon. But designers and CSS developers can soon rejoice when the CSS Grid Layout Module hits browsers.

In the meantime, Flexbox has been a great addition to our CSS Toolbox, giving us a way to lay content out easier than before. Remember when vertical centering used to be a huge ordeal? There are a number of issues that are “Solved by Flexbox,” but it is still not a complete grid solution.

If you haven’t used Flexbox yet, I highly suggest studying this CodePen demo:

.. raw:: html

   <p data-height="688" data-theme-id="21914" data-slug-hash="adLPwv" data-default-tab="result" data-user="enxaneta" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/enxaneta/pen/adLPwv/">Flexbox playground</a> by Gabi (<a href="http://codepen.io/enxaneta">@enxaneta</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="//assets.codepen.io/assets/embed/ei.js"></script>


Flexbox is great for single direction elements but lacks the ability to create structure on both x and y axis’. A container with `display: flex;` can either go horizontally or vertically as selected by the flex-direction property. *(I don't think you need the following sentence because the header of the next section is a better transition.) So, we marched on, still in search of creating an easier way to create grids on the web.*

CSS Grid Layout to the rescue
-----------------------------

Well, CSS Grid Layout is in the far distant future. It doesn’t have much browser support at the moment so if you want to start using it on a production site you’ll want to wrap it in an ``@supports`` conditional.

.. code:: scss

  .container {
    display: flex;

    @supports ( display: grid ) {
  	   display: grid;
    }
  }

You can see a few fallbacks in this CodePen demo:

.. raw:: html

  <p data-height="642" data-theme-id="21914" data-slug-hash="vXBvNE" data-default-tab="css,result" data-user="stacy" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/stacy/pen/vXBvNE/">CSS Grid Layout with float and flexbox fallbacks</a> by Stacy (<a href="http://codepen.io/stacy">@stacy</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="//assets.codepen.io/assets/embed/ei.js"></script>


Grid introduces new vocabulary and CSS properties
-------------------------------------------------

New grid terminology includes:

.. line-block::

  **Grid line**
  The lines that create the grid, separating the grid cells.

  **Grid track**
  The horizontal or vertical space between two grid lines, often spanning multiple grid cells.

  **Grid cell**
  A single unit of the grid made from the space between four grid lines.

  **Grid area**
  A group of space between four grid lines, often containing a group of grid cells. Grid areas can be named in CSS.


CSS Grid Layout Properties you would use on a grid container:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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


**CSS Grid Layout Properties you would use on a grid item:**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  - grid-column-start
  - grid-column-end
  - grid-row-start
  - grid-row-end
  - grid-column
  - grid-row
  - grid-area
  - justify-self
  - align-self


`CSS-Tricks posted a guide`_ from Chris House `Chris House`_ that goes in depth into each of these properties.

.. _CSS-Tricks posted a guide: https://css-tricks.com/snippets/css/complete-guide-grid
.. _Chris House: http://chris.house/blog/a-complete-guide-css-grid-layout/


I’ve been creating a few demos in CodePen using Grid and it has been exciting to see the flexibility we will have once this rolls out. I encourage you to start experimenting on your own as well.


.. raw:: html

  <p data-height="568" data-theme-id="21914" data-slug-hash="rLyErg" data-default-tab="result" data-user="stacy" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/stacy/pen/rLyErg/">CSS Grid Layout Demo</a> by Stacy (<a href="http://codepen.io/stacy">@stacy</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="//assets.codepen.io/assets/embed/ei.js"></script>


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

.. _Grid by Example: http://gridbyexample.com/
.. _Jen Simmons Labs: http://labs.jensimmons.com/
.. _Should I Use Grid or Flexbox: https://www.rachelandrew.co.uk/archives/2016/03/30/should-i-use-grid-or-flexbox/
.. _Get Ready for CSS Grid Layout: https://abookapart.com/products/get-ready-for-css-grid-layout
.. _CSS Grid Layout: https://blogs.igalia.com/mrego/tag/css-grid-layout/
.. _Stacy’s CSS Grid Layout Bookmark Collection: https://raindrop.io/collection/1295293


Related Conference Talks
~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

  <iframe src="https://player.vimeo.com/video/160593669?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>




.. raw:: html

  <iframe width="640" height="360" src="https://www.youtube.com/embed/QsjXSU2pflg" frameborder="0" allowfullscreen></iframe>




.. raw:: html

  <iframe allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" src="https://fast.wistia.com/embed/iframe/n8q1rasfdb" width="640" height="468"></iframe>
