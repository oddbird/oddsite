public: yes
tags: [Vue, Conferences, 'Design Systems', Code, 'Style Guides']
image:
  - src: 'blog/2018/vue-invaders.jpg'
headline:
  - tagline: |
      Talk: `Don't Use My Grid System`_ (with Vue Invaders!)

      .. _`Don't Use My Grid System`: /talks/no-grid-system/
author: miriam
summary: |
  I love when conferences give me
  the opportunity to travel around the world.
  I love it even more when conferences
  go beyond the web
  to find inspiration from other fields.
  `Beyond Tellerand`_ (Düsseldorf, Germany)
  was the best possible combination.

  .. _Beyond Tellerand: https://beyondtellerrand.com/events/duesseldorf-2018/speakers


Beyond Tellerand
================

.. callmacro:: community/events.macros.j2#videos_by_talk
  :slug: 'talks/no-grid-system'
  :venue: 'Beyond Tellerand'
  :slice: 1

.. callmacro:: content.macros.j2#get_quotes
  :page: 'talks/no-grid-system'
  :slug: 'useful'


.. callmacro:: community/subscribe.macros.j2#form
  :interests: ['oddnews', 'beyondtellerand19']

.. callmacro:: content.macros.j2#divider

Right from the start,
Beyond Tellerand was unlike other conferences.
Rather than hearing familiar talks
about familiar technology,
the first day took us on a journey through
web annotations, intricate illustrations,
design for non-designers,
robots with personality,
stop-motion tinkering,
and programatically-generated art.

I spoke on day two,
followed by "bleeding edge" accessibility,
large-scale projection-mapping,
the women who built the internet,
and a lesson on ethics in tech.
How could I even begin to match
the inspirational scope of these other presenters,
while talking about layout?

I couldn't --
but I did have some fun.
Inspired by the generated art
from Jared Tarbell and the `Levitated Toy Factory`_,
I picked `one of his art pieces`_ to recreate
with CSS variables (aka custom properties)
and CSS grid layouts.

.. _Levitated Toy Factory: http://levitated.guru/
.. _one of his art pieces: http://levitated.net/daily/levInvaderFractal.html

.. image:: /static/images/blog/2018/levitated.jpg
  :class: extend-small img-border img-spacing

I spent that evening studying his image,
and translating it into HTML and CSS.
My first draft relied heavily on ``:nth-child()`` selectors,
leading to an absurd 3MB CSS file.
By adding custom properties in the HTML,
I was able to streamline things dramatically.
This `second draft`_ relies on HAML
to generate the required HTML
for a static (but responsive) result.

.. _second draft: https://codepen.io/mirisuzanne/pen/gzXqOP

That went over well at the conference,
but I decided to improve it after the conference was over.
By moving the component logic into `Vue`_,
I could interact with the controls dynamically --
and animate the changes:
shuffling, resizing, and more.
Finally, I pulled in an Asteroids-inspired browser snippet
so you can destroy your creation.
Enjoy the invasion!

.. _Vue: https://vuejs.org/

.. raw:: html

  <figure class="extend-large">
    <p data-height="600" data-theme-id="0" data-slug-hash="LmrEmb" data-default-tab="result" data-user="mirisuzanne" data-embed-version="2" data-pen-title="Vue Invaders!" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/mirisuzanne/pen/LmrEmb/">Vue Invaders!</a> by Miriam Suzanne (<a href="https://codepen.io/mirisuzanne">@mirisuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
  </figure>

I highly recommend watching the other talks.
Here are a few of my favorites:

- `A Tinker Story`_ by dina Amin
- `Broad Band`_ --
  *What History’s Female Internet Pioneers can Teach us about Tomorrow*
  by Claire Evans
- `Generative Spaces`_ by Jared Tarbell
- `How to Build an Atomic Bomb`_ by Mike Monteiro

.. _A Tinker Story: https://beyondtellerrand.com/events/duesseldorf-2018/speakers/dina-amin#talk
.. _Broad Band: https://beyondtellerrand.com/events/duesseldorf-2018/speakers/claire-evans#talk
.. _Generative Spaces: https://beyondtellerrand.com/events/duesseldorf-2018/speakers/jared-tarbell#talk
.. _How to Build an Atomic Bomb: https://beyondtellerrand.com/events/duesseldorf-2018/speakers/mike-monteiro#talk
