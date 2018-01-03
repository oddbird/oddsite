"""
Denormalize some data in `config` for easier access from templates.
"""

from collections import (
    OrderedDict,
    defaultdict,
)


def setup(builder):
    config = builder.config

    pages = [
        page
        for page
        in builder.iter_contexts()
    ]
    # Add OSS projects indexed by author.
    author_projects = defaultdict(list)
    author_role_projects = defaultdict(lambda: defaultdict(list))
    for page in pages:
        for author in page.config.get('contributors', []):
            author_projects[author['author']].append(page)
            author_role_projects[author['author']][author['role']].append(page)

    author_projects = OrderedDict([
        (k, sorted(author_projects[k], key=lambda x: x.title))
        for k
        in sorted(author_projects.keys())
    ])
    author_role_projects = OrderedDict([
        (
            k1,
            OrderedDict([
                (
                    k2,
                    sorted(
                        author_role_projects[k1][k2],
                        key=lambda x: x.title,
                    ),
                )
                for k2
                in sorted(author_role_projects[k1].keys())
            ])
        )
        for k1
        in sorted(author_role_projects.keys())
    ])

    builder.config.stack[-1]['oss_by_author'] = author_projects
    builder.config.stack[-1]['oss_by_author_role'] = author_role_projects
