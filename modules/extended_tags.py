"""
    modules.extended_tags
    ~~~~~~~~~~~~~~~~~~~~

    Gives more power to tagging.
"""

from collections import (
    Counter,
    defaultdict,
)


def relatedness(taglist):
    """
    Count up which tags co-occur how often.

    Given a collection of collections of the tags on each post, return a mapping
    of mappings of ints. The higher the int, the more the two keys co-occur.

    (This is a naive kind of relatedness, but it should work for tags. Something
    like TF-IDF would probably give a better measure, but I'd expect that there
    aren't many intrinsically-common tags in our data set, so that'd be
    overkill.)
    """

    related = defaultdict(Counter)
    for tag_set in taglist:
        for tag in tag_set:
            related_tags = tag_set.symmetric_difference({tag})
            for other_tag in related_tags:
                related[tag][other_tag] += 1
    return related


def make_get_related_tags(builder):
    tags = get_all_tags(builder)
    rels = relatedness(tags)

    def get_related_tags(taglist):
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
    """
    Get all tags on all posts.

    To get all tags on all posts requires going through all the pages via the
    builder.iter_contexts, and we must do this before the pages themselves are
    built, so we do it in this module's setup.
    """

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
