public: yes
author: stacy
tags: [Tips, Workflow, Tools, Code]
image:
  - src: ''
summary: |
  We wanted to show some love to a few great tools we use to get us through
  our work days. Do you have any to add to our list? 


Tips and Tools We Love
======================

In the spirit of Valentine’s Day, let's kick off this post
with a CSS love poem:


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
and collapsible. Below is a screenshot comparing the default json view to the 
enhanced view after enabling this extension. 

.. image:: /static/images/blog/2017/tips-tools/before-after-json-viewer.jpg
   :alt: clean and messy json screenshots

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
.. _Surround.vim: https://github.com/tpope/vim-surround
.. _Tim Pope: https://twitter.com/tpope


Alfred
~~~~~~

`Alfred`_ can be one of those apps that you use all the time without realizing
how vital it is until you use someone else’s computer. Two of `Miriam’s`_ most
used Alfred features are the `launcher`_ and `searchable clipboard`_. 

.. image:: /static/images/blog/2017/tips-tools/alfred-launcher.jpg
   :alt: screenshot of the Alfred application launcher in use

The launcher allows you to find and open files or applications on your computer
with just a few keyboard commands and inputs. The Alfred clipboard history
feature gives you access to text, images and file links you've copied but may 
have not pasted yet.

You can also create custom workflows or add from the available ones the
`created by the Alfred community`_. Workflows can save you time by replacing
repetative tasks with simple keyboard shortcuts. These can be easily created
in a drag on drop interface making it a great tool for non-developers as well.

.. _Alfred: https://www.alfredapp.com/
.. _launcher: https://www.alfredapp.com/help/features/default-results/
.. _Miriam’s: /birds/#bird-miriam
.. _searchable clipboard: https://www.alfredapp.com/help/features/clipboard/
.. _created by the Alfred community: https://www.alfredapp.com/workflows/


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
``>>`` and TextExpander automatically changes it to ``»``. If I want the html 
entity I can use ``html>>`` and it changes it to ``&raquo;``. This way, I don’t
have to remember each of the codes and use a more english-friendly version.

Another snippet I use often is to include a quick snippet to visually see
the breakpoints of a web project I am working on. When I type ``;showbp`` the
following TextExpander snippet is triggered:

.. code:: scss

  $breakpoints: (
    '%filltext:name=Breakpoint 1 Name:default=small%': %filltext:name=Breakpoint 1 Value :default=24rem%,
    '%filltext:name=Breakpoint 2 Name:default=medium%': %filltext:name=Breakpoint 2 Value :default=44rem%,
    '%filltext:name=Breakpoint 3 Name:default=large%': %filltext:name=Breakpoint 3 Value :default=60rem%,
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
    display: block;
    font-size: 1rem;
    margin: 0;
    padding: 0.5rem;
    position: fixed;
    text-align: center;	
    top: 0;
    width: auto;
  }

I used 6 single-line fill-in fields for the breakpoint names and values.
Breakpoints can be added or removed later if necessary. 

.. image:: /static/images/blog/2017/tips-tools/fill-ins.jpg
   :alt: Fill-in text dialog box

This snippet is very useful when you need a fast way to easily see which 
breakpoint you are in when your design needs to change. You can see it in
action `in this Pen`_.

.. _in this pen: http://codepen.io/stacy/pen/9b76e7d9eb9d730e734aa776a7078fc5/



There are so many more tools we use that are completely deserving of making
this list. What are a few tips or tools you wouldn't want to be without?
Let’s continue this conversation on two additional tools we love,
`Twitter`_ and `Slack`_.

.. _Twitter: https://twitter.com/oddbird
.. _Slack: http://friends.oddbird.net
