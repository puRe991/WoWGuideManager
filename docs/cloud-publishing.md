# Cloud-only GitHub publishing

This environment can create commits and pull-request metadata, but the direct `git push` to GitHub can still fail if the cloud network blocks GitHub or if no GitHub credentials are available. In that case, use one of the browser-only options below.

## Current remote target

The intended remote repository is:

```text
https://github.com/puRe991/WoWGuideManager
```

## One-click Windows batch

If you open this project in a Windows cloud desktop, run `setup-windows.bat`. It will check whether Node.js/npm exists, install Node.js LTS when possible, run the test/build commands and create the handoff ZIP automatically.

## Option A: Push from this cloud once credentials/network are available

If the cloud session has a working GitHub token and outbound access to GitHub, run:

```bash
git remote set-url origin https://github.com/puRe991/WoWGuideManager.git
git push -u origin work
```

If the repository should use `main` instead of `work`, run:

```bash
git branch -M main
git push -u origin main
```

## Option B: Browser upload without a local machine

1. Run the handoff package command:

   ```bash
   npm run package:handoff
   ```

2. Download `handoff/WoWGuideManager-source-handoff.zip` from the cloud workspace.
3. Open `https://github.com/puRe991/WoWGuideManager` in the browser.
4. Use **Add file → Upload files** and upload the extracted archive contents.
5. Commit the upload in the GitHub web interface.

## Option C: GitHub Codespaces

1. Open `https://github.com/puRe991/WoWGuideManager` in the browser.
2. Start a Codespace from GitHub.
3. Upload or paste the project files into the Codespace.
4. Run the checks:

   ```bash
   npm install
   npm run test
   npm run build
   npm run dist:win
   ```

5. Commit and push from inside Codespaces.

## Why the previous push failed

The attempted direct push failed because this cloud environment received `CONNECT tunnel failed, response 403` from the configured proxy. Disabling the proxy also failed because DNS resolution for `github.com` was not available without the proxy.
