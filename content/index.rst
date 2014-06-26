public: yes
location: home
comments: False
before:
  - include: 'modules/_org.html.j2'
after:
  - include: 'modules/_talks.html.j2'
    time: future
    title: Future
    count: 6
  - include: 'modules/_talks.html.j2'
    time: past
    title: Past
    count: 6
  - include: 'modules/_recent-posts.html.j2'


Custom web tools for humans
===========================


Odd Projects
------------

We love molding ideas into experiences,
and tools that people can use —
from open-source projects like `Django`_, `Compass`_, and `Susy`_,
to web applications for `Mozilla`_, `The K Network`_,
`Providence Plan`_, `Junyo`_,
and our ongoing experiments in `digital storytelling`_.

.. _Django: https://www.djangoproject.com/
.. _Compass: http://compass-style.org/
.. _Susy: http://susy.oddbird.net/
.. _Mozilla: #
.. _The K Network: #
.. _Providence Plan: #
.. _Junyo: #
.. _digital storytelling: #


Odd Process
-----------

1. We use a **lean** process to
   deploy & integrate new functionality frequently,
   aiming to deliver usable product launches
   as early and often as possible.

2. We encourage clients to stay closely **connected** with the daily progress,
   offering frequent feedback
   and re-prioritization
   via `Pivotal Tracker`_.

3. We work with the **accessible** open web stack:
   semantic HTML5 markup,
   unobtrusive Javascript,
   and advanced CSS3 styling.
   On the server side we use Python_,
   and have extensive Django_ experience.

.. _Pivotal Tracker: http://pivotaltracker.com/
.. _Python: http://www.python.org/
