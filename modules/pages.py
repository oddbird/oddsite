# -*- coding: utf-8 -*-
"""
Page metadata module for rstblog.

Use like:
  {{ config.pages.birds.slug }}
"""

from rstblog.modules.blog import get_all_entries


def is_blog_post(page):
    # Rough approximation of blog posts:
    return (
        page.pub_date is not None
        and not page.slug.startswith('static')
        and not page.slug.startswith('styleguide')
    )


def is_static_page(page):
    # Rough approximation of static pages:
    return (
        page.pub_date is None
        and not page.slug.startswith('static')
        and not page.slug.startswith('styleguide')
    )


def get_posts(builder):
    return [
        page
        for page
        in builder.iter_contexts()
        if is_blog_post(page)
    ]


def get_pages(builder):
    return [
        page
        for page
        in builder.iter_contexts()
        if is_static_page(page)
    ]


def get_page(page_list):
    if page_list:
        return page_list[0]
    return None


def get_page_context(page):
    return page


def get_page_key(page):
    return page.slug


def show_all_attrs(value):
    """For debugging."""
    res = []
    for k in dir(value):
        if not k.startswith('_'):
            res.append(u'{}: {}'.format(k, getattr(value, k)))
    return u'\n'.join(res)


def show_config(config):
    """For debugging."""
    return u'\n'.join(
        ', '.join(frame.keys()) for frame in config.stack
    )


def filter_pages(values, key, operator=None, value=None):
    """
    Filter a collection of pages based on the value of a key.

    That key can be on the page itself or in its config
    Use:
      some_pages|filter_pages('bird')
      some_pages|filter_pages('bird', 'eq', 'kit')
      some_pages|filter_pages('bird', 'neq', 'kit')
    """

    def predicate(x, key):
        if operator is None:
            # Configs don't implement all of dict, so I can't do:
            #   key in x.config
            return (hasattr(x, key) or x.config.get(key))
        if operator == 'eq':
            return (getattr(x, key, None) or x.config.get(key)) == value
        if operator == 'neq':
            return (getattr(x, key, None) or x.config.get(key)) != value

    return [
        x
        for x
        in values
        if predicate(x, key)
    ]


def make_get_blog_entries_by_bird(builder):
    def get_blog_entries_by_bird(bird):
        posts = get_all_entries(builder)
        return [
            post
            for post
            in posts
            if bird == post.author
        ]

    return get_blog_entries_by_bird


def make_get_blog_entries_by_tag(builder):
    def get_blog_entries_by_tag(tag):
        posts = get_all_entries(builder)
        return [
            post
            for post
            in posts
            if tag in post.tags
        ]

    return get_blog_entries_by_tag


def setup(builder):
    env = builder.jinja_env
    env.filters['show_all_attrs'] = show_all_attrs
    env.filters['show_config'] = show_config
    env.filters['filter_pages'] = filter_pages
    env.filters['get_page'] = get_page
    env.globals['get_blog_entries_by_bird'] = make_get_blog_entries_by_bird(
        builder,
    )
    env.globals['get_blog_entries_by_tag'] = make_get_blog_entries_by_tag(
        builder,
    )
    env.globals['all_pages'] = get_pages(builder)
    page_configs = {}
    for page in get_pages(builder):
        page_config = get_page_context(page)
        page_key = get_page_key(page)
        page_configs[page_key] = page_config

    builder.config.stack.append({
        'pages': page_configs,
    })
