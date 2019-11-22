public: yes
speakers: [miriam]
headline:
  - tagline: |
      Just in time for
      `Selectors Level 4 <https://www.w3.org/TR/selectors-4/>`_!
event_type: video
image:
  - src: 'mozdev/supports_selector.png'
events:
  - venue: 'Mozilla Developer'
    date: [2019, 11, 20]
    video_link: 'https://www.youtube.com/watch?v=WjvJheGhHIQ'
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WjvJheGhHIQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    post: '/2019/11/20/supports-selector/'
summary: |
  Firefox 69 was the first to implement selector feature queries,
  but other browsers are following suit.
  I'll show you how it works,
  and how to start using this new feature query right away.


Use new selectors responsibly with selector queries
===================================================

There are many ways to start using a new feature in CSS
without waiting for full cross-browser support,
but "feature queries" are the most clear and explicit.
We can use them to test for browser support,
and provide targeted styles only where they are supported.
Now we can do the same with new selectors,
like ``::marker`` or ``:focus-visible``!

- `Firefox 69 Release Notes <https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/69>`_
- `MDN <https://developer.mozilla.org/en-US/docs/Web/CSS/@supports#Testing_for_the_support_of_a_selector>`_
- `Caniuse <https://caniuse.com/#feat=mdn-css_at-rules_supports_selector>`_
- `Demos <https://mozdemos.netlify.com/support-selector/>`_
