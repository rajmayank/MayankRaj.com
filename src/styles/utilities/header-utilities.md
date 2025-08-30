# Header Component Tailwind Utilities

This document outlines the Tailwind utility classes that can be used as alternatives to the existing SCSS styles in the header component.

## Layout Utilities

### Content Container

- **SCSS**: `position: relative; top: 0; width: 100%;`
- **Tailwind Alternative**: `relative top-0 w-full`

### Name Container

- **SCSS**: `width: 100%; @include mixins.md { width: 50%; }`
- **Tailwind Alternative**: `w-full md:w-1/2`

### Description Container

- **SCSS**: `width: 100%; margin-top: 10px;`
- **Tailwind Alternative**: `w-full mt-2.5`

## Flexbox Utilities

### Row Layout

- **SCSS**: `display: flex; justify-content: center; align-items: center; flex-direction: row; @include mixins.md { justify-content: flex-end; }`
- **Tailwind Alternative**: `flex justify-center items-center flex-row md:justify-end`

### Badges Layout

- **SCSS**: `display: flex; align-items: center; margin-left: 25px; text-align: center; @include mixins.md { text-align: left; }`
- **Tailwind Alternative**: `flex items-center ml-6 text-center md:text-left`

## Typography Utilities

### Description Block

- **SCSS**: `font: 1.9rem/1.5 "Fredoka One", Helvetica, Arial, sans-serif; text-align: center; @include mixins.md { padding-right: 20px; }`
- **Tailwind Alternative**: `font-secondary text-[1.9rem] leading-[1.5] text-center md:pr-5`

### Title Span

- **SCSS**: `color: #d0c4df; display: block; margin-bottom: 5px;`
- **Tailwind Alternative**: `text-[#d0c4df] block mb-1`

## Image Utilities

### Badge Images

- **SCSS**: `width: 15rem; height: auto; vertical-align: middle;`
- **Tailwind Alternative**: `w-60 h-auto align-middle`

- **SCSS**: `&.professional img { width: 18rem; }`
- **Tailwind Alternative**: `w-72`

- **SCSS**: `&.size-bg img { width: 20rem; }`
- **Tailwind Alternative**: `w-80`

## Animation Utilities

### Simple Animations (Available in Tailwind Config)

- **fade-in**: `animate-fade-in`
- **focus-in**: `animate-focus-in`

### Complex Animations (Preserved in SCSS)

- **design-container**: Complex skew and transform animations
- **header-layer-1, header-layer-2**: Layer entrance animations
- **header-svg-stroke**: SVG stroke drawing animation
- **focus-in with delays**: Staggered animation with custom delays

## Usage Guidelines

1. **Use Tailwind utilities** for simple layout, spacing, and basic styling
2. **Keep SCSS** for complex animations, transforms, and custom keyframes
3. **Preserve responsive mixins** in SCSS for complex responsive behavior
4. **Use Tailwind responsive utilities** for simple responsive changes
5. **Maintain both systems** to allow gradual migration and flexibility

## Migration Strategy

When updating header styles:

1. Check if the styling can be achieved with Tailwind utilities
2. If yes, add Tailwind classes alongside existing SCSS (hybrid approach)
3. If no, keep the SCSS and document the complexity
4. Always preserve animations and complex transforms in SCSS
5. Test both approaches to ensure visual consistency
