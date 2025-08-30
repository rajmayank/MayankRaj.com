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
      },
    },
  },
  plugins: [],
};
