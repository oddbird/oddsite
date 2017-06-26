public: yes
location: case-studies
pageclasses: work-layout
grid_template: true
image:
  - src: 'projects/qasper.jpg'
    type: 'hero'
  - src: 'projects/qasper-splash.jpg'
    type: 'splash'
client:
  - name: 'SRAM'
    url: 'http://sram.com/'
project:
  - name: 'QuarqNet'
    tagline: 'Real-Time Telemetry for Athletes'
    url: 'http://quarqnet.com'
    years: '2015–2016'
    status: 'live'
quotes:
  - text: “A mobile-friendly design that will let users see the live tracking
      and performance data, even on the go, making it easy to connect up
      with others while out on a ride.”
    name: 'BikeRumor'
    role: 'QuarqNet Review'
    url: 'https://www.bikerumor.com/2016/09/28/share-ride-real-time-quarq-qollector/'
  - text: “<b>QuarqNet</b> captures the data
      and seamlessly synchronizes activities
      with analysis sites like Strava, TrainingPeaks, and Today’s Plan.
      Athletes get unaltered, high-definition data
      and training log perfection.”
    name: 'AeroGeeks'
    role: 'QuarqNet Review'
    url: 'http://aerogeeks.com/2016/10/09/10-9-2016-wir-the-kona-edition/'
tasks:
  - Product Branding
  - User Experience Design
  - Project Architecture
  - Responsive Styles
planning:
  - title: 'User Profiles'
    icon: 'users'
    text: |
      Together, we identified three distinct users –
      athletes, coaches, and friends/family.
      Each type of user
      wanted to use QuarqNet
      in unique ways.
      Athletes, the primary users,
      might use the app
      to track routes and stats
      in real time,
      connect with other athletes,
      or share stats on 3rd party sites.
      A friend may want to
      check an athlete's location
      to meet up for an activity,
      and a coach may want to
      track an athlete's progress over time.
  - title: 'User Stories'
    icon: 'theater'
    text: |
      We created an itemized list of user stories -
      a representation of all the user interactions.
      Each user story defined one task
      that an athlete, coach, or friend
      might want to accomplish on QuarqNet.
      Before beginning development,
      we estimated the users stories
      and Quarq prioritized them.
      The process of
      creating, estimating, and prioritizing users stories
      continued throughout the project,
      allowing Quarq to remain up-to-date
      and in control of the project cost and scope.
  - title: 'Data Models'
    icon: 'site-map'
    text: |
      The data model provides a sense
      of backend database structure
      and object-relationships,
      built around conversations with the entire team
      to determine not just *what is included*
      but *how users will interact*
      with the available models:
      “An ACTIVITY represents a single timespan
      during which a user’s Qollector was turned on.”
      The resulting document also acts as
      a glossary of terms,
      to help the entire team communicate consistently
      and write code that integrates smoothly.
summary: |
  QuarqNet allows athletes to track and analyze their activities,
  sharing their location and statistics
  with friends, family, coaches, and colleagues in real time.
  QuarqNet also integrates with
  Quarq’s telemetry and reporting hardware,
  and third-party services
  like Strava, Training Peaks, Dropbox, and Today’s Plan.


Case Study: QuarqNet
====================

.. callmacro:: content.macros.j2#get_quotes
  :slug: 'work/quarqnet'

.. callmacro:: content.macros.j2#rst
  :tag: 'start'

What They Needed
----------------

`Quarq`_ partnered with OddBird to
to redesign and refactor Quarqnet,
their existing activity tracking web application
for professional athletes –
making it responsive and user-friendly.

.. _Quarq: https://www.quarq.com

QuarqNet needed to integrate
with Quarq's existing brand,
both the e-commerce site
and the packaging and printed collatoral
for the Qollector,
Quarq's wearable tracking hardware.
QuarqNet also matches `Quarq Race Intelligence`_,
another Quarq web application
OddBird had the privilege to develop.

.. _Quarq Race Intelligence: https://www.quarqrace.com/

.. callmacro:: content.macros.j2#rst
  :tag: 'end'


.. callmacro:: content.macros.j2#icon_block
  :title: 'Planning & Discovery Phase'
  :slug: 'work/quarqnet'
  :data: 'planning'


.. callmacro:: content.macros.j2#rst
  :tag: 'start'


UX Design & Development Process
-------------------------------

User Story
~~~~~~~~~~

OddBird's user experience
design and development process
always begins with a user story,
written from the perspective of a single user.
One of the very first user stories
on the list for QuarqNet was:

*As an athlete, I can view my activity (map & data).*

Communication
~~~~~~~~~~~~~

Before diving into process details,
a word about communication.
At the beginning of each project,
we establish a communication system
for designers, developers, and clients -
a shared Slack channel
for daily communication and
a schedule for weekly video meetings.
User stories are prioritized in Pivotal Tracker
and contain scope goals and a task list.
To establish color patterns for QuarqNet,
OddBird designers started with
the existing brand colors
and selected related user interface colors.
These colors were communicated via Pivotal Tracker
and coded as Sass Maps
to establish front-end development patterns
as well as an automated "living" `style guide`_.

.. _style guide: http://quarqnet.com/styleguide/config-colors.html

.. figure:: /static/images/work/quarqnet/communication.jpg
   :class: extend-large
   :alt: user story in Pivotal Tracker and Sass color maps

