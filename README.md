# NPM Client-Side Git-Hooks Examples

\
&NewLine;
## Prepare-Commit-Msg and Commit-Msg Combo

(branch `prepare-commit-mgs_commit-msg`)

Here I added two related git hooks: [prepare-commit-mgs script](git-hooks/prepare-commit-msg) and [commit-mgs script](git-hooks/commit-msg).
\
\
Now when you try to commit some changes the `preare-commit-msg` 
hook will provide you with a suggestion for your commit message
> Note: this hook gets skipped if you git commit with the `-m` flag

Then after your commit message is ready (regarless on whether you've used `-m` or not) it will be checked by the `commit-msg` hook, if it doesn't pass the check (meaning that it doesn't respect the format we decided our commits to have) the commit will be aborted (you will be provided hints on how to fix the commit), othewise the script will add a timestamp to your message and will allow the commit to proceed.
\
\
So, try to make some simple change in the `index.js` file or any other file (possibly not the hook scripts), try to commit your changes (possibly without using the `-m` flag) and you will see the behavior described above in action.