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
(referred to internally as "OddSite").
There's more than we can do in one pass,
so we're going to take things slow
and re-design our site in the open —
talking about our choices while we work.

**You can get involved in several ways:**

- Join our `public Slack chat`_ for front-row access to the process.
  Ask us questions, provide feedback,
  and hang-out with us along the way.
- Follow our progress on `Github`_.
- Talk to us on `Twitter`_.
- Check back here for regular updates and `articles`_ as we work.
  We'll add each blog post to the timeline below:

.. _public Slack chat: http://friends.oddbird.net
.. _Github: https://github.com/oddbird/oddsite/
.. _Twitter: http://twitter.com/oddbird
.. _articles: #open-design-articles


What to Expect
--------------

At OddBird, we are very familiar
with open-source collaboration,
and daily client feedback,
but designing a site in the open is new to us.
Luckily, `we're not the first to do it`_.
There's a broad range of open-design practices,
so we'll mix-and-match to see what works for us.

We decided to re-design our live site,
rather than starting from scratch
on a staging server somewhere else.
That means we'll be taking live traffic while we work,
and using continuous integration
to make updates on a regular basis.
It also means we needed a usable draft to start from.
We'll post more about that drafting process
in the next week or two.

In addition to the public conversation channels listed above,
we'll be posting regular updates on our blog,
showing the process we go through,
the decisions we've made,
and the tools we used to get it done.

.. _we're not the first to do it: http://bradfrost.com/blog/post/designing-in-the-open/


Odd Process
-----------

These are the rough stages we expect to go through:

1. **Planning and Rough Drafts** —
   You're looking at a first rough sketch
   of the site contents and organization.
   Miriam and Sondra put together this draft
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
   and sorting out exactly what user stories are most important,
   and how those stories can best be achieved.
3. **Code Architecture** — 
   With a better view of our own content,
   we'll spend some time improving
   the data structures, views, and templates
   that drive the site.
   We're using `rstBlog`_ —
   a powerful but poorly-documented Python static-site generator —
   so it will take some customization,
   and a lot of documentation,
   to make sure we have a maintainable system going forward.
   We want to encourage our team to update the site regularly,
   so it's important that we get the development experience right.
4. **Design and Interaction** —
   In a flip from the traditional waterfall model,
   we save most of our graphic design work for the end of the process.
   In reality,
   our designers are involved at every stage of the process.
   Sondra made a few photoshop sketches
   to get us started on this first draft,
   and we'll generate more sketches
   to help us understand the architecture and flow
   as we move forward.
   But once everything is in place,
   we will be able to make much more clear and informed decisions
   about the final visual details.

.. _rstBlog: https://github.com/mitsuhiko/rstblog


Rinse and Repeat
----------------

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
