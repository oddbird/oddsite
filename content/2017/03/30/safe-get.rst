public: yes
author: miriam
headline:
  - tagline: 'You don’t need safe-get-function utilities'
    type: 'Code Sample'
tags: [
  Sass,
  Tools,
  Code
  ]
image:
  - src: 'blog/2017/safe-get/phone.jpg'
summary: |
  The `Sass 3.5 Release Candidate`_
  includes support for
  `first-class functions`_.
  What are they,
  how do we use them,
  and what tools can we use to
  future-proof our Sass toolkits
  in advance?

  .. _Sass 3.5 Release Candidate: http://sass.logdown.com/posts/809572-sass-35-release-candidate
  .. _first-class functions: https://medium.com/@kaelig/sass-first-class-functions-6e718e2b5eb0


Making Function Calls Across Sass Versions
==========================================

*This post was edited on April 24, 2017
to recommend not using any ``safe-get-function`` utilities.
See below for details.*

The `Sass 3.5 Release Candidate`_
includes support for
`first-class functions`_
and the resulting ``get-function()`` function.
I just said "function" too many times in a single sentence.
Get used to it, there's more.
We'll explain the problem,
and help you
call all the functions
in every version of Sass!

.. _Sass 3.5 Release Candidate: http://sass.logdown.com/posts/809572-sass-35-release-candidate
.. _first-class functions: https://medium.com/@kaelig/sass-first-class-functions-6e718e2b5eb0


Calling Functions
-----------------

Normally,
when we're using functions in Sass,
we know what function we need,
and we can reference it directly:

.. code:: scss

  // Using Susy's "span" function directly, with a single argument
  .span {
    width: span(3);
  }

But when we build toolkits in Sass,
it's common that we don't know for sure
what function we'll be calling.
In OddBird's `Accoutrement`_ tools
we even let the user pass in arbitrary functions
and arguments
that we'll call at the right time
to manipulate CSS colors and sizes.

In order to call functions
without knowing the function name in advance,
we have to use the ``call()`` function.
Here's how it works
on the current versions of Sass:

.. code:: scss

  // This could change!
  $function: 'span';

  // Calling some unknown function, with a single argument
  .span {
    width: call($function, 3);
  }

Those two code samples will return the same results.
The first is more direct,
but the second is more flexible
for use in a toolkit.

.. _Accoutrement: /2017/03/07/pattern-making/


Introducing the ``get-function`` function
-----------------------------------------

Sass is taking a first step towards
modular namespacing –
expected to land in the ``4.0`` release.
This will allow you to include third-party tools
without any concern for naming conflicts.

Functions will be namespaced locally
to a given Sass file –
something like ``susy.span()``,
though the syntax hasn't been settled.
The new
``get-function()`` allows us to capture
a snapshot of a function into a variable,
and pass that snapshot into new namespacing contexts.

.. code:: scss

  // type-of($my-function) == 'function'
  $my-function: get-function('susy.span');

In Sass 3.5 and later,
the ``call()`` function only accepts
first-class functions,
where it used to accept function names as a string.
In brief,
we have to start using
``get-function('function-name')``
before calling a function using
``call()`` –
but only in new versions of Sass.

In demo code, people often write it like this:

.. code:: scss

  $call: call(get-function('susy.span'), $arguments...);

That code is misleading.
It made me wonder why ``get-function``
isn't simply baked into ``call``,
so we can pass a first-class function or a string
depending on the context.

The reason is this:
once the modular system is in place,
it will be very rare to ``call`` a function
from the local scope.
The ``call`` option is mostly useful
for handling functions defined elsewhere.
Since we don't have guaranteed access
to the functions being called in our third-party app,
``get-function`` allows us to capture and pass-in
functions from a different scope.

A more accurate demonstration might be:

.. code:: scss

  // third-party.scss
  @mixin three-wide($function) {
    width: call($function, 3);
  }

  // my-local.scss
  @import 'susy' as 'susy';

  $span-function: get-function('susy.span');
  @include three-wide($span-function);

So how do we support old and new versions of Sass,
while allowing users to pass in
either strings or first-class functions?

The short answer is: we don't*.
Our users will make that change on their end,
when they upgrade.


Don't Worry About It
--------------------

`Kaelig provides one solution`_,
and I initially meant to improve on it
with more robust features.
**You don't need any of that.**

After a long conversation with Chris Eppstein,
one of the Sass language designers,
it's clear that the entire upgrade path
should be handled by users,
not toolkit developers.

The OddBird `Sass Accoutrement`_ tools
allow users to `pass in an arbitrary function`_.
Once users upgrade to Sass 3.5,
they should be sure to ``get`` the function
before passing it in.
Meanwhile,
our tools will continue to use ``call`` internally,
without any changes.

There is one exception,
where Kaelig's solution may be acceptable.
In Susy, we use ``call`` internally
to access functions in the local scope, inside a loop.
In that case,
we're only using ``call`` to help write DRY code,
not as a user-facing feature
that accepts arbitrary functions passed in from outside.

To handle that,
we use a few lines similar to Kaelig's:

.. code:: scss

  @each $key, $value in $config {
    $function: 'susy-normalize-#{$key}';

    @if function-exists('get-function') {
      $function: get-function($function);
    }

    $result: call($function, $value);
  }

This should work on all versions of Sass,
but **should only be used internally,
calling local functions**
(e.g. known functions defined in the same partial).
I don't think this simple use
warrants a safe-get function of its own.

.. _Kaelig provides one solution: https://medium.com/@kaelig/sass-first-class-functions-6e718e2b5eb0
.. _Sass Accoutrement: /open-source/accoutrement/
.. _pass in an arbitrary function: ../07/pattern-making/


Have you played with Sass 3.5 already?
Did we miss anything important?
Let us know via `Twitter`_ or our public `Slack channel`_!

.. _Twitter: https://twitter.com/oddbird
.. _Slack Channel: http://friends.oddbird.net/
