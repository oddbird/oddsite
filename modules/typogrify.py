from __future__ import absolute_import

from jinja2 import Markup
from rstblog.programs import RSTProgram

import typogrify


class TypogrifyRSTProgram(RSTProgram):
    def get_fragments(self):
        rv = super(TypogrifyRSTProgram, self).get_fragments()
        rv['fragment'] = Markup(typogrify.typogrify(rv['fragment']))
        return rv


def setup(builder):
    builder.programs['rst'] = TypogrifyRSTProgram
