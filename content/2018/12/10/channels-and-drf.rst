public: yes
tags: [Python, Django, APIs, ASGI, 'Push Notifications']
author: kit
summary: |
  We're exploring some patterns lately for how to add WebSocket push
  notifications to what is otherwise a RESTful API. This means, for us,
  using Django REST Framework and Django Channels in concert.


Django REST Framework and Channels
==================================

Recently, Tom Christie, the creator of Django REST Framework (a.k.a.
DRF), said:

    I think the biggest thing missing for folks ATM is probably just a
    lack of tutorials or blog posts on using Channels and REST framework
    together.

I realized that that's *exactly* what we're working on lately at
OddBird, so I thought I'd write up an in-progress report. I'm not at all
convinced that this is the best way, but it's what seems to be working
so far.

The basics
----------

First, DRF. If you're here, you're probably already familiar with it.
We've made a pretty traditional RESTful API with it, keeping the
endpoints flat, with minimal server-side logic mostly encapsulated in
the serializers.

The endpoints look a bit like this::

   GET /api/foo
   POST /api/foo
   GET /api/foo/:id
   PUT /api/foo/:id
   DELETE /api/foo/:id

And the code like this::

   foo/
     __init__.py
     models.py
     serializers.py
     urls.py
     views.py
     tests/
       __init__.py
       models.py
       serializers.py
       views.py

As a side note, for something that I'm not distributing as a library, I
like to keep the tests parallel to the code and within the same tree; if
I'm writing a library, I root the tests in a different tree, but still
with parallel structure to the code. This makes it easier to exclude
them on an install.

Inside those files, we mostly have simple declarative use of DRF. Follow
their `tutorial`_ if you want to get that set up. We run our tests with
`pytest`_ and a requirement of 100% test coverage, as we do with all our
projects.

Channels is perhaps a little less likely to be familiar; I haven't seen
it get quite as much uptake, being a more specialized tool. That said,
it's pretty simple to set up on top of an existing Django application,
so I'll walk you through it in brief.

First, you need to move from using WSGI to ASGI, which is "basically the
same, but async". This means changing your server process from gunicorn
to something like Daphne, changing your ``project.wsgi`` file to
``project.asgi`` (as described in the `Channels docs`_), add a
``routing`` module and a ``consumers`` module, and adjust your settings
appropriately.

At this stage, you won't yet have anything in ``consumers``, and you
won't have much in routing. It can look like this::


   from channels.routing import ProtocolTypeRouter

   application = ProtocolTypeRouter({
       # (http->django views is added by default)
   })

Yep, that's basically an empty ``ProtocolTypeRouter``. We're just making
sure we don't break anything with the transition to ASGI, first, and
``ProtocolTypeRouter`` does as the comment says, and wires HTTP to
Django by default.

Once that's all done and you've confirmed that everything's still
working, you can start to add in the wiring for WebSockets.

WebSockets, Consumers, and Groups
---------------------------------

Let's talk a bit about architecture before we talk about how to
implement it.

As we're using it, Channels primarily drives the pushing of
notifications about the state of selected objects to the client, over
WebSockets. We've opted to simplify the client's job by having one
endpoint that it can call to subscribe to any objects it wants, and to
use the payload it sends to validate and set up that subscription. So
the client sends the following data to
``wss://server.domain/ws/notifications``::

   {
       "object_type": "string representation of type",
       "id": "hashid of the instance"
   }

The server will then decide if the requesting user can subscribe to that
model, and start sending them updates over that WebSocket if so.

On the server's side of things, we have a Consumer object that handles a
bunch of WebSocket events, and, when appropriate, adds a particular
socket connection to a named Group. Elsewhere in the server logic, we
send events to that group when the model changes, and all subscribed
sockets will receive a serialization of the model with the changes.

(Since we're using React on the frontend for this project, we're also
sending a value that happens to map to the Redux event names we're
using, but that sort of tight coupling may not match your needs.)

OK, but what does that Consumer look like?

