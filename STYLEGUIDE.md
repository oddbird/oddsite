Style Guide *&* Pattern Library
===============================

This is the living style guide for
[OddSite](http://oddbird.net)
and associated OddBird branding materials.

It is still in development,
using OddBird's
[Accoutrement](http://oddbird.net/accoutrement/) and
[Herman](https://github.com/oddbird/sassdoc-theme-herman/)
open-source toolkits
to automate as much living documentation as possible.

Writing Content
===============

When creating content it is important to stay consistent. Review a
[sample blog post](/docs/sample), and keep in mind the following guidelines:


Blockquotes
-----------

- Content in a ``<blockquote>`` does not need quotation marks or italics.
The CSS does the styling.
- Blockquotes should be used when quoting another source. Blockquotes require 4
spaces.

```nohighlight
    This is a blockquote with citation. Vestibulum tortor quam, feugiat vitae,
    ultricies eget, tempor sit amet, ante.

    --Person Name
```


Branding
--------

- Always capitalize the “O” and “B” in OddBird and OddSite.


Dashes
------
- En Dash – Used to show ranges of things (e.g. ``January–March``)
- Em Dash — Instead of using em-dashes for asides as suggested by the The Chicago Manual of Style, using `space` `en-dash` `space` makes the block of text more readable. (e.g. ``this thing – and also that thing – etc``) [Read more here](https://www.smashingmagazine.com/2011/08/mind-your-en-and-em-dashes-typographic-etiquette/#the-en-dash-and-the-em-dash
)
- Citations still needs 2-3 dashes to trigger the attribution class


Headlines
---------

- Use Title Case: Capitalize the first letter of every word except articles,
prepositions, and conjunctions.
- Do not use punctuation at the end of your title unless it contains more than
one sentence or is a question.


Images
------

- When using an image within the post content, provide an alt description
for screen readers and search engines. Alt text should describe what is in
the image.
- We have some utility classes for images and figures and will be adding more
soon. As of January 31, 2017 you may use the following:
  - ``size-quarter``
  - ``size-half``
  - ``size-full``
  - ``img-border`` adds a hairline, helpful when using a screenshot with a
  white background.
- *Note:* If declaring a size, it remains this size regardless of screen size.
- ``:align:`` accepts ``left``, ``right`` or ``center`` and outputs as a class.
- This is how you add alignment, alt text, classes and links in RST:

```nohighlight
.. image:: /static/images/blog/miko.jpg
   :align: right
   :alt: Miko smiling while playing outside
   :class: size-quarter img-border
   :target: https://supportada.org/?campaign=python
```

Intro
-----

- WIP - We will be featuring an introductory paragraph in each post.
Stay tuned for details.


Line Length
-----------
- For line length, we follow the [PEP 8 - Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/#maximum-line-length) which allows 79 characters.


Links
-----

- Use links. To our posts and to external sources. Linking is good.
- Links should open in the same window/tab unless there is a task being
completed on that page that would lose a persons progress like
filling out a form.


Summary
-------

- Each post should have a summary. This is shown on the archive pages
(home and birds if recent, blog archive, tag archive) and when sharing
on content to social sites.
- The summary should not be repeated as the intro in the post.
- It is created near the top of the document and format is as follows:

```nohighlight
summary: |
  This is your short summary. You can include a excerpt that will appear
  on the archive pages and as the default social media summary.
```


Tags
----

- Any post that contains a code sample should use the ``code`` tag.
- Use the plural version of a word if available.
For example, ``videos`` even if one video is referenced in the post.
- Reference the [tag list](/tags/) before deciding on which
tags to use in order to avoid variations of the same topic.
- Tags are Title Case.
- Tags with multiple words should have spaces instead of dashes unless the
phrase is hyphenated. Multi-word tags need to be declared as a string:

```nohighlight
tag: ['Open Design', OddSite]
```

- Tags are used to show related content. Think about what topics
were covered in this post that would help the reader find a related article.
- Adding tags when you are finished writing might result in cleaner and more
accurate tags.
- Posts that talk about sponsorship should include the ``community`` tag.
