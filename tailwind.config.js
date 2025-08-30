/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
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
      },
      animation: {
        // Simple animations that can be used as Tailwind alternatives
        "fade-in": "fade-in 0.75s ease-in forwards",
        "focus-in": "focus-in 0.75s ease-in forwards",
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
    },
  },
  plugins: [],
};
