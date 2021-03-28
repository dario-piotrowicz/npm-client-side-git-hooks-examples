# NPM Client-Side Git-Hooks Examples

\
&NewLine;
## Pre-Commit Lint Check

(branch `pre-commit__lint-check`)

I have modified the code in the [index.js](./index.js) file so that it produces lint errors, alongside that change I added a [pre-commit script](git-hooks/pre-commit) hook in our hook directory which checks that the code (staged to be committed) passes the lint check, if it doesn't the commit won't take place.
\
\
So, try to make some simple change in the `index.js` file and commit your changes, as long as at least one lint error remains the commit won't be allowed, if you solve all the linting issues however you will be free to commit as usual.
\
\
(also check the comments in the `pre-commit` file, they explain alternative implementations)