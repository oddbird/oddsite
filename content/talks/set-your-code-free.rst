public: yes
speakers: [carl]
talk: true
events:
  - venue: 'PyCon'
    url: 'https://us.pycon.org/2014/'
    date: [2014, 4, 13]
    slides: '/set-your-code-free-preso/'
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nHWRN5gCPSI" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
summary: |
  **Got some code that you've written that would be useful to others**,
  but actually releasing it feels like too much new stuff to figure out?
  Releasing software does take some work,
  but this talk will take you step-by-step through the process
  with specific recommendations and tools.
  We'll cover preparing your code for release, packaging it,
  releasing it, and maintaining it over time.


Set Your Code Free
==================

There are a lot of things to think about when releasing code to the world, if you want others to be able to use it and contribute back. We'll cover:

- The structure of an open-source Python project
- Choosing a license
- Documentation with Sphinx and ReadTheDocs
- Multi-version testing with Tox, coverage measurement with coverage.py, and continuous integration with TravisCI
- Writing a setup.py and releasing to PyPI
- Semantic versioning
- Helping people contribute to your project
