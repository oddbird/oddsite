public: yes
author: miriam
headline:
  - tagline: 'exploring safe-get-function and safe-call utilities'
    type: 'Code Sample'
tags: [
  Sass,
  Tools,
  Code
  ]
image:
  - src: '2017/ga-spam/spam-traffic.jpg'
summary: |
  The `Sass 3.5 Release Candidate`_
  includes support for
  first-class functions.
  What are they,
  how do we use them,
  and what tools can we use to
  future-proof our Sass toolkits
  in advance?

  .. _Sass 3.5 Release Candidate: http://sass.logdown.com/posts/809572-sass-35-release-candidate
  .. _first-class functions: https://medium.com/@kaelig/sass-first-class-functions-6e718e2b5eb0


Managing Functions Across Sass Versions
=======================================

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

In order to call functions,
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


Introducing the ``get-fuction`` function
----------------------------------------

Sass is taking a first step towards
modular name-spacing –
expected to land in the ``4.0`` release.
This will allow you to include third-party tools
without any concern for naming conflicts.

Functions will be name-spaced locally
to a given Sass file –
something like ``susy.span()``,
though the syntax hasn't been settled.
The new
``get-function()`` allows us to capture
a snapshot of a function into a variable,
pass that snapshot into new name-spaing contexts.

.. code:: scss

  // type-of($my-function) == 'function'
  $my-function: get-function('susy.span');

In Sass 3.5 and later,
the ``call()`` function only accepts
first-class functions,
where it used to accept function-names as a string.
In brief,
we have to start useing
``get-function('function-name')``
before calling a function using
``call()`` –
but only in new versions of Sass.

.. code:: scss

  $call: call(get-function('susy.span'), $arguments...);

This creates a problem for toolkits and frameworks
(like `Susy`_)
that use ``call()`` internally
to handle user input.
How do we support old and new versions of Sass,
while allowing users to pass in
either strings or fisrt-class functions?

`Kaelig provides one solution`_
in a great article with more details.
It's a good start,
but it doesn't cover all the uses-cases I need.
What if users pass in a first-class function
that they've already captured –
as they likely should in Sass ``3.5+``?
Here's my slightly-expanded solution.

.. _Susy: http://susy.oddbird.net
.. _Kaelig provides one solution: https://medium.com/@kaelig/sass-first-class-functions-6e718e2b5eb0


Safe Get-Function
-----------------

We need to use ``get-function()`` in new versions of Sass,
but we can't use it in old versions.
We also don't want to use ``get-function()``
on a function we've already got.
That gives us several options we have to cover
in our ``safe-get-function()``.

- If the user passes in a string,
  and we're using an older version of Sass
  => *do nothing*.
- If the user passes in a string,
  and need a first-class function for newer versions of Sass
  => use *get-function*.
- If the user passes in a first-class function,
  we can assume we're using the latest Sass version
  => *do nothing*.

The result looks something like this:

.. code:: scss

  @function safe-get-function(
    $function
  ) {
    // find out what's been passed in
    $type: type-of($function);

    // if it's a first-class function, do nothing
    @if ($type == 'function') {
      @return $function;
    } @else if ($type == 'string') {
      // if it's a string, but we can get a function, we should
      @if function-exists('get-function') {
        @return get-function($function);
      }

      // if it's a string, and we can't get a function, return the string
      @return $function;
    }

    // if it's not a string or a function, we know there's a problem
    @error 'Invalid function-name, [#{$type}] `#{$function}` must be a function or string';
  }

This ``safe-get-function`` accepts one argument,
either a string or a first-class function,
and returns the proper value
(also a string or a function)
for the version of Sass being used.


Safe Call
---------

I also wrote a very small
``safe-call()`` wrapper function,
that passes all function-calls
through our ``safe-get-function()``
before calling them.

.. code:: scss

  @function safe-call(
    $name,
    $args...
  ) {
    $name: safe-get-function($name);
    @return call($name, $args...);
  }

This function `accepts the same arguments`_
required by Sass's internal ``call()`` function,
a name (or first-class function),
and arguments to pass-through when the function is called.
You can use it right away like this:

.. code:: scss

  $result: safe-call('span', 3);

And that should continue to work just fine
when you upgrade to Sass 3.5 or later.

.. _accepts the same arguments: http://sass-lang.com/documentation/Sass/Script/Functions.html#call-instance_method


Ship it!
--------

After adding those two functions to a project,
I can search-and-replace every instance of
``call(`` with ``safe-call(``,
and I'm ready to support the latest in Sass technology.

This should work on all versions of Sass,
for all expected forms of input.

Have you played with Sass 3.5 already?
Did we miss anything important?
Let us know via `Twitter`_ or our public `Slack channel`_!

.. _Twitter: https://twitter.com/oddbird
.. _Slack Channel: http://friends.oddbird.net/
