# -*- coding: utf-8 -*-
"""
Add current_time to Jinja templates
"""


from datetime import datetime


def make_date(value):
    year = value[0]
    month = value[1]
    day = value [2]
    return datetime(year, month, day)


def filter_events(event_list, show_past=None):
    future = []
    past = []
    for event in event_list:
        date = make_date(event['date'])
        if date >= datetime.now():
            future.append(event)
        else:
            past.append(event)
    return past if show_past else future


def format_date(value, format='%B %-d, %Y'):
    return value.strftime(format)


def setup(builder):
    env = builder.jinja_env
    env.globals['now'] = datetime.now()
    env.filters['make_date'] = make_date
    env.filters['filter_events'] = filter_events
    env.filters['format_date'] = format_date
