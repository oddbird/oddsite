"""
    modules.extended_tags
    ~~~~~~~~~~~~~~~~~~~~

    Gives more power to tagging.
"""

from collections import Counter
from collections import defaultdict


def relatedness(taglist):
    related = defaultdict(lambda: defaultdict(int))
    for tag_set in taglist:
        for tag in tag_set:
            related_tags = tag_set.symmetric_difference({tag})
            for other_tag in related_tags:
                related[tag][other_tag] += 1
    return related


def make_get_related_tags(builder):
    tags = get_all_tags(builder)

    def get_related_tags(taglist):
        rels = relatedness(tags)
        return {
            tag: rels[tag]
            for tag
            in taglist
        }

    return get_related_tags


def make_get_most_used_tags(builder):
    tags = get_all_tags(builder)
    tags = Counter(t for ts in tags for t in ts)

    def get_most_used_tags():
        return [t[0] for t in tags.most_common(3)]

    return get_most_used_tags


def get_all_tags(builder):
    tags = [
        getattr(c, 'tags', frozenset())
        for c
        in builder.iter_contexts()
    ]
    return tags


def setup(builder):
    env = builder.jinja_env
    env.globals['get_related_tags'] = make_get_related_tags(builder)
    env.globals['get_most_used_tags'] = make_get_most_used_tags(builder)
