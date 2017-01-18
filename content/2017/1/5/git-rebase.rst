public: yes
author: kit
tags: [git, workflows]
image:
  - src: '2017/git-rebase/git-cave.jpg'
summary: |
  If you want to make sense of your git history more easily when you go back,
  try rebasing as you go. Rebasing while collaborating with others can get
  hairy quickly. But here's one way to make it work.


A Rebase-Centric Model of Collaborative Git Use
===============================================

There are `many <https://grimoire.ca/git/pull-request-workflow>`__ `ways
<http://nvie.com/posts/a-successful-git-branching-model/>`__ `to
<https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow>`__
`use <https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows>`__ `git
<http://blog.endpoint.com/2014/05/git-workflows-that-work.html>`__.  It's
sometimes said that git is not actually a version control system, but rather `a
content-addressable filesystem, used to track directory trees
<http://marc.info/?l=linux-kernel&m=111293537202443>`__. So, given that it's
only a version control system inasmuch as you impose a methodology on it, it's
worth it to play with some different methodologies.

One common way to use git is with a lot of merging between branches, but if you
don't like the tangled web of history that creates, I'm going to propose a
rebase-centric model. It's a trade-off: a little harder to make, but a lot
easier to understand when you need to come back to it later.

Now that you have enough links to take you away from this post for a day at
least, let's get started.


Git is a DAG-Manipulation Tool
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

First, let's unpack what I said above. Be prepared for some graph theory terms.
You've seen these sorts of charts in every bit of git documentation you look
at, right?
::

          A---B---C topic
         /         \
    D---E---F---G---H master

(From `https://git-scm.com/docs/git-merge
<https://git-scm.com/docs/git-merge>`__.)

This is a simple directed acyclic graph. Each node (except for D, the root
node) has one or more parents. No node is an ancestor of itself.  But in git,
these nodes aren't just abstractions: they carry data.  Specifically, they
carry change sets and commit messages.

Because there are changesets in the nodes, that implies that a traversal from
the root node to any other node will result in a description of a certain
end-state for the files in the repository, and that a traversal to the terminal
node marked with a particular branch will result in a description of the files
in the latest state of that branch. **If the nodes were re-arranged, that could
change the resulting state, depending on the particular changesets involved.**

When you rebase, you "rewrite history" and transform, for example, this DAG::

          A---B---C topic
         /
    D---E---F---G master

Into this DAG::

                  A'--B'--C' topic
                 /
    D---E---F---G master

(Examples from `https://git-scm.com/docs/git-rebase
<https://git-scm.com/docs/git-rebase>`__.)

The commits in the ``topic`` branch are labeled with prime signs after the
rebase to denote that they are, in a sense, the "same" commits, but because
they have a different ancestry, describe a different set of
states—specifically, states that incorporate commits F and G. If there are
conflicts between the rebased commits and their new ancestry, git will prompt
you to resolve those before continuing the rebase.

All of this, so far, is just to explain rebasing so you can feel really
comfortable with it. Rewriting your own history is fine and safe. But what we
really care about is rewriting history that other people can access.


Remotes, Upstreams, and Feature Branches
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Pretty much everything written about git warns you not to rebase any commits
that are shared with other people or systems. It is presented as a cardinal sin
and something that will get you shunned by all serious git users. So, let's
talk about how to do it!

The fundamental reason you're enjoined against doing it is that it generates
more work for everyone else to get their local repositories into a good state
again. That is not something I mean in any way to contradict. If you are going
to be pushing rewritten history to a shared remote, you *must* have everyone
on-board and with a common understanding of the process you're using and how to
keep their local histories in order.

I find that the best way to avoid nasty situations with rewritten history
consists of two principles:

1. Maintain sole ownership of branches: only one person writes to a given
   branch, and if you need to collaborate, pull requests into the other
   person's branch are the way to go.

2. Maintain a strong distinction between read-only upstream branches and
   writable feature branches.

These principles won't work for every team and every situation, so you have to
decide if this approach is right for you.

Let's see what this looks like in practice.

Let's say Bao and Robin are collaborating on a project, through GitHub.  There
are many ways to manage the remotes, but we'll take a simple approach right
now: they each have a copy of the repo on their own computers, and they are
sharing one repo on GitHub. When Bao runs ``git remote -v``, they get::

    origin git@github.com:example/project.git (fetch)
    origin git@github.com:example/project.git (push)

And Robin would see the same. They can each push to that remote, too, but they
have an understanding that they won't push branches that don't *belong* to
them.

As they work on the project, they will end up with branches that look like
this:

.. image:: /static/images/blog/2017/git-rebase/fig_01.png
    :align: center

Black commits are on ``master``, blue are by Bao, coral are by Robin. They both
start their work off of the current state of ``master``. Bao has a sort of
short and straightforward branch. Robin is working on something longer and more
complex, and Bao jumps in to help a little, branching off of Robin's branch
when it's at commit G, while Robin keeps working on it. Bao will eventually
pull-request their changes back in.

But what if Robin realizes that their work really depends on the work Bao did
and already merged into ``master``? They can just rebase their branch on to
that work:

.. image:: /static/images/blog/2017/git-rebase/fig_02.png
    :align: center

On Bao's machine, this looks like::

    $ git fetch
    $ # Update local information on upstream branch.
    $ # Because Bao *never* commits on this branch, every merge
    $ # should be a fast-forward merge, but let's use --ff-only
    $ # just to be sure:
    $ git checkout robin-feature && git merge --ff-only
    $ # See what the world looks like at this moment:
    $ git checkout bao-fix
    $ git branch -vv
    * bao-fix       ca1f618 [robin-feature: ahead 4, behind 9] short message
      robin-feature fc58298 [origin/robin-feature] short message
      master        d1ef2a3 [origin/master] Merge Bao's work

This leaves Bao's branch attached to the old commit G, which had been in
Robin's branch before the rebase. But because Bao's branch tracks Robin's
branch as its upstream, Bao can, with fresh remote tracking info on their local
computer, just run ``git rebase`` and get this:

.. image:: /static/images/blog/2017/git-rebase/fig_03.png
    :align: center

Again, on Bao's machine::

    $ # Because the bao-fix branch has robin-feature as an upstream:
    $ git rebase
    $ git branch -vv
    * bao-fix       ca1f618 [robin-feature: ahead 2] short message
      robin-feature fc58298 [origin/robin-feature] short message
      master        d1ef2a3 [origin/master] Merge Bao's work

Note that Bao's work is now coming off of K', not G (or G'). This is because it
tracks Robin's *branch* as its upstream, not a specific commit in that branch.
Since branches can wholly change what commits they consist of, this is both
necessary and useful.

Bao can force-push that back up to GitHub (because only Bao writes to
that branch, this is safe), Robin can merge it in, and then the whole thing can
be merged back into ``master``:

.. image:: /static/images/blog/2017/git-rebase/fig_04.png
    :align: center

Note: if anyone has merge conflicts at any point, they have to resolve
them, and those rebased commits (with the prime marks) can differ from their
original renditions by whatever it takes to resolve that merge conflict.


Caveats
~~~~~~~

This approach can make your git history *much* more useful as a historical
artifact, as a way to see not just what the code was like at any given point,
but what the intent of that state of the code was. But unless everyone on the
team is on board with this, and understands it, you risk the proverbial
shooting yourself in the foot.

If you use git, you should be familiar with how to use the `reflog
<https://git-scm.com/docs/git-reflog>`__ to back yourself out of
ah-damn-what-did-I-just-do situations. That is still true here; if you are not
perfectly comfortable with rebase, having a way to *undo* is crucial.

There are some git defaults you may want to set to make this pattern easier::

    git config merge.defaultToUpstream true
    git config branch.autosetupmerge always

Honestly, they're useful defaults to set in any case! (Hat-tip to `Owen
<https://grimoire.ca/git/config>`__ for these defaults, and a lot of thinking
about git!)

Try it out on a small project, and see if you like it. It's even better if you
write `good commit messages
<http://alistapart.com/article/the-art-of-the-commit>`__. If you don't go
spelunking through your git history often to understand past choices, then let
this be your excuse.


What Do the OddBirds Do?
~~~~~~~~~~~~~~~~~~~~~~~~

We actually use a merge-centric flow, the kind you are likely more familiar
with! We avoid pushing rebased branches to remotes, and don't have strong
ownership of branches. If more than one of us is working on something at a
time, whoever pushed to the remote first will have their work merged in to
whatever anyone else is doing, before that other person pushes the result of
their merged work to the remote.

This is convenient enough for us, but it really is motivated by the shape of
our team; we have specialists all along the design-frontend-backend continuum,
and frequently want to rapidly intertwine our work many times in a day as
we coordinate changes all along that spectrum.

Still, some of us have used this rebase model successfully before and think
it's worth trying out!
