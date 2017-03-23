public: yes
author: kit
tags: [Celery, Django, Django-Channels, UX, Code]
image:
  - src: ''
summary: |
  Dapibus gravida a adipiscing elementum condimentum suscipit fringilla
  scelerisque suspendisse nisl ipsum sociosqu parturient dui felis risus
  condimentum consectetur parturient vestibulum eu vestibulum mauris enim.
  Ornare felis suspendisse adipiscing integer potenti a posuere parturient nibh
  rhoncus nisi condimentum vulputate mus ante sem porta hac consectetur congue
  luctus gravida a. Suscipit euismod non natoque class iaculis maecenas ligula
  natoque magnis a ad eleifend suspendisse adipiscing potenti parturient urna
  sagittis penatibus adipiscing in condimentum adipiscing integer. Scelerisque
  adipiscing leo ac per parturient consectetur vestibulum habitant proin elit
  condimentum potenti cum at consequat diam nisi in. Ornare ac eu vestibulum id
  hac laoreet vel consequat sem vestibulum vestibulum accumsan quam felis
  ullamcorper proin a augue est platea per id odio aptent a nam ullamcorper.


Django, Background Processes, and Keeping Users in the Loop
===========================================================

In my last post, I talked about how
a modern webapp needs background worker processes

It sometimes happens that
you want to tell users about the state of those background processes.
Either to say "it's done!",
or "it's failed!",
or to acknowledge that it's taking a long time, but still going.

I'm going to talk about different ways you can do this.

First I'll talk about doing it using Celery.
But django-channels is providing some cool new ways to handle background processes,
so I'll talk about that too.

Celery
------

Django messages framework
seems a compelling option
but it requires the request object.
If you are using the JSON serializer for Celery
and not the pickle serializer
(as per the last post)
then that's hard to get.

In order to get message data between a request/response cycle and a background worker
you need to use the database session storage
and the session message storage.

They'll see the messages on a new page load.

This is hairy, and not advised,
unless it fits a very particular set of restrictions.

If you can use JavaScript
(and really, that's a safe assumption),
Pusher is another option.
Your user will load JS that'll connect to the Pusher server
and your background task will send a message to Pusher,
which will then send it to the user, over websockets,
or a series of sensible fallbacks.

Django-Channels
---------------

If you are using the new!! exciting!! django-channels
then you have some other options
including managing your own websocket connections.

Here's some Python:

And here's some JS:

And now you can push messages to users yourself.

Style it like toast!

When have you had to do something like this?
What problems did you solve?
Let us know in slack or on twitter.
