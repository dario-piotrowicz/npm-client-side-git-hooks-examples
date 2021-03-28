# NPM Client-Side Git-Hooks Examples

This repository contains very simple examples of the application of client-size git-hooks to npm projects,
those can be used just to see how client-side git-hooks work and how can they be useful.
Moreover the way the hooks are set up can be used as a reference for any npm project.

If you're not familiar with client git-hooks have a read at the included [introductory presentation](./presentation/presentation.pdf).

\
&NewLine;

## How to use the repository

(Note: the node version I used is `14.16.0`)

Just clone the repository to your machine and run `npm install` to install the project's dependencies, the included `postinstall` script will also configure the git hooks directory to be `git-hooks/`.

Once you've done so you will just need to `git checkout` the examples branches, you will find all you need to know in the branch README file.
