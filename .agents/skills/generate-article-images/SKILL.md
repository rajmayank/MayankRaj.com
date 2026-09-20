---
name: generate-article-images
description: Generate matched abstract blog covers and social sharing images for MayankRaj.com articles, store the artwork, and update image metadata using the repository contract. Use for article artwork creation or regeneration.
---

# Generate article images

## Establish the article and contract

Read the full requested article in `content/blog`, applicable repository instructions,
and [the image contract](../../../docs/article-images.md) before generating anything.
Treat that contract as authoritative for fields, paths, supported formats and fallback.
Resolve the article by its title or `page_slug`; do not assume the URL slug matches
its Markdown filename. If ambiguous, locate candidate articles before asking.

Read the current `bgimage`, `ogimage` and `basecolor`, and inspect any existing
artwork being preserved. Derive a concrete visual metaphor from the article's
mechanism or central argument, not merely its title or a generic technology icon.
Briefly explain the metaphor and intended dominant accent colour.

## Art direction: bold editorial abstraction

- Use clear, simplified subject forms with crisp, intentional edges.
- Use saturated colours, strong light/dark contrast and one dominant accent.
- Fill the entire canvas with purposeful forms and texture. Avoid a lone object
  on an empty white background.
- Prefer bold cut-paper or handprinted forms with restrained tactile grain.
  Texture belongs within forms; it must not blur their silhouettes.
- Keep detail sparse and the article's idea readable at thumbnail scale.
- Avoid text, letters, logos, watermarks, literal diagrams and photorealism.
- Choose subject-specific forms. Architecture, ribbons and disk tracks are examples
  from previous articles, not mandatory motifs for new ones.

## Generate a matched pair

Use the available ChatGPT image-generation tool. Load its image-generation guidance
when available. Do not substitute SVG, programmatic drawing or an unrequested API
workflow. If image generation is unavailable, report that limitation rather than
claiming images were generated.

1. Generate the centred social composition at 4:3. Keep the essential visual story
   near the centre, with supporting art extending to the edges. Follow contract
   resolution targets, using smaller previews only when requested. Verify actual
   dimensions; prompt requests do not guarantee the returned size.
2. Inspect that image. Use the actual image as the reference for the 3:1 cover,
   not just the same text prompt. Preserve the subject, shape vocabulary, palette,
   abstraction level, edge treatment and texture.
3. Compose the additional horizontal space as an inherent continuation of that
   world. Let architecture continue, paths unfold or shapes develop naturally.
   Specify what should continue at each edge based on the actual image. Maintain
   one coherent composition with an intentional focal area and varied rhythm.
4. Never obtain the wide version by stretching, cloning the subject across the
   canvas, mirroring, tiling, or placing copies side by side. A crop alone is not
   the requested extension. Keep the central concept readable under header crops.

When supplying local references, inspect them first and pass their exact paths to
the image tool. For references without local paths, use the smallest supported
recent-image reference count that includes the intended image. Avoid accidentally
referencing another article's artwork.

Useful wide-image brief, adapted to the actual subject:

> Naturally extend this artwork into a continuous panoramic composition. Preserve
> its central subject, palette, shapes and texture. Reveal more of the same visual
> world on either side through [specific continuations]. Keep the concept legible
> in the middle of the frame. Fill the canvas with deliberately composed peripheral
> forms. Avoid duplicate focal subjects, tiling, mirroring and stretching.

## Inspect, save and integrate

Compare both images together. Check article relevance, crisp edges, strong contrast,
full-canvas coverage, visual identity across the pair and genuinely new peripheral
composition. Reject generic topic-free art and repeated copies of the main motif.
Check centred square/wide social crops and the responsive article header, where
`object-fit: cover` and title wrapping can crop either axis. Do not promise every
pixel will survive every crop. Revise a composition if its core idea is lost.

Store final assets following `docs/article-images.md`:

- `src/assets/images/blog_covers/<article-stem>-cover.jpg`
- `src/assets/images/blog_og/<article-stem>-og.jpg`

PNG is also suitable; preserve actual file format and never rename an extension
without encoding that format. Use one file per stem per folder. For revisions,
use a coordinated version suffix when needed to preserve existing assets, and set
the metadata to the actual filename stems. Save both final files before updating
frontmatter. Keep intermediates outside sourced asset folders.

Set `bgimage` to the cover stem, `ogimage` to the social stem and `basecolor` to the
dominant accent hex. Preserve article prose and unrelated metadata. Existing posts
without social artwork remain valid because the website handles fallback.

Run the contract's validation commands. Inspect generated `og:image` and
`twitter:image` URLs and confirm that the header still uses the horizontal cover.
Report the article, asset paths, actual dimensions, accent, validation results and
any limits. Finish with the repository's normal review workflow; generation does
not itself authorize publishing or merging.
