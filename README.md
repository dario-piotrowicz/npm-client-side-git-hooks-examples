# NPM Client-Side Git-Hooks Examples

This repository contains very simple examples of the application of client-side git-hooks to npm projects,
those can be used just to see how client-side git-hooks work and how can they be useful.
Moreover the way the hooks are set up can be used as a reference for any npm project.

If you're not familiar with client git-hooks have a read at the included [introductory presentation](./presentation/presentation.pdf).

\
&NewLine;

## How to use the repository

(Note: the node version I used is `14.16.0`)

Just clone the repository to your machine and run `npm install` to install the project's dependencies, the included `postinstall` script will also configure the git hooks directory to be `git-hooks/`.

Once you've done so you will just need to `git checkout` the examples branches, you will find all you need to know in the branch README file.

### Branches

Except from `master` the available branches/examples are:
 - `pre-commit__lint-check`\
    pre-commit hook which checks for linting issues in the index.js file, it prevents you from committing if there
    are errors
 - `pre-commit__prettier-format`\
    pre-commit hook which automatically formats the index.js file during the commit process
 - `pre-commit__format-and-check`\
    pre-commit hook which formats the js code staged for the commit and also runs a lint check agains them, it prevents the committing if there are errors
 - `pre-push__test`\
    pre-push hook which runs the unit tests again the js files, it prevents the push if there are any failures (this example also shows how we can get a bit fancy with our scripts)
    > Unfortunately you can only see this hook in action if you fork this repository since you don't have the write access necessary to push here