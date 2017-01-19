# -*- coding: utf-8 -*-
"""
Page metadata module for rstblog.

Use like:
  {{ config.pages.birds.slug }}
"""


def is_static_page(page):
    # Rough approximation of static pages:
    return (
        page.pub_date is None
        and not page.slug.startswith('static')
        and not page.slug.startswith('styleguide')
    )


def get_pages(builder):
    return [
        page
        for page
        in builder.iter_contexts()
        if is_static_page(page)
    ]


def get_page_context(page):
    return page


def get_page_key(page):
    return page.slug


def setup(builder):
    builder.jinja_env.filters['show_all_attrs'] = show_all_attrs
    page_configs = {}
    for page in get_pages(builder):
        page_config = get_page_context(page)
        page_key = get_page_key(page)
        page_configs[page_key] = page_config

    builder.config.stack.append({
        'pages': page_configs,
    })


def show_all_attrs(value):
    """For debugging."""
    res = []
    for k in dir(value):
        if not k.startswith('_'):
            res.append(u'{}: {}'.format(k, getattr(value, k)))
    return u'\n'.join(res)
