# NPM Client-Side Git-Hooks Examples

\
&NewLine;

## Pre-Commit Prettier Format

(branch `pre-commit__prettier-format`)

I have modified the code in the [index.js](./index.js) file so that the code style doesn't adhere anymore to the styles specified in the prettier configuration file, alongside that change I added a [pre-commit script](git-hooks/pre-commit) hook in our hook directory which will format/prettify the code (staged to be committed), after that the commit proceeds as usual.
\
\
So, try to make some simple change in the `index.js` file and commit your changes, as long as at least one style violation (like duble quotes instead of single quotes or missing semicolons) remains the code will be formatted during the commit process (the formatting happens even if there are no style violations of course but in that case you will not see any change in the index file).
\
\
(also check the comments in the `pre-commit` file, they explain alternative implementations)
