public: yes
speakers: [miriam]
headline:
  - tagline: Allow us to be more explicit & expressive about layouts
event_type: video
image:
  - src: 'mozdev/multi-display.png'
events:
  - venue: 'Mozilla Developer'
    date: [2019, 10, 28]
    video_link: 'https://www.youtube.com/watch?v=GAjoVRmipcU'
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GAjoVRmipcU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    post: '/2019/10/28/multi-display/'
summary: |
  The ``display`` property has been in CSS from the beginning,
  handling everything from ``block`` and ``inline`` boxes
  to ``list-items`` and full layout systems like ``flexbox`` or ``grid``.
  Now the ``display`` syntax is getting an upgrade
  to match its multiple uses.


Inner & Outer Values of the Display Property
============================================

The new ``display`` spec adds ``flow`` and ``flow-root`` values,
and allows for setting inner layout (``grid``, ``flex``, etc)
as well as outer box type (``inline``, ``block``), and more.

It might not be something we use much right away --
but it still helps me understand all the power inside this one property.
