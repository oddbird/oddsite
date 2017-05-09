public: yes
author: stacy
tags: [CSS, Design, Code, Typography]
image:
  - src: 'blog/2017/initial-letter/drop-caps.jpg'
summary: |
  Using an emphasized initial letter is a technique that has been used for
  centuries. Let's dive in to see some ways you can apply it to your project to
  help guide your reader with visual hierarchy.


What's Old is New: Drop Caps in CSS
===================================

We have some pretty great new(ish) properties we can use in CSS to make our
designs more unique and help provide useful visual cues for your audience. One
of these newer techniques can be used to create the drop caps that we know and
love often found in print design. This technique has been used for centuries to
bring emphasis to a new section of text, and we finally have a decent way to
easily apply drop caps with CSS.


CSS Initial-Letter Syntax
~~~~~~~~~~~~~~~~~~~~~~~~~

First you need an element or class to use as the target, and then we will
append the ``::first-letter`` pseudo element. The property is
``initial-letter`` and the value is the number of lines you would like your
initial letter to expand.

.. code:: scss

    .intro::first-letter {
      initial-letter: 7;
      -webkit-initial-letter: 7;
    }

This code would give us a drop cap seven lines tall, like the large letter "I"
in this example:

.. image:: /static/images/blog/2017/initial-letter/minions-initial-letter.jpg
   :class: align-center img-border
   :alt: Screenshot of inital-letter demo


.. raw:: html

  <hr>


A few months ago we briefly introduced Feature Queries when we wrote about
`CSS Grid Layout`_. Feature Queries will play an important role in using
initial-letter today. As a reminder, a Feature Query will ask the browser to
check for support for a specific property and value:

.. code:: scss

    @supports (property: value) {
      property: value;
    }

When we wrap our block in a Feature Query, we can add additional values that we
would only want applied `if` ``initial-letter`` is supported.

.. code:: scss

    @supports (initial-letter: 7) or (-webkit-initial-letter: 7) {
      .intro::first-letter {
        color: hsl(350, 50%, 50%);
        initial-letter: 3;
        -webkit-initial-letter: 3;
      }
    }

The specific number used in the @supports line for initial-letter does not
matter unlike properties that require a keyword like ``(display: grid)``.

As of December 2016, only Safari supports initial-letter. Fortunately, you
can still use this as an enhancement and fake it 'til you make it to achieve a
similar outcome. By using the operator ``not`` we can tell browsers that do not
support ``initial-letter`` to use alternate styles.

.. code:: scss

    $font-size: 1.15rem;
    $cap-size: $font-size * 6.25;

    @supports (not(initial-letter: 5)) and (not(-webkit-initial-letter: 5)) {
      .intro::first-letter {
        color: hsl(350, 50%, 50%);
        font-size: $cap-size;
        float: left;
        line-height: .7;
        margin: 17px 2px 0 0;
      }
    }

These “magic numbers” are not universal so if you change a value or font-family
you will likely have to edit these values. We could probably spend some time to
calculate the line-height and font-size more programmatically, but it will not
take into account the x-height of the typeface you choose. Here is a screenshot
of the resulting fallback and enhancement:

.. image:: /static/images/blog/2017/initial-letter/fallback-enhancement.jpg
   :class: align-center img-border
   :alt: Fallback and Enhancement in Chrome and Safari


Here is the CodePen demo:

.. raw:: html

    <p data-height="530" data-theme-id="light" data-slug-hash="JbgvRe" data-default-tab="css,result" data-user="stacy" data-embed-version="2" data-pen-title="Initial Letter, with fallback and enhancement" class="codepen">See the Pen <a href="http://codepen.io/stacy/pen/JbgvRe/">Initial Letter, with fallback and enhancement</a> by Stacy (<a href="http://codepen.io/stacy">@stacy</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>



Raised and Sunken Initial Letters
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Another optional value we can use for our ``initial-letter`` property will
instruct the browser where to place the initial cap. After our drop cap height
value we will add a space and the number of lines we want our cap to drop. A
value equal to the initial height value is the default.

.. code:: scss

    .raised-cap::first-letter {
      -webkit-initial-letter: 3 1;
      initial-letter: 3 1;
    }

    .sunken-cap::first-letter {
      -webkit-initial-letter: 3 2;
      initial-letter: 3 2;
    }

.. image:: /static/images/blog/2017/initial-letter/sunken-raised-drop-caps.jpg
   :class: align-center img-border
   :alt: Screenshot of raised, sunken, and drop cap demo


The following CodePen demo is available in Safari only:


.. raw:: html

    <p data-height="830" data-theme-id="light" data-slug-hash="GNrYgY" data-default-tab="css,result" data-user="stacy" data-embed-version="2" data-pen-title="Initial Letter, showing multiple positions" class="codepen">See the Pen <a href="http://codepen.io/stacy/pen/GNrYgY/">Initial Letter, showing multiple positions</a> by Stacy (<a href="http://codepen.io/stacy">@stacy</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


We'd love to see how you use ``initial-letter`` in your design. Send us a
message via `Twitter`_ or join our public `Slack channel`_.


.. _CSS Grid Layout: /2016/09/19/css-grid-layout/
.. _Twitter: https://twitter.com/oddbird
.. _Slack Channel: http://friends.oddbird.net/
