public: yes
author: stacy
tags: [Tips, Workflow, Tools]
image:
  - src: 'cssgriddemo.jpg'
summary: |
  Summary goes here?
.. after:
..   - include: 'blog/_tag-module.html.j2'
..     title: 'Posts about CSS Grid Layout'
..     tag: 'CSS Grid'
..     id: 'css-grid-layout'


Tips and Tools we Love
======================

In the spirit of Valentine’s Day, let's kick off this post
with a CSS love poem:

.. .. code:: scss

..   .errors {
..     color: #990000; // red
..   }

..   a {
..     color: #000099; // blue
..   }

..   $design: ‘sweet’;

..   .we {
..     @include you;
..   }


.. raw:: html

  <p data-height="238" data-theme-id="light" data-slug-hash="jydWVB" data-default-tab="result" data-user="stacy" data-embed-version="2" data-pen-title="CSS Love Poem" class="codepen">See the Pen <a href="http://codepen.io/stacy/pen/jydWVB/">CSS Love Poem</a> by Stacy (<a href="http://codepen.io/stacy">@stacy</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


Obviously, there are some pieces missing from the above sample, like where is
the ``you`` `mixin defined`_? And why aren’t you even using the variable you
declared? This code would not pass our OddBird code review, but today’s post
is about the tips and tools that have our approval and praise. I asked each
OddBird to share one work-related item they wouldn’t want to be without and why.

.. _mixin defined: http://codepen.io/stacy/pen/249235ffa47cbe123358452508c554b9


JSON Viewer
~~~~~~~~~~~

`David Glick`_ loves the `JSON Viewer`_ extension for debugging JSON-based APIs.
Instead of seeing an unreadable blob of JSON it automatically formats any
response with a content-type of text/json, making it easy to read, searchable,
and collapsible.

.. _David Glick: /birds/#bird-david
.. _JSON Viewer: https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh



.. _Jonny Gerig Meyer: /birds/#bird-jonny


Surround.vim
~~~~~~~~~~~~

`Kit La Touche`_ uses a wonderful vim plugin from `Tim Pope`_ called 
`Surround.vim`_. He uses it to make things in-parens or things-in-quotes
into text objects, so he can select “everything inside these curly braces”
with a single vim motion.

.. _Kit La Touche: /birds/#bird-kit
.. _Vim-surround: https://github.com/tpope/vim-surround
.. _Tim Pope: https://twitter.com/tpope



.. _Miriam Suzanne: /birds/#bird-miriam


.. _Sondra Eby: /birds/#bird-sondra


TextExpander
~~~~~~~~~~~~

Most text editors have language-specific autocompletion and plugins that 
allow you to create snippets, but I use `TextExpander`_ for a few reasons. 
Not only does it allow me to sync my snippets across my Apple devices, I can 
also choose which applications to use or exclude from expanding snippets and 
I can create complex snippets that allow repositioning of the cursor and a
variety of options for their "Fill-ins" function. It deserves a full post
explaining all of the benefits, but I will share two of my favorites today.

When I want to use a double right arrow symbol, I can use my snippet 
`>>` and TextExpander automatically changes it to `»`. If I want the html 
entity I can use `html>>` and it changes it to `&raquo;`. This way, I don’t
have to remember each of the codes and use a more english-friendly version.

Another snippet I use often is to include a quick snippet to visually see
the breakpoints of a web project I am working on. It goes like this: 

```$breakpoints: (
	'small': 20rem,
  'medium': 40rem,
  'large': 55rem,
);

// Display Breakpoint During Development on Front end
@each $breakpoint, $screen-size in $breakpoints {

	@media screen and (min-width: '#{$screen-size}') {
		body:before {
			content: '@include above(#{$breakpoint}) // min-width: #{$screen-size}';
		}
	}
}

body:before {
	background-color: hsla(0, 80%, 20%, .75);
	color: #fff;

	bottom: 0;
	display: block;
	font-size: 1rem;
	margin: 0;
	padding: 0.5rem;
	position: fixed;
	text-align: center;	
	width: auto;
}
```