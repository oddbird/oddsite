public: yes
location: contact
hide_contact: true
headline:
  - tagline: "Let's get to know each other…"
    type: 'Contact Us'
before:
  - include: 'contact/_form.html.j2'
    submit: 'Send!'
    next: 'contact/thanks/'
social:
  - icon: 'twitter'
    text: '@OddBird'
    url: 'http://twitter.com/oddbird'
  - icon: 'slack'
    text: 'OddFriends'
    url: 'http://friends.oddbird.net/'
  - icon: 'mail'
    text: 'Email'
    url: 'mailto:birds@oddbird.net'
cta_footer:
  - title: 'Ask us anything.'
    project_title: 'Partner with OddBird on Your Next Project'
    contact: 'miriam'
    action:
      text: 'Schedule a call with %s'
      url: '/contact/'
    content: |
      We’re happy to answer your questions, big or small.
      If we’re a good fit for your custom web project,
      we’ll offer a free in-depth assessment!
summary: |
  .. wrap:: div
    :class: contact-intro

    .. callmacro:: birds/utility.macros.j2#face
      :author: 'miriam'

    **We're always happy to talk** –
    whether you have a project in mind,
    or just want to say hi.
    Ask a question,
    inquire about `our packages`_,
    set up a free consultation,
    or invite us to `speak to your company or conference`_.
    `Miriam Suzanne`_
    will get back to you soon.

    .. _our packages: /services/
    .. _speak to your company or conference: /services/speaking/
    .. _Miriam Suzanne: /authors/miriam/


Start a Conversation
====================

There are many ways to start a conversation with us,
so feel free to pick the one that is most comfortable to you:

.. callmacro:: contact/macros.j2#social
