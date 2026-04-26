# TechRock

One-page presentation website for TechRock, built with Next.js App Router Server Components and static export.

## Development

```bash
npm install
npm run dev
```

## Static CDN build

```bash
npm run build
```

The generated static files are written to `out/` and can be uploaded to a CDN or any static web host.

## GitHub Pages

This repository includes a GitHub Actions workflow for GitHub Pages. It builds the static Next.js export and deploys the `out/` directory with the official Pages actions.

No repository secrets are required. The workflow only uses the default `GITHUB_TOKEN` permissions needed for Pages deployment.

To enable it, configure the repository in GitHub:

1. Open `Settings` -> `Pages`.
2. Set `Build and deployment` -> `Source` to `GitHub Actions`.
3. Push to `main` or run `Deploy GitHub Pages` manually from the Actions tab.

### Custom domain

For the default GitHub Pages project URL, such as `https://techrockers.github.io/techrock-website/`, the build uses the repository name as the base path.

For a custom domain, such as `https://techrock.de/`, the site must be built from the web root instead. Add a repository variable in GitHub:

```text
GH_PAGES_CUSTOM_DOMAIN=techrock.de
```

Repository variables are not secrets, so this is safe for an open source repository. When this variable is set, the workflow builds root-relative paths for the custom domain.
