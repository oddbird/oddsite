public: yes
author: miriam
headline:
  - tagline: And how is it different from ``unset`` or ``initial``?
tags: [CSS, 'Mozilla Developer', Code, Video]
image:
  - src: 'mozdev/revert.png'
summary: |
  I've often used ``initial`` and ``unset`` in my CSS --
  global keywords that can be applied to any property.
  The difference is small, but important:
  unset allows inheritance,
  while initial does not.
  But then Firefox implemented ``revert`` and I was confused --
  how is this one different from the others?!


What does ``revert`` do in CSS?
===============================

.. callmacro:: content.macros.j2#video
  :embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GAjoVRmipcU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

  Revert takes user and user-agent styles into consideration

It turns out ``revert`` is the one I wanted all along.
It rolls back styles to the expected browser default for each element,
rather than using the specification default for each property.

- MDN `documentation <https://developer.mozilla.org/en-US/docs/Web/CSS/revert>`_
- Codepen `demo <https://codepen.io/mirisuzanne/pen/WVjNZP>`_
