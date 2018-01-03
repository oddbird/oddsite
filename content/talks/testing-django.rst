public: yes
speakers: [carl]
events:
  - venue: 'PyCon'
    url: 'https://us.pycon.org/2012/'
    date: [2012, 3, 10]
    adr: 'Santa Clara, CA'
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ickNQcNXiS4" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
    feature: true
summary: |
  Django has a fair bit of custom test code: a custom TestSuiteRunner, custom
  TestCase subclasses, some test-only monkeypatches to core Django code, and a
  raft of testing utilities. I'll cover as much of that code as I find
  interesting and non-trivial, taking a close look at what it's actually doing
  and what that means for your tests.


Testing and Django
==================

This will be a highly opinionated talk. There are some things in Django's test
code I really don't like; I'll talk about why, and how I'd like to see them
changed. As a natural part of this, I'll also be outlining some principles I
try to follow for writing effective and maintainable tests, and note where
Django makes it easy or hard.

This is an "extreme" talk, so I'll be assuming you've used Django and done some
testing, and you're familiar with the basic concepts of each. This won't be an
introductory "testing with Django" howto.
