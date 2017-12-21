# -*- coding: utf-8 -*-
"""
Page metadata module for rstblog.

Use like:
  {{ config.pages.birds.slug }}
"""

from functools import partial
from rstblog.modules.blog import get_all_entries
import operator


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
            return value == (getattr(x, key, None) or x.config.get(key))
        if operator == 'neq':
            return value != (getattr(x, key, None) or x.config.get(key))
        if operator == 'has':
            return value in (getattr(x, key, None) or x.config.get(key, []))

    return [
        x
        for x
        in values
        if predicate(x, key)
    ]


def get_blog_entries_by_bird(builder, bird):
    posts = get_all_entries(builder)
    return [
        post
        for post
        in posts
        if bird == post.author
    ]


def get_blog_entries_by_tag(builder, tag):
    posts = get_all_entries(builder)
    return [
        post
        for post
        in posts
        if tag in post.tags
    ]


def collect(pages, key, label_with=None):
    result = []
    for page in pages:
        for item in page.config.get(key, []):
            if label_with:
                label = (
                    getattr(page, label_with, None) or
                    page.config.get(label_with)
                )
                item = item.copy()
                item[label_with] = label
            result.append(item)
    return result


def build_get_config(builder):
    all_pages = {
        p.slug: p
        for p
        in builder.iter_contexts()
    }

    def get_config(slug, key=None):
        page = all_pages.get(slug, None)
        if page is None:
            return page
        if key is not None:
            page_config = getattr(page, 'config', None)
            return (
                getattr(page_config, key, None) or
                page_config.get(key, None)
            )
        return page

    return get_config


def is_string(obj):
    return isinstance(obj, basestring)


def remove_index(str):
    if str.endswith('/index'):
        return str[:-6]
    return str


def setup(builder):
    env = builder.jinja_env
    env.filters['is_string'] = is_string
    env.filters['remove_index'] = remove_index
    env.filters['show_all_attrs'] = show_all_attrs
    env.filters['show_config'] = show_config
    env.filters['filter_pages'] = filter_pages
    env.filters['collect'] = collect
    env.filters['get_page'] = get_page
    env.filters['get_config'] = build_get_config(builder)
    env.globals['get_blog_entries_by_bird'] = partial(
        get_blog_entries_by_bird,
        builder,
    )
    env.globals['get_blog_entries_by_tag'] = partial(
        get_blog_entries_by_tag,
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
