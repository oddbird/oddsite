public: no
tags: [CSS, RST, Code]
headline:
  - tagline: 'sample rST document'
    type: 'Documentation'
image:
  - src: 'blog/2017/initial-letter/drop-caps.jpg'
quotes:
  - text: |
      OddBird really changed my thinking about
      how successful outsourcing software development can be.
    name: 'Sara Taillon'
    face: 'sara-taillon.jpg'
    url: 'http://orcasinc.com'
    role: 'CTO'
    slug: 'outsource'
  - text: 'Another Great quote.'
    name: 'Some Client'
    slug: 'great'
summary: |
  This is that short summary that appears on archive pages and as the default
  summary when shared on social media.


This is the Post Title
======================

This is a p tag. Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.

To create more complex, multipart headlines,
you can add metadata to the YAML at the top of the document:

.. code:: yaml

  headline:
    - title: 'This will optionally override the rST title for your headline'
      tagline: 'This will appear under the main title'
      type: 'This will appear in the ribbon above the main title'

The ``headline`` attribute accepts three optional properties.
Most commonly,
the ``tagline`` property can be used to add
a subtitle along side the main title.
In some cases,
it's useful to have a different html ``title`` tag
than the actual headline text.
In that instance,
you can override the headline text
by adding a ``title`` property.
The ``type`` property can be used when the post
belongs in higher level category or series,
like ``Birds Recommend``.

If no ``headline`` is provided,
most posts will use the page title provided,
but pages with a ``project`` element
will generate a headline based on the project name.


This is an H2
-------------

This is a p tag. Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.

This is an H3
~~~~~~~~~~~~~

This is a p tag. Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.

This is an H4
.............

This is a p tag. Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.

This is an H5
+++++++++++++

This is a p tag. Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.

This is an H6
^^^^^^^^^^^^^

This is a p tag. Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.


This is the second H2
---------------------

This is a p tag. Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
ultricies eget, tempor sit amet, ante.

Lists
~~~~~

Unordered Lists
...............

- This is an unordered list
- Pellentesque habitant morbi tristique
- Vestibulum tortor quam, feugiat vitae, ultricies eget

  - Nested list items are indented further
  - Vestibulum tortor quam, feugiat vitae, ultricies eget
  - Vestibulum tortor quam, feugiat vitae, ultricies eget
- Vestibulum tortor quam, feugiat vitae, ultricies eget
- Vestibulum tortor quam, feugiat vitae, ultricies eget


Ordered Lists
.............

1. This is an ordered list with nesting
2. Manual input of numbers/letters
3. Pellentesque habitant morbi tristique
4. Vestibulum tortor quam, feugiat vitae, ultricies eget

   a. Nested list items are indented further
   b. I've used lowercase letters for this nested list
5. Vestibulum tortor quam, feugiat vitae, ultricies eget

..

#. Autonumeration ordered list
#. This is an ordered list
#. Vestibulum tortor quam, feugiat vitae, ultricies eget

   #. Nested list items are indented further
   #. Vestibulum tortor quam, feugiat vitae, ultricies eget
#. Vestibulum tortor quam, feugiat vitae, ultricies eget


Blockquotes and Pullquotes
~~~~~~~~~~~~~~~~~~~~~~~~~~

    This is a blockquote. It has an external source below. Vestibulum tortor
    quam, feugiat vitae, ultricies eget, tempor sit amet, ante.

    --- Name of cited source here preceeded by 2 or 3 ``-`` characters

The `pullquote` macro has a similar style,
but doesn't imply citation from another source:

.. callmacro:: content.macros.j2#pullquote

  A pull-quote is a small selection of text ‘pulled out and quoted’,
  typically in a larger typeface. Pull-quotes are used to attract attention,
  especially in long articles. This does not support rst.

The `get_quotes` macro can be used to access `quotes`,
in the YAML page metadata.
This requires a ``:page:`` argument (see below)
to access the correct page data.
You can also pass a ``:slug:`` argument
to select a specific quote by name,
or a ``:count:`` argument
to get a list of that many quotes.
If neither ``:slug:`` or ``:count:`` are provided,
a list of all quotes will be returned by default.

.. callmacro:: content.macros.j2#get_quotes
  :page: 'docs/sample'

The YAML data should be structured as follows:

.. code:: yaml

  quotes:
    - text: |
        OddBird really changed my thinking about
        how successful outsourcing software development can be.
      name: 'Sara Taillon'
      face: 'sara-taillon.jpg'
      url: 'http://orcasinc.com'
      role: 'CTO'
      slug: 'outsource'

    - text: 'Another Great quote.'
      name: 'Some Client'
      slug: 'great'


