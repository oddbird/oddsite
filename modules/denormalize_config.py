"""
Denormalize some data in `config` for easier access from templates.
"""

from collections import defaultdict


def setup(builder):
    config = builder.config

    pages = [
        page
        for page
        in builder.iter_contexts()
    ]
    # Add OSS projects indexed by author.
    author_projects = defaultdict(list)
    for page in pages:
        for author in page.config.get('contributors', []):
            author_projects[author['author']].append(page)

    builder.config.stack[-1]['oss_by_author'] = author_projects
