# Components

- `PageLayout`: page header, skip link, main landmark and footer.
- `ContentContainer`: reading, wide and full-width layout variants.
- `Prose`: shared article and biography typography.
- `ArticleMeta`: visible dates, ISO date attributes and categories.
- `CompactHeader`: article artwork, single page title and metadata.
- `ShowcaseCard`: shared media frame with offscreen video pausing.
- `Disclosure`: native keyboard-accessible biography expansion.
- `OutboundLink`: external links with non-blocking gtag events.
- `Icon` and `Seo`: shared icon rendering and document metadata.

Use Tailwind classes for layout and named tokens for typography. Keep signature-specific geometry in `src/styles/brand.css`. Header and article templates remain separate because their structures differ.
