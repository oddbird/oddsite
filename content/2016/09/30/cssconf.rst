public: yes
author: miriam
tags: [Conferences, Front-end, CSS, Code]
image:
  - src: 'blog/2016/cssconf/ns.jpg'
summary: |
  It was a pleasure speaking at
  CSSConf 2016 in Boston!
  Here are some of my notes from the event –
  coverig everything from
  creativity and the Bauhaus movement
  to SVG 2 internals,
  React styles,
  CSS grid layouts,
  and custom properties
  (e.g. CSS-native variables).
  I included links to slides and video
  whenever possible.


CSSConf 2016 Recap
==================

It was a pleasure speaking at
CSSConf 2016 in Boston!
Thanks to `Nicole Sullivan`_ for founding the series,
`Bocoup`_ for hosting the event,
`Claudina Sarahe`_ (an OddBird alum) for her amazing emcee-ing,
all the other speakers for their inspiring talks,
and everyone else for attending!
It was a great atmosphere,
and I met all sorts of lovely people.

My talk was called **Sass Map Magic** –
a major update to a talk I had given
several years back
at BlendConf (may it rest in peace).
The `slides`_ and `video`_
are both available online.

I took extensive notes on day one,
but lost my focus on day two,
when I was part of the lineup.
All the talks were great,
and worth your time
if you have a chance to watch the videos.

.. _Nicole Sullivan: https://twitter.com/stubbornella
.. _Bocoup: https://twitter.com/bocoup
.. _Claudina Sarahe: http://twitter.com/itsmisscs
.. _slides: https://oddbooksapp.com/book/sass-map-magic
.. _video: https://youtu.be/MdwtoFt2LOI


Creativity in Programming for Fun and Profit
--------------------------------------------

.. image:: /static/images/blog/2016/cssconf/sd.jpg

`Sarah Drasner`_
talked about programming as a creative act.
There is more than one way to solve any given problem –
and different solutions will come with different trade-offs.
It's worth exploring the options,
while keeping in mind that code is a communication tool,
and you should engineer with maintainers in mind.

In the second part of the talk,
Sarah listed several tools for creative thinking.
I have found all these tools particularly helpful as an artist,
and it was a nice reminder that they can apply to code as well.

1. Question the base premises
2. Impose artificial bounds
3. Repurpose existing solutions
4. Combine existing solutions
5. Use open source code (this seems like an extension of 3 and 4)

Of course,
this summary barely does justice
to the beautiful demonstrantions Sarah included.
Check out her `CodePen`_ page
for a whole load of amazing and beautiful samples.

|sd-links|

.. _Sarah Drasner: http://twitter.com/sarah_edo
.. _CodePen: http://codepen.io/sdras/

.. |sd-links| raw:: html

  <a href="http://slides.com/sdrasner/creativity-programming#/" class="btn">
    <span class="is-hidden">Sarah Drasner</span>
    Slides »
  </a>
  <a href="https://youtu.be/HVtYasAhsY0" class="btn">
    <span class="is-hidden">Sarah Drasner</span>
    Video »
  </a>


No Bugs in Sight
----------------

.. image:: /static/images/blog/2016/cssconf/bj.jpg

`Brian Jordan`_
talked about automated front-end testing,
with tools like `PhantomJS`_.
He works with `code.org`_,
a non-profit working to increase student access
to computer science curriculum
across demographics.

I didn't take thorough notes on his overview of PhantomJS,
but there were a few philisophical points that stood out:

- Test everything
- Make sure everyone on the team can write tests
  for the code they write
- Take the time, on occasion,
  to review and clean up your tests –
  otherwise you will run into bloat and compile-time issues

|bj-links|

.. _Brian Jordan: http://twitter.com/bcjordan
.. _PhantomJS: http://phantomjs.org/
.. _`code.org`: http://code.org

.. |bj-links| raw:: html

  <a href="https://speakerdeck.com/bcjordan/no-bugs-in-sight-continuous-visual-testing-at-code-dot-org-cssconf-2016" class="btn">
    <span class="is-hidden">Brian Jordan</span>
    Slides »
  </a>
  <a href="https://youtu.be/8nSUIAFpNhE" class="btn">
    <span class="is-hidden">Brian Jordan</span>
    Video »
  </a>


Nativize Is the New Normalize
-----------------------------

.. image:: /static/images/blog/2016/cssconf/jl.jpg

`Jessica Lord`_
showed us how to use `Electron`_
to build native (Mac, Windows, Linux) desktop applications
using Node, HTML, and CSS –
with simplified access to native APIs.

