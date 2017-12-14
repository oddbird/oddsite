public: yes
tags: [Herman, CSS, Sass, 'Design Systems', Code, 'Style Guides']
author: miriam
image:
  - src: 'blog/2017/herman-intro/header.jpg'
headline:
  - tagline: 'An agile approach to design systems on a budget'
summary: |
  **Design systems streamline development, communication, and consistency** --
  but often rely on dedicated teams and extended budgets.
  We wanted a tool to help us create and maintain
  living style guides & pattern libraries
  in an agile process, and on a budget.
  `Herman`_ keeps our development flow simple,
  and our UX consistent,
  as we iterate on patterns
  and scale over time.

  *Today we're launching Herman 1.0
  as a free, open source project
  for anyone to use and make contributions.*
  Check out the `full documentation`_,
  or `contact us`_ for help
  `putting your design system in place`_.

  .. _Herman: /herman/
  .. _full documentation: /herman/docs/
  .. _contact us: /contact/
  .. _putting your design system in place: /services/design-systems-training/


Herman Style Guides
===================

I spent the week after Thanksgiving in San Francisco,
attending (and `accidentally speaking at`_)
`Clarity`_ --
a "`Design Systems`_" conference
organized by the wonderful `Jina Anne`_.

.. _accidentally speaking at: https://twitter.com/jina/status/935566434700222465
.. _Clarity: https://www.clarityconf.com/2017
.. _Design Systems: https://www.designbetter.co/design-systems-handbook/
.. _Jina Anne: https://www.patreon.com/sushiandrobots

I'm always curious how many attendees at a conference
are working on enterprise projects
over a long period of time
vs. those of us who do consulting
for multiple clients each year.
These different contexts can lead to very different solutions --
affecting team size, budget, process, architecture,
and technical requirements.

I don't know the exact mix at Clarity,
but I get the sense that design systems generally
skew towards the enterprise projects for one reason: budget.
Creating the beautiful `Salesforce Lightning Design System`_
required a full-time dedicated team and budget.
Those of us doing agency work don't often have that luxury.

.. _Salesforce Lightning Design System: https://www.lightningdesignsystem.com/

So how can we make design systems part of an agile process --
growing slowly along-side the application,
the same way we write and maintain test-coverage
as part of any project?
How do we make documentation and design consistency
the path of least resistance?

    **If it's not documented, it doesn't exist.**
    Documentation should become the default --
    an integrated part of the development process.

    --Miriam Suzanne (me)

With `Herman`_ we can start small,
documenting brand design tokens --
`colors`_, `fonts`_, `sizes`_, `ratios`_, and `icons`_ --
before expanding into `practical patterns and components`_,
and with guides and systems that scale along with us.

.. _Herman: /herman/
.. _colors: /herman/docs/demo_colors.html
.. _fonts: /herman/docs/demo_fonts.html
.. _sizes: /herman/docs/demo_sizes.html
.. _ratios: /herman/docs/demo_sizes.html
.. _icons: /herman/docs/demo_icons.html
.. _practical patterns and components: /herman/docs/demo_examples.html


Shared problems, unique constraints
-----------------------------------

The term "design system" refers generally
to documenting & distributing
isolated patterns and components
that can be used across one or more applications
for consistent user experience.
That usually involves some combination of
"style guides" and/or "pattern libraries" --
the detailed documentation of design tokens,
UI patterns, components, and overall system guidelines.

Lightning Design and other massive projects
can make this goal feel daunting,
but we've found it useful to build what we can,
as we go,
even when the results are incomplete by comparison.
These problems aren't all-or-nothing.
There is room for flexibility in our approaches,
from one project to the next.
The important question is not *which one*
but *where can I start*
improving design communication, clarity, and consistency?

At OddBird, our first style guide attempts failed
because they required too much maintenance and attention.
So we scaled back to automating color-palettes,
and not much else.
Over time we've added support
for a wide array of features
integrating with our Sass tooling,
and Herman has evolved into a full-featured tool
for agile design systems.

