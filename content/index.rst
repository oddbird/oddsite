public: yes
location: home
grid_template: true
headline:
  - type: 'Application Design & Development'
dynamic_title:
  - template: 'Oddly %s software development'
    options:
      - name: 'accessible'
        tagline: |
          The world is diverse,
          and no user is an *edge case*...
      - name: 'human'
        tagline: |
          Great software requires a personal touch…
      - name: 'nimble'
        tagline: |
          Our tightly-integrated team
          can adapt quickly to your needs…
      - name: 'queer'
        tagline: |
          Moving past "normal"
          to explore new possibilities…
      - name: 'robust'
        tagline: |
          100% test coverage,
          code review,
          and documentation keep maintenance costs low…
      - name: 'thoughtful'
        tagline: |
          We don't know the answer,
          but we know how to get there…
        default: true
      - name: 'top-shelf'
        tagline: |
          We build the tools
          that millions of developers rely on…
      - name: 'transparent'
        tagline: |
          Daily communication keeps you in control
          of the budget and priorities…


Software for Humans
===================

.. callmacro:: home.macros.j2#letter
  :author: 'miriam'
  :action: 'Open the conversation'
  :target: '/contact/'

  I co-founded OddBird with my brothers
  `Jonny`_ and `Carl`_ in 2008,
  providing custom web & mobile application development.

  .. _Carl: /authors/carl/
  .. _Jonny: /authors/jonny/

  While we've quickly become industry leaders --
  creators and core developers of tools
  like `Susy`_ & `Django`_
  that larger agencies rely on --
  we intentionally keep our team small.
  Our size allows us to move quickly,
  and integrate with your team
  for an agile and collaborative process.
  Together, we can build software
  that reflects your unique vision and expertise.

  .. _Susy: /susy/
  .. _Django: /open-source/

  - **Because we're small**,
    you get direct access to our entire
    `team of designers & developers`_,
    with full transparency and daily communication.
  - **Because we're experts**,
    we can guide you smoothly through the entire process,
    navigating issues before they arise.
  - **Because we integrate** `design and code and content`_,
    our software is built to last,
    and keep your maintenance costs low.

  .. _`team of designers & developers`: /birds/
  .. _design and code and content: /services/

  We know you have options,
  and we'd love to talk more.
  We think you'll be happy with the results.


.. callmacro:: projects/splash.macros.j2#splash_list
  :headline: 'Featured Clients'
  :url: '/work/'


.. callmacro:: content.macros.j2#divider

.. callmacro:: content.macros.j2#get_quotes
  :page: 'work/coachhub'
  :slug: 'remote'

.. callmacro:: content.macros.j2#image_block
  :image: '/static/images/projects/trig-mobile.jpg'
  :headline: 'Are We The Right Fit For You?'

  **Software is successful
  when it solves real problems in people's lives.**
  We can help you find those solutions --
  with 100% test coverage,
  robust architecture,
  and living style guides.
  *Enjoy low on-going maintenance,
  and significant savings for years.*

  .. callmacro:: content.macros.j2#link_button
    :url: '/contact/'

    Start the conversation

.. callmacro:: content.macros.j2#get_quotes
  :page: 'work/coachhub'
  :slug: 'handoff'


.. callmacro:: content.macros.j2#divider
  :title: 'Human-Driven Design'

.. callmacro:: utility.macros.j2#link_if
  :url: '/birds/'
  :class: 'home-birds'
  :rst: true

  .. callmacro:: utility.macros.j2#icon
    :name: 'allbirds'
    :alt: 'Meet the birds: Miriam, Jonny, Carl, Sondra, David, Stacy, and Kit'

.. callmacro:: content.macros.j2#rst
  :tag: 'start'

**Our process is agile, collaborative, friendly, and transparent.**
You'll have direct access to `our entire team`_,
as we get to know your goals inside and out.

.. _our entire team: /birds/

.. callmacro:: content.macros.j2#rst
  :tag: 'end'

.. callmacro:: content.macros.j2#divider



.. callmacro:: content.macros.j2#get_quotes
  :page: 'work/medcurbside'
  :slug: 'goals'

.. callmacro:: content.macros.j2#image_block
  :image: '/static/images/pages/jssass.png'
  :url: 'https://www.sitepoint.com/premium/books/jump-start-sass'
  :headline: 'Industry-Leading Expertise'

  **We write the books,
  contribute to the languages,
  and build the tools**
  that other developers rely on.
  *We don't just follow best-practice –
  we help define it.*

  .. _Miriam: /authors/miriam/
  .. _Carl: /authors/carl/
  .. _Sass/CSS: http://sass-lang.com
  .. _Django/Python: https://www.djangoproject.com/

  .. callmacro:: content.macros.j2#link_button
    :url: '/contact/'

    Jump start your project

.. callmacro:: content.macros.j2#get_quotes
  :page: 'work/timedesigner'
  :slug: 'innovative'


.. callmacro:: projects/splash.macros.j2#splash_list
  :headline: 'Tools for Developers'
  :url: '/open-source/'
  :slugs: ['herman/index', 'open-source/django', 'susy/index']
