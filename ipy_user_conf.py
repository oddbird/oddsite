"""
IPython auto-initializer: add imports or other lines of Python code you want
executed every time IPython starts to the ``lines`` list.

"""

import IPython.ipapi
ip = IPython.ipapi.get()


def main():
    print "\nExecuted:\n\n"

    lines = [
        "import datetime",
        ]

    for line in lines:
        ip.ex(line)
        print line

    print "\n"

main()
