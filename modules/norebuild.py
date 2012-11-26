"""No auto-rebuild on serve."""
from rstblog import server


def setup(builder):
    server.SimpleRequestHandler.do_GET = server.SimpleHTTPRequestHandler.do_GET
