# -*- coding: utf-8 -*-
"""
Get full canonical URLs of pages for OpenGraph tags.
"""

from urlparse import urljoin


def get_full_canonical_url(builder, slug='/'):
    root = builder.config['canonical_url']
    if slug.endswith('index'):
        slug = slug.rstrip('index')
    url = urljoin(root, builder.link_to('page', slug=slug))
    if not url.endswith('/'):
        url += '/'
    return url


def setup(builder):
    env = builder.jinja_env
    env.globals['get_full_canonical_url'] = get_full_canonical_url
