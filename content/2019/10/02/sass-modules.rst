public: yes
author: miriam
headline:
  - tagline: 'Getting started with ``@use`` and ``@forward``'
    type: 'Tutorial'
tags: [Sass, Code, Tutorial, Modules]
image:
  - src: 'projects/sass.jpg'
summary: |
  `Dart Sass`_ (the primary Sass implementation)
  released version ``1.23.0`` last night
  with a major new feature: **modules**.
  This is a common feature in many languages --
  but for those of us who primarily write CSS,
  it can be a big mental shift.
  Let's take a look at the basics.

  .. _Dart Sass: https://www.npmjs.com/package/sass


Sass Modules, a Primer
======================

Don't worry if it doesn't make sense right away:
this version is completely backwards compatible,
and we have at least a year
before anything will be deprecated
from the old way of doing things.

During that transition period:

- There are built-in features to help library authors
  take advantage of the new syntax
  without deprecating the old.
- Stylesheet authors can use the new syntax,
  even if they rely on libraries that haven't upgraded.
- There is an automated `Migration Tool`_
  that can help all of us upgrade more smoothly.

.. _Migration Tool: https://sass-lang.com/documentation/cli/migrator

I'll be posting
a more in-depth article
to `CSS Tricks`_ on Monday,
but I wanted to get a quick primer out
right away.

[**Update**: the `full article is now live`_ at CSS Tricks]

.. _CSS Tricks: https://css-tricks.com/introducing-sass-modules/
.. _full article is now live: https://css-tricks.com/introducing-sass-modules/


What are modules, and why?
--------------------------

One of the most popular Sass features
is the ability to split your CSS code
into multiple smaller files,
and then merge them back together
into a single (often minified) CSS document
for the browser.

As our projects get bigger,
that becomes even more important --
but the relationships between files
can also get blurry or confusing.
We might see a variable,
and not know where it was defined,
then search through our files
and find several definitions.
We might want to use an outside library
like `Accoutrement`_,
but it includes a ``color()`` function,
and we already have one,
so the two would conflict.

.. _Accoutrement: https://www.oddbird.net/accoutrement/

Modules are meant to clarify those relationships,
both for us as developers
and for the compiler.
Every file is a "module",
and everything in that module is explicitly defined --
including dependencies.

In my old Sass projects,
I could do something like this:

.. code:: scss

  // app-styles.scss

  // configuration…
  $font-path: '../fonts/';

  // accoutrement now has access to my configuration…
  @import 'accoutrement/sass/tools';

  // all these files have access to accoutrement, and each other…
  @import 'fonts';
  @import 'type';
  @import 'layout';

In a module system,
that will no longer work --
each file that we import
would become available inside ``app-styles.scss``,
but they would have no access to each other
or to the variables (like ``$font-path``)
that are defined locally.
If Accoutrement needs access to the ``$font-path``,
then we'll have to make that relationship clear.
If ``_fonts.scss`` needs access to Accoutrement,
we also need to make that clear.

By making it all explicit,
we're not just adding boilerplate --
we're making it possible to look at a single file
and know:

- Exactly what other files are required
- Exactly where variables, mixins, and functions
  are coming from
- If we add variables, mixins, or functions,
  we only have to worry about their name being unique
  *in this one file*


Replacing ``@import`` with ``@use`` & ``@forward``
--------------------------------------------------

Sass ``@import`` is built *on top of* CSS ``@import`` --
it does the same things,
and then some more things.
That distinction isn't always clear to users.
I have to look it up every time.
For example, if we ``@import 'fonts.css'``,
Sass will treat it as a CSS import and do nothing --
but if we ``@import 'fonts'`` (no extension),
Sass will happily import the file
just like any other Scss.

Over the next few years,
Sass features of ``@import`` will be removed entirely.
We're giving that syntax back to CSS,
and building modules with an entirely new syntax.
During the transition,
the two syntaxes will work together smoothly:

- you can ``@import`` a file written with ``@use``/``@forward`` syntax
- you can ``@use`` or ``@forward`` a file written with ``@import`` syntax

While they work together,
I highly recommend learning the new system,
and using it for new code.

``@use`` modules where you need them
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Since the module system is all about explicit naming
(and namespacing) of dependencies,
We'll often need one or more ``@use`` statements
at the top of Sass documents.
If we want access to Accoutrement in a file,
we can ``@use`` Accoutrement:

.. code:: scss

  @use 'accoutrement/sass/tools';

Like ``@import``,
that makes Accoutrement tools available
in our file!
Unlike ``@import``...

