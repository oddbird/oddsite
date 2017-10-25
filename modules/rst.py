# -*- coding: utf-8 -*-
"""
Add an |rst filter to the jinja templates…
"""

from docutils.core import publish_parts
from jinja2 import Markup


def rst_filter(s):
    return Markup(publish_parts(source=s, writer_name='html5writer')['body'])


def setup(builder):
    env = builder.jinja_env
    env.filters['rst'] = rst_filter
