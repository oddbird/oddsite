public: no
author: stacy
tags: [CSS, Code]
title: This is the H1 Post Title
image:
  - src: '2017/initial-letter/drop-caps.jpg'
summary: |
  This is that short summary that appears on archive pages and as the default
  summary when shared on social media.


======================
This is the Post Title
======================

This is a p tag. Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam.

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


This is the second Post Title
-----------------------------

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


    This is a blockquote with citation. Vestibulum tortor quam, feugiat vitae,
    ultricies eget, tempor sit amet, ante.

    --Name of cited source here preceeded by 2 or 3 ``-`` characters


.. epigraph::

    Gives the blockquote a class of ``epigraph``.

    --Name of cited source here preceeded by 2 or 3 ``-`` characters


.. highlights::

    Highlights summarize the main points of a document or section, often
    consisting of a list. Gives the blockquote a class of ``highlights``.


.. pull-quote::

    A pull-quote is a small selection of text ‘pulled out and quoted’,
    typically in a larger typeface. Pull-quotes are used to attract attention,
    especially in long articles. Gives the blockquote a class of
    ``pull-quote``.



Images
~~~~~~

.. callmacro:: utility.macros.j2#img
   :src: "/static/images/blog/oddsite-collage-440.jpg"
   :srcset: "/static/images/blog/oddsite-collage-440.jpg 440w, /static/images/blog/oddsite-collage-800.jpg 800w, /static/images/blog/oddsite-collage.jpg 1600w"


.. image:: /static/images/blog/navdraft.jpg
   :target: http://google.com
   :align: left
   :class: size-quarter
   :alt: alternate text here

This image has align set to ``left`` rbi tristique senectus et netus et
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


Here is an example of a figure, which is content (usually an image) with a
caption.

.. figure:: /static/images/blog/navdraft.jpg
   :target: http://google.com
   :align: center
   :alt: alternate text here
   :figclass: size-half

   This is my caption for my figure.

Unfortunately, ReStructured Text doesn't wrap them in a <figure> and <figcaption>
element. Instead they get a <div> with a class of figure. Alignment options can
be found in the `content guidelines`_.

.. _content guidelines: /styleguide


