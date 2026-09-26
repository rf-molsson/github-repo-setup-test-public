# AGENTS.md

## Commands

- Install dependencies: `pnpm install --frozen-lockfile`
- Run the tests: `pnpm run test`

## Workflow

- `main` is protected: every change goes through a pull request and is squash-merged.
  Never push to `main` directly or force-push it.
- Run the tests before pushing; CI (`.github/workflows/ci.yml`) must pass before merging.
- Resolve every review comment thread before merging.
- Never commit secrets.
