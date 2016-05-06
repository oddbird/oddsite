public: yes
location: home
comments: False

projects:
  - name: CoachHub
    summary: Integrated Health Coaching
    client: ORCAS
    quote:
      text: 'OddBird really changed my thinking about how successful outsourcing software development can be.'
      credit: 'Sara Taillon, ORCAS'

  - name: MozTrap
    summary: Quality Assurance Tools
    client: Mozilla

  - name: Quarq Race Intelligence
    summary: Real-Time Race Analytics
    client: SRAM

  - name: Susy
    summary: Web Layout Power-Tools
    client: open-source
    birds: Miriam Suzanne
    quote:
      text: 'I like the idea of grids on demand, rather than a strict framework.'
      credit: 'Chris Coyier, CodePen'

  - name: True
    summary: Sass Unit Testing
    client: open-source
    birds: Miriam Suzanne

after:
  - include: 'modules/_projects.html.j2'
    title: Client Work
    title_url: /work/
    filter: clients
  - include: 'modules/_projects.html.j2'
    title: Open-Source Software
    title_url: /community/
    filter: open-source
  - include: 'blog/_recent-posts.html.j2'
    title: OddBlog
    title_url: /blog/
    count: 3


We create custom web apps that people use
=========================================

Whether `designing and building web apps`_
for companies like Mozilla and ORCAS,
or `working on open-source tools`_ like Django and Susy —
OddBird thrives on playful collaboration,
molding great ideas into experiences that people love.

.. _designing and building web apps: /work/
.. _working on open-source tools: /community/

|get-started|

.. |get-started| raw:: html

  <a href="/contact/" data-btn="cta">
    Start a conversation about your project »
  </a>
