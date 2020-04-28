public: yes
headline:
  - title: 'Blend'
    type: 'An **OddBird** Project'
    tagline: 'Sass support for LCH, Lab, and more CSS color spaces'
image:
  - src: 'projects/blend.jpg'
project:
  - name: 'Blend'
    tagline: 'Extended Sass colors'
    source: 'https://github.com/oddbird/blend'
    docs: '/blend/docs/'
    status: 'public'
    owner: yes
contributors:
  - author: 'miriam'
    role: 'creator'
summary: |
  CSS Color Modules Level 4 & Level 5
  include several new CSS color formats,
  new color-adjustment syntax,
  and a contrast function.
  **Blend** provides early access to many of these features,
  while working with Sass colors.


Blend
=====

.. image:: https://badge.fury.io/js/%40oddbird%2Fblend.svg
  :alt: 'npm package'
  :target: https://www.npmjs.com/package/@oddbird/blend

.. code:: bash

  npm install @oddbird/blend

Blend is written using the `Sass module syntax`_,
only supported by the Dart Sass compiler at this point.

.. _Sass module syntax: /2019/10/02/sass-modules/

.. code:: scss

  @use '<path-to>/@oddbird/blend';


Lab & LCH Formats
-----------------

(CIE) LCH & Lab color-conversion into (sRGB) sass colors:

.. code:: scss

   $cie-to-sass: (
     blend.lch(30% 50 300),
     blend.lab(60% -60 60),

     blend.lch(60% 75 120, 50%), // as %
     blend.lab(60% -60 60, 0.5), // or as fraction
   );

Color Contrast
--------------

Based on the proposed Level 5 color-contrast() function:

.. code:: scss

   $contrast: (
     // default black or white for best contrast
     blend.contrast($color),
     // highest contrast
     blend.contrast($color, maroon, rebeccapurple, cyan),
     // first color with contrast >= 4.5
     blend.contrast($color, maroon, rebeccapurple, 4.5),
   );

Inspecting Colors
-----------------

Inspect LCH & Lab values of Sass colors:

.. code:: scss

   $inspect: (
     blend.lightness($color),
     blend.a($color),
     blend.b($color),
     blend.chroma($color),
     blend.hue($color),
   );

Relative Colors
---------------

Relative Sass color adjustments using LCH & Lab channels

.. code:: scss

   $adjust: (
     // set chroma to 10
     blend.set($color, $chroma: 10),
     // adjust hue by -10
     blend.adjust($color, $hue: -10),
     // scale lightness 10% lighter
     blend.scale($color, $lightness: 10%),
   );

A relative-color shorthand, based on rough interpretation of the Level 5
relative color syntax:

.. code:: scss

   $from: (
     // set chroma to 20
     blend.from($color, l, 20, h),
     // linear adjustments to a channel
     blend.from($color, l, c, h -60),
     // relative scale, e.g. "half-way to white"
     blend.from($color, l 50%, c, h),
     // multiply the channel value
     blend.from($color, 2l, c, h),
   );


LCH Color Picker
----------------

To get started with new CSS color formats (and LCH in particular), check
out the wonderful `LCH Color Picker`_ by `Lea Verou`_.

We use the same conversion math, originally written in JS by `Chris
Lilley`_ and `Tab Atkins`_.

.. _LCH Color Picker: https://css.land/lch/
.. _Lea Verou: http://lea.verou.me/
.. _Chris Lilley: https://svgees.us/
.. _Tab Atkins: https://www.xanthir.com/


Color Spaces
------------

A **color space** provides a way of organizing and describing a
particular range (or gamut) of colors. Print design often relies on the
**CMYK** space, while web design has historically been limited to
**sRGB**.

If you write much CSS, you are likely familiar with several ``sRGB``
formats – including ``hexidecimal``, ``rgb()``, and ``hsl()``. While
``hex`` and ``rgb`` formats describe the space based on linear
adjustments of ``red``, ``green``, and ``blue`` axis, the ``hsl()``
format moves around sRGB space as a cylinder.

But ``sRGB`` provides a limited gamut of colors, and some unpredictable
results. While ``hsl`` helps provide a human readable format, the colors
are not **perceptually uniform** – yellow and blue ``hues`` with the
same ``lightness`` provide drastically different *luminosity* and
contrast.

Some of the new CSS color spaces address the gamut issue, providing
access to a wider range of colors. For example, the wider-gamut
``display p3`` is a better match for most modern screens (though only
currently supported in Safari).

LCH provides both a wider gamut (theoretically all visible color), along
with **perceptually uniform** distribution. Two colors at the same
lightness should provide the same luminosity. That makes LCH a great
choice for color systems that involve automation.

Eventually, we will be able to use LCH and other wide-gamut formats
directly in the browser, but for now colors must be converted to sRGB –
and colors that fall outside the sRGB gamut need to be adjusted.

That’s where we come in.
