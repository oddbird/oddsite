public: yes
location: case-studies
pageclasses: work-layout
grid_template: true
image:
  - src: 'projects/coachhub.jpg'
logo: 'orcas'
client:
  - name: 'ORCAS'
    url: 'http://orcasinc.com'
project:
  - name: 'CoachHub'
    tagline: 'Integrated Health Coaching'
    url: 'https://coachhub.resilienceboost.com/'
    case_study: true
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
brag: |
  We helped health-coaching experts at ORCAS
  develop a web platform –
  now used by the **US Military**,
  **Coast Guard**,
  and **National Institutes of Health** –
  leading ORCAS to a **successful acquisition**.
quotes:
  - text: |
      OddBird really changed my thinking
      about how successful remote development can be.
      We were able to hire them as a complete team,
      **ready to start adding value immediately**,
      working as closely as an internal team.
    name: 'Sara Taillon'
    role: 'CTO'
    slug: 'remote'
  - text: |
      Since OddBird thinks about handoff from the beginning,
      **maintenance has been super easy**.
      For example, 100% unit test coverage was a given.
      I never had to ask for it.
    name: 'Sara Taillon'
    role: 'CTO'
    slug: 'handoff'
  - text: |
      **Deep expertise and knowledge**,
      combined with **incredible communication**
      and an easy-going style.
    name: 'Sara Taillon'
    role: 'CTO'
    slug: 'experts'
planning:
  - title: 'App Goals'
    icon: 'map'
    text: |
      For an in-depth understanding of the CoachHub project
      and its place in the market, we created an App Goals document with ORCAS.
      We defined core problems coaches and clients face day-to-day,
      how our software might address these problems,
      and what features would make CoachHub uniquely useful.
  - title: 'User Profiles'
    icon: 'users'
    text: |
      Together, we identified three distinct users –
      health coaches, individual clients,
      and business partners who might purchase CoachHub
      for an employee benefits package –
      and detailed the significantly different motivations
      and needs of each persona.
  - title: 'User Stories'
    icon: 'theater'
    text: |
      Each user story defined one task that a specific user
      might want to accomplish on CoachHub.
      <em>(“As a Client, I want to schedule an appointment.”)</em>
      Using <a href="http://www.pivotaltracker.com/">Pivotal Tracker</a>,
      we listed each user story and provided itemized story estimates.
      This allowed ORCAS to add, prioritize, and remove stories
      before we began development and throughout the project –
      remaining up-to-date and in control of the project cost and scope.
  - title: 'Data Models'
    icon: 'site-map'
    text: |
      The data model provides a sense of backend database
      structure and object-relationships,
      built around conversations with the entire team
      to determine not just *what is included*
      but *how users will interact* with the available models:
      <em>
        "A <strong>Client Profile</strong> contains all the public information
        about a CLIENT, for use in Q&A forums, messaging, etc."
      </em>
      The resulting document also acts as a glossary of terms,
      to help the entire team communicate consistently
      and write code that integrates smoothly.
summary: |
  **CoachHub, a responsive coaching web-platform
  we built with ORCAS,**
  integrates with their suite of self-management tools
  to provide users with anywhere, anytime access
  to varying levels of support –
  video chat, in-app messaging, public Q&A, webinars,
  and support groups.
  Users browse coaches, send messages,
  request appointments, post questions,
  and grant permissions for coaches to view their progress.
  Coaches create a profile, manage daily tasks,
  make appointments, post answers to questions,
  view user progress,
  and set alerts for relapse prevention
  and escalation of care.

  The product is `currently being used`_
  by the US Military and Coast Guard
  for internal health coaching.

  .. _currently being used: https://coachhub.resilienceboost.com/


Case Study: CoachHub
====================

.. callmacro:: content.macros.j2#get_quotes
  :page: 'work/coachhub'


.. callmacro:: content.macros.j2#rst
  :tag: 'start'

What They Needed
----------------

`ORCAS`_ partnered with OddBird to build a custom,
responsive web application –
a hub to connect clients with health coaches
for easy access to personalized wellness guidance and support.
The new software needed to fit with ORCAS's existing suite of apps,
especially `MoodHacker`_,
a tool for self-management of emotional well-being.

.. _ORCAS: http://orcasinc.com
.. _MoodHacker: http://www.orcasinc.com/products/moodhacker/

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
  :data: page.config.planning


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
of static-HTML content templates –
a living draft of the site architecture,
with samples of real content.
For each step in the flow
we asked: how did the user get here,
what do they need to achieve,
and where are they going next?

As we interacted with this visualization,
it became clear, for example, that we needed
to replace the browse-coaches page
and the my-coaches page
with an ever-present sidebar,
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
Like their existing apps –
MoodHacker and BlipHub –
the CoachHub logo and overall brand
are bright, cheerful, and hopeful.

.. figure:: /static/images/work/coachhub/color-palette.jpg
   :class: extend-small
   :alt: palette showing primary and secondary colors

   Full color palette derived from three basic brand colors.


.. figure:: /static/images/work/coachhub/logo.jpg
   :class: align-center
   :alt: CoachHub logo

   Rounded edges and a playful curl evoke feelings of friendliness and
   movement. New life, change, and hope: turning over a new leaf.


.. image:: /static/images/work/coachhub/avatars-small.jpg
   :class: extend-left
   :alt: leaf avatar collage


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
Integrating design and implementation helped us minimize time and money waste.

.. figure:: /static/images/work/coachhub/profiles.jpg
   :class: extend-full
   :alt: screenshots of design in small and wide screen formats

   Starting with designs for the smallest, mobile screens sizes helped
   clarify and prioritize relevant information for each user.


.. figure:: /static/images/work/coachhub/interactive.jpg
   :class: extend-small img-shadow
   :alt: design of sliding panel over calendar

   Interaction can become distracting if implemented for its own sake.
   Sliding side panels and realtime chat serve the needs of the user,
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


Accessibility
~~~~~~~~~~~~~

Accessibility is built into the core technologies and techniques we use on
every project: accessible HTML5, unobtrusive Javascript, and mobile-responsive
CSS styles. We make it a priority from the beginning of each project – using
progressive enhancement and responsive design to support a broad range of
users, devices, and browsers. For CoachHub we also used Lea Verou's `Contrast
Ratio`_ tool to select colors for text that passed WCAG AA level at all sizes.
We also built a WCAG contrast test into our `Sass Accoutrement toolkits`_.

.. _Contrast Ratio: http://leaverou.github.io/contrast-ratio/
.. _Sass Accoutrement toolkits: /open-source/accoutrement/


Landing Pages
~~~~~~~~~~~~~

In conversation with ORCAS's internal team, we designed graphics, recommended
and edited text, and identified important “call to action” steps to create a
relevant and compelling landing pages for different users.

.. image:: /static/images/work/coachhub/splash-final-2.jpg
  :alt: final design for landing page
  :class: extend-full img-shadow


On-Going Design
---------------

CoachHub launched with a minimum viable set of features, and room to grow. We
continue to work periodically with ORCAS's internal development team,
consulting on the design and flow of new features as CoachHub expands to
accommodate the needs of their growing user-base – people who use it every day
to improve their health and wellness, or as part of their work coaching others.

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
