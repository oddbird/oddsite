# -*- coding: utf-8 -*-
"""
Add current_time to Jinja templates
"""


from datetime import datetime


def setup(builder):
    env = builder.jinja_env
    env.globals['current_time'] = datetime.now()
