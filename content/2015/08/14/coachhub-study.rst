public: yes
tags: [client-work, case-study]
image:
  - src: '2016/coachhub/feature.jpg'
client:
  - name: 'ORCAS'
    url: 'http://orcasinc.com'
project:
  - name: 'CoachHub'
    url: 'http://www.orcasinc.com/products/coachhub/'
    years: '2014-2016'
    feature: true
quotes:
  - text: 'OddBird really changed my thinking about how successful outsourcing software development can be.'
    credit: 'Sara Taillon'
    title: 'ORCAS, Chief Technical Officer'
summary: |
  Our mobile coaching platform for ORCAS
  integrates with their suite of self-management tools,
  as well as other vetted third-party apps —
  providing users with anywhere,
  anytime access to varying levels of support via video chat,
  in-app messaging, public Q&A, webinars, and support groups.
  Users browse coaches, send messages, request appointments,
  post questions, and grant permissions
  for coaches to view their progress.
  Coaches create a profile, manage daily tasks,
  make appointments, post answers to questions,
  view user progress, and set alerts
  for relapse prevention and escalation of care.
  The product is currently being used
  by the US Military and Coast Guard as an employee health benefit.


CoachHub: Integrated Health Coaching
====================================

`CoachHub`_ is a mobile coaching platform
we buit with `ORCAS`_ —
integrating with their suite of self-management tools,
as well as other vetted third-party apps —
and providing users with anywhere, anytime access
to varying levels of support via video chat,
in-app messaging, public Q&A, webinars, and support groups.
Users browse coaches, send messages, request appointments,
post questions, and grant permissions for coaches to view their progress.
Coaches create a profile, manage daily tasks,
make appointments, post answers to questions, view user progress,
and set alerts for relapse prevention and escalation of care.
The product is currently being used
by the `US Military`_ and Coast Guard
for internal health coaching.

.. _CoachHub: http://www.orcasinc.com/products/coachhub/
.. _ORCAS: http://www.orcasinc.com/
.. _US Military: http://www.militaryonesource.mil/confidential-help/other-services-and-counseling?content_id=289449


What They Needed
----------------

ORCAS partnered with OddBird to build a custom,
mobile-responsive, web application —
a hub to connect clients with health coaches for easy
access to personalized wellness guidance and support.
The new software needed to work with ORCAS’s existing suite of apps,
especially `MoodHacker`_,
a tool for self-management of emotional well-being.

Studies show that telephonic health coaching can be effective,
but ORCAS identified several barriers
keeping clients from getting
the right level of support when they need it.
In designing the CoachHub web app,
we aimed to create an inviting space
for clients and coaches to quickly and easily
access one another in dynamic and effective ways.

.. _MoodHacker: http://www.orcasinc.com/products/moodhacker/


Planning *&* Discovery Phase
----------------------------

Collaboration & Coordination
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Since we use a tightly integrated and collaborative process,
we started by establishing a communication schedule with ORCAS -
Monday video meetings with both teams to demo new features,
Thursday video sprint-planning meetings
for team leaders to review priorities
and discuss upcoming features,
and a dedicated Slack chat
for continuous conversation throughout the week.

Vision & Strategy
~~~~~~~~~~~~~~~~~

For an in-depth understanding of the CoachHub project
and its place in the market,
we created a vision & strategy document with ORCAS —
getting to the core of the problems
faced by coaches and clients day-to-day,
how our software could most help solve those problems,
where CoachHub would fit in relation to various competitors,
and what approaches would make it unique.

User Profiles
~~~~~~~~~~~~~

Together, we created profiles of the desired users —
asking who they were,
how the application would fit the schedule of their day,
and what they needed to accomplish
at different times from different devices?
We identified three distinct users —
health coaches,
individual clients,
and business partners
who would include CoachHub as part of a benefits package —
and detailed the significantly different motivations
and needs of each persona.

User Stories
~~~~~~~~~~~~

Out of that conversation,
we documented **user stories** in `Pivotal Tracker`_,
where we could easily track progress, assign tasks, and manage priorities.
Each story describes one goal
that a specific user would want to accomplish on CoachHub —
*as a <user-type>, I want to <accomplish x task>*.
We also used Tracker to provide itemized estimates for each story,
allowing ORCAS to add, prioritized, and remove stories
before we started, and throughout the project —
remaining up-to-date and in control of the project cost and scope.

.. _Pivotal Tracker: @@@


Design *&* Development Phase
----------------------------

Site Architecture *&* Information Design
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In order to get the whole team using the same language,
we created a glossary of terms
(client, coach, chart, goal, permission, etc.)
and the relationships between them.
A client can have one or more coaches,
every client has a chart with apps,
and can grant detailed chart-app permissions to each coach.
That glossary defined a shared basis
for both database design
and user-facing information architecture.

.. figure:: /static/images/blog/2016/coachhub/browse-coach-sitemap.jpg
   :figwidth: 20em
   :align: left

   *Early content template for browsing coaches,
   with just enough design to make it readable.*

Mapping our glossary relationships onto the User Stories,
we were able to lay out possible user-flows for any given situation.
For each step in the flow we asked
*how did the user get here*,
*what do they need to achieve*,
and *where were they going next*?
We created an interactive web of static-HTML **content templates** —
a living draft of the site architecture, with samples of real content.
Interacting with the template architecture helped us find patterns.
We replaced the browse-coaches page,
and the my-coaches page with an ever-present sidebar
giving you one-click access to coaches.

Several pages stood out
as important starting-points,
and those pages moved into the site navigation.
We also added a dashboard
to give a quick overview of activity on the site.