::

    from channels.generic.websocket import AsyncJsonWebsocketConsumer


    class NotificationConsumer(AsyncJsonWebsocketConsumer):
        async def connect(self):
            # We're always going to accept the connection, though we may
            # close it later based on other factors.
            await self.accept()

        async def notify(self, event):
            """
            This handles calls elsewhere in this codebase that look
            like:

                channel_layer.group_send(group_name, {
                    'type': 'notify',  # This routes it to this handler.
                    'content': json_message,
                })

            Don't try to directly use send_json or anything; this
            decoupling will help you as things grow.
            """
            await self.send_json(event["content"])


        async def receive_json(self, content, **kwargs):
            """
            This handles data sent over the wire from the client.

            We need to validate that the received data is of the correct
            form. You can do this with a simple DRF serializer.

            We then need to use that validated data to confirm that the
            requesting user (available in self.scope["user"] because of
            the use of channels.auth.AuthMiddlewareStack in routing) is
            allowed to subscribe to the requested object.
            """

            # Define this method on your consumer like the version in
            # rest_framework.generics.GenericAPIView
            # Be sure to pass in the context, so that the serializer can
            # confirm that this particular user can get updates on this
            # particular object.
            serializer = self.get_serializer(data=content)
            if not serializer.is_valid():
                return
            # Define this method on your serializer:
            group_name = serializer.get_group_name()
            # The AsyncJsonWebsocketConsumer parent class has a
            # self.groups list already. It uses it in cleanup.
            self.groups.append(group_name)
            # This actually subscribes the requesting socket to the
            # named group:
            await self.channel_layer.group_add(
                group_name,
                self.channel_name,
            )

And you'll want to add some stuff to your ``routing`` module, too::

    from django.urls import path

    from channels.auth import AuthMiddlewareStack
    from channels.routing import ProtocolTypeRouter, URLRouter

    from .consumers import NotificationConsumer


    websockets = URLRouter([
        path(
            "ws/notifications/",
            NotificationConsumer,
            name="ws_notifications",
        ),
    ])


    application = ProtocolTypeRouter({
        # (http->django views is added by default)
        "websocket": AuthMiddlewareStack(websockets),
    })

There are a couple more pieces. We need to actually send updates when a
model changes!

We separate out those concerns. We add a ``notifications`` module with
the appropriate functions to wrap up the data and send it over the
channels layer, and then we call out to those functions in the models'
``save`` methods.

In our ``notifications.py`` we have something like this::


    from channels.layers import get_channel_layer
    from .serializers import FooSerializer

    async def update_foo(instance):
        serializer = FooSerializer(foo)
        group_name = serializer.get_group_name()
        channel_layer = get_channel_layer()
        content = {
            # This "type" passes through to the frontend to facilitate
            # our Redux events.
            "type": "UPDATE_FOO",
            "payload": serializer.data,
        }
        await channel_layer.group_send(group_name, {
            # This "type" defines which handler on the Consumer gets
            # called.
            "type": "notify",
            "content": content,
        })

And then our models has something like this::

    from django.db import models
    # Using FieldTracker from django-model-utils helps you only send
    # updates when something actually changes.
    from model_utils import FieldTracker
    from asgiref.sync import async_to_sync

    class Foo(models.Model):
        tracker = FieldTracker(fields=("bar",))
        bar = models.CharField(max_length=100)

        def save(self, *args, **kwargs):
            ret = super().save(*args, **kwargs)
            has_changed = self.tracker.has_changed("bar")
            if has_changed:
                # This is the wrapper that lets you call an async
                # function from inside a synchronous context:
                async_to_sync(update_foo)(self)
            return ret

Testing
-------

Testing async code with pytest is best done with the `pytest-asyncio`_
package. This allows you to write tests that are themselves async
functions, if you use the ``@pytest.mark.asyncio`` marker on them. The
Channels docs have some more details on `how to test consumers`_ this
way.

Final thoughts
--------------

This is a work in progress, of course. As we iron out the kinks, I
intend to wrap up the easily isolated pieces of logic into a package we
can distribute. I think that this will involve a particular Consumer, a
serializer mixin, a model mixin, and a particular notifications module.

Let us know if you try this, or have ideas for improvements! This is new
ground for me, and I'd love to have some different perspectives on it.



.. _tutorial: https://www.django-rest-framework.org/tutorial/quickstart/
.. _pytest: https://docs.pytest.org/en/latest/
.. _Channels docs: https://channels.readthedocs.io/en/latest/deploying.html?highlight=asgi.py#run-protocol-servers
.. _pytest-asyncio: https://github.com/pytest-dev/pytest-asyncio
.. _how to test consumers: https://channels.readthedocs.io/en/latest/topics/testing.html
