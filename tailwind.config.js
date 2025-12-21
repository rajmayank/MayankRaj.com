/** @type {import('tailwindcss').Config} */
module.exports = {
  // JIT mode for optimal performance
  mode: "jit",
  content: [
    // Pages and components - more specific patterns for better purging
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",

    // Content files that might contain Tailwind classes in frontmatter or MDX
    "./content/**/*.{md,mdx}",

    // Gatsby-specific files
    "./gatsby-browser.js",
    "./gatsby-node.js",
    "./gatsby-config.js",

    // SCSS files that might contain @apply directives or Tailwind references
    "./src/styles/**/*.{css,scss}",
  ],

  // Optimized safelist - only include classes that are actually used dynamically
  safelist: [
    // Animation classes that are applied dynamically via JavaScript
    "animate-fade-in",
    "animate-focus-in",

    // Icon sizing classes - preserve in production builds
    "w-12",
    "h-12",

    // Container classes used in components with conditional logic
    {
      pattern: /max-w-(container|post-list)-(sm|md|lg|xl|2xl)/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
    {
      pattern: /max-w-container-(narrow|wide)-(sm|md|lg|xl)/,
      variants: ["sm", "md", "lg", "xl"],
    },

    // Typography classes used in dynamic content
    {
      pattern: /text-(footer|text)(-icon|-small|-tiny)?/,
    },

    // Color classes that might be applied conditionally
    {
      pattern: /(text|bg)-header-layer-[1-4]/,
      variants: ["hover", "focus"],
    },
  ],
  theme: {
    extend: {
      colors: {
        // Body and background colors
        body: "#fff",
        back: "#fff",
        front: "#111",
        "front-muted": "#434343",
        subtle: "#eee",
        "subtle-dark": "#444444",
        accent: "#b15757",

        // Header layer colors
        "header-layer-1": "#a74482",
        "header-layer-2": "#693668",
        "header-layer-3": "#ff3562",
        "header-layer-4": "#693668",
      },
      fontFamily: {
        primary: ["Overpass", "Helvetica", "Arial", "sans-serif"],
        secondary: ["Fredoka One", "Helvetica", "Arial", "sans-serif"],
        code: ["Fredoka One", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        // Custom font sizes to match SCSS typography system
        footer: ["1.6rem", "1.35"], // Original footer font size with line-height
        "footer-icon": ["1.3rem", "1.35"], // Original footer icon size with line-height
        text: "1.9rem", // Base text size from SCSS
        "text-small": "1.65rem", // Small text size from SCSS
        "text-tiny": "1.1rem", // Tiny text size from SCSS
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      maxWidth: {
        // Container system max-widths matching SCSS breakpoints
        "container-sm": "540px", // sm breakpoint content-container
        "container-md": "680px", // md breakpoint content-container
        "container-lg": "760px", // lg breakpoint content-container
        "container-xl": "800px", // xl breakpoint content-container

        // Narrow variant max-widths
        "container-narrow-sm": "400px",
        "container-narrow-md": "500px",
        "container-narrow-lg": "600px",
        "container-narrow-xl": "650px",

        // Wide variant max-widths (matching post-list-container)
        "container-wide-sm": "720px",
        "container-wide-md": "960px",
        "container-wide-lg": "1140px",
        "container-wide-xl": "1320px",

        // Post list container max-widths
        "post-list-sm": "540px",
        "post-list-md": "720px",
        "post-list-lg": "960px",
        "post-list-xl": "1140px",
        "post-list-2xl": "1320px",
      },
      spacing: {
        2.5: "10px", // matches padding: 0 10px in SCSS
        5: "20px", // matches margin-left: 20px in post-list
        12.5: "50px", // matches margin-bottom: 50px in post-list
      },
      animation: {
        // Simple animations that can be used as Tailwind alternatives
        "fade-in": "fade-in 0.6s ease-in forwards", // matches body animation
        "focus-in": "focus-in 0.75s ease-in forwards",
        // Complex animations (design-container, header-layer-*, header-svg-stroke) remain in SCSS
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "focus-in": {
          "0%": {
            filter: "blur(12px)",
            opacity: "0",
          },
          "100%": {
            filter: "blur(0px)",
            opacity: "1",
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            // Customize typography to match your design system
            color: '#111',
            fontFamily: 'Overpass, Helvetica, Arial, sans-serif',
            fontSize: '1.9rem',
            lineHeight: '1.5',
            
            // Ensure lists have proper styling
            'ul > li': {
              listStyleType: 'disc',
              paddingLeft: '0.5rem',
            },
            'ol > li': {
              listStyleType: 'decimal',
              paddingLeft: '0.5rem',
            },
            'ul, ol': {
              paddingLeft: '2rem',
              marginBottom: '1rem',
            },
            'li': {
              marginBottom: '0.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

  // Production optimizations
  ...(process.env.NODE_ENV === "production" && {
    // Additional purge options for production
    content: {
      files: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/templates/**/*.{js,jsx,ts,tsx}",
        "./content/**/*.{md,mdx}",
        "./gatsby-browser.js",
        "./gatsby-node.js",
        "./gatsby-config.js",
        "./src/styles/**/*.{css,scss}",
      ],
      options: {
        // More aggressive purging in production
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: [
            // Keep essential utility classes
            /^(animate|transition|transform|duration|ease)/,
            /^(hover|focus|active|disabled):/,
          ],
          deep: [
            // Keep classes that might be in nested components
            /^max-w-/,
            /^text-/,
            /^bg-/,
          ],
        },
      },
    },
  }),
};
