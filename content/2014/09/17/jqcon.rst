public: yes
author: jonny
tags: [JavaScript, Conferences, Code, jQuery]
image:
  - src: 'blog/jqueryconf2014.jpg'
summary: |
  Five practical JavaScript coding takeaways
  from jQuery Conference Chicago 2014.


jQuery Chicago 2014
===================

After attending conferences, I find it helpful to synthesize a few practical
takeaways that I can immediately begin working into my code. Some of them are
new, while others are common techniques that I'm just not in the habit of
doing.

So what got my attention at `jQuery Conference Chicago 2014`_? In no
particular order:

.. _jQuery Conference Chicago 2014: http://events.jquery.org/2014/chicago/


Web Workers
-----------

`Web Workers`_ are here and ready for primetime (or at least
`close enough to ready`_). It would be nice to get some abstractions to make
them easier to work with (and it'll be great when `SharedWorkers`_ and
`ServiceWorkers`_ get to the same level of `support`_), but I'm not waiting
around.

Basically, Workers provide the ability to run computationally intensive tasks
in a background thread, without blocking the UI or other scripts. Workers don't
have access to the ``window`` object or the DOM, but they can pass data back
and forth from the main client script.

Keep the UI responsive, and let Workers do difficult tasks in the background.
(Aside: This is awesome. Why isn't everyone using it already?)

.. code:: js

  // main script
  var worker = new Worker('my_worker.js');
  worker.addEventListener('message', function (e) {
    console.log('The worker said: ' + e.data);
  }, false);
  worker.postMessage('Hello Worker!');

.. code:: js

  // worker script ('my_worker.js')
  self.addEventListener('message', function (e) {
    console.log('The client said: ' + e.data);
    self.postMessage('Hello Client!');
  }, false);

Check out `another (contrived) example`_ to see it in action. Notice that the
timer (and the entire UI) locks up while running the task without Workers, but
continues smoothly when Workers are used. (I'm also using the
`Blob() constructor`_ to allow for inline Worker scripts, instead of importing
from another file.)

So when might I actually use Workers? From this helpful `HTML5 Rocks article`_:

::

  - Prefetching and/or caching data for later use
  - Code syntax highlighting or other real-time text formatting
  - Spell checker
  - Analyzing video or audio data
  - Background I/O or polling of webservices
  - Processing large arrays or humungous JSON responses
  - Image filtering in <canvas>
  - Updating many rows of a local web database

Do you already use Web Workers, or have additional suggestions or warnings?

HT: `@potch`_ for the `talk <http://potch.github.io/workers-talk/>`__
that got me started.

.. _Web Workers: https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers
.. _close enough to ready: http://caniuse.com/#feat=webworkers
.. _SharedWorkers: https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker
.. _ServiceWorkers: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API
.. _support: http://caniuse.com/#feat=sharedworkers
.. _another (contrived) example: http://codepen.io/jgerigmeyer/pen/vKixI
.. _Blob() constructor: https://developer.mozilla.org/en-US/docs/Web/API/Blob.Blob
.. _HTML5 Rocks article: http://www.html5rocks.com/en/tutorials/workers/basics/
.. _@potch: http://twitter.com/potch


ECMAScript 6
------------

You know what else is here, and (mostly) ready for primetime? `ECMAScript 6`_.
Some of the new features I'm most excited about:

- ``String.prototype.contains()`` instead of ``indexOf()``
- native promises
- ``Object.assign()`` for merging objects
- ``Map()`` and ``Set()``
- blocked scope variables using ``let``
- template strings(!):

.. code:: js

  var name = 'Jonny';
  var company = 'OddBird';
  console.log(`I'm ${name}, and I work at ${company}.`);

- default function parameters
- modules, exports, and a system loader
- expanded ``class`` syntax

This just scratches the surface. Check out a `helpful summary`_, and keep a
close eye on the `browser support chart`_.

So how can I use these features without waiting for full browser
implementation?

A subset of ES6 can be used by simply adding Paul Miller's `ES6 Shim`_. To use
the more substantive features (e.g. template strings, default parameters,
modules), compile ES6 code into ES5 using Google's `Traceur`_ (probably with
`gulp-traceur`_ or `grunt-traceur`_).

