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
        if 'contributors' in page.config
    ]
    # Add OSS projects indexed by author.
    author_projects = defaultdict(list)
    for project in config['oss']:
        if 'who' in project:
            for author in project['who']:
                author_projects[author['author']].append(project)

    for page in pages:
        for author in page.config['contributors']:
            author_projects[author['author']].append(page.config['project'])

    builder.config.stack[-1]['oss_by_author'] = author_projects
