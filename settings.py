import inspect
import os.path as p

BASE_PATH = p.dirname(p.abspath(
        inspect.getframeinfo(inspect.currentframe()).filename
        ))

SITENAME = "OddBird"
THEME = p.join(BASE_PATH, "theme/")

STATIC_URL = "theme/"

from jinja_extensions import TypogrifyExtension

JINJA_EXTENSIONS = [TypogrifyExtension]
