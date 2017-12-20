public: yes
speakers: [carl]
events:
  - venue: 'PyCon'
    url: 'https://us.pycon.org/2011/'
    date: [2011, 3, 12]
    adr: 'Atlanta, GA'
    video_link: 'http://pyvideo.org/video/389/pycon-2011--reverse-engineering-ian-bicking--39-s'
summary: |
  **Pip and virtualenv: many use them;
  not so many understand just how they work their magic.** -
  If you're a pip/virtualenv user but
  haven't yet dared crack the lid
  (or you have, and found it a bit difficult to follow),
  come along for a fast-paced guided tour.
  Knowing these tools will help you make more effective use of them,
  and might also turn you into a contributor.


Reverse-engineering Ian Bicking's brain: inside pip and virtualenv
==================================================================

Pip and virtualenv are widely used in the Python world,
but for the size of their user base don't receive many code contributions,
and many users have misconceptions about how they actually work.

This talk will cover a bit of advanced use of pip and virtualenv,
but mostly we'll dive into the source code,
mapping it out with a high-level view and
diving into the guts of particularly interesting bits.
By the end of the talk, you'll have a good idea exactly how
pip and virtualenv do their magic,
and where to go looking in the source
for particular behaviors or bug fixes.
We'll walk through the creation of a virtualenv step-by-step,
and trace a typical "pip install -r requirements.txt"
and "pip uninstall" through the code paths they follow.
