public: yes
location: open-source
image:
  - src: 'projects/accoutrement-legos.jpg'
project:
  - name: 'Sass Accoutrement'
    tagline: 'Modular theme-configuration libraries'
    source: 'https://github.com/oddbird?utf8=%E2%9C%93&q=accoutrement&type=public'
    status: 'public'
    owner: yes
contributors:
  - author: 'miriam'
    role: 'creator'
summary: |
  A set of related theme-configuration libraries
  for building and documenting style patterns
  directly in your Sass code,
  as part of the development process.
  Currently includes modules for managing
  `browser normalization`_, `color palettes`_,
  `webfonts and typography`_, `modular scales`_,
  and `responsive layouts`_.

  .. _browser normalization: http://oddbird.net/accoutrement-init/sassdoc/
  .. _color palettes: http://oddbird.net/accoutrement-color/sassdoc/
  .. _webfonts and typography: http://oddbird.net/accoutrement-type/sassdoc/
  .. _modular scales: http://oddbird.net/accoutrement-scale/sassdoc/
  .. _responsive layouts: http://oddbird.net/accoutrement-layout/sassdoc/


Accoutrement
============


`Color Module`_
---------------

Manage your color palettes in one place,
and access them from anywhere
with optional accessibility guidance
from the `WCAG`_.

.. _Color Module: http://oddbird.net/accoutrement-color/sassdoc/
.. _WCAG: https://www.w3.org/WAI/intro/wcag


`Init Module`_
--------------

Lightweight, un-opinionated browser-normalization.
This is the only Accoutrement library
with direct CSS output when imported.

.. _Init Module: http://oddbird.net/accoutrement-init/sassdoc/


`Layout Module`_
----------------

Layout tools to help you manage
media-queries, positioning,
fluid aspect-ratios, box-sizing, and float-clearing.

.. _Layout Module: http://oddbird.net/accoutrement-layout/sassdoc/


`Scale Module`_
---------------

Manage a palette of consistent sizes
to use across your project
for typography, spacing, layout, and more.
Create sizes based on modular-scales or other calculations,
and access sizes in any unit you need.

.. _Scale Module: http://oddbird.net/accoutrement-scale/sassdoc/


`Type Module`_
--------------

Manage your font palettes in one place,
import them all with a single command,
and access font-stacks on-the-fly,
with helpers for generated content and accessibility.

.. _Type Module: http://oddbird.net/accoutrement-type/sassdoc/


Bonus Features
--------------

Both ``accoutrement-color`` and ``accoutrement-scale``
provide extra features when combined with the `MathSass`_ library.

.. _MathSass: https://github.com/terkel/mathsass
