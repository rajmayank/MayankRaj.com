# Utility Classes Guide

This guide explains when to use SCSS utility classes vs Tailwind utility classes in the hybrid setup.

## General Principles

- **Use Tailwind utilities** for simple, single-property styling (spacing, colors, typography, basic layout)
- **Use SCSS classes** for complex styling involving multiple properties, animations, or custom logic
- **Both approaches can coexist** - components can use both SCSS classes and Tailwind utilities

## Typography Utilities

### SCSS Classes (Preserved)

```scss
.text              // Complex responsive font sizing with line-height
.text-strong       // Font weight with additional styling
.text-uppercase    // Text transform with potential additional styling
.text-capital      // Text transform with potential additional styling
.text-justify      // Text alignment with potential additional styling
.text-disabled     // Opacity with potential additional styling
.text-hidden       // Display none with potential additional styling
.muted-font        // Color with potential additional styling
```

### Tailwind Alternatives

```html
<!-- Basic text styling -->
<p class="text-text leading-6 font-primary">Basic text</p>

<!-- Text variations -->
<p class="font-bold">Strong text</p>
<p class="uppercase">Uppercase text</p>
<p class="capitalize">Capitalized text</p>
<p class="text-justify">Justified text</p>
<p class="opacity-50">Disabled text</p>
<p class="hidden">Hidden text</p>
<p class="text-front-muted">Muted text</p>
```

## Layout Utilities

### SCSS Classes (Preserved)

```scss
.content-container          // Complex responsive container with breakpoint-specific max-widths
.content-container--narrow  // Narrow variant with specific responsive behavior
.content-container--wide    // Wide variant with specific responsive behavior
.post-list-container        // Post-specific container with custom responsive behavior
```

### Tailwind Alternatives

```html
<!-- Basic container -->
<div
  class="flex flex-col mx-auto px-2.5 w-full max-w-container-sm sm:max-w-container-md md:max-w-container-lg lg:max-w-container-xl"
>
  <!-- Narrow container -->
  <div
    class="flex flex-col mx-auto px-2.5 w-full max-w-container-narrow-sm sm:max-w-container-narrow-md md:max-w-container-narrow-lg lg:max-w-container-narrow-xl"
  >
    <!-- Wide container -->
    <div
      class="flex flex-col mx-auto px-2.5 w-full max-w-container-wide-sm sm:max-w-container-wide-md md:max-w-container-wide-lg lg:max-w-container-wide-xl"
    >
      <!-- Post list container -->
      <div
        class="mx-auto w-full max-w-post-list-sm sm:max-w-post-list-md md:max-w-post-list-lg lg:max-w-post-list-xl xl:max-w-post-list-2xl"
      ></div>
    </div>
  </div>
</div>
```

## Animation Utilities

### SCSS Classes (Preserved - Complex Animations)

```scss
.design-container    // Complex keyframe with opacity and transform changes
.header-layer-1      // Complex skew transform animation
.header-layer-2      // Complex skew transform animation
.header-svg-stroke   // Complex stroke-dashoffset animation
.focus-in           // Complex blur and opacity animation (preserved for existing usage)
```

### Tailwind Alternatives (Simple Animations)

```html
<!-- Simple fade in -->
<div class="animate-fade-in">Fades in</div>

<!-- Simple focus in (simplified version) -->
<div class="animate-focus-in">Focus effect</div>
```

## Spacing Utilities

### Common Patterns

```html
<!-- Margin left 20px -->
<div class="ml-5">Left margin</div>

<!-- Margin bottom 50px -->
<div class="mb-12.5">Bottom margin</div>

<!-- Margin top 10px -->
<div class="mt-2.5">Top margin</div>

<!-- Padding horizontal 10px -->
<div class="px-2.5">Horizontal padding</div>
```

## Display and Positioning Utilities

### Tailwind Utilities (Preferred for Simple Cases)

```html
<!-- Flexbox -->
<div class="flex items-center justify-center">Centered flex</div>

<!-- Positioning -->
<div class="relative">Relative position</div>
<div class="absolute top-0 left-0">Absolute position</div>

<!-- Display -->
<div class="block">Block display</div>
<div class="inline-block">Inline block</div>
<div class="hidden">Hidden</div>
```

## Color Utilities

### Tailwind Utilities (Preferred)

```html
<!-- Background colors -->
<div class="bg-body">Body background</div>
<div class="bg-header-layer-1">Header layer 1 background</div>

<!-- Text colors -->
<p class="text-front">Primary text</p>
<p class="text-front-muted">Muted text</p>
<p class="text-accent">Accent text</p>
```

## Component-Specific Utilities

### Header Component

```html
<!-- Name block -->
<div class="w-full">Name block</div>

<!-- Description container -->
<div class="w-full mt-2.5">Description container</div>

<!-- Badges -->
<div class="flex items-center">Badges container</div>

<!-- Row -->
<div class="flex justify-center">Centered row</div>
```

### Post List Component

```html
<!-- Space left -->
<div class="ml-5">Left spaced content</div>

<!-- Title -->
<h2 class="block">Block title</h2>

<!-- Category/Date -->
<span class="inline-block">Category or date</span>
```

## When to Use Each Approach

### Use SCSS Classes When:

- Complex animations with multiple keyframes
- Multiple CSS properties that work together
- Custom responsive behavior that doesn't match Tailwind's breakpoints
- Complex transforms or calculations
- Existing working code that doesn't need changes

### Use Tailwind Utilities When:

- Single property changes (margin, padding, color, etc.)
- Standard responsive behavior
- Simple layout patterns
- New components or features
- Quick prototyping or adjustments

### Hybrid Approach:

```html
<!-- Component using both SCSS and Tailwind -->
<div class="design-container flex items-center justify-center p-4">
  <div class="animate-focus-in text-front bg-body rounded-lg">
    Content with both SCSS animation and Tailwind utilities
  </div>
</div>
```

This hybrid approach allows you to leverage the best of both worlds while maintaining the existing design system.
