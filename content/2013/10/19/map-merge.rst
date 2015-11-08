public: yes
tags: [sass, maps, code]
author: miriam


Map-Set vs. Map-Merge
=====================

When I first heard that Sass 3.3 had no map-set function, I was confused. Why force me to create a map, and then merge it? That sounds like two steps to accomplish one simple task! But that's not the case. Map-merge is a much more powerful function, and using it to set a key in an existing map is quite straight-forward. In fact, I couldn't come up with a map-set function that shaved off more than a few keystrokes. Here's the comparison:

.. code:: scss

  // a map!
  $map: (
    1: hello,
    2: world,
  );

  // a map-set function (not included with Sass)
  @function map-set($map, $key, $value) {
    $new: ($key: $value);
    @return map-merge($map, $new);
  }

  // the difference between map-set and map-merge: almost nothing.
  $merge: map-merge($map, (2: New York));
  $set: map-set($map, 2, New York);

