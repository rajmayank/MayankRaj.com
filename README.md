# Mayank Raj's Website

[![Build and release](https://github.com/rajmayank/MayankRaj.com/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/rajmayank/MayankRaj.com/actions/workflows/build-and-deploy.yml)

This repo powers [mayankraj.com](https://mayankraj.com).

It is my personal website, blog, and a public place to think out loud about systems, security, cloud architecture, AI, and the occasional engineering scar tissue that only shows up after production has had its say.

If you are looking for a heavily abstracted starter kit, this is probably not that. This is a working personal site. It has opinions. It has history. It has a bunch of writing, custom components, and just enough structure to keep things moving without pretending a personal website needs a 14-layer platform strategy.

## What lives here

- A homepage that doubles as a professional snapshot
- A long-form blog under [`content/blog/`](/Users/mayank/_p/projects/MayankRaj.com/content/blog)
- A resume page and downloadable PDF
- Custom Gatsby pages, shared React components, and hand-tuned styling
- RSS, sitemap, SEO metadata, analytics, and the usual website plumbing that nobody notices when it works

## The stack

This site is built with:

- [Gatsby](https://www.gatsbyjs.com/) for the static site framework
- [React](https://react.dev/) for UI
- [Sass](https://sass-lang.com/) and a bit of [Tailwind CSS](https://tailwindcss.com/) for styling
- [MUI Joy UI](https://mui.com/joy-ui/getting-started/) in a few places where it made sense
- Markdown for blog content

Content lives mostly in [`content/blog/`](/Users/mayank/_p/projects/MayankRaj.com/content/blog), while the site code is under [`src/`](/Users/mayank/_p/projects/MayankRaj.com/src).

## Running it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:8000](http://localhost:8000).

If you prefer another package manager, the scripts are all in [`package.json`](/Users/mayank/_p/projects/MayankRaj.com/package.json). The important bit is simple: install dependencies, start Gatsby, iterate.

## Useful scripts

- `npm run dev` starts the local Gatsby dev server
- `npm run devm` starts the dev server on your local network
- `npm run build` creates a production build
- `npm run serve` serves the built site locally
- `npm run clean` clears Gatsby's cache
- `npm run preload-fonts` preloads fonts

## Project shape

```text
.
├── content/blog/        # Markdown posts
├── src/assets/          # Images, video, icons, and other static assets used by the app
├── src/components/      # Shared UI building blocks
├── src/pages/           # Gatsby pages
├── src/styles/          # Sass, Tailwind, and styling primitives
├── static/              # Files copied through as-is
├── gatsby-config.js     # Site metadata and plugin configuration
└── package.json         # Scripts and dependencies
```

## Writing and publishing

Most new writing starts as a markdown file in [`content/blog/`](/Users/mayank/_p/projects/MayankRaj.com/content/blog). The site picks it up through Gatsby's filesystem source plugin, runs it through the markdown pipeline, and publishes it into the blog index and RSS feed.

In practice, this repo is less "CMS" and more "well-organized notebook with deployment attached." That is intentional. Fewer moving parts. Less magic. Better odds that future-me still understands what past-me was thinking.

## Deployment

Deployments run through GitHub Actions and publish the built site to GitHub Pages. A push to `master` kicks off the build pipeline defined in [`.github/workflows/build-and-deploy.yml`](/Users/mayank/_p/projects/MayankRaj.com/.github/workflows/build-and-deploy.yml).

## Borrow what helps

If something in here is useful, feel free to learn from it, adapt it, and build on top of it. Attribution is appreciated.

The only request: if you fork ideas from the writing or structure, make them yours. Personal websites are better when they feel personal.
