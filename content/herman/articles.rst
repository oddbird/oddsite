public: yes
location: hermansite-articles
template: 'hermansite/layout.html'
grid_template: true
hide_title: true
headline:
  - type: 'Herman Articles'
    tagline: 'What people are saying about Herman…'
summary: |
  **There are many ways to use Herman**.
  As we write or discover new articles and videos,
  we’ll add them here.


Articles, Podcasts, & Tutorials
===============================

.. callmacro:: content.macros.j2#link_list
  :title: 'Herman 1.x'
  :tag: 'Herman'

.. callmacro:: content.macros.j2#get_quotes
  :page: 'herman/index'
  :slug: 'dream'
