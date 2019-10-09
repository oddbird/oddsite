public: yes
speakers: [miriam]
headline:
  - tagline: How can we design for an unknown & infinite canvas?
event_type: video
image:
  - src: 'mozdev/css-is-weird.png'
events:
  - venue: 'Mozilla Developer'
    date: [2019, 10, 3]
    url: 'https://hacks.mozilla.org/2019/10/why-is-css-so-weird/'
    video_link: 'https://www.youtube.com/watch?v=aHUtMbJw8iA'
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/aHUtMbJw8iA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    post: '/2019/10/03/css-is-weird/'
summary: |
  Love it or hate it, CSS is weird:
  not quite markup,
  not quite programming in the imperative sense,
  and nothing like the design programs we use for print.
  How did we get here?


Why is CSS so Weird?
====================

This is a young platform, and all the core languages are growing fast,
with CSS advancing leaps and bounds over the last few years,
but there's a real problem we can't ignore --
the web is *display-agnostic*:

  This implies no device-specific markup,
  **or anything which requires control over fonts or colors.**

  ---The `first website`_ from CERN

Here we are,
putting fonts and colors on the web.
But it's worth taking a step back and asking:
what does it even mean to **design** on an unknown and infinite canvas?

.. _first website: http://info.cern.ch/hypertext/WWW/MarkUp/HTMLConstraints.html