- Accoutrement will not be passed along
  to other files that we ``@use`` after it
- Accoutrement will not be passed along
  when this file is imported, used, or forwarded
  in another place
- By default, Accoutrement "members"
  (variables, mixins, and functions)
  are *namespaced*


Manage namespaces when using
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A "namespace" works like a prefix.
The default namespace is based on
the end of the import path,
so ``accoutrement/sass/tools``
will create a ``tools`` namespace.
Namespaced "members"
can be accessed with that prefix
separated by a period:
``<namespace>.$variable``,
``<namespace>.function()``,
or ``<namespace>.mixin()``:

.. code:: scss

  // The default namespace will be "tools"
  @use 'accoutrement/sass/tools';

  // The Accoutrement "animate()" mixin
  @include tools.animate('fade-in');

  // The Accoutrement "color()" function
  html { color: tools.color('brand-primary'); }

  // The Accoutrement "$font-path" variable
  $my-font-url: tools.$font-path + 'my-font.woff2';

We can change that namespace by adding
``as <name>`` to the ``@use`` statement:

.. code:: scss

  @use 'accoutrement/sass/tools' as amt;
  @include amt.animate('fade-in');

We can even use ``as *`` to make
external members available without a namespace --
but I don't recommend it very often.
Namespaces are a good thing.

(Note that ``as *`` does not make members "global"
in a project-wide sense,
it just removes the local namespace.)


``@forward`` modules to combine them
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

I'll often group small Sass files together
in a directory like ``layout/``,
and then merge them all together in
a file called ``layout/_index.scss`` --
so I can import them all at once:

.. code:: scss

  // layout/_index.scss
  @import 'banner';
  @import 'nav';
  @import 'main';
  @import 'footer';

  // app-styles.scss
  @import 'layout'; // sass knows to grab the index file...

The new module system
has a special syntax for that:
passing along other files
as though they are all part of one module.

.. code:: scss

  // layout/_index.scss
  @forward 'banner';
  @forward 'nav';
  @forward 'main';
  @forward 'footer';

  // app-styles.scss
  @use 'layout';


Configure modules once
~~~~~~~~~~~~~~~~~~~~~~

Since Accoutrement (in our example)
has no access to local variables,
we need a way to explicitly configure the library
before we ``@use`` it.
In brief,
module configuration looks like this:

.. code:: scss

  @use 'accoutrement/sass/tools' with (
    $font-path: '../fonts/',
    /* additional config variables as needed */
  );

It's like a Sass map,
but with ``$`` on all the key names
to make it clear they are variables.

This is where things can get the most confusing, because

- A module can only be configured once
- Configuration has to happen the very first time
  you ``@use`` a module

This will take some getting used to,
and can be difficult to debug --
but there are a few patterns you can use.
Either put configurations at the very top of your
"entrypoint" (the main file that imports everything else),
or combine ``@use`` with ``@forward``
to create a wrapper around the configured library,
and forward the results with optional extensions:

.. code:: scss

  // _tools.scss
  @use 'accoutrement/sass/tools' with (
    $font-path: '../fonts/',
  );

  @forward 'accoutrement/sass/tools';

  // add extensions here, as desired

Now Accoutrement has been used
and configured
and forwarded all in one place.
In all our other files,
we can ``@use 'tools'``
to access the fully-configured Accoutrement
without any danger of
duplicate  or out-of-order configurations:

.. code:: scss

  // _banner.scss
  @use 'tools';

  // _nav.scss
  @use 'tools';

  // etc…


So much more...
---------------

There is much more to cover --
from Sass core modules
(e.g. ``@use 'sass:math'``)
to import-only files,
public and private members,
the ``load-css()`` mixin,
and so on.
I cover all of that in the
`article for CSS Tricks`_.

.. _article for CSS Tricks: https://css-tricks.com/introducing-sass-modules/

If you want to get a head start,
the amazing `new documentation`_
has a lot of helpful detail,
and Natalie has posted
`an overview on the Sass Blog`_.
I've also created
a library called `Cascading Color Systems`_,
and a new website for `Teacup Gorilla`_
that both use the module system.
Both projects are very much under construction,
but feel free to dig around.

.. _new documentation: https://sass-lang.com/documentation/
.. _an overview on the Sass Blog: http://sass.logdown.com/posts/7858341-the-module-system-is-launched
.. _Cascading Color Systems: https://github.com/mirisuzanne/cascading-color-system/
.. _Teacup Gorilla: https://github.com/mirisuzanne/teacup

Check back soon for more details --
and if you have questions,
feel free to reach out.
