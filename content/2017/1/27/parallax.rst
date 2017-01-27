public: yes
author: sondra
tags: [design]
image:
  - src: '2017/parallax/parallax.jpg'
summary: |
  Whether you like it not, parallax scrolling is a reality, so let's learn how
  to do it well with CSS 3D. Paul Lewis' guide to performant parallaxing is the
  perfect place to start.


Let's Talk About Parallax: Dos and Don'ts
=========================================

Thanks to `Rachel Nabors`_, award winning cartoonist and digital storyteller,
for pointing us to Paul Lewis' excellent `article on performant parallaxing`_.

.. _Rachel Nabors: http://rachelnabors.com/
.. _article on performant parallaxing: https://developers.google.com/web/updates/2016/12/performant-parallaxing?utm_content=buffer29a95&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

Don'ts
------

Paul, a developer at Google, starts with the don'ts. Don't use scroll events to
create a parallax effect.

*"JavaScript doesn’t guarantee that parallaxing will keep in step with the
page’s scroll position."*

Trying to achieve a parallax look by changing background position doesn't work
well either, negatively effecting the animation.

CSS 3D
------

Paul recommends using CSS 3D for performant parallaxing, and gives detailed
instructions for how to do just that. Anticipating the bugs for us, Paul
includes various workarounds.

Have you used this approach? Did it work? Let us know by sending us a message
via `Twitter`_ or joining our public `Slack channel`_.

.. _Twitter: https://twitter.com/oddbird
.. _Slack Channel: http://friends.oddbird.net/
