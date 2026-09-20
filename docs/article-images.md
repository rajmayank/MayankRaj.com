# Article image contract

## Storage and frontmatter

Keep existing cover assets in place. Store new pairs using the article Markdown
filename stem (which may differ from its public URL slug):

| Purpose | Repository path | Frontmatter value |
| --- | --- | --- |
| Horizontal blog cover | `src/assets/images/blog_covers/<article-stem>-cover.jpg` | `bgimage: <article-stem>-cover` |
| Centred social artwork | `src/assets/images/blog_og/<article-stem>-og.jpg` | `ogimage: <article-stem>-og` |

PNG, JPG/JPEG and WebP are supported. Prefer JPG or PNG for social artwork.
Values are filenames without extensions, not URLs or paths. Use only one image
per stem in each folder. Do not put new pairs in subfolders. Both folders are
already sourced by Gatsby through `src/assets`.

```yaml
bgimage: btree-lsm-database-storage-tradeoffs-cover
ogimage: btree-lsm-database-storage-tradeoffs-og
basecolor: "#1458DD"
```

`basecolor` is the dominant artwork accent, expressed as a hex colour. Existing
`bgimage` names remain valid; no migration or new metadata is required.

## Rendering and fallback

- Article headers use `cover`, resolved from `bgimage` in `images/blog_covers`.
- `socialImage` resolves `ogimage` exclusively in `images/blog_og`.
- Open Graph, Twitter and article structured data use the same absolute URL:
  resolved social image → article cover → `default-blog-cover` → SEO site image.
- Absent, blank or unresolved `ogimage` returns null and falls back at build time.
  This includes a referenced file that is missing or has an unsupported extension.
- A missing explicitly named `bgimage` remains a build error, preserving existing
  cover validation. Omit `bgimage` to use the default cover.
- This is build-time asset resolution, not remote HTTP failure detection.

## Composition and dimensions

Create two separately composed, visually matched artworks:

- Cover: 3:1 landscape, target 2400 × 800 px.
- Social: 4:3 landscape, target 1600 × 1200 px.

These are authoring targets, not schema constraints. 4:3 is the chosen artwork
format, not a promise that every social platform displays that ratio. Keep the
essential concept legible in centred square and wider crops too.

The header fills its responsive container with `object-fit: cover`; viewport
width and wrapped title height change the visible crop. Keep the core subject
centrally readable, allow peripheral forms to crop, and verify mobile and desktop
headers. No fixed aspect ratio can preserve every pixel in every viewport.

The wide version must naturally extend the same visual world, preserving palette,
subject, forms and texture. Continue architecture, paths or shapes into newly
composed peripheral space. Never create it by stretching, mirrored tiling or
cloning the focal subject. Fill the canvas with crisp, high-contrast artwork.

## Validation

Run `npm test`, `npm run build` and `npm run check:build` with Node 22.
Check pairs as images and in rendered headers. Inspect `og:image` and
`twitter:image` in built HTML. Verify both dedicated-image and fallback cases.
Generate public assets with no text, logos or watermarks. Add only final artwork
and intended frontmatter edits; keep drafts out of the site's asset directories.
