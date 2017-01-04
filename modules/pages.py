# -*- coding: utf-8 -*-
"""
Page metadata module for rstblog.

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
    page_configs = {}
    for page in get_pages(builder):
        page_config = get_page_context(page)
        page_key = get_page_key(page)
        page_configs[page_key] = page_config

    builder.config = builder.config.add_from_dict({
        'pages': page_configs,
    })
