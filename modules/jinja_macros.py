"""
"""

from __future__ import absolute_import
from docutils import nodes
from docutils.parsers.rst import Directive, directives


class TolerantOptionSpec(object):

    # Use str to convert any and all options
    def __getitem__(self, key):
        return lambda v: v.encode('utf-8')

    # Make sure docutils will use this thing
    # even though it's empty
    def __nonzero__(self):
        return True


class CallMacro(Directive):
    has_content = True
    required_arguments = 1
    optional_arguments = 0
    final_argument_whitespace = False
    option_spec = TolerantOptionSpec()

    def get_macro(self):
        macro_id = self.arguments[0]
        content = '\n'.join(self.content)
        try:
            filename, macro_name = macro_id.split("#")
        except ValueError:
            # We want to raise a useful error message:
            raise ValueError("Invalid macro id: {}".format(macro_id))

        if content:
            call = (
                u"{{% call to_run.{name}({arglist}) %}}"
                u"{content}"
                u"{{% endcall %}}"
            ).strip()
        else:
            call = u"{{{{ to_run.{name}({arglist}) }}}}"
        call = call.format(
            name=macro_name,
            arglist=u", ".join(
                u'{}={}'.format(
                    k,
                    v.decode('utf-8')
                ) for k, v in self.options.items(),
            ),
            content=content,
        )

        # We need to build a trivial template that imports the filename, and
        # then calls the macro with the right args.
        return (
            u'{{% import "{filename}" as to_run %}}'
            u"{call}"
        ).strip().format(
            filename=filename,
            call=call,
        )

    def run(self):
        template = self.get_macro()
        html = self.builder.jinja_env.from_string(template).render({
            'config': self.builder.config,
        })
        # We need to return a single Raw node with the rendered HTML in it.
        node = nodes.raw(html, html, format='html')
        return [node]


def setup(builder):
    CallMacro.builder = builder
    directives.register_directive('callmacro', CallMacro)
