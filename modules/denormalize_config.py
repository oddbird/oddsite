"""
Denormalize some data in `config` for easier access from templates.
"""

from collections import defaultdict


def setup(builder):
    config = builder.config

    # Add OSS projects indexed by author.
    author_projects = defaultdict(list)
    for project in config['oss']:
        if 'who' in project:
            for author in project['who']:
                author_projects[author['name']].append(project)

    builder.config.stack[-1]['oss_by_author'] = author_projects
