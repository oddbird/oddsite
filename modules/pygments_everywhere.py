"""Ensure that all rendered templates have pygments CSS link, not just posts."""

from functools import partial

from rstblog.signals import before_template_rendered


def inject_pygments_stylesheet(tmpl, context, builder):
    links = context.setdefault('links', [])
    pygments_css_url = builder.get_static_url('_pygments.css')
    if pygments_css_url not in set(l['href'] for l in links):
        links.append(
            {
                'href':     pygments_css_url,
                'type':     'text/css',
                'media':    None,
                'rel':      'stylesheet'
                }
            )



def setup(builder):
    before_template_rendered.connect(
        partial(inject_pygments_stylesheet, builder=builder),
        weak=False,
        )
