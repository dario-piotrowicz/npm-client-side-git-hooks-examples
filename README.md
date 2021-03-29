# NPM Client-Side Git-Hooks Examples

\
&NewLine;

## Pre-Commit Prettier Format

(branch `pre-commit__format-and-check`)

I have modified the code in the [index.js](./index.js) file so that the code style doesn't adhere anymore to the styles specified in the prettier configuration file an I have also introduced lint errors, alongside that change I added a [pre-commit script](git-hooks/pre-commit) hook in our hook directory which will format the code (staged to be committed), after that will check that there are no linting errors (note that some linting errors can already be solved thanks to the auto formatting) and after that the commit proceeds as usual.
\
\
So, try to make some simple change in the `index.js` file and commit your changes, as long as there is some style to fix or some lint issue to report you will be able to see the hook in action.
\
\
The solution presented in this example restricts the operations on the files staged for the commit (like you'd want to do in most cases) and reduces the dev-dependencies needed to the bare minimum (just eslint and prettier), for more "high level" implementations check the
`pre-commit__lint-check` and `pre-commit__prettier-format` branches.
