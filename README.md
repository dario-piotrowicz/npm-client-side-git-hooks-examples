# NPM Client-Side Git-Hooks Examples

\
&NewLine;
## Pre-Push Test

(branch `pre-push__test`)

I have modified the code in the [index.js](./index.js) file so that it does not pass unit testing anymore, alongside that change I added a [pre-push script](git-hooks/pre-commit) hook in our hook directory which checks that the unit tests need to pass, if they don't it doesn't allow the push to take place.
\
\
So, try to make some simple change in the `index.js` file, commit your changes and try to push, as long as at least one unit test fails the push won't be allowed. If all unit tests pass you will be free to push as usual.

> Note that your push will fail either way if you haven't got write access to this repo, but you will still be able to see the pre-push behavior in action regardless, if you want your push to actually go through just fork the repo and use your fork instead.

\
In this hook I am hiding the tests results and only showing the final outcome (pass or fail), in practice it may be more convenient to also show the actual tests results so that the commiter can immediately see what the issue is, I chose to go this route just to show that we can do all sort of fancy stuff in our scripts.
\
_(Also unit tests can take a long time so this may not be very usable in practice, server-side hooks/checks are likely to be more appropriate here)_