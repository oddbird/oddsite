import os
import json

from jinja2 import contextfunction
from rstblog import builder as builder_module


@contextfunction
def get_asset(context, fn):
    return context.get('hashedassets', {}).get(fn, fn)


def monkeypatch_context():
    """With hashed assets, all RST (templated) contexts needs rebuilt always."""
    builder_module.Context._orig_needs_build = builder_module.Context.needs_build
    builder_module.Context.needs_build = property(
        lambda self: self.program_name == 'rst' or self._orig_needs_build)


def setup(builder):
    builder.jinja_env.globals['get_asset'] = get_asset

    asset_map_path = builder.config.get('asset_map_path', None)
    if asset_map_path is None:
        return
    asset_map_path = os.path.join(builder.project_folder, asset_map_path)
    if not os.path.isfile(asset_map_path):
        print "Can't find asset map %s, skipping." % asset_map_path
        return
    with open(asset_map_path) as f:
        builder.jinja_env.globals['hashedassets'] = json.loads(f.read())
    monkeypatch_context()
