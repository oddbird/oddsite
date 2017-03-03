"""
"""

from __future__ import absolute_import
from docutils import nodes
from docutils.parsers.rst import Directive, directives


class CallMacro(Directive):
    has_content = True
    required_arguments = 1
    optional_arguments = 10
    final_argument_whitespace = False
    option_spec = {}

    def get_macro(self):
        macro_id = self.arguments[0]
        args = self.arguments[1:]
        content = '\n'.join(self.content)
        try:
            filename, macro_name = macro_id.split("#")
        except ValueError:
            # We want to raise a useful error message:
            raise ValueError("Invalid macro id: {}".format(macro_id))

        if content:
            call = """
            {{% call to_run.{name}({arglist}) %}}
              {content}
            {{% endcall %}}
            """.strip()
        else:
            call = "{{{{ to_run.{name}({arglist}) }}}}"
        call = call.format(
            name=macro_name,
            arglist=", ".join(args),
            content=content,
        )

        # We need to build a trivial template that imports the filename, and
        # then calls the macro with the right args.
        return """
            {{% import "{filename}" as to_run %}}
            {call}
        """.strip().format(
            filename=filename,
            call=call,
        )

    def run(self):
        template = self.get_macro()
        html = self.builder.jinja_env.from_string(template).render()
        # We need to return a single Raw node with the rendered HTML in it.
        node = nodes.raw(html, html, format='html')
        return [node]


def setup(builder):
    CallMacro.builder = builder
    directives.register_directive('callmacro', CallMacro)
