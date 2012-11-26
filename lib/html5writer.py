"""
A docutils HTML5 writer based on the built-in html4css1 writer.

Work in progress.

"""
from docutils.writers import html4css1
from docutils import nodes

class Writer(html4css1.Writer):
    def __init__(self):
        html4css1.Writer.__init__(self)
        self.translator_class = HTML5Translator

        
class HTML5Translator(html4css1.HTMLTranslator):
    def visit_section(self, node):
        self.section_level += 1
        self.body.append(
            self.starttag(node, 'section'))

    def depart_section(self, node):
        self.section_level -= 1
        self.body.append('</section>\n')

    def visit_topic(self, node):
        self.body.append(self.starttag(node, 'section'))
        self.topic_classes = node['classes']

    def depart_topic(self, node):
        self.body.append('</section>\n')
        self.topic_classes = []

    def visit_list_item(self, node):
        self.body.append(self.starttag(node, 'li', ''))

    def visit_literal_block(self, node):
        self.body.append(self.starttag(node, 'pre'))
