# Merge conflict resolution notes

GitHub reported conflicts in `.gitignore`, `README.md` and `package.json` because `main` already contains the first MVP scaffold while the PR branch also introduced follow-up packaging changes.

The resolved project state keeps the current `main` MVP content and adds the branch-only improvements:

- `.gitignore` keeps the generated folders ignored and adds `handoff/` for generated source archives.
- `README.md` keeps the original MVP documentation and adds the one-click Windows setup plus cloud-only publishing instructions.
- `package.json` keeps the existing `build`, `test` and `dist:win` scripts and adds `package:handoff`.

If GitHub still shows the conflict banner after this commit, update the PR branch with the latest `main` in GitHub's web editor and keep the versions from this branch for those three files.
