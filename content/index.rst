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
  to help you create **scalable web applications**
  with **human-centered design**,
  **performance**,
  and **accessibility**.

  From custom builds to consulting and refactors:
  we'll provide an established team of experts to fit your needs.
  Our well-tested and documented code will keep
  **maintenance costs low, for significant long-term savings**.
  We think you’ll be happy with the results.

  .. callmacro:: content.macros.j2#link_button
    :url: '/contact/'

    Let's talk about your project

.. callmacro:: content.macros.j2#two_quotes
  :quotes: [
      ['work/coachhub', 'remote'],
      ['work/medcurbside', 'goals'],
    ]

.. callmacro:: projects/splash.macros.j2#splash_list
  :headline: 'Industries We Serve'
  :url: '/work/'

.. callmacro:: birds/macros.j2#home_faces
  :authors: ['carl', 'kit', 'stacy', 'miriam', 'sondra', 'jonny']

.. callmacro:: content.macros.j2#two_quotes
  :quotes: [
      ['work/timedesigner', 'innovative'],
      ['work/coachhub', 'handoff'],
    ]

.. callmacro:: content.macros.j2#image_block
  :image: '/static/images/pages/jssass.png'
  :url: 'https://www.sitepoint.com/premium/books/jump-start-sass'
  :headline: 'Performant Python, JavaScript, & CSS'

  We write the books,
  contribute to the languages,
  and build the tools
  that other developers rely on.
  Let's create a
  **custom digital experience
  that delights** your customers.

  **Language & Platform Expertise**:

  - Python/Django
  - Sass/CSS
  - Vue & React
  - Backbone/Marionette
  - Node
  - WordPress & Other CMS solutions

  *We don't just follow best-practice,
  we help define it.*

  .. callmacro:: content.macros.j2#link_button
    :url: '/contact/'

    Jump start your project

.. callmacro:: projects/splash.macros.j2#splash_list
  :headline: 'Developer Tools We Build'
  :url: '/open-source/'
  :slugs: ['herman/index', 'open-source/django', 'susy/index']
