public: yes
author: miriam
tags: [Vue, Conferences, Code, CSS, Workshop]
image:
  - src: 'blog/2019/mia-jen-smashing.jpg'
headline:
  - tagline: |
      `Dynamic CSS`_ talk, `Advanced CSS`_ workshop

      .. _Dynamic CSS: /talks/data-design/
      .. _Advanced CSS: /talks/advanced-css-workshop/
summary: |
  I had the pleasure of presenting
  both a talk and workshop
  at Smashing Conf in San Francisco
  this year.
  During the talk,
  people left questions in a collaborative doc,
  so I'm here to provide the answers!


Smashing CSS Follow-Up Q&nbsp;&&nbsp;A
======================================

The conference has already released
a `follow-up post`_
that links to videos
(`including mine`_), photos,
collaborative notes from both days of the conference.
In particular,
I recommend watching, at minimum:

- Sara Soueidan: `Building Accessible Interfaces`_
- Jason Pamental: `Dynamic Web Typography`_
- Jen Simmons: `Thinking With Grid`_

.. _follow-up post: https://www.smashingmagazine.com/2019/04/smashingconf-san-francisco-2019/
.. _including mine: https://vimeo.com/331571593
.. _Building Accessible Interfaces: https://vimeo.com/331530115
.. _Dynamic Web Typography: https://vimeo.com/331575184
.. _Thinking With Grid: https://vimeo.com/331578108

.. callmacro:: content.macros.j2#divider

.. callmacro:: content.macros.j2#get_quotes
  :page: 'talks/data-design'
  :slug: 'mind-bending'

.. callmacro:: content.macros.j2#divider


Collaborative Questions
-----------------------

The `collaborative notes from day 2`_
include a few questions about my talk,
so I thought I'd take a minute to provide some answers:

.. _collaborative notes from day 2: https://smashed.by/sf2

Tooling & Frameworks
~~~~~~~~~~~~~~~~~~~~

  With all the tooling and frameworks and options out there,
  how do you make sense of them all?

I don't!
When I hear about a new tool or framework,
I'll take a quick look to determine
if it solves a problem I'm struggling with.
In most cases, I think
"that's cool, but not a priority for me"
and I move on.

I also have very strong opinions
about how a tool should fit my workflow.
For example:
features in React got me excited several years back,
but Vue reframed the idea
in a way that fit my requirements.
That difference was obvious from looking at code samples,
and made Vue worth my time to learn.

React hides all my favorite languages (HTML and CSS)
inside JavaScript with custom syntax,
while Vue encourages a structured split between languages
that allows each one to shine.
Valid CSS and HTML work in Vue by default
without any adjustments.

Changing Workflow
~~~~~~~~~~~~~~~~~

  How has your workflow changed over the last few years?
  Anything you are looking forward to experiment with?

Modern CSS features are released
module-by-module,
without the overarching fanfare that we saw with CSS3.
That *continuous integration* has been great
for speed and efficiency --
but we can "miss the forest for the trees"
as they say.

The biggest shift in my workflow
has come from realizing that
Grid, Flexbox, Writing Modes,
Multi-Column, Box Alignment, Custom Properties,
and various other specs
are not meant to stand-alone,
but to complement each other in surprising ways.

Multicol and Grid ``auto-fill``
use similar logic,
and can easily align with each other.
Flexbox provides space-distribution among different-sized elements,
while Grid provides top-down layouts.
Both are designed to be truly "fluid"
in a way that makes ``%`` layouts look downright static.
Box alignment solves a number of old issues,
and will eventually work with
standard "flow" layouts as well.

The overall effect is what Jen Simmons
has called Intrinsic Design,
and it has fundamentally changed how I think about CSS
and the layouts I create --
but there are a few pieces missing.
Subgrid and universal Box Alignment
will be game-changers.

After seeing Jason talk,
I'm also very excited about variable fonts!

Sass vs CSS
~~~~~~~~~~~

  When would you advise to use CSS Custom Properties
  and when Sass variables?

There is some overlap,
which is a matter of judgement.
There's no right answer in that gray area,
and your mileage will vary
project-to-project.
But there are a few big differences:

CSS custom properties inherit
like any other property,
with access to the DOM.
You can change the value of a variable
based on media-queries,
or selector-hooks,
or other aspects of the site HTML.
That opens up a lot of new territory
that we're still exploring --
something Sass will never be able to do.

While CSS handles that DOM-variation well,
Sass provides more tools
for working with global configuration "constants"
and other logical variable use-cases,
like if/then statements.
I use Sass to store global config
that I want to manipulate programmatically (like colors) --
and then output the results to CSS custom properties
if I need them to *also* vary based on the DOM.

  With Custom Properties,
  nesting and Houdini CSS now coming to CSS,
  do you feel that just in a few years,
  Sass will be fading into oblivion,
  just like jQuery isn’t necessarily the first choice
  when it comes to a framework these days?

I don't see this happening any time soon,
because some logic belongs in the browser
(DOM-aware variables),
while other logic (global configuration)
is best pre-processed on the server.
Static site generators are in a similar position --
they are not required for any special site features,
but they help us generate more performant code, more efficiently.

Live Color Themes
~~~~~~~~~~~~~~~~~

  Do CSS variables allow for on-the-fly theming
  without pre-defined stylesheets/options?
  I.e., could someone choose a color
  and you could generate a theme based on their choice using inline vars?

Yes!
For explicit themes,
it can be relatively straight-forward:
assign your user-selected colors to a custom property,
and then use it wherever you want!

There's one feature that feels like it's missing:
CSS doesn't provide an easy way to inspect colors,
and adjust them on-the-fly
(to find a complement or contrast for example).
You can achieve some of that with a mix of `hsl()` and `calc()`
functions, but it takes some careful work --
and contrast isn't simple to calculate.
But if you can keep the logical requirements simple,
or handle them with JavaScript,
you're all set.

With a quick search,
I found several examples and articles:

- `Live Theming with CSS Variables <https://www.jonathan-harrell.com/live-theming-with-css-variables/>`_
- `Advanced CSS Theming with Custom Properties and JavaScript <https://www.sitepoint.com/css-theming-custom-properties-javascript/>`_

`CSS Tricks also provides a rundown`_
with links to more articles.
There's a lot of room left to explore here,
so play with it,
and share what you find!

.. _CSS Tricks also provides a rundown: https://css-tricks.com/css-custom-properties-theming/

Unit Tests
~~~~~~~~~~

  There is so much logic in CSS now, how do you write (unit) tests?

That's a great question,
and a great idea!
But I haven't done it yet.
The tests would have to run in the browser,
so I think JavaScript would be the way to go.
I'd love to see it happen.

Browser Support
~~~~~~~~~~~~~~~

  What about Browser Support?

It's pretty good, and always improving.
I recommend checking MDN and Caniuse for details,
and also thinking about how to provide
simple fallbacks for older browsers.
CSS is designed to be resilient
in ways that allow us to move forward,
even while we support old browsers.

Code Font
~~~~~~~~~

  What is that beautiful font used in your code editor?

I use `Dank Mono`_,
recommended by `Sarah Drasner`_
as the perfect font for her `Night Owl`_
VS Code theme.

.. _Dank Mono: https://dank.sh/
.. _Sarah Drasner: https://sarahdrasnerdesign.com/
.. _Night Owl: https://github.com/sdras/night-owl-vscode-theme
