public: yes
location: home
grid_template: true
hide_title: true
splash:
  - big: |
      Digital Product
      <a href="/work/services/">Design</a> &
      <a href="/work/services/">Development</a>,
      Integrated for Long-Term Success.<span class="home-star">*</span>
    small: |
      |*| We help build and refactor
      custom `mobile & web applications`_.
      You’ll get a `complete team`_ of designers and developers
      ready to integrate with your company,
      scale your application,
      and improve your results.

      .. |*| raw:: html

        <span class="home-star">*</span>
        <abbr title="Too long; didn't read…">tl;dr</abbr>

      .. _`mobile & web applications`: /work/
      .. _complete team: /birds/

    action: Schedule a free consultation
    target: /contact/


Software for Humans
===================

.. callmacro:: home.macros.j2#home_cta
  :page: 'index'
  :slug: 'splash'


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
