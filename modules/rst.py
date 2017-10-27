# -*- coding: utf-8 -*-
"""
Add an |rst filter to the jinja templates…
"""

from functools import partial

from docutils.core import publish_parts
from jinja2 import Markup

from typogrify import typogrify_filter


def rst_filter(config, s):
    settings = {
        'initial_header_level': config.get('rst_header_level', 2),
        'smart_quotes': config.get('smart_quotes', False),
        'syntax_highlight': 'short'
    }
    parts = publish_parts(
        source=s,
        writer_name=config.get('rst_writer', 'html4css1'),
        settings_overrides=settings,
    )

    return Markup(typogrify_filter(parts['fragment']))


def setup(builder):
    env = builder.jinja_env
    env.filters['rst'] = partial(rst_filter, builder.config)
