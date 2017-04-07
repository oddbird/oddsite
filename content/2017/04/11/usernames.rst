public: no
author: david
headline:
  - tagline: '(None of them is the username)'
tags: [
  'Data Modeling',
  Django,
  Code
  ]
summary: |
  The term “username” is ambiguous.
  When designing a user model there are several
  kinds of names that are useful to include.


Three Names to Include in Your User Model
=========================================

It’s time to start a new project.
You want users, so the first thing you do is
add a user model with username and password fields and —
woah, hold up.

What’s that username again?
Is it the user’s email address?
Is it an arbitrary nickname that the user can choose?
Is it an automatically generated identifier that should never change?

A Rose by Any Other Name Would Not Be Able To Log In
----------------------------------------------------

It’s not for nothing that they say naming things is
`one of the hard problems in computer science
<https://martinfowler.com/bliki/TwoHardThings.html>`_.
For modeling user accounts there are three different name fields
that you probably want,
and for the sake of avoiding confusion
let’s not call *any* of them the username:

1. The **user id**.
   This is the permanent, unchanging identifier of a particular user.
   It may be generated randomly or it may be an incrementing number,
   but the important thing is that it should not have any inherent meaning,
   and it should never change.
   That makes it safe for use internally throughout the system
   as a foreign key to refer to the user.

2. The **display name** or screen name.
   This is what will actually be shown when referring to the user
   in the UI and notifications (to the user themself or to other users).
   This should be chosen by the user with few limitations
   (except perhaps on length or to avoid excessive whitespace).
   That gives users full flexibility to use their offline name
   (including in other writing systems), nickname, stage name, or even emoji.
   It must be unique among all users to avoid confusion,
   but should be editable.

3. The **login**.
   This is what the user will type to log in to the system
   (or what their password manager will type for them).
   You may be tempted to let users choose their own login,
   but we prefer to use their email address
   because it makes it less likely that the user will forget their login.
   Whatever it is, it must be unique among all the users,
   and should be editable.
   If it’s the email address,
   changing it should require responding to a verification email
   to verify control of the email account.
   (Some systems may want to allow a user to set up multiple logins
   including various email addresses, phone numbers, or social accounts.)

You probably noticed I *did not* include the user's given and family names
(and middle name and maiden name and…).
Avoid collecting these as separate fields unless you need to,
i.e. for official or legal purposes.
Keep in mind that the preferred order of these names varies
in different cultures (so avoid calling them “first name” and “last name”
if you’re building an internationalized system).
And keep in mind that they may change over time.

Building this User Model in Django
----------------------------------