That was pretty cool,
but then she got to the point of the talk title:
CSS to help "nativize" your styles,
so your app feels like desktop software,
and not a website.

Since Electron uses the latest Choromium rendering,
you don't have to target multiple browsers –
but you do have to contend with multiple operating systems.
Among other things,
she advised disabling
`cursor: pointer`
and "rubber-band" scrolling.

|jl-links|

.. _Jessica Lord: http://twitter.com/jllord
.. _Electron: http://electron.atom.io/

.. |jl-links| raw:: html

  <a href="https://youtu.be/H6IDoraEpO0" class="btn">
    <span class="is-hidden">Jessica Lord</span>
    Video »
  </a>


Component-Based Style Reuse
---------------------------

.. image:: /static/images/blog/2016/cssconf/ph.jpg

`Pete Hunt`_
gave the most controversial talk of the conference,
exploring the advantages of in-line CSS
generated by JavaScript,
using tools like `React`_, `JSX`_, and `JSX Style`_.
It's the obvious solution
if you hate the cascade
or think the separation-of-concerns is over-rated.
I don't.

From the JSX perspective,
CSS has several major problems:

- It was designed for documents, not apps
- The cascade was intended to merge author & user styles,
  a feature that is rarely used
  (I'm not sure about that claim)
- The global name space leads to regular class-name conflicts

The React approach:

- No static HTML, all DOM nodes are generated with JS
- Build components out of other components
- Single-class selectors *only* (e.g. BEM)
  for unambiguous name-spacing of classes
- Class-names referenced only once in JS, 
  private to the component,
  and functionally equivalent to inline styles

Of course,
this causes some new issues
that have to be solved by the JS processor:

- Adding new custom attributes to the syntax
  for handling pseudo-elements
- Performance issues
  (addressed by "injecting" styles)
- Server rendering is difficult,
  maybe Webpack can provide a solution?

|ph-links|

.. _Pete Hunt: http://twitter.com/floydophone
.. _React: https://facebook.github.io/react/
.. _JSX: https://facebook.github.io/react/docs/jsx-in-depth.html
.. _JSX Style: https://github.com/smyte/jsxstyle

.. |ph-links| raw:: html

  <a href="https://youtu.be/_70Yp8KPXH8" class="btn">
    <span class="is-hidden">Pete Hunt</span>
    Video »
  </a>


CSS4 Grid: True Layout Finally Arrives
--------------------------------------

.. image:: /static/images/blog/2016/cssconf/jk.jpg

`Jen Kramer`_
provided an overview of
past and present CSS layout techniques,
and an introduction to the new `CSS Grid`_ feature
(still only available behind flags).

None of the existing options
were designed for page layout.
Tables were designed for tabular data,
floats for inline content wrapped by text
(like images and callouts),
and flexbox for gallery-style UI components.

All of them deal with layout
along a single axis of flow –
what Jen referrs to as "one-dimensional" layout.
To use any of them for layout,
we have to include "row" markup
to handle the second dimension.

CSS Grids are substantially different,
providing layout options along both dimensions,
and changing the way we think about flow.
No row markup is required,
because rows are handled directly in the CSS syntax,
and elements can be rearranged
(think flexbox `order`)
along both dimensions.

The spec is mostly complete
but `implementations are sparse`_,
hidden behind flags,
and buggy across all browsers.
Jen recommends using Chrome
to explore the new possibilities –
but it will be some time
before we can use it in production.

|jk-links|

.. _Jen Kramer: http://twitter.com/jen4web
.. _CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/
.. _implementations are sparse: http://caniuse.com/#feat=css-grid

.. |jk-links| raw:: html

  <a href="http://www.slideshare.net/jen4web/css-grid-true-layout-finally-arrives" class="btn">
    <span class="is-hidden">Jen Kramer</span>
    Slides »
  </a>
  <a href="https://youtu.be/jl164y-Vb5E" class="btn">
    <span class="is-hidden">Jen Kramer</span>
    Video »
  </a>


Silky Smooth Animation with CSS
-------------------------------

.. image:: /static/images/blog/2016/cssconf/wb.jpg

`Will Boyd`_
provided guidelines
for creating smooth animations in CSS.
To avoid jank,
you have to keep all animations and transitions at 60fps.

By breaking performance down into multiple steps
(loading, rendering, painting, displaying),
Will was able to isolate the main causes of "jank"
and show us where to focus our efforts.

*Loading* the DOM tree from HTML
is outside the scope of CSS animations –
so not a central issue for frame-rate
(though unrelated background loading
can slow down overall performance
for non-accelerated animations).

*Rendering* the DOM tree into a visual layout
requires matching CSS to DOM elements.
The hardest part is determining geometry and position in the flow.
Re-rendering also requires a re-paint,
so anything that forces the document to re-calculate flow
is going to cause performance issues.
Avoid reflow
by avoiding changes to properties like
``height``, ``width``, ``margin``, ``padding``,
``top``, ``right``, ``bottom``, ``left``, ``font-size``, and so on.

*Painting* the rendered layout
into individual pixel bitmaps
is mostly a matter of color and style.
Avoid re-paints by avoiding properties like
``color``, ``background``, ``box-shadow``, etc.
Re-paint rarely causes re-flow,
so these properties are a smaller drain on performance.

*Displaying* painted pixels onto the screen
is handled by the GPU,
and there are several CSS properties
that have been GPU-accelerated – 
meaning they will never cause a re-flow or re-paint.
That includes ``transform``,
most ``filter`` values
(except for ``drop-shadow`` and ``blur``),
and ``opacity``.

All of these aspects can be tracked
in browser Dev Tools,
and Will provided great demonstrations
to show the differences in performance,
and ways to use accelerated properties
to achieve affects
you might initially try to achieve
with other properties.

|wb-links|

.. _Will Boyd: http://twitter.com/lonekorean

.. |wb-links| raw:: html

  <a href="https://youtu.be/bEoLCZzWZX8" class="btn">
    <span class="is-hidden">Will Boyd</span>
    Video »
  </a>


Stop Thinking in Pixels
-----------------------

.. image:: /static/images/blog/2016/cssconf/kg.jpg

`Keith J. Grant`_
argued for using
a combination of ``em`` and ``rem`` values,
instead of ``px``,
for sizing on the web.

Interesting metaphor to "kick" it off:
when runners wear softer shoes,
they instinctively step harder –
negating any medical benefits.
Keith suggests that we often do the same
with relative units –
trying to reverse-engineer pixel values,
when we could simply trust the abstration.
We all need to learn how to "step softer"
with our relative units.

Since ``em`` units
are relative to *inherited* font size,
they pose a particular confusion –
two ``em`` values in the same block
can render to different sizes:

.. code:: scss

  // assuming a 16px default inherited font size
  .title {
    font-size: 1.2em; // 19.2px relative to default font-size
    padding: 1.2em; // 23.04px relative to adjusted font-size
  }

Add in nesting,
and the problem gets worse.
Using ``rem`` (root-relative) units in some situations
can help provide a more reliable baseline.
Keith recommends:

- Always use ``rem`` for ``font-size``
- Use ``px`` for border-width,
  since you often want thin lines
- Use ``em`` for *everything else*
- Line heights remain unitless

In order to ensure
that modular components work anywhere,
Keiths sets a ``rem`` font-size
on the container of every component.
Internal elements will be relative to that component root,
even when nested inside another component.

I thought that was clever,
but haven't had a chance to play with it.
We have generally reverse-engineered pixel values,
and I appreciated the reminder
that it's probably not worth our effort.
We'll have to think about that more.

Keith also provides more detail
on using viewport-relative ``vw`` units
for your root font-size.
Hint: they work great inside ``calc()``,
but provide terrible results on their own.

|kj-links|

.. _`Keith J. Grant`: http://twitter.com/keithjgrant

.. |kj-links| raw:: html

  <a href="http://keithjgrant.com/talks/stop-thinking-in-pixels/" class="btn">
    <span class="is-hidden">Keith J. Grant</span>
    Slides »
  </a>
  <a href="https://youtu.be/XanhwddQ-PM" class="btn">
    <span class="is-hidden">Keith J. Grant</span>
    Video »
  </a>


CSS Variables: var(--subtitle)
------------------------------

.. image:: /static/images/blog/2016/cssconf/lv.jpg

`Lea Verou`_
demonstrated various ways to use
native CSS variables
(AKA CSS Custom Properties) –
already available in all modern browsers
aside from IE/Edge.

As a side note:
Lea live-codes her entire talk,
and it's amazing to watch.
I learned (after the fact)
that she has speaker notes
overlayed directly on her slides
at low color contrast –
invisible to the audience,
because projectors can't handle the subtlety,
but clearly visible on her own screen.
I love it.

She covered a lot of material,
but here are a few things that stood out to me:

The first CSS variable was ``currentColor``,
added to Opera in 2009.
The new CSS variables
are actually more like custom properties,
written with an "empty" prefix
(e.g. ``--property``) –
and solve a much different issue
than Sass variables
by inheriting as part of the DOM.
Here's a basic example
for defining and accessing
a custom property:

.. code:: scss

  .this {
    --color: blue;
    color: var(--color);
  }

You can use an ``@supports`` block
to add custom properties to your site
as progressive enhancements:

.. code:: scss

  @supports (--css: variables) {
    // etc
  }

  @supports not (--css: variables) {
    // etc
  }

By default,
custom properties are inherited.
You can turn off inheritance for a property,
by resetting its value to ``initial``
in a universal selector:

.. code:: scss

  * { --property: initial; }

A few use-cases to note:

- Apply variables inline,
  to create variations on a global style
  e.g. ``style="--color: blue"`` on a button element –
  especially when using JS to adjust styles,
  so the logical definitions remain in CSS
- Change a ``--gutter`` variable
  at different viewport sizes,
  instead of re-defining your gutter properties directly
- Create property shortcuts with pre-filled default "theme" values
- Create custom long-hands
  for changing a single aspect of a short-hand property like ``box-shadow``

You can also use custom properties
to handle autoprefixing,
or setting multiple properties at once.
Setting the global value to ``initial``
ensures that nothing new is applied by default,
but any new value
will be applied to all the properties at once:

.. code:: scss

  * {
    --clip-path: initial;
    -webkit-clip-path: var(--clip-path);
    clip-path: var(--clip-path);
  }

Some custom-property gotchas:

- Properties are case-sensative
- Don't work well inside the ``url()`` function
- Can't have an empty value ``:;``
  but they can have a single space value ``: ;``
- Values are typed token lists,
  so you can't do things like ``var(--size)em``
  to add units to a number
- Adding units is simple using e.g. ``calc(var(--size) * 1em)``,
  but there is no good way to remove units –
  so it is often best to store unitless values,
  and only add the units when they are needed.
- Variable definitions (``--my-color``) won't animate,
  but you can animate properties (``background: var(--my-color)``)
  that call the variable,
  and achieve the same outcome.

There's so much more!
I highly recommend watching the video.

|lv-links|

.. _Lea Verou: http://twitter.com/leaverou

.. |lv-links| raw:: html

  <a href="http://leaverou.github.io/css-variables" class="btn">
    <span class="is-hidden">Lea Verou</span>
    Slides »
  </a>
  <a href="https://youtu.be/2an6-WVPuJU" class="btn">
    <span class="is-hidden">Lea Verou</span>
    Video »
  </a>


Creative Solutions for Creative Design Challenges with CSS and SVG
------------------------------------------------------------------

.. image:: /static/images/blog/2016/cssconf/ss.jpg

`Sara Soueidan`_
was scheduled to talk about SVG,
but talked instead about hacks
that she has learned to appreciate
while working on the redesign
of a major site.
I found it hard to take good notes –
but this talk is well worth the watch.
So much good material in here!

.. _Sara Soueidan: https://twitter.com/sarasoueidan


The Hateful Weight
------------------

.. image:: /static/images/blog/2016/cssconf/hh.jpg

`Henri Helvetica`_
talked about optimizing page and image sizes
for the web.
Did you know mp4 videos
have better performance than gif images?
Sites like Twitter
convert your animated gif into mp4 format
for display.

|hh-links|

.. _Henri Helvetica: http://twitter.com/HenriHelvetica

.. |hh-links| raw:: html

  <a href="http://www.afast.site/2016/09/27/hello-css-conf-2016/" class="btn">
    <span class="is-hidden">Henri Helvetica</span>
    Slides »
  </a>
  <a href="https://youtu.be/7zd3veCXNgA" class="btn">
    <span class="is-hidden">Henri Helvetica</span>
    Video »
  </a>


Sass Map Magic
--------------

.. image:: /static/images/blog/2016/cssconf/mia.jpg

I showed a wide range of uses
for the underused Sass "map" data type –
from simple site theme configurations,
to data storage,
and complex functional programming.
All the
`slides <https://oddbooksapp.com/book/sass-map-magic>`_
are online.

|ms-links|

.. _Miriam Suzanne: http://twitter.com/mirisuzanne

.. |ms-links| raw:: html

  <a href="https://oddbooksapp.com/book/sass-map-magic" class="btn">
    <span class="is-hidden">Miriam Suzanne</span>
    Slides »
  </a>
  <a href="https://youtu.be/MdwtoFt2LOI" class="btn">
    <span class="is-hidden">Miriam Suzanne</span>
    Video »
  </a>


Webpack and CSS
---------------

.. image:: /static/images/blog/2016/cssconf/zg.jpg

`Zach Green`_
walked us through his `Webpack`_ setup.
I missed most of this,
recovering from my own talk.

|zg-links|

.. _Zach Green: http://twitter.com/zgreen_
.. _Webpack: https://webpack.github.io/

.. |zg-links| raw:: html

  <a href="https://youtu.be/UmP9WcBzZvU" class="btn">
    <span class="is-hidden">Zach Green</span>
    Video »
  </a>


It's Time To Ditch The Grid System
----------------------------------

.. image:: /static/images/blog/2016/cssconf/eh.jpg

`Emily Hayman`_
demonstrated the ins and outs
of using flexbox to build
"content-driven" layouts,
instead of forcing our content into grid colums.
It's a great overview,
and I particularly resonate with the
"step lightly" philosophy
that was repeated here.
If you need a refresher
on the *how* and *why* of flexbox,
this is a great place to start.

|eh-links|

.. _Emily Hayman: http://twitter.com/eehayman

.. |eh-links| raw:: html

  <a href="https://youtu.be/5N9RkIs31Ok" class="btn">
    <span class="is-hidden">Emily Hayman</span>
    Video »
  </a>


Bauhaus in the Browser
----------------------

.. image:: /static/images/blog/2016/cssconf/jm.jpg

`Justin McDowell`_
used CSS transforms, grids, and more
to bring `Bauhaus`_-inspired art and layouts
to the browser.
It's a fun and beautiful talk,
that includes a demonstration of
"Dolly zoom"
(also known as the "vertigo effect")
in CSS.

|jm-links|

.. _Justin McDowell: http://twitter.com/revoltpuppy
.. _Bauhaus: https://en.wikipedia.org/wiki/Bauhaus

.. |jm-links| raw:: html

  <a href="https://www.dropbox.com/s/8fr5amxfafpwnxq/bauhaus-cssconf.pdf" class="btn">
    <span class="is-hidden">Justin McDowell</span>
    Slides »
  </a>
  <a href="https://youtu.be/BaQl84nDBNY" class="btn">
    <span class="is-hidden">Justin McDowell</span>
    Video »
  </a>


The Great SVG RetCon
--------------------

.. image:: /static/images/blog/2016/cssconf/ab.jpg

`Amelia Bellamy-Royds`_
gave us a full overview of changes
in `SVG2`_,
along with a history of SVG.
This talk is packed full of useful information,
if you are using SVG in any way.

|ab-links|

.. _`Amelia Bellamy-Royds`: http://twitter.com/AmeliasBrain
.. _SVG2: https://www.w3.org/TR/SVG2/

.. |ab-links| raw:: html

  <a href="https://ameliabr.github.io/great-svg-retcon/" class="btn">
    <span class="is-hidden">Amelia Bellamy-Royds</span>
    Slides »
  </a>
  <a href="https://youtu.be/qnGIw7CK7pQ" class="btn">
    <span class="is-hidden">Amelia Bellamy-Royds</span>
    Video »
  </a>


Coding is a Privilege
---------------------

.. image:: /static/images/blog/2016/cssconf/ar.jpg

`Alisha Ramos`_
closed out the conference
with a rousing talk about diversity
(and privilege!)
in tech.
A few take-aways:

- It's important to be aware
  of the privileges
  that got you where you are.
- Diversity is not *just* a pipeline issue.
  Representation is worse in the workforce
  than it is in training programs.
  A pipeline is only as useful as the place it takes you.
- Culture-fit can be problematic
  when it refers to "drinking buddies"
  instead of shared values.

I would have taken better notes,
but I was too busy applauding.
This was a great way to end the conference.
You should `watch the video`_,
and I should find my local
`Black Girls Code`_
(or similar)
to volunteer.

|ar-links|

.. _Alisha Ramos: http://twitter.com/alishalisha
.. _watch the video: https://www.youtube.com/watch?v=PtKOzKNJF-s
.. _Black Girls Code: http://www.blackgirlscode.com/

.. |ar-links| raw:: html

  <a href="https://speakerdeck.com/alishalisha/coding-is-a-privilege" class="btn">
    <span class="is-hidden">Alisha Ramos</span>
    Slides »
  </a>
  <a href="https://youtu.be/PtKOzKNJF-s" class="btn">
    <span class="is-hidden">Alisha Ramos</span>
    Video »
  </a>
