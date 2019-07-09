public: yes
speakers: [carl]
event_type: talk
events:
  - venue: 'DjangoCon US'
    url: 'https://2011.djangocon.us/'
    date: [2011, 9, 8]
    adr: 'Portland, OR'
    slides: 'http://carljm.github.io/tamingdeps/'
    video_link: 'http://pyvideo.org/djangocon-us-2011/djangocon-2011--taming-dependencies-with-pip.html'
summary: |
  **Dependency management sucks.**
  Pip provides some options for making it suck a bit less,
  but not all of them are immediately obvious.
  This talk will cover a number of strategies
  for making your deployments faster and more reliable,
  and demonstrate how to implement them in practice.


Taming dependencies with pip
============================

Areas we'll cover:

- Easy wins: requirements files, version-pinning, virtualenv, PyPI mirrors.

- One single point of failure is bad, multiple single points of failure are worse: kick your PyPI addiction with find-links, bundling sdists, "vendoring", or your own package index. We'll go over how each of these looks in a real project, and the tradeoffs with each.

This talk will assume basic knowledge of pip and requirements files; we'll be covering intermediate and advanced usage.
