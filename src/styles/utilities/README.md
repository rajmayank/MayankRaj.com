# Typography Utilities

This directory contains Tailwind CSS utility extensions that provide alternatives to existing SCSS typography classes.

## Tailwind Typography Alternatives

The following Tailwind-based classes are available as alternatives to the existing SCSS typography classes:

| SCSS Class        | Tailwind Alternative | Description                                   |
| ----------------- | -------------------- | --------------------------------------------- |
| `.text`           | `.tw-text`           | Base text styling (1.9rem, line-height 1.5)   |
| `.text--small`    | `.tw-text-small`     | Small text styling (1.65rem, line-height 1.5) |
| `.text--tiny`     | `.tw-text-tiny`      | Tiny text styling (1.1rem, line-height 1.5)   |
| `.text-strong`    | `.tw-text-strong`    | Bold font weight                              |
| `.text-uppercase` | `.tw-text-uppercase` | Uppercase text transform                      |
| `.text-capital`   | `.tw-text-capital`   | Capitalize text transform                     |
| `.text-justify`   | `.tw-text-justify`   | Justified text alignment                      |
| `.text-disabled`  | `.tw-text-disabled`  | Disabled appearance (50% opacity)             |
| `.text-hidden`    | `.tw-text-hidden`    | Hidden element                                |
| `.muted-font`     | `.tw-muted-font`     | Muted text color                              |

## Additional Tailwind Typography Utilities

| Class                | Description                         |
| -------------------- | ----------------------------------- |
| `.tw-text-primary`   | Primary text color (#111)           |
| `.tw-text-accent`    | Accent text color (#b15757)         |
| `.tw-text-subtle`    | Subtle text color (#444444)         |
| `.tw-font-primary`   | Primary font family (Overpass)      |
| `.tw-font-secondary` | Secondary font family (Fredoka One) |
| `.tw-font-code`      | Code font family (Fredoka One)      |

## Usage

### Using SCSS Classes (Preserved)

```jsx
<p className="text">This uses the original SCSS typography class</p>
<p className="text text--small">Small text with SCSS</p>
```

### Using Tailwind Alternatives

```jsx
<p className="tw-text">This uses the Tailwind alternative</p>
<p className="tw-text-small">Small text with Tailwind</p>
```

### Mixed Usage

```jsx
<p className="tw-text tw-text-accent">Tailwind text with accent color</p>
<p className="text tw-text-primary">SCSS text class with Tailwind color</p>
```

## Responsive Font Sizing

The complex responsive font sizing system (html font-size scaling) is preserved in the SCSS implementation at `src/styles/base/_typography.scss`. This ensures that all font sizes scale appropriately across different screen sizes:

- Default: 10px root font size
- Below 992px: 9px root font size
- Below 496px: 7px root font size

Both SCSS and Tailwind typography classes benefit from this responsive scaling system.

## Integration

The Tailwind typography utilities are imported in `src/styles/tailwind.css` and work alongside the existing SCSS typography system. The normalize.css integration is preserved in the main SCSS file.
