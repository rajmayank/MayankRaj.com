# Component Architecture

This directory contains all React components organized by functionality and responsibility.

## Structure

```
src/components/
├── common/           # Reusable common components
│   ├── Icon.js      # SVG icon component with icon library
│   ├── Seo.js       # SEO meta tags and structured data
│   └── index.js     # Common components exports
├── layout/          # Layout-related components
│   ├── Header.js    # Main homepage header with animations
│   ├── CompactHeader.js # Compact header for blog posts
│   ├── Footer.js    # Site footer with links and design layers
│   └── index.js     # Layout components exports
├── blog/            # Blog-specific components
│   ├── BlogPostListing.js # Blog post list with external link support
│   ├── BlogPost.js  # Individual blog post template
│   └── index.js     # Blog components exports
├── ui/              # UI/Interactive components
│   ├── Showcase.js  # Portfolio showcase with marquee animation
│   └── index.js     # UI components exports
└── index.js         # Main export file for all components
```

## Import Patterns

### Recommended (New)

```javascript
// Import specific components
import { Icon, Seo } from "../components/common";
import { Header, Footer } from "../components/layout";
import { BlogPostListing } from "../components/blog";

// Or import from main index
import { Icon, Header, BlogPostListing } from "../components";
```

### Legacy (Deprecated)

```javascript
// Old pattern - still works but not recommended
import Icon from "../components/Icon";
import Header from "../components/header";
```

## Component Categories

### Common Components

- **Icon**: SVG icon library with 15+ icons (tech stack, social, UI)
- **Seo**: SEO optimization with meta tags, Open Graph, Twitter Cards, and JSON-LD

### Layout Components

- **Header**: Main homepage header with animated design layers and certification badges
- **CompactHeader**: Blog post header with background images and goo effect
- **Footer**: Site footer with social links and decorative background layers

### Blog Components

- **BlogPostListing**: Displays blog posts with external link support and compact mode
- **BlogPost**: Individual blog post template with navigation and SEO

### UI Components

- **Showcase**: Portfolio showcase with scrolling marquee, video/image support

## Design Principles

1. **Single Responsibility**: Each component has one clear purpose
2. **Reusability**: Common components can be used across different pages
3. **Maintainability**: Logical organization makes finding and updating components easy
4. **Performance**: Components are optimized with React.memo where appropriate
5. **Accessibility**: All components include proper ARIA labels and semantic HTML

## Styling

Components rely on the modular SCSS architecture in `src/styles/`. Each component:

- Uses semantic CSS classes that match the component structure
- Follows BEM-like naming conventions
- Maintains visual consistency through shared design tokens

## Migration Notes

The refactoring maintains 100% backward compatibility:

- All existing imports continue to work
- No visual changes to the UI
- All functionality preserved
- Legacy exports available during transition period

## Future Enhancements

- Add TypeScript support for better type safety
- Implement component testing with Jest/React Testing Library
- Add Storybook for component documentation
- Consider adding compound component patterns for complex UI elements
