#!/usr/bin/env python
"""
Alternative run-rstblog wrapper script; adds our modules path.

"""
from __future__ import with_statement
import os, sys

from rstblog.builder import Builder
from rstblog.config import Config
from rstblog.modules import add_module_path

HERE = os.path.dirname(os.path.abspath(__file__))
MODULES = os.path.join(HERE, "modules")
LIB = os.path.join(HERE, "lib")
PROJECT = os.path.join(HERE, "content")

if __name__ == "__main__":
    sys.path.insert(0, LIB)
    add_module_path(MODULES)

    main_config_filename = os.path.join(PROJECT, 'config.yml')
    config = Config()
    with open(main_config_filename) as f:
        config = config.add_from_file(f)
    if len(sys.argv) > 1:
        additional_config = os.path.join(PROJECT, 'config-%s.yml' % sys.argv[1])
        with open(additional_config) as f:
            config = config.add_from_file(f)
        # merge these into a single "root" config
        config.stack[0].update(config.stack.pop())

    builder = Builder(PROJECT, config)
    builder.run()
