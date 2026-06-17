# Deploying

The site deploys **automatically**. You do not run `npm run build` or
`npm run deploy` by hand — pushing to `master` does everything.

## How a deploy happens

```
PR merged into master  →  GitHub Action runs (test → typecheck → lint → build)
                       →  publishes build/ to the gh-pages branch
                       →  GitHub Pages serves it at meiridorsa.com  (~1 min)
```

## Deploy your changes

1. Push your branch and open a Pull Request into `master`.
2. Merge the PR.
3. Open the **Actions** tab on GitHub and watch the "Deploy React to GitHub Pages" run. Green check = live.
4. Visit https://meiridorsa.com (hard-refresh or open in incognito if you don't see the change immediately — it's browser/CDN cache, not a failed deploy).

That's it. The custom domain is preserved automatically — `public/CNAME` is bundled into the build and pushed along.

## One-time settings check

If deploys never reach the site, confirm these once on GitHub:

- **Settings → Pages** → Source is **"Deploy from a branch"**, branch **`gh-pages`**, folder **`/ (root)`**.
- **Settings → Secrets and variables → Actions** has a secret named **`GH_TOKEN`** (the workflow uses it to push to `gh-pages`).
- **Settings → Pages** → Custom domain shows `meiridorsa.com`.

## Troubleshooting

**The Action failed (red X in the Actions tab).**
Click the run to see which step failed:
- `npm test` / `tsc --noEmit` / `eslint` — a real code problem. Fix it on your branch and push again; the PR re-triggers CI.
- Deploy step failed with a git/permission error — the `GH_TOKEN` secret is missing or expired. Recreate it (see the settings check above).

**The Action passed but the site didn't change.**
- Hard-refresh or open in incognito — it's almost always browser cache.
- Confirm Pages is serving the `gh-pages` branch (settings check above).

**Nothing happened after merging.**
- The workflow only triggers on pushes to `master`. Make sure the PR merged into `master`, not another branch.

## Manual deploy (avoid this)

Running `npm run deploy` locally is what caused the old errors — "couldn't find gh-pages ref", "No URL found for submodule path", "git exit code 128". They all come from `gh-pages` depending on your local cache and branch state. Don't do it. If the automated deploy is broken, fix the Action instead — it runs in a clean environment every time.