Initial Sketches
~~~~~~~~~~~~~~~~

.. image:: /static/images/work/quarqnet/activity.jpg
   :class: extend-left img-shadow
   :alt: initial sketch of activity map and data

Because of our focus on users,
OddBird's development process
for each user story
begins with rough sketches
showing the flow of the user
through the content.
The athletes using QuarqNet
needed easy access to the map of their route
as well as the activity data.
This initial design proposal
displays the map and activity details together
in a single view.
No clicking necessary
to access the most useful information
on both mobile and larger screens.

Hi-Fi Mockups
~~~~~~~~~~~~~

After the design direction
for a user story is approved,
we create static or interactive mockups
often using Adobe Xd.
These mockups allow us
to experiment with brand implementation
as well as clarify user flow and interaction -
identifying sticking points
and iterating quickly.
In conversation with Quarq,
it became clear that activity data needed a new layout
to improve scannability.
We don't linger too long on this step
or attempt pixel perfection
as new UX problems nearly always present themselves
during implementation.

.. image:: /static/images/work/quarqnet/mockup1.jpg
   :class: extend-large
   :alt: initial mockups of activity map and data

Implementation
~~~~~~~~~~~~~~

Additional UX design iteration
happens during implementation
as we begin to interact with the new features
in the context of the browser.
Whether working with our own internal developers
or partnering with external developers,
we maintain a tight a feedback loop
between designers and developers
as well as the clients at this stage.
We have frequent video calls
to demo, discuss, pair, and re-design features.
For this QuarqNet feature,
we improved the dotted line, font size, and spacing
of the activity data
within the browser.

.. image:: /static/images/work/quarqnet/implementation1.jpg
   :class: extend-small img-shadow
   :alt: initial implementation of activity map and data

Bug Story
~~~~~~~~~

As we work our way
through the list of user stories
and test the implemented features with users,
bugs and user flow issues are identified.
The activity data box on QuarqNet
became cluttered over time.
We needed to use the same box
to show both activity data,
a list of past activities,
and much more.
During testing,
users were not able to understand
how to move quickly
between the pieces of information they needed.
A new Bug Story was born:

*The multiple click targets
around an activity
(switch to list, hide/show details)
are not clear enough.*

Iteration - Sketches
~~~~~~~~~~~~~~~~~~~~

.. image:: /static/images/work/quarqnet/tabs.jpg
   :class: extend-left img-shadow
   :alt: sketch to clarifty click targets

Again, we began with rough sketches.
Our designers proposed clearly labeled tabs
as a solution
to the Bug Story.

Iteration - Hi-Fi Mockups
~~~~~~~~~~~~~~~~~~~~~~~~~~

Hi-fi mockups helped us work out specific details
like wording, icons, colors and styles
for active and inactive tabs,
and a button
for minimizing the activity list.

.. image:: /static/images/work/quarqnet/mockup2.jpg
   :class: extend-large
   :alt: mockup for tab navigation

Implementation
~~~~~~~~~~~~~~

.. image:: /static/images/work/quarqnet/implementation2.jpg
   :class: extend-large
   :alt: implementation of tab navigation

User Story
~~~~~~~~~~

Our tab solution for the Bug Story
clarified navigation flow
between activity data and list views,
but created a new UX problem.
The tabs hid too much of the map
from the user's view,
especially on small, mobile screens.
Because QuarqNet users
would be using the application
primarily on mobile screens, this was a no go.
So, we created a new User Story
and went back to work:

*As an athlete, I want to move quickly and easily
between activity list and detail.*

Iteration - Sketches
~~~~~~~~~~~~~~~~~~~~

Back to the sketch pad.
The new proposal?
Remove the bulky circle button.
Make the tabs more compact,
and move navigation
to the bottom of the activity box.

.. image:: /static/images/work/quarqnet/compact.jpg
   :class: extend-full
   :alt: sketch of new, compact navigation

Interactive Sketch
~~~~~~~~~~~~~~~~~~

For this complex user experience interaction,
our designers fleshed out the proposal further
with a cross between a sketch
and an interactive mockup.
The blue boxes above respresent click targets
and demonstrate the user flow
between activity list, data, and collapsed views.
Play with the interactive `InVision sketch`_.

.. _InVision sketch: https://invis.io/YC8PAW1K3#/191020362_Map_Only

.. image:: /static/images/work/quarqnet/interactive.jpg
   :class: extend-large
   :alt: interactive sketch of new, compact navigation

Iteration - Hi-Fi Mockup
~~~~~~~~~~~~~~~~~~~~~~~~

A hi-fi mockup added further detail,
defining colors, shadows, icons,
and other visual clues
to improve user comprehension
of the new flow.

.. image:: /static/images/work/quarqnet/mockup3.jpg
   :class: extend-large img-shadow
   :alt: mockup of new, compact navigation

Implementation
~~~~~~~~~~~~~~

After minor design tweaks in the browser,
we had our solution!
View the current, live application
at `QuarqNet.com`_.

.. _QuarqNet.com: https://www.quarq.com

.. image:: /static/images/work/quarqnet/implementation3.jpg
   :class: extend-large
   :alt: current, live application tab navigation

.. callmacro:: content.macros.j2#rst
  :tag: 'end'
