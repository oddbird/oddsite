import jinja2
import jinja2.ext
import markdown
import typogrify_standalone


class MarkdownExtension(jinja2.ext.Extension):
    tags = set(['markdown'])

    def __init__(self, environment):
        super(MarkdownExtension, self).__init__(environment)
        markdowner = markdown.Markdown(output_format="html5")
        environment.extend(markdowner=markdowner)

    def parse(self, parser):
        lineno = parser.stream.next().lineno
        body = parser.parse_statements(
            ['name:endmarkdown'],
            drop_needle=True
        )
        return jinja2.nodes.CallBlock(
            self.call_method('_markdown_support'),
            [],
            [],
            body
        ).set_lineno(lineno)

    def _markdown_support(self, caller):
        return self.environment.markdowner.convert(caller()).strip()



class TypogrifyExtension(jinja2.ext.Extension):
    tags = set(['typogrify'])

    def __init__(self, environment):
        super(TypogrifyExtension, self).__init__(environment)
        environment.extend(typogrify=typogrify_standalone.typogrify)

    def parse(self, parser):
        lineno = parser.stream.next().lineno
        body = parser.parse_statements(
            ['name:endtypogrify'],
            drop_needle=True
        )
        return jinja2.nodes.CallBlock(
            self.call_method('_typogrify_support'),
            [],
            [],
            body
        ).set_lineno(lineno)

    def _typogrify_support(self, caller):
        return self.environment.typogrify(caller())
