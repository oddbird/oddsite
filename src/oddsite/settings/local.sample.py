"""
Settings overrides for a particular deployment of this app. The defaults should
be suitable for local development; settings below may need adjustment for a
staging or production deployment.

Copy settings/local.sample.py to settings/local.py and modify as needed.

"""

#DATABASES["default"]["ENGINE"] = "django.db.backends.postgres_psycopg2"
#DATABASES["default"]["NAME"] = "oddsite"
#DATABASES["default"]["USER"] = "oddsite"

#DEBUG = False
#TEMPLATE_DEBUG = False

# This email address will get emailed on 500 server errors.
#ADMINS = [
#    ("Some One", "someone@example.com"),
#]

# Absolute path to directory where static assets will be collected by the
# "collectstatic" management command, and can be served by front-end webserver.
# Defaults to absolute filesystem path to "collected-assets/" directory.
#STATIC_ROOT = ""

# Base URL where files in STATIC_ROOT are deployed. Defaults to "/static/".
#STATIC_URL = ""

# A unique (and secret) key for this deployment.
#SECRET_KEY = ""

# If a mail server is not available at localhost:25, set these to appropriate
# values:
#EMAIL_HOST = ""
#EMAIL_PORT = ""
# If the mail server configured above requires authentication and/or TLS:
#EMAIL_USE_TLS = True
#EMAIL_HOST_USER = ""
#EMAIL_HOST_PASSWORD = ""
