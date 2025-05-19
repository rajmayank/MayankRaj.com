# MOOD BOARD & Brand Guidelines

A visual and technical summary of the design system and brand guidelines for this project, extracted from styles and code.

---

## Colors

| Name                  | Variable                | Value      |
|-----------------------|-------------------------|------------|
| Body Background       | `$bg-body-color`        | #ffffff    |
| Header Layer 1        | `$bg-header-layer-1`    | #a74482    |
| Header Layer 2        | `$bg-header-layer-2`    | #693668    |
| Header Layer 3        | `$bg-header-layer-3`    | #ff3562    |
| Header Layer 4        | `$bg-header-layer-4`    | #693668    |
| Foreground/Main Text  | `$color-front`          | #111111       |
| Muted Text            | `$color-front-muted`    | #434343    |
| Subtle BG             | `$color-subtle`         | #eeeeee       |
| Subtle Dark           | `$color-subtle-dark`    | #444444    |
| Accent                | `$color-accent`         | #b15757    |
| Back                  | `$color-back`           | #ffffff       |
| Blockquote Border     |                         | #dce6f0    |
| Header SVG Stroke     |                         | #51256f, #f6bdfa |
| Mood (default)        | `mood` prop             | #fdfdfd    |
| Footer Layer 1        |                         | #a74482    |
| Footer Layer 3        |                         | #ff3562    |

**Other color references:**
- Blog and post pages can set a `basecolor` in frontmatter.
- Mood color is passed as a prop to headers and can be customized.

---

## Typography

**Font Families:**
- **Primary:** `$font-primary` → Overpass, Helvetica, Arial, sans-serif
- **Secondary:** `$font-secondary` → "Fredoka One", Helvetica, Arial, sans-serif
- **Code:** `$font-code` → "Fredoka One", Helvetica, Arial, sans-serif
- **Header SVG:** "Courgette", "cursive", "Tahoma", "Courier New"
- **Meta Data:** "GT Pressura Mono", Consolas, "Andale Mono", Menlo, Monaco, Courier, monospace

**Font Sizes & Usage:**
- `html` base: 10px (scales down for smaller screens)
- `.text`: 1.9rem / 1.5 $font-primary
- `.text--small`: 1.65rem
- `.text--tiny`: 1.1rem
- `.content-resume`: 2.7rem
- `.name-block svg .text`: 35px
- `.merged-bg-container.title`: 5.4rem $font-secondary
- `.merged-bg-container.meta-data`: 1.6rem/2.5 mono
- `.post-list .title`: 3.5rem
- `footer`: 1.6rem / 1.35 Overpass

**Font Weights & Styles:**
- `.text-strong`: bold
- `.text-uppercase`: uppercase
- `.text-capital`: capitalize
- `.text-justify`: justify
- `.muted-font`: $color-front-muted

---

## Spacing & Layout

**Breakpoints:**
- `$breakpoint`: 992px
- `$screen-sm-min`: 576px
- `$screen-md-min`: 768px
- `$screen-lg-min`: 992px
- `$screen-xl-min`: 1200px

**Common Spacing:**
- Section top margin: 10rem (`.section-top-margin`), 4rem (tight)
- Content block margin-bottom: 1rem
- Icon svg margin-right: 2rem
- Resume margin-top: 3.5rem
- Compact header padding: 10vh 20px 20vh
- Footer padding: 5rem 7.5rem 3rem
- Post list container: padding 0 10px, responsive max-widths
- Blockquote: padding 0 15px, border-left 0.3rem solid #dce6f0

---

## Edges, Borders & Shadows

**Borders:**
- Blockquote: `border-left: 0.3rem solid #dce6f0;`
- Blog end nav: `borderTop: 1px solid #ccc;`

**Shadows:**
- Mixin: `@include underline` uses `box-shadow` and `text-shadow` for underline effects

**Border Radius:**
- No explicit border-radius found in SCSS (rounded corners not a primary motif)

---

## Motion & Animation

- **Fade In:** `fade-in 0.6s` on body
- **Header Layers:** `design-container`, `header-layer-1`, `header-layer-2` for skewed animated backgrounds
- **SVG Stroke Animation:** `header-svg-stroke 3.5s` for animated name
- **Focus In:** `focus-in 0.75s` for content appearance

---

## Other Brand Elements

- **Skewed backgrounds** for header/footer layers (see `@include skew`)
- **Goo filter** SVG effect for compact header text backgrounds
- **Mood color**: customizable via prop, default #fdfdfd
- **Image overlays**: backgrounds and overlays use gradients and opacity
- **No heavy use of border-radius**: edges are mostly sharp, with some softening via shadows and overlays

---

## Usage Notes
- All main brand variables are defined in `src/styles/variables.scss`.
- Responsive design is handled via SCSS mixins and media queries.
- Animations and visual effects are defined in `src/styles/animations.scss` and via mixins.
- Mood color can be set per page/component for custom theming.

---

*This document is auto-generated from the codebase. For updates, refer to the SCSS files and component props.* 