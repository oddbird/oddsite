public: yes
author: miriam
tags: [Vue, Conferences, 'Design Systems', Code, 'Style Guides']
image:
  - src: 'blog/2019/vueconf.jpg'
headline:
  - tagline: |
      Talk: `Dynamic CSS with Vue`_

      .. _Dynamic CSS with Vue: /talks/data-design/
summary: |
  Inspired by `VueConf 2018`_
  I spent some time
  learning JS and Vue in more depth,
  and built myself
  a more flexible
  `VueFinder`_ presentation tool
  to fit my needs.
  This year,
  I returned to VueConf
  and gave the closing talk
  on passing data between CSS and Vue.

  .. _VueConf 2018: /2018/05/14/vueconfus/
  .. _VueFinder: https://github.com/oddbird/vuefinder


VueFinder at VueConf, 2019
==========================

.. callmacro:: content.macros.j2#get_quotes
  :page: 'talks/data-design'
  :slug: 'squishy'

After learning about Vue
from `Sarah Drasner`_'s
stream of articles on `CSS Tricks`_,
I had the pleasure of speaking at
`VueConf 2018`_.
I really enjoyed that conference,
and left feeling inspired by the community
and the framework behind it.
I loved that I could build
complete and valid Vue components
in plain HTML/CSS --
and slowly inetgrate JS logic as necessary.
I started digging,
and quickly learned to
bind JS data to HTML attributes:

.. _Sarah Drasner: https://twitter.com/sarah_edo
.. _CSS Tricks: https://css-tricks.com/author/sdrasner/
.. _VueConf 2018: /2018/05/14/vueconfus/

.. code:: html

   <table :style="{'--scale': graph.scale}">
     <!-- ... -->
     <td :style="{'--value': item.value}">{{ item.value }}%</td>

CSS variables
provide a safe approach
for passing JS settings to CSS
via inline HTML.
While most inline styles are difficult to override,
CSS variables can instead be ignored --
making their inline specificity harmless.

I wrote a quick demo for CSS Tricks --
`More CSS Charts, with Grid & Custom Properties`_ --
and continued to develop the idea
into my latest talk:
`Dynamic CSS`_.
This talk explores how data can be used
to manipulate presentation
directly in CSS --
a combination of variables,
``calc()``, grids, ``hsl()``
and more.

.. _`More CSS Charts, with Grid & Custom Properties`: https://css-tricks.com/css-charts-grid-custom-properties/
.. _Dynamic CSS: /talks/data-design/

The `slides are online`_,
and you can `sign up for a notification`_
when the videos are posted.

.. _slides are online: https://talks.oddbird.net/dynamic-css/vueconf19/
.. _sign up for a notification: https://www.vuemastery.com/conferences/


VueFinder Slides
----------------

Along the way,
I've been learning JS and Vue
in more depth,
and decided to re-build my presentation tool
to meet my adapting needs as a speaker.

The result,
which I call `VueFinder`_,
allows me to write slides
using a slightly-extended markdown syntax --
with yaml metadata for each slide.
That metadata controls slide layout,
allows me to embed Vue components directly
for live demos,
and pass in CSS variables
for custom styling.

.. _VueFinder: https://github.com/oddbird/vuefinder

VueFinder is public and open-source,
though it isn't currently
as reusable as I would like.
The content and logic are tightly coupled
in ways I haven't yet resolved.
If you're interested in helping make this
a more viable open source tool,
or using it yourself,
I'm open to new features and PRs.

After VueConf,
`Rahul Kadyan`_
`released an extension`_ for Visual Studio Code
that provides syntax-highlighting
and code-folding
for my ``.slides`` files,
as well as the ``.vue-slides``
format `he uses`_.
Thanks, Rahul!

.. _Rahul Kadyan: https://twitter.com/znck0
.. _released an extension:  https://marketplace.visualstudio.com/itemdetails?itemName=znck.vue-slides#qna
.. _he uses: https://github.com/znck/vue-slides


VueConf, 2019
-------------

This year I connected with the `Vue Vixens`_,
and enjoyed getting to know
more of the Vue community.
`Chris Fritz`_ and Rahul
helped me add some last-minute features
to my slide deck,
while `Maria Lamardo`_
and `Krystal Campioni`_
both inspired new demos in my talk.

.. _Vue Vixens: https://vuevixens.org/
.. _Chris Fritz: https://twitter.com/chrisvfritz
.. _Maria Lamardo: https://twitter.com/marialamardo
.. _Krystal Campioni: https://twitter.com/krystalcampioni

.. callmacro:: content.macros.j2#iframe
  :src: 'https://talks.oddbird.net/demos/cssSprites'
  :ratio: 2

  Animated sprites from
  `Monster Slayer <https://github.com/krystalcampioni/monster-slayer>`_
  by `Krystal Campioni <https://twitter.com/krystalcampioni>`_
  [`permalink <https://talks.oddbird.net/demos/cssSprites>`_ /
  `source <https://github.com/oddbird/vuefinder/blob/master/components/demos/cssSprites.vue>`_]

You can find all the available
`speaker slides linked from gist`_.

.. _speaker slides linked from gist: https://gist.github.com/vincentmayers/298f7bfd4c26ebd2fc0143f03dc4cbf7
