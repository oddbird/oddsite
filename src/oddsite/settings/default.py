from .base import *

# import local settings, if they exist
local_settings = abspath(join(dirname(__file__), "local.py"))
if exists(local_settings):
    exec(open(local_settings).read())

if DEBUG:
# use console email backend in debug mode, unless overridden in local
    try:
        EMAIL_BACKEND
    except NameError:
        EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
