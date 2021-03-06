public: yes
author: miriam
headline:
  - tagline: None of the solutions are perfect, but we have some options
tags: [CSS, 'Mozilla Developer', AboutWeb, Code, Video]
image:
  - src: 'mozdev/overflow_wrap.png'
summary: |
  Horizontal text overflow has always been difficult to manage on the web.
  The default visible overflow
  is designed to make sure content remains accessible
  no matter the size of a containing box,
  but it's not our only option.


How do you wrap long words in CSS?
==================================

We can now use ``overflow-wrap`` to control how words break --
and combine that with hyphens to make wrapped text more readable.
The solutions aren't perfect yet,
but I'll walk you through the options we have,
and how to use them.

.. callmacro:: content.macros.j2#video
  :embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UOKQ6gw21NA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

  Overflow-wrap is the proper way to break words in CSS

- `MDN Overflow-Wrap <https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap>`_
- `MDN Hyphens <https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens>`_
- `CodePen Demo <https://codepen.io/mirisuzanne/pen/GRKoxXY>`_