Using Macros
~~~~~~~~~~~~

Arbitrary nunjucks/jinja macros can be called
using the following syntax:

.. code:: rst

  .. callmacro:: path-to-macro-file.j2#macro-name
    :argument: 'string values must be quoted'
    :slug: 'path/to/rst-file-for-yaml-access'
    :python: all_pages|filter_pages('slug', 'eq', slug)|get_page

    Arbitrary caller() content string,
    not currently parsed as rst.

The ``path-to-macro-file`` is relative
to the root ``templates/`` directory.
Check the macro description
for available arguments, or callers.
Slugs are often required,
if you need access to page metadata.
Slugs are path-names
relative to the root ``content/`` directory,
with ``.rst`` removed,
and no ``/`` at the start or finish.


Images
~~~~~~

.. callmacro:: utility.macros.j2#img
   :src: "/static/images/blog/oddsite-collage-440.jpg"
   :srcset: "/static/images/blog/oddsite-collage-440.jpg 440w, /static/images/blog/oddsite-collage-800.jpg 800w, /static/images/blog/oddsite-collage.jpg 1600w"


.. image:: /static/images/blog/navdraft.jpg
   :target: http://google.com
   :align: left
   :class: size-quarter img-shadow
   :alt: alternate text here

This image has align set to ``left`` and has a shadow.
rbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam. This is a p tag.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames
ac turpis egestas.

.. image:: /static/images/blog/navdraft.jpg
   :target: http://google.com
   :align: right
   :class: size-quarter
   :alt: alternate text here

This image has align set to ``right`` rbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam. This is a p tag.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames
ac turpis egestas.

This image has align set to ``center``.

.. image:: /static/images/blog/navdraft.jpg
   :align: center
   :class: size-quarter
   :alt: alternate text here


The following example is an image with a class of size-quarter without alignment.

.. image:: /static/images/blog/navdraft.jpg
   :target: http://google.com
   :class: size-quarter
   :alt: alternate text here


The following example is an image with a class of size-half without alignment.

.. image:: /static/images/blog/navdraft.jpg
   :target: http://google.com
   :class: size-half
   :alt: alternate text here


The following example is an image with a class of size-full:

.. image:: /static/images/blog/navdraft.jpg
   :target: http://google.com
   :class: size-full
   :alt: alternate text here


The following example is an image with a class of extend-small:

.. image:: /static/images/blog/2017/tips-tools/love-tools.jpg
   :class: extend-small
   :alt: alternate text here

Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.
Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.

The following example is an image with a class of extend-large:

.. image:: /static/images/blog/2017/tips-tools/love-tools.jpg
   :class: extend-large
   :alt: alternate text here

Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.
Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.

The following example is an image with a class of extend-full:

.. image:: /static/images/blog/2017/tips-tools/love-tools.jpg
   :class: extend-full
   :alt: alternate text here

Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.
Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.

The following example is an image with a class of extend-left:

.. image:: /static/images/blog/2017/tips-tools/love-tools.jpg
   :class: extend-left size-half
   :alt: alternate text here

Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.
Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.

The following example is an image with a class of extend-right:

.. image:: /static/images/blog/2017/tips-tools/love-tools.jpg
   :class: extend-right size-half
   :alt: alternate text here

Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.
Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.

Here is an example of a figure, which is content (usually an image) with a
caption.

.. figure:: /static/images/blog/navdraft.jpg
   :target: http://google.com
   :align: center
   :alt: alternate text here
   :figclass: size-half

   This is my caption for my figure.

Unfortunately, ReStructured Text doesn't wrap them in a <figure> and
<figcaption> element. Instead they get a <div> with a class of figure.
Alignment options can be found in the `content guidelines`_.


Dividers
~~~~~~~~

Options include title (default is none), url (default is none), and small (default is true).

.. code:: rst

  .. callmacro:: content.macros.j2#divider


Divider Title:

.. callmacro:: content.macros.j2#divider
  :title: 'Sample Title'


Divider Title:

.. callmacro:: content.macros.j2#divider
  :title: 'Sample Title with Link'
  :url: 'https://oddbird.net'



Small Divider:

.. callmacro:: content.macros.j2#divider


Large Divider:

.. callmacro:: content.macros.j2#divider
  :small: false



.. _content guidelines: /styleguide

