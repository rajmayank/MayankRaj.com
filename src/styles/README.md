# Styling

`tailwind.config.js` owns the color, font, type-size and content-width tokens.

- `tailwind.css`: Tailwind's reset, utilities, shared focus states and link treatment.
- `brand.css`: signature layers, SVG stroke animation, article artwork treatment and footer geometry. It reads Tailwind tokens with `theme()`.

The root stays at 100%. Body text is 1.125rem, metadata is 0.875rem, and the article column is at most 48rem including its gutters. `Prose` owns Markdown spacing, lists, quotes, tables and code. Do not add a second reset or global list overrides.

Reduced-motion mode shows the completed signature immediately. Showcase motion also pauses during interaction, when hidden and when offscreen.
