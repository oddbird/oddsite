public: yes
author: sondra
tags: [design, recommend]
image:
  - src: '2017/parallax/parallax.jpg'
summary: |
  If you'd like to learn how to create parallax scrolling for your website,
  Paul Lewis' guide to performant parallaxing is the perfect place to start.


Birds Recommend: Performant Parallaxing with CSS 3D
===================================================

Parallaxing
~~~~~~~~~~~

Thanks to `Rachel Nabors`_ for pointing us to Paul Lewis' excellent article on
`Performant Parallaxing`_. This article is so useful, we couldn't pass up the
opportunity to recommend it. Continue reading for a quick summary or **head
over to Paul's article right away!**

.. _Rachel Nabors: http://rachelnabors.com/
.. _Performant Parallaxing: https://developers.google.com/web/updates/2016/12/performant-parallaxing

`Performant Parallaxing >`_
---------------------------

.. _Performant Parallaxing >: https://developers.google.com/web/updates/2016/12/performant-parallaxing

Don'ts
~~~~~~

Paul, a developer at Google, starts with the don'ts. Don't use scroll events to
create a parallax effect.

  JavaScript doesn’t guarantee that parallaxing will
  keep in step with the page’s scroll position.

Trying to achieve a parallax look by changing background position doesn't work
well either, negatively effecting the animation.

CSS 3D
~~~~~~

Paul recommends using CSS 3D for performant parallaxing, and gives detailed
instructions for how to do just that. Anticipating the bugs for us, Paul
includes various workarounds.

Have you used this approach? Did it work? Let us know by sending us a message
via `Twitter`_ or join our public `Slack channel`_.

.. _Twitter: https://twitter.com/oddbird
.. _Slack Channel: http://friends.oddbird.net/

`Performant Parallaxing >`_
---------------------------