Now we use Herman across a range of products,
from large client applications
to our own internal toolkits.
While there are a number of possible configuration options,
the initial setup can be quite streamlined
to make sense on even the smallest projects.
As time goes on,
we'll keep adding features
that allow our systems to become larger,
more complex, and more automated --
with support for additional languages.


Integrated syntax, built on SassDoc
-----------------------------------

Style documentation tools
have existed for some time,
providing a great place to start
without re-inventing the wheel.
As a design-driven team using Sass/CSS,
we love keeping our style documentation
directly in with our stylesheets,
using tools like `KSS`_ and `SassDoc`_.
When developers add a pattern in the stylesheet,
they can document their work right at the source.
When a pattern changes,
all the edits can be made in a single location,
so documentation is more likely to stay up-to-date.

.. _KSS: http://warpspire.com/kss/
.. _SassDoc: http://sassdoc.com/

.. image:: /static/images/blog/2017/herman-intro/sassdoc.jpg
   :alt: SassDoc screenshot
   :class: extend-small img-border img-shadow
   :target: http://sassdoc.com/

Those tools are great,
but neither one is built to handle more complex design systems,
integrated with markup templates and other languages.
On the other side,
many of the existing "style guide generators"
are too intrinsically tied to specific JavaScript frameworks,
separating documentation and styles.
That may be a good solution for some,
but it didn't feel right for the way we work.

We decided to extend SassDoc,
using their framework as a jumping-off point for something larger.
The SassDoc syntax uses a variant on Sass line-comments
to explicitly mark documentation for parsing:

.. code:: scss

    // Normal Sass comments are ignored by SassDoc

    /// But comments that begin with 3 slashes
    /// will be parsed as SassDoc documentation.

In addition to allowing prose descriptions
(parsed as markdown),
SassDoc includes a number of explicit annotations,
using an ``@annotation`` syntax.
Here are just a few of their options:

.. code:: scss

    /// @group buttons
    /// @access public
    /// @param {color} $color [green] - The background color for the button
    /// @example scss
    ///   .button {
    ///     @include call-to-action(red);
    ///   }

Herman supports all the SassDoc annotations,
which focus on documenting Sass abstractions:
variables, functions, and mixins.
From there, we've been adding style guide features of our own.


Visualizing design tokens
-------------------------

A "design token" is an abstract bit of design language
that normally becomes visible only when applied to
more explicit patterns and components.
Colors, fonts, scales, and grid-configurations
act as "sub-atomic" aspects of a design system --
often stemming directly from the brand,
before any UI components have been built.
This is a good place to start defining your system,
and Herman can help you visualize these abstractions.

.. image:: /static/images/blog/2017/herman-intro/colors.jpg
   :alt: Herman color palettes
   :class: extend-large img-border img-shadow img-spacing
   :target: /herman/docs/demo_colors.html

.. image:: /static/images/blog/2017/herman-intro/sizes.jpg
   :alt: Herman size palettes
   :class: extend-small img-border img-shadow
   :target: /herman/docs/demo_sizes.html

Herman adds annotations for colors (``@colors``),
fonts (``@fonts``), sizes (``@sizes``), and ratios (``@ratios``).
In order to display the data,
you will need to export all your Sass tokens to json --
using our provided Sass utilities.
We'll continue working to make this step
as smooth and automated as possible,
but you can find full details in our `Herman documentation`_.

.. _Herman documentation: /herman/docs/

.. code:: scss

  /// @colors brand-primaries
  /// @font my-font (regular, bold)
  ///   <any html head required for CDN font imports>
  /// @sizes my-spacing
  /// @ratios my-modular-scale


SVG icons
---------

Icons live somewhere between design tokens
(the icons that are available)
and atomic patterns
(how icons are added to the markup).
At the token level, we provide an ``@icons`` annotation
to display all the SVG icons in a given folder:

.. code:: scss

  /// @icons path-to/my-assets/svg/

.. image:: /static/images/blog/2017/herman-intro/icons.jpg
   :alt: Herman icon palettes
   :class: extend-small img-border img-shadow
   :target: /herman/docs/demo_icons.html


Rendered output & examples
--------------------------

