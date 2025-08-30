# ContentContainer Component

A responsive flex container that adjusts its width according to screen size and houses the primary content of pages like the bio section on the home page, blog listings, or blog content.

## Usage

```jsx
import { ContentContainer } from "../components";

// Basic usage
<ContentContainer>
  <p>Your content here</p>
</ContentContainer>

// With different max widths
<ContentContainer maxWidth="narrow">
  <p>Narrow content for focused reading</p>
</ContentContainer>

<ContentContainer maxWidth="wide">
  <BlogPostListing posts={posts} />
</ContentContainer>

<ContentContainer maxWidth="full">
  <p>Full width content</p>
</ContentContainer>

// As different HTML elements
<ContentContainer as="main">
  <p>Content in a main element</p>
</ContentContainer>

<ContentContainer as="section" className="custom-class">
  <p>Content in a section with custom styling</p>
</ContentContainer>
```

## Props

- `children` (required): The content to be wrapped
- `maxWidth`: Container size variant
  - `"default"`: Standard content width (896px max - Tailwind's max-w-4xl)
  - `"narrow"`: Narrower for focused reading (672px max - Tailwind's max-w-2xl)
  - `"wide"`: Wider for listings and grids (1280px max - Tailwind's max-w-7xl)
  - `"full"`: Full width with responsive padding
- `className`: Additional CSS classes
- `as`: HTML element to render as (default: "div")

## Responsive Breakpoints (Tailwind CSS Aligned)

The container automatically adjusts its width at these Tailwind CSS breakpoints:

- **Mobile** (< 640px): Full width with 1rem padding
- **Small** (≥ 640px / sm): 640px max width with 1.5rem padding
- **Medium** (≥ 768px / md): 768px max width with 2rem padding
- **Large** (≥ 1024px / lg): Variant-specific max widths
- **Extra Large** (≥ 1280px / xl): Final max widths reached
- **2XL** (≥ 1536px / 2xl): Maintained max widths with enhanced padding

## Examples

### Home Page Bio Section

```jsx
<ContentContainer as="section">
  <div className="text text-justify text-spacers">
    <p>Bio content...</p>
  </div>
</ContentContainer>
```

### Blog Listing Page

```jsx
<ContentContainer maxWidth="wide" as="main">
  <BlogPostListing posts={posts} />
</ContentContainer>
```

### Individual Blog Post

```jsx
<ContentContainer as="main">
  <article>
    <section dangerouslySetInnerHTML={{ __html: post.html }} />
  </article>
</ContentContainer>
```

### Full Width Hero Section

```jsx
<ContentContainer maxWidth="full" as="section">
  <HeroComponent />
</ContentContainer>
```
