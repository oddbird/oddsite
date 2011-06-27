#!/usr/bin/env python
"""
Runs a Django management command.

Avoids the double-settings-import and extra sys.path additions of Django's
default manage.py.

"""
import os, sys

sys.path.insert(0, os.path.join(os.path.abspath(os.path.dirname(__file__)), "src"))

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "oddsite.settings.default")

from django.core.management import execute_from_command_line

execute_from_command_line(sys.argv)
