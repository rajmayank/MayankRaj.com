/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'accent-1': '#ff3562',
        'accent-2': '#a74482',
        'accent-3': '#693668',
      },
    },
  },
  plugins: [],
}
