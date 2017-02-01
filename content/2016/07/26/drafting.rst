public: no
author: miriam
tags: [OddSite, 'Open Design', Process]
image:
  - src: 'oddsite.jpg'
after:
  - include: 'blog/_tag-module.html.j2'
    title: 'OddSite Re-design Timeline'
    tag: 'Open Design'
    id: 'open-design-articles'


Shitty First Drafts
===================

Before I found my accidental career in web development,
I studied theater and writing.
Art-making is still a big part of my career:
I published a novel last year,
and my band
(with Sondra on drums!)
is playing a music festival later this week.
While it can be hard to balance work
with personal projects,
I've found that the skills overlap in exciting ways —
each feeding off the other.

As a process geek,
I find that especially true
in the ways creative inspiration
and production are handled.
Original ensemble "devised" theater
is a great way to learn project management
and the basics of open-source collaboration.
The same is true in reverse.
My art is better for
an understanding of usability testing,
and inspiration-on-deadline,
but my work is better for
a willingness to invite the audience somewhere new.

Everyone who has trained as a writer
knows about "Shitty First Drafts" —
that phrase coined by Anne Lamott,
which translates roughly to a web-developer's
rough prototype and agile development — 
launching early and often.
The goal is to get something, *anything*,
that you can view as a proof-of-concept,
and iterate from there.
Don't worry about the quality,
remind yourself it can be shitty,
and just get something out there.

When I say I am a process geek,
I am not a fanatic.
I like to watch and understand
how different processes help in different situations —
without being locked into any One True Path.
In most of my work,
the shitty first draft happens
when I'm already 75% of the way done.
I think in five stages,
borrowed from Don Fry’s Writing Your Way:

1. **Define**: What’s the seed idea, question, or hypothesis?
2. **Explore**: Research, gather, and create the materials.
3. **Organize**: Outline the structure, or impose one.
4. **Draft**: Compile a complete, shitty first draft.
5. **Revise**: Consider, critique, edit, and iterate as needed.

The goal is never to follow these five stages in a strict order,
but to pay attention to where you are,
moving between different mindsets as needed.
Exploration is an expansive act,
while organization helps constrict and contain the project.
That rhythm, back and forth,
is what drives a creative process,
and results in a first draft.


An OddSite History
------------------

All that to say:
showing our first draft is a far cry from
showing you where we started.
We wanted to start with something you could look at —
a live, active, usable first draft —
and take our open design from there.
But drafting was a lot of work,
and I wish we had launched even earlier.
I'll make a note for next time.

We used a single-page static site
for the first several years of our existence.
In 2011 we moved to a `Django backend`_
similar to our setup for most client applications at the time,
but it remained a single-page site.
That was clearly overkill,
so within a year we were looking at
python static-site generators —
briefly using `Pelican`_
before we `landed on`_ `rstBlog`_.
We picked it because it was simple,
flexible,
and written in Python.

It wasn't documented, though.
This is still the full documentation of rstBlog:

> My NIH static blog replacement for my old dynamic blog.

  Totally nothing new but does the trick for me.

Since then,
I've moved every site I own onto rstBlog,
and learned to bend it to my will
using `YAML`_ for a database,
`Jinja2`_ for templates.
With hours of trial and error,
I've developed my own system
for generating modular components
and accessing them from any page.
I'm not sure that it's the best option,
but it's the one I've used for years,
and so far it is getting the job done.

Now is a good time to reconsider,
and we will probably discuss it at some length —
but inertia is a powerful force,
and not to be taken lightly.

.. _Django backend: https://github.com/oddbird/oddsite/tree/1cffc8c20fce0a22d8cd6f3cc32046ca36ff5e7b
.. _Pelican: http://docs.getpelican.com/
.. _landed on: https://github.com/oddbird/oddsite/tree/b776a68889234429de054547734ac0d2591a3f60
.. _rstBlog: https://github.com/mitsuhiko/rstblog
.. _YAML: http://yaml.org/
.. _Jinja2: http://jinja.pocoo.org/


Defining Goals & Exploring Possibilities
----------------------------------------

- review of existing site and goals
- Sondra's initial sketches


Organizing the Data
-------------------

- stripping out the old
- new data


Drafting the Site
-----------------

- modular components
- basic typography


YAML, RST, and Jinja2
---------------------

- yaml database
- rst content
- rstBlog generator
- j2 templates


Sass Toolkits and Configuration
-------------------------------

- accoutrement-init
- accoutrement-type
- accoutrement-colors
- more?...
