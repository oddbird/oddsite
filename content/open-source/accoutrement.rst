public: yes
location: open-source
image:
  - src: 'projects/accoutrement-legos.jpg'
summary: |
  A set of related theme-configuration libraries
  for building and documenting style patterns
  directly in your Sass code,
  as part of the development process.
  Currently includes modules for managing
  `browser normalization`_, `color palettes`_,
  `webfonts and typography`_, `modular scales`_,
  and `responsive layouts`_.

  .. _browser normalization: /accoutrement-init/
  .. _color palettes: /accoutrement-color/
  .. _webfonts and typography: /accoutrement-type/
  .. _modular scales: /accoutrement-scale/
  .. _responsive layouts: /accoutrement-layout/


Accoutrement
============

OddBird's Accoutrement toolkits
are designed around the idea that code should be
meaningful to both humans and machines –
opening the door for automation,
while improving or maintaining readability.
These tools integrate with Herman,
our automated living patter-library generator
built on SassDoc.


`Color Module`_
---------------

Manage your color palettes in one place,
and access them from anywhere
with optional accessibility guidance
from the `WCAG`_.

.. _Color Module: /accoutrement-color/
.. _WCAG: https://www.w3.org/WAI/intro/wcag


`Init Module`_
--------------

Lightweight, un-opinionated browser-normalization.
This is the only Accoutrement library
with direct CSS output when imported.

.. _Init Module: /accoutrement-init/


`Layout Module`_
----------------

Layout tools to help you manage
media-queries, positioning,
fluid aspect-ratios, box-sizing, and float-clearing.

.. _Layout Module: /accoutrement-layout/


`Scale Module`_
---------------

Manage a palette of consistent sizes
to use across your project
for typography, spacing, layout, and more.
Create sizes based on modular-scales or other calculations,
and access sizes in any unit you need.

.. _Scale Module: /accoutrement-scale/


`Type Module`_
--------------

Manage your font palettes in one place,
import them all with a single command,
and access font-stacks on-the-fly,
with helpers for generated content and accessibility.

.. _Type Module: /accoutrement-type/