HT: `John K. Paul`_ for his
`talk <http://johnkpaul.github.io/presentations/jqcon/2014/es6-now/>`__
encouraging devs to use ES6 now.

.. _ECMAScript 6: http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#draft_specification_for_es.next_ecma-262_edition_6
.. _helpful summary: http://git.io/es6features
.. _browser support chart: http://kangax.github.io/compat-table/es6/
.. _ES6 Shim: http://github.com/paulmillr/es6-shim/
.. _Traceur: http://github.com/google/traceur-compiler
.. _gulp-traceur: http://github.com/sindresorhus/gulp-traceur
.. _grunt-traceur: http://github.com/aaronfrost/grunt-traceur
.. _John K. Paul: http://twitter.com/johnkpaul


Throw More Errors
-----------------

`Error objects`_ have been around forever, and aren't difficult to use:

.. code:: js

  if (user.id) {
    // do the thing
  } else {
    throw new Error('User ID not found.')
  }

But I'm not very good at actually doing this. When I'm writing code, I usually
default to the "fail silently" approach:

.. code:: js

  if (user.id) {
    // do the thing
  }

There are times when failing silently is exactly what I want: when the code
will continue to work correctly regardless. But often it'd be better
(especially in development, and maybe even in production) to throw an error
with a descriptive message stating what went wrong. Not only does this speed
debugging, but it also lets me know that something went wrong in the first
place.

To make this simpler, I've started using runtime assertions:

.. code:: js

  var assert = function (message, test) {
    if (!test) {
      throw new Error('Assertion failed: ' + message);
    }
  };

  assert('User has an ID', user.id);

When to consider throwing Errors?

- When a function requires a specific argument type
- When a function requires a specific number of arguments
- For unexpected code paths (i.e. code that should never be executed)
- When using promises (every promise should have an error handler using
  ``.catch()`` or ``.then()``)

HT: `Ralph Holzmann`_ for his helpful
`talk <http://blog.ralphholzmann.com/presentations/2014/jquerychicago/throw_new_error.pdf>`__.

.. _Error objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
.. _Ralph Holzmann: http://twitter.com/rlph


Debugging by Proxy
------------------

`Brian Arnold`_ `demoed`_ how to use proxy tools for development and debugging.

`Charles`_ is a really powerful tool for anything from Ajax debugging and
bandwidth throttling to DNS spoofing and local/remote resource mapping. I can
view or modify outgoing requests or incoming responses (even from another
device on the same network connected through Charles), essentially turn my
computer into a dev environment for any website with resource mapping, throttle
my bandwidth to mimic 3G or LTE, or disable caching or cookies entirely.

.. _Brian Arnold: http://twitter.com/brianarn
.. _demoed: http://www.randomthink.net/presentations/jqcon-chicago-2014-beyond-devtools/presentation/
.. _Charles: http://www.charlesproxy.com/


JS Testing With Intern
----------------------

I've been using `Karma`_ as a test-runner, and I'm mostly satisfied with what
it can do (notably: run tests quickly using `PhantomJS`_ to mimic a browser
environment, and generate `istanbul`_ coverage reports).

But I'm intrigued by some of the features that `Intern`_ offers (notably:
integration with `Selenium`_, support for true browser events and running tests
in standalone browsers, and built-in `Travis CI`_ integration).

Have you used either of these tools, or have further pros/cons to offer?

.. _Karma: http://karma-runner.github.io/
.. _PhantomJS: http://phantomjs.org/
.. _istanbul: http://gotwarlost.github.io/istanbul/
.. _Intern: http://theintern.io/
.. _Selenium: http://www.seleniumhq.org/
.. _Travis CI: https://travis-ci.com/
