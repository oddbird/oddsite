public: yes
speakers: [miriam]
image:
  - src: 'talks/miriam.jpg'
event_type: video
events:
  - venue: 'Mozilla Developer'
    date: [2019, 10, 1]
    url: 'https://hacks.mozilla.org/2019/10/video-shorts-from-mozilla-developer/'
    video_link: 'https://www.youtube.com/watch?v=2awepiNoaZI'
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2awepiNoaZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    post: '/2019/10/01/mozdev/'
summary: |
  When we create lists in HTML,
  browsers add bullet-points (for unordered lists)
  and numbers (for ordered lists).
  Now CSS gives us the tools to style those list "markers",
  and even create our own!


Powerful New CSS for Styling Lists
==================================

- Use the `::marker` pseudo element to style list bullets & numbers
- Use `display: list-item` to add a counter on any element
- Use `counter-reset` and `counter-increment` to create your own counters
- Use `counter()` and `counters()` to control how counter numbers are displayed

I'll also show you how the `::marker` element
is different from `::before` or `::after`.

`Play with the demo on CodePen »`_

.. _`Play with the demo on CodePen »`: https://codepen.io/mirisuzanne/pen/BaBKowO?editors=0100