Before developing any real functionality,
we already had a live,
interactive,
and testable prototype
of the information architecture and user-experience flows.
Building features would be a matter of replacing static content
with live data.


Brand Identity
~~~~~~~~~~~~~~
We worked with ORCAS to pinpoint
the emotions and associations
they wanted the CoachHub brand to evoke,
and created a friendly, distinct brand identity.
Like their existing apps —
MoodHacker and BlipHub (pictured below) —
the CoachHub logo and overall brand are
bright, cheerful, and hopeful.

We started with three basic brand colors
and derived a full color palette from those.
The palette gave us the wide range of colors we would needed
to create a vibrant garden throughout the app.

.. image:: /static/images/blog/2016/coachhub/color-palette.jpg

The leaf logo, with its rounded edges and playful curl,
evokes feelings of friendliness and movement
as well as the ideas of new life, change, and hope:
turning over a new leaf.

.. figure:: /static/images/blog/2016/coachhub/logo-drafts2.jpg

   *Early logo draft sketches*

.. figure:: /static/images/blog/2016/coachhub/logo-drafts1.jpg

   *Designed logo drafts*

.. figure:: /static/images/blog/2016/coachhub/logo.jpg

   *Final logo*

We then created hundreds of unique avatar designs
from just a few unique leaf graphics
dynamically rendered using light and dark contrasts of our colors
and rotation of the leaves.
Because each of ORCAS’s partners will have the option to re-brand,
we designed CoachHub to easily accommodate
alternate logos and color palettes.

.. image:: /static/images/blog/2016/coachhub/avatars.jpg


Responsive *&* Interactive UX Design
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

User experience design guides feature development.
Working feature-by-feature,
we created rough sketches of each features
to get a sense of the components and their layouts.
With approved sketches,
we moved on to more fleshed-out designs and live implementation.
As time went on patterns developed,
and features began moving directly from sketch to code,
helping us move quickly and efficiently.
Integrating design and implementation
helps us minimize any wasted time and money
implementing poorly-considered features.

.. figure:: /static/images/blog/2016/coachhub/browse-coach-sketch.jpg

   *Early UX sketch for Browse Coaches*

.. figure:: /static/images/blog/2016/coachhub/browse-coach-final.jpg

   *Final design for Browse Coaches*

We designed wireframes and mockups
for mobile devices first.
Starting with designs for the smallest,
most restricted screen sizes helped further clarify
and prioritize relevant information for each user.

.. image:: /static/images/blog/2016/coachhub/profile-mobile.jpg
   :width: 50%
   :align: left

.. image:: /static/images/blog/2016/coachhub/browse-mobile.jpg
   :width: 50%
   :align: right

.. figure:: /static/images/blog/2016/coachhub/profile-desktop.jpg

   *Views of coach profile*

CoachHub has many interactive features
including the appointment calendar
that allows coaches to set availability
and clients to request appointments in available slots.
There are side panels that appear to request appointments,
take wellness tests, and set preferences.
CoachHub offers realtime chat
and notifications that fly in at the top of the screen.

Interaction can become distracting if implemented for its own sake.
In CoachHub these interactive features serve the needs of the user,
highlighting particular features or important information.

.. figure:: /static/images/blog/2016/coachhub/interactive.jpg

   *A sidebar with dynamic content
   slides in when a user clicks an appointment time*


Usability Testing
-----------------

ORCAS staff lead usability testing
at several stages throughout the development process
with one or more OddBird team members observing.
Sessions were recorded for later reference.
Usability testing guided us in prioritizing feature development,
making adjustments along the way,
and ensuring that CoachHub would be useful
and relevant to their users and partners.

This step proved vital to the UX design
of complex and interactive elements
such as the appointment calendar.
As we watched users navigate the app,
it became clear that the appointment calendar needed
different views and interactions for coaches and clients.

.. figure:: /static/images/blog/2016/coachhub/calendar-coach.jpg

   *Coach office hours calendar view*

.. figure:: /static/images/blog/2016/coachhub/calendar-client.jpg

   *Client appointment schedule calendar view*


Accessibilty
------------

Accessibility is built into the core technologies
and techniques we use on every project:
accessible HTML5, unobtrusive Javascript,
and mobile-responsive CSS styles.
We make it a priority from the beginning of each project —
using progressive enhancement and responsive design
to support a broad range of users, devices, and browsers.
For CoachHub we also used
Lea Verou's `Contrast Ratio`_ tool
to select colors for text that passed WCAG AA level at all sizes.
We also built a WCAG contrast test into our
`Sass Accoutrement toolkits`_.

.. _Contrast Ratio: http://leaverou.github.io/contrast-ratio/
.. _Sass Accoutrement toolkits: http://oddbird.net/accoutrement/


Landing Pages
-------------

We designed several different landing pages
based on user type and status
with unique calls-to-action to motivate engagement
and highlight next steps.
In conversation with ORCAS’s internal team,
we designed graphics,
recommended and edited text,
and identified important "call to action" steps
to create a relevant and compelling marketing message.

.. figure:: /static/images/blog/2016/coachhub/splash-draft.jpg

   *Early wireframe of layout, design, and text*

.. figure:: /static/images/blog/2016/coachhub/splash-final-2.jpg

   *Final design and text*


On-Going Design
---------------

CoachHub launched with a minimum viable set of features, and room to grow.
We continue to work periodically with ORCAS’s internal development team,
consulting on the design and flow of new features
as CoachHub expands to accommodate the needs of their growing user-base —
people who use it every day to improve their health and wellness,
or as part of their work coaching others.
