public: yes
author: miriam
tags: [oddsite, open-design]
image:
  - src: 'oddsite.jpg'
summary: |
  We’re re-building our website in the open,
  and writing about our process along the way.
  We hope you'll follow along and even get involved!
after:
  - include: 'blog/_tag-module.html.j2'
    title: 'OddSite Re-design Timeline'
    tag: open-design
    id: 'open-design-articles'


Open Design for OddBird.net
===========================

It's time for a major overhaul of the OddBird website,
referred to internally as our **OddSite**.
This will be more work than we can handle in one pass,
so we're going to take things slow
and re-design our site in the open —
sharing our thoughts while we work.


You can get involved in several ways:
-------------------------------------

- **Feedback and Conversation:**
  Join our `open Slack channel`_
  for front-row access to the process.
  Ask us questions, provide feedback,
  and hang-out with us along the way.
  You can also
  talk to us on `Twitter`_.
- **Live Site and Open Code:**
  Follow our progress here and on `Github`_.
- **Articles and Artifacts:**
  Check back here for regular posts as we work.
  We'll update the `timeline`_ at the bottom of this page.

.. _open Slack channel: http://friends.oddbird.net
.. _Github: https://github.com/oddbird/oddsite/
.. _Twitter: http://twitter.com/oddbird
.. _timeline: #open-design-articles


What is open design?
--------------------

At OddBird, we are very familiar
with `open-source collaboration`_,
and daily client feedback,
but designing a site in the open is new to us.
Luckily, `we're not the first to do it`_.
There's a broad range of open-design practices,
so we'll mix-and-match to see what works for us.

We decided to re-design our live site,
rather than starting from scratch
on a private staging server.
That means we'll be taking live traffic while we work,
and using `continuous integration`_
to make updates on a regular basis.
It also means we needed a usable first draft,
so the site would work publically from day one.
We'll post more about that drafting process
in the next week or two.

You'll be able to see the site live as it develops,
but we'll also post articles along the way —
capturing screen shots of the site at different stages,
sharing artifacts from the design process
(such as sketches and planning documents),
and telling stories about our process and decision making.
We also have our `source code`_ available on GitHub,
and will talk about the open-source tools we use,
and share any tools we build.

.. _open-source collaboration: /open-source/
.. _we're not the first to do it: http://bradfrost.com/blog/post/designing-in-the-open/
.. _continuous integration: https://en.wikipedia.org/wiki/Continuous_integration
.. _source code: https://github.com/oddbird/oddsite/


Our process from here...
------------------------

These are the rough stages we expect to go through:

1. **Planning and Rough Drafts** —
   You're looking at a first rough outline
   of the site contents and organization.
   `Miriam`_ and `Sondra`_ put together this draft
   based on conversations with the team,
   as a proposal to discuss.
   At this point everything is still up for debate.

2. **Information Architecture** —
   Before we dive into the fun design work,
   we want to make sure that all our content is in place,
   visitors can find the information they need,
   and we're telling the story we want to tell.
   We need to spend some time looking at it,
   playing with it,
   sorting out exactly what user stories are most important,
   and planning how those stories can be achieved.

3. **Code Architecture** — 
   With a better view of our own content,
   we'll spend some time improving
   the data structures, views, and templates
   that drive the site.
   We're using `rstBlog`_ —
   a powerful but poorly-documented Python static-site generator —
   so it will take some customization
   and a lot of documentation
   to make sure we have a maintainable site going forward.
   We want to encourage regular updates,
   so it's important that we get the development flow right.

4. **Design and Interaction** —
   We save most of our graphic design work for the end of the process.
   In reality,
   our designers are involved at every stage,
   guiding the planning and architecture from the start.
   `Sondra`_ made a few photoshop sketches
   to get us started on this first draft,
   and we'll generate more sketches
   to help us understand the architecture and flow
   as we move forward.
   But once everything is in place,
   we will be able to make much more clear and informed decisions
   about the final visual details.

.. _rstBlog: https://github.com/mitsuhiko/rstblog
.. _Miriam: /birds/#bird-miriam
.. _Sondra: /birds/#bird-sondra


Rinse and repeat...
-------------------

The steps can be listed like a numbered waterfall,
but that's not how it will happen in practice.
The site goals will get broken down into distinct user stories,
and each story will reflect
a microcosm of the larger process.
Changes to architecture will affect how we think about user stories,
and "final" changes to design will affect the architecture.
The process is flexible,
and we can move around as we need to,
but having a general order reminds us
what is most important to focus on at each stage of the process.
