public: yes
speakers: [miriam]
headline:
  - tagline: And how is it different from ``unset`` or ``initial``?
event_type: video
image:
  - src: 'mozdev/revert.png'
events:
  - venue: 'Mozilla Developer'
    date: [2019, 10, 3]
    video_link: 'https://www.youtube.com/watch?v=GAjoVRmipcU'
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GAjoVRmipcU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    post: '/2019/10/07/revert/'
summary: |
  I've often used ``initial`` and ``unset`` in my CSS --
  global keywords that can be applied to any property.
  The difference is small, but important:
  ``unset`` allows inheritance,
  while ``initial`` does not.
  But then Firefox implemented ``revert`` and I was confused --
  how is this one different from the others?!


What does ``revert`` do in CSS?
===============================

It turns out ``revert`` is the one I wanted all along.
It rolls back styles to the expected browser default for each element,
rather than using the specification default for each property.

- MDN `documentation <https://developer.mozilla.org/en-US/docs/Web/CSS/revert>`_
- CodePen `demo <https://codepen.io/mirisuzanne/pen/WVjNZP>`_