At the pattern level,
we provide more robust tools
for rendering code examples and live patterns.
While SassDoc only documents Sass abstractions,
Herman allows
`documentation of CSS selectors and markup patterns`_.

.. _documentation of CSS selectors and markup patterns: /herman/docs/demo_examples.html

.. image:: /static/images/blog/2017/herman-intro/examples.jpg
   :alt: Herman rendered example
   :class: extend-small img-border img-shadow
   :target: /herman/docs/demo_examples.html

We've extended SassDoc's ``@example`` annotation,
allowing you to see both input and compiled code
for languages like `Sass`_ and `Nunjucks`_
(we're working on support for Vue components).
Herman will even render any examples that produce HTML output:

.. _Sass: http://sass-lang.com
.. _Nunjucks: https://mozilla.github.io/nunjucks/

.. code:: scss

    /// Add default button styles to an element.
    /// @group buttons
    /// @example html
    ///   <button data-btn>This is my button</button>
    [data-btn] {
      background: darkblue;
      border-radius: 3px;
      color: white;
      display: inline-block;
      padding: 0.25em 1em;
    }


Prose, pages, and third-party links
-----------------------------------

In building documentation --
from basic reference docs to extensive design systems --
we often find it useful to include additional prose
and links to third-party docs for dependencies.
There are several ways to do this in Herman:


Free-floating prose
^^^^^^^^^^^^^^^^^^^

Any SassDoc comments (``///``)
that are not attached to a specific
Sass/CSS objects will appear as free-floating prose,
and can be given generic annotations --
such as ``@group``, ``@example``, ``@link``, etc. --
including the Herman design-token annotations.


Additional markdown pages
^^^^^^^^^^^^^^^^^^^^^^^^^

You can add any number of `markdown documents`_
to your style guide navigation,
by defining ``extraDocs`` in your `Herman configuration`_.
We use this to create an introduction to our design systems,
provide quick access to a changelog,
or document patterns that are not directly attached to Sass code.

.. _markdown documents: /herman/docs/CONFIGURATION.html#extradocs
.. _Herman configuration: /herman/docs/CONFIGURATION.html


Third-party links
^^^^^^^^^^^^^^^^^

You can also add `external links`_
to third-party dependencies -
so all relevant documentation is accessible in one place.
Define ``extraLinks`` in your Herman configuration,
and we'll add links to the bottom of the sidebar.

.. _external links: /herman/docs/CONFIGURATION.html#extralinks


Open-source, and actively developed
-----------------------------------

We're using Herman on many of our production projects,
and we have big plans for Herman's future.
We'll keep adding features,
and we invite you to do the same.
The Herman code is `available on GitHub`_,
and we'd love to hear your thoughts.
File issues for bug-reports, feature requests,
or help getting started --
or send us your pull requests.

We'll keep providing our own tutorials and demos
based on the questions we hear most,
but we'd also love to list any
style guides or pattern libraries you build with Herman,
or any `tutorials`_ you've written.

We're always excited to collaborate,
and we've provided some `"contributing" documentation`_
to help you get involved.

.. _available on GitHub: https://github.com/oddbird/sassdoc-theme-herman
.. _tutorials: /herman/articles/
.. _`"contributing" documentation`: /herman/docs/CONTRIBUTING.html


Need help with your design system?
----------------------------------

At OddBird,
we care deeply about test-coverage and documentation,
accessibility, performance, and UX clarity.
Herman is one part of our solution,
but no tool can provide the magic bullet.

**If you need help with a refactor** to
improve design systems, performance, testing,
documentation, and accessibility --
or eliminate technical debt,
and put better processes in place --
we're here for you.
Our team of experts
can provide `a range of support, training, and consulting`_
across the full stack of product design & development --
helping find *the solution that best fits your team*.
Don't hesitate to reach out.

You can use our handy `contact form`_,
talk to `@OddBird`_ on Twitter,
or join our `public Slack`_
(with a dedicated ``#herman`` channel).
We're excited to hear from you!

.. _contact form: /contact/
.. _@OddBird: https://twitter.com/oddbird
.. _public Slack: http://friends.oddbird.net
.. _`a range of support, training, and consulting`: /services/design-systems-training/
