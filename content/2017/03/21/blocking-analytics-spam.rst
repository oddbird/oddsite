public: yes
author: jonny
tags: [
  Spam,
  DevOps,
  'Build Tools',
  'Front-end',
  JavaScript,
  Analytics,
  Code
  ]
image:
  - src: '2017/server-client/spa2.jpg'
summary: |
  Google Analytics is great for gathering data on who uses your web
  application, but becomes worthless if spam sessions start infesting your
  data. Here's how we've tried to combat the problem for `oddbird.net`_.

  .. _oddbird.net: http://oddbird.net/


Blocking Analytics Spam
=======================

Like many websites, we use `Google Analytics`_ to gather data about our users –
what OS and browser they used, how they came to our site, etc. But a number of
months ago we started seeing lots of this:

.. _Google Analytics: https://analytics.google.com/

.. image:: /static/images/blog/2017/ga-spam/ga-spam.jpg
   :alt: google analytics spam
   :class: img-border

It's not a new problem, but it's particularly problematic for smaller sites
that don't receive lots of traffic. On a given day, spam hits were accounting
for anywhere from ten to ninety (!) percent of our sessions.

.. image:: /static/images/blog/2017/ga-spam/sessions.jpg
   :alt: google analytics total sessions and filtered (non-spam) sessions
   :class: img-border

There are `many solutions out there`_; since we mostly saw spam in the
"referral" field, we wanted a simple way to block spam referrals from being
included in our analytics data.

.. _many solutions out there: https://www.google.com/#q=how+to+block+google+analytics+spam


Blocking Spam Referrals
-----------------------

One common approach is to blacklist any site visits where ``document.referrer``
matches a known spam domain. There are `free services`_ that create the
necessary Google Analytics "filters" for you, but they must be re-configured
frequently as new spammers are added to the list.

Instead, we tried `spam-referrals-blocker`_, which is a script that blocks
referrals found on a `community-contributed list of referrer spammers`_. Rather
than relying on the owner of the script to update it periodically with the
latest blacklist – or maintaining our own fork of the repo – we decided to
fetch the latest list as part of our build/deploy process, using `gulp`_ and
`gulp-download`_:

.. _free services: https://referrerspamblocker.com/
.. _spam-referrals-blocker: https://github.com/MohamedBassem/spam-referrals-blocker/
.. _community-contributed list of referrer spammers: https://github.com/piwik/referrer-spam-blacklist
.. _gulp: http://gulpjs.com/
.. _gulp-download: https://github.com/Metrime/gulp-download

.. code:: js

    const gulp = require('gulp');
    const download = require('gulp-download');

    gulp.task('update-spammers', () => {
      const url = 'https://raw.githubusercontent.com/piwik/referrer-spam-blacklist/master/spammers.txt';
      return download(url).pipe(gulp.dest('path/to/js/'));
    });

Once we have an up-to-date blacklist, we import it with the `webpack`_
`raw-loader`_ and block any referrer found on the list:

.. _webpack: https://webpack.js.org/
.. _raw-loader: https://github.com/webpack-contrib/raw-loader

.. code:: js

    import spammers from 'raw-loader!./spammers.txt';

    window.isSpamReferral = function () {
      const list = spammers.split('\n');
      const currentReferral = document.referrer;
      if (currentReferral) {
        for (const spammer of list) {
          if (spammer && currentReferral.indexOf(spammer) !== -1) {
            return true;
          }
        }
      }
      return false;
    };

And in our HTML, after the JS file has been executed:

.. code:: html

    <script>
      if(!window.isSpamReferral()) {
        // ... initialize Google Analytics
      }
    </script>


Can't We Do Better Than That?
-----------------------------

This approach has worked relatively well – in the first two weeks, we only saw
nine spam sessions sneak through. But we weren't entirely thrilled with it,
either.

First of all, a blacklist of domains-to-block is much more difficult to
maintain than a whitelist of domains-to-allow (even if we've off-loaded most of
the maintenance to the community). And second, there's something
less-than-ideal about fetching a raw ``.txt`` file directly from someone else's
GitHub repo, making assumptions about the format of the file contents, and then
relying on it as part of our build/deploy process.

So we've recently implemented many of the methods outlined in `this guide`_,
most notably `using a whitelist filter to exclude any hostnames we haven't
explicitly authorized`_. This takes care of most of the spam, and is
significantly cleaner and easier to maintain.

.. _this guide: https://www.ohow.co/ultimate-guide-to-removing-irrelevant-traffic-in-google-analytics/
.. _using a whitelist filter to exclude any hostnames we haven't explicitly authorized: https://www.ohow.co/ultimate-guide-to-removing-irrelevant-traffic-in-google-analytics/#a-creating-a-valid-hostname-filter-for-ghost-spam

We haven't been using this technique for long, but so far the results have been
positive. If it continues to work well, we'll likely remove the
referral-blocking code entirely.

If you use Google Analytics, how have you tackled the problem of spam infecting
your data? Let us know via `Twitter`_ or our public `Slack channel`_!

.. _Twitter: https://twitter.com/oddbird
.. _Slack Channel: http://friends.oddbird.net/
