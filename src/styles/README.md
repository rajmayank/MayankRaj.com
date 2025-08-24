# SCSS Architecture

This project uses a modular SCSS architecture for better maintainability and organization.

## Structure

```
src/styles/
├── base/                 # Base styles and typography
│   ├── _global.scss     # Global styles, body, sections
│   ├── _typography.scss # Typography and text utilities
│   └── _index.scss      # Base module exports
├── components/          # Component-specific styles
│   ├── _header.scss     # Header component styles
│   ├── _footer.scss     # Footer component styles
│   ├── _post-list.scss  # Post list component styles
│   ├── _icons.scss      # Icon component styles
│   └── _index.scss      # Component module exports
├── layout/              # Layout and container styles
│   ├── _containers.scss # Container and grid styles
│   └── _index.scss      # Layout module exports
├── utilities/           # Utility classes
│   ├── _helpers.scss    # Helper utility classes
│   └── _index.scss      # Utility module exports
├── _variables.scss      # SCSS variables (colors, fonts, breakpoints)
├── _mixins.scss         # SCSS mixins and functions
├── _animations.scss     # CSS animations and keyframes
├── _normalize.scss      # CSS reset/normalize
└── main.scss           # Main entry point
```

## Import Order

The main.scss file imports modules in this order:

1. **Foundation**: normalize, variables, mixins, animations
2. **Base**: global styles and typography
3. **Layout**: containers and layout systems
4. **Components**: individual component styles
5. **Utilities**: helper classes and utilities

## Guidelines

- **Base**: Global styles that affect the entire site
- **Components**: Styles for specific UI components
- **Layout**: Styles for page structure and containers
- **Utilities**: Helper classes for common styling patterns
- **Variables**: All colors, fonts, and breakpoints centralized
- **Mixins**: Reusable SCSS functions and mixins

## Benefits

- **Maintainability**: Easier to find and modify specific styles
- **Scalability**: Easy to add new components without affecting others
- **Consistency**: Centralized variables ensure design consistency
- **Performance**: Better organization leads to more efficient CSS output
