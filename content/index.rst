public: yes
location: home
headline:
  - type: 'Custom Web App Design & Development'
grid_template: true
dynamic_title:
  - template: 'Oddly %s'
    options:
      - name: 'accessible'
        tagline: |
          The world is diverse,
          & no user is an "edge case"...
      - name: 'approachable'
        tagline: |
          Your friend in digital
          design, development, & performance...
        default: true
      - name: 'human'
        tagline: |
          Great software requires a personal touch...
      - name: 'nimble'
        tagline: |
          Our tightly-integrated team
          can adapt quickly to your needs...
      - name: 'queer'
        tagline: |
          Moving past "normal"
          to explore new possibilities...
      - name: 'robust'
        tagline: |
          100% test coverage
          & documentation keep maintenance costs low...
      - name: 'thoughtful'
        tagline: |
          We don't know the answer,
          but we know how to get there...
      - name: 'top-shelf'
        tagline: |
          We build the tools
          that millions of developers rely on...
      - name: 'transparent'
        tagline: |
          Daily communication keeps you in control
          of budget & priorities...


Software for Humans
===================

.. callmacro:: home.macros.j2#letter
  :image: '/static/images/pages/letter-phones.jpg'
  :author: 'miriam'

  I co-founded OddBird with my brothers in 2008
  to provide custom **web application design and development**
  as well as **performance and accessibility refactors**.

  Pay only for the hours you need, and enjoy
  **low maintenance and significant savings for years.**
  We think you’ll be happy with the results.

.. callmacro:: content.macros.j2#get_quotes
  :page: 'work/coachhub'
  :slug: 'remote'

.. callmacro:: projects/splash.macros.j2#splash_list
  :headline: 'Featured Projects'
  :url: '/work/'

.. callmacro:: content.macros.j2#divider
  :title: 'Human-Driven Design'

.. callmacro:: birds/macros.j2#home_faces
  :authors: ['carl', 'kit', 'stacy', 'miriam', 'sondra', 'jonny']

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
  With expertise in
  Python/Django, accessible HTML, modern Sass/CSS,
  Vue, Node, Backbone/Marionette, and more --
  *We don't just follow best-practice,
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
