public: yes
author: kit
tags: [Celery, Django, Django-Channels, UX, Code]
image:
  - src: ''
summary: |
  When you have out-of-band processing in a webapp, how do you let users know
  that the status of a task has changed? Depending on your frontend client,
  there are a few different approaches you might take.


Django, Background Processes, and Keeping Users in the Loop
===========================================================

In my `last post`_, I talked about how a modern webapp needs background worker
processes. One way or another, you'll have some things you need to do that are
slower than you can do in a request/response cycle, and so you'll want to
handle them out of band. Have the API return a simple ``202 ACCEPTED`` and move
on with your life, right?

.. _last post: /2017/03/20/serializing-things/

Well, it sometimes happens that you want to tell users about the state of those
background processes. You might want to say "it's done!", or "it's failed!", or
even just to acknowledge that it's taking a long time, but still going. And
just saying "they can refresh the page" isn't always enough. (Though, sometimes
it is!)

I'm going to talk about different ways you can do this.

First I'll talk about how I would do it using Celery. But ``django-channels``
provides some cool new options for handling background processes, so I'll cover
that too.

Celery
------

Imagine we have a long-running background process, something that can take up
to a minute under normal circumstances, maybe more under exceptional load. We
make a Celery task to handle it, and now we want to let the user know what
state it's in.

The most simple (or simplistic) approach can be to use the database to store
state. You can do this with Celery's database result backend, or a custom task
state model that you periodically update. Imagine something like this:

.. code:: python

    @app.task
    def my_task(some_arg):
        # some unique identifier, that you can recover outside the task:
        task_id = get_task_id_based_on_arg(some_arg)
        state, _ = TaskState.objects.get_or_create(task_id=task_id)

        total = len(some_arg)
        for i, elem in enumerate(some_arg):
            process_elem(elem)
            # Every 100 elements, update the percentage processed:
            if i % 100 == 0:
                state.percent_done = (i / float(total)) * 100
                state.save()

Then in your views, you can retrieve the appropriate TaskState and show how
much has been processed. Sometimes that's a good approach, but usually I think
that's pretty clunky. It can thrash the database, leave records lying around if
things die halfway through, and still doesn't give you a smooth experience;
your user has to refresh to see updates.

As an aside, it might be tempting to do something like this with the Django
`messages framework`_. However, adding and retrieving messages requires the
``request`` object. Even the pickle serializer can fail to serialize the
request object. I would strongly recommend saving yourself the time and
trouble, and using anything but messages for this.

.. _messages framework: https://docs.djangoproject.com/en/1.10/ref/contrib/messages/

So what if you want real-time updates? What if that page refresh is bumming you
out?

A nice option is something like `Pusher`_. They provide a service that you can
push to from inside your app (in the request/response cycle, or in a background
task) using a nice Python library, and some JS to get your users talking to
their realtime websocket-y servers, to get those updates. Their JS library even
includes sensible fallbacks for when websockets aren't available. The one
caution is that their prices take a curve that can be a bit steep for some
situations; if developer time is cheaper than ongoing service costs, then it
might be worth rolling your own websocket solution. Which brings us to our next
section.

.. _Pusher: https://pusher.com/

Django-Channels
---------------

If you are using the newer Django Channels package for background tasks, this
has the added benefit of making it possible for you to make and manage your own
websockets connections.

For an overview of Channels itself, see the `channels docs`_ or Jacob
Kaplan-Moss's `excellent blog post`_ on the subject.

.. _channels docs: https://channels.readthedocs.io/en/stable/
.. _excellent blog post: https://blog.heroku.com/in_deep_with_django_channels_the_future_of_real_time_apps_in_django

The one thing you should know right here and now is that the
``channel_routing`` attribute (usually in ``routing.py``) should have, at a
minimum, these values:

.. code:: python

    channel_routing = [
        route("websocket.connect", websocket_connect),
        route("websocket.receive", websocket_receive),
        route("websocket.disconnect", websocket_disconnect),
        route("my-background-task", my_background_task),
    ]

The first three are consumers (the generalization of "views" used in Channels)
for handling basic websocket operations. The last one is whatever long-running
task you want to run in the background.

So, once you've called the background task:

.. code:: python

    Channel('my-background-task').send(some_arguments)

You can then, in the task, make use of the websocket connection that you set up
when the user initially loaded the page:

.. code:: python

    Group(get_group_id_from(some_arguments)).send("Status update")

Be sure that there's some stable way to identify the ``Group`` that you need to
send to. It might be as simple as passing in the username of the logged-in user
who kicked off the task, or it might be based on a process UUID that's in the
view's path, or something else. Whatever it is, when the user's browser makes a
websocket connection on page load, you'll want to add that reply channel to the
``Group``:

.. code:: python

    def websocket_connect(message):
        # Accept connection
        message.reply_channel.send({"accept": True})
        Group(get_group_id_from(message)).add(message.reply_channel)

On the frontend, you should have something like this:

.. code:: js

    socket = new WebSocket("ws://" + window.location.host);
    socket.onmessage = show_some_toast_for(message);
    // Call onopen directly if socket is already open
    if (socket.readyState == WebSocket.OPEN) socket.onopen();

And now you can push messages to users yourself.

Have you tried out Channels yet? Do you have better ideas for what to do with
websockets? Let us know `Twitter`_, on our `public Slack channel`_, or through
our `handy contact form`_.

.. _Twitter: https://twitter.com/oddbird
.. _public Slack channel: http://friends.oddbird.net
.. _handy contact form: /contact/
