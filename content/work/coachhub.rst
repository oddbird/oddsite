public: yes
location: work
grid_template: true
image:
  - src: '2016/coachhub/feature.jpg'
client:
  - name: 'ORCAS'
    url: 'http://orcasinc.com'
project:
  - name: 'CoachHub'
    tagline: 'Integrated Health Coaching for ORCAS'
    url: 'http://www.orcasinc.com/products/coachhub/'
    years: '2014–2016'
    status: 'live'
tasks:
  - Product Branding
  - User Experience Design
  - Project Architecture
  - Mobile-Responsive Styles
quotes:
  - text: 'OddBird really changed my thinking about
      how successful outsourcing software development can be.'
    name: 'Sara Taillon'
    url: 'http://google.com'
    role: 'ORCAS CTO'
planning:
  - title: 'App Goals'
    icon: 'miriam'
    text: 'For an in-depth understanding of the CoachHub project
      and its place in the market, we created an App Goals document with ORCAS.
      We defined core problems coaches and clients face day-to-day,
      how our software might address these problems,
      and what features would make CoachHub uniquely useful.'
  - title: 'User Profiles'
    icon: 'miriam'
    text: 'Together, we identified three distinct users —
      health coaches, individual clients,
      and business partners who might purchase CoachHub
      for an employee benefits package —
      and detailed the significantly different motivations
      and needs of each persona.'
  - title: 'User Stories'
    icon: 'miriam'
    text: 'Each user story defined one task that a specific user
      might want to accomplish on CoachHub.
      (“As a Client, I want to schedule an appointment.”)
      Using Pivotal Tracker we listed each user story and
      provided itemized story estimates.
      This allowed ORCAS to add, prioritized, and remove stories
      before we began development, and throughout the project —
      remaining up-to-date and in control of the project cost and scope.'
  - title: 'Data Models'
    icon: 'miriam'
    text: 'Placeholder text...'
summary: |
  **CoachHub, a responsive web app coaching platform
  we built with ORCAS,**
  integrates with their suite of self-management tools,
  as well as other vetted third-party apps,
  and provides users with anywhere, anytime access
  to varying levels of support via video chat,
  in-app messaging, public Q&A, webinars,
  and support groups.
  Users browse coaches, send messages,
  request appointments, post questions,
  and grant permissions for coaches to view their progress. Coaches create a profile, manage daily tasks,
  make appointments, post answers to questions,
  view user progress,
  and set alerts for relapse prevention
  and escalation of care.
  The product is currently being used
  by the US Military and Coast Guard
  for internal health coaching.


CoachHub Case Study
===================

.. callmacro:: projects/case-study.macros.j2#front_matter
  :slug: 'work/coachhub'


.. callmacro:: content.macros.j2#rst
  :tag: 'start'

What They Needed
----------------

ORCAS partnered with OddBird to build a custom,
mobile-responsive web application —
a hub to connect clients with health coaches
for easy access to personalized wellness guidance and support.
The new software needed to fit with ORCAS’s existing suite of apps,
especially MoodHacker,
a tool for self-management of emotional well-being.

Studies show that telephonic health coaching can be effective,
but ORCAS identified several barriers keeping clients
from getting the right level of support when they need it.
In designing the CoachHub web app,
we aimed to create an inviting space for clients and coaches
to quickly and easily access one another in dynamic and effective ways.

.. callmacro:: content.macros.j2#rst
  :tag: 'end'


.. callmacro:: content.macros.j2#icon_block
  :title: 'Planning & Discovery Phase'
  :slug: 'work/coachhub'
  :data: 'planning'


.. callmacro:: content.macros.j2#rst
  :tag: 'start'

Design and Development Phase
----------------------------

Site Architecture & Information Design
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: /static/images/blog/2016/coachhub/browse-coach-sitemap.jpg
   :alt: site map for browsing coaches
   :class: extend-left

We created an interactive web
of static-HTML content templates —
a living draft of the site architecture,
with samples of real content.
For each step in the flow
we asked: how did the user get here,
what do they need to achieve,
and where are they going next?

As we interacted with this visualization,
it became clear that we needed
to replace the browse-coaches page,
and the my-coaches page
with an ever-present sidebar
providing one-click access to coaches.
Several pages stood out
as important starting-points for users,
and those pages moved into the site navigation.
We also added a dashboard
to give a quick overview of
activity on the site.

Before developing any real functionality,
we already had a live, interactive,
and testable prototype
of the information architecture
and user-experience flows.
Building features would be a matter
of replacing static content with live data.

.. figure:: https://dummyimage.com/1000x9:6
   :class: extend-small
   :alt: map to buried treasure

   This is an image with the extend-small class.


Brand Identity
~~~~~~~~~~~~~~

We worked with ORCAS
to pinpoint the attitude and associations
they wanted the CoachHub brand to evoke,
and created a friendly, distinct brand identity.
Like their existing apps —
MoodHacker and BlipHub (pictured below) —
the CoachHub logo and overall brand
are bright, cheerful, and hopeful.

.. figure:: http://dummyimage.com/1600x250/777777/777777.png
   :class: extend-large
   :alt: map to buried treasure
   :target: http://google.com

   Full color palette derived from three basic brand colors.


Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
turpis egestas. Vestibulum tortor quamr facilisis. Ut felis.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacusvel augue laoreet rutrum faucibus dolor auctor.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
turpis egestas. Vestibulum tortor quamr facilisis. Ut felis.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacusvel augue laoreet rutrum faucibus dolor auctor.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

.. figure:: http://dummyimage.com/1100x350/777777/777777.png
   :class: extend-small
   :alt: map to buried treasure

   Full color palette derived from three basic brand colors.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
turpis egestas. Vestibulum tortor quamr facilisis. Ut felis.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacusvel augue laoreet rutrum faucibus dolor auctor.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
turpis egestas. Vestibulum tortor quamr facilisis. Ut felis.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacusvel augue laoreet rutrum faucibus dolor auctor.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.


Responsive & Interactive UX Design
----------------------------------

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
turpis egestas. Vestibulum tortor quamr facilisis. Ut felis.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacusvel augue laoreet rutrum faucibus dolor auctor.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
turpis egestas. Vestibulum tortor quamr facilisis. Ut felis.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacusvel augue laoreet rutrum faucibus dolor auctor.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

.. image:: http://dummyimage.com/200x200/777777/ffffff.png
  :alt: image alt
  :class: extend-right

This image has a class of extend-right.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
turpis egestas. Vestibulum tortor quamr facilisis. Ut felis.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacusvel augue laoreet rutrum faucibus dolor auctor.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
turpis egestas. Vestibulum tortor quamr facilisis. Ut felis.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacusvel augue laoreet rutrum faucibus dolor auctor.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
turpis egestas. Vestibulum tortor quamr facilisis. Ut felis.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacusvel augue laoreet rutrum faucibus dolor auctor.
Nullam id dolor id nibh ultricies vehicula ut id elit.
Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

Below is a full width image with the ``.extend-full`` class
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: http://dummyimage.com/1600x200/777777/ffffff.png
  :alt: image alt
  :class: extend-full

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
