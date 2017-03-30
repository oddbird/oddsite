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
  - Accessible Interface
  - Custom Django Application
  - Integrated Style Guide
  - Information Architecture
  - Logo and Brand Identity
  - Responsive Design
  - Project Architecture
  - User Experience Design
  - WCAG & HIPPA Compliant

quotes:
  - text: 'OddBird really changed my thinking about
      how successful outsourcing software development can be.'
    name: 'Sara Taillon'
    role: 'ORCAS CTO'
planning:
  - title: 'App Goals'
    icon: 'map'
    text: 'For an in-depth understanding of the CoachHub project
      and its place in the market, we created an App Goals document with ORCAS.
      We defined core problems coaches and clients face day-to-day,
      how our software might address these problems,
      and what features would make CoachHub uniquely useful.'
  - title: 'User Profiles'
    icon: 'users'
    text: 'Together, we identified three distinct users —
      health coaches, individual clients,
      and business partners who might purchase CoachHub
      for an employee benefits package —
      and detailed the significantly different motivations
      and needs of each persona.'
  - title: 'User Stories'
    icon: 'theater'
    text: 'Each user story defined one task that a specific user
      might want to accomplish on CoachHub.
      (“As a Client, I want to schedule an appointment.”)
      Using Pivotal Tracker we listed each user story and
      provided itemized story estimates.
      This allowed ORCAS to add, prioritized, and remove stories
      before we began development, and throughout the project —
      remaining up-to-date and in control of the project cost and scope.'
  - title: 'Data Models'
    icon: 'site-map'
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
  and grant permissions for coaches to view their progress. Coaches create a
  profile, manage daily tasks,
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

.. image:: /static/images/work/coachhub/browse-coach-sitemap.jpg
   :alt: site map for browsing coaches
   :class: extend-left img-shadow

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

.. figure:: /static/images/work/coachhub/color-palette.jpg
   :class: extend-small
   :alt: palette showing primary and secondary colors

   Full color palette derived from three basic brand colors.


.. figure:: /static/images/work/coachhub/logo.jpg
   :class: align-center
   :alt: CoachHub logo

   Rounded edges and a playful curl, evoke feelings of friendliness and
   movement. New life, change, and hope: turning over a new leaf.



.. raw:: html

   <picture class="extend-left">

      <source media="(min-width: 613px)"
              srcset="/static/images/work/coachhub/avatars-large.jpg,
                      /static/images/work/coachhub/avatars-large@2x.jpg 2x">

      <source srcset="/static/images/work/coachhub/avatars-small.jpg,
                      /static/images/work/coachhub/avatars-small@2x.jpg 2x">

      <img src="/static/images/work/coachhub/avatars-small.jpg">
   </picture>


We then created hundreds of unique avatar designs from just a few unique leaf
graphics dynamically rendered using light and dark contrasts of our colors and
rotation of the leaves.


Responsive & Interactive UX Design
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

User experience design guides feature development. Working feature-by-feature,
we created rough sketches of each feature to get a sense of the components
and layout. With approved sketches, we moved on to detailed designs and live
implementation. As time went on patterns developed, and features began moving
directly from sketch to code, allowing us to move quickly and efficiently.
Integrating design and implementation helped us minimize time and money waste
implementing poorly-considered features.

.. figure:: /static/images/work/coachhub/profiles.jpg
   :class: extend-full
   :alt: screenshots of design in small and wide screen formats

   Starting with designs for the smallest, mobile screens sizes helped
   clarify and prioritize relevant information for each user.


.. figure:: /static/images/work/coachhub/interactive.jpg
   :class: extend-small img-shadow
   :alt: design of sliding panel over calendar

   Interaction can become distracting if implemented for its own sake.
   Sliding side panels and realtime chat, serve the needs of the user,
   highlighting particular features or important information.




Usability Testing
~~~~~~~~~~~~~~~~~

Usability testing guided us in prioritizing feature development and adjusting
UX design along the way, ensuring that CoachHub would be useful and relevant
to users and partners.

.. figure:: /static/images/work/coachhub/calendars.jpg
   :class: extend-large
   :alt: different view designs for the appointment calendar

   As we observed users navigating the app, it became clear that the
   appointment calendar needed distinct views and interactions for
   coaches and clients.


Accessibilty
~~~~~~~~~~~~

Accessibility is built into the core technologies and techniques we use on
every project: accessible HTML5, unobtrusive Javascript, and mobile-responsive
CSS styles. We make it a priority from the beginning of each project — using
progressive enhancement and responsive design to support a broad range of
users, devices, and browsers. For CoachHub we also used Lea Verou’s Contrast
Ratio tool to select colors for text that passed WCAG AA level at all sizes.
We also built a WCAG contrast test into our Sass Accoutrement toolkits.


Landing Pages
~~~~~~~~~~~~~

In conversation with ORCAS’s internal team, we designed graphics, recommended
and edited text, and identified important “call to action” steps to create a
relevant and compelling landing pages for different users.


.. image:: /static/images/blog/2016/coachhub/splash-final-2.jpg
  :alt: final design for landing page
  :class: extend-full img-shadow


On-Going Design
---------------

CoachHub launched with a minimum viable set of features, and room to grow. We
continue to work periodically with ORCAS’s internal development team,
consulting on the design and flow of new features as CoachHub expands to
accommodate the needs of their growing user-base — people who use it every day
to improve their health and wellness, or as part of their work coaching others.

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
