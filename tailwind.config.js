/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./content/**/*.md"],
  theme: {
    extend: {
      colors: {
        surface: "#fff",
        front: "#111",
        "front-muted": "#52525b",
        subtle: "#e4e4e7",
        accent: "#984848",
        "header-layer-1": "#a74482",
        "header-layer-2": "#693668",
        "header-layer-3": "#ff3562",
      },
      fontFamily: {
        primary: ["Overpass", "Helvetica", "Arial", "sans-serif"],
        display: ["Fredoka One", "Helvetica", "Arial", "sans-serif"],
        signature: ["Courgette", "cursive"],
        mono: ["ui-monospace", "SFMono-Regular", "Consolas", "monospace"],
      },
      fontSize: {
        body: ["1.125rem", { lineHeight: "1.7" }],
        meta: ["0.875rem", { lineHeight: "1.5" }],
        section: [
          "clamp(1.5rem, 2.5vw, 1.875rem)",
          { lineHeight: "1.25", fontWeight: "700" },
        ],
        "article-title": [
          "clamp(1.875rem, 4.2vw, 3.375rem)",
          { lineHeight: "1.4" },
        ],
      },
      maxWidth: { reading: "48rem", wide: "75rem" },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.front"),
            "--tw-prose-headings": theme("colors.front"),
            "--tw-prose-links": theme("colors.accent"),
            "--tw-prose-bold": theme("colors.front"),
            "--tw-prose-quotes": theme("colors.front-muted"),
            "--tw-prose-code": theme("colors.front"),
            maxWidth: "none",
            fontSize: theme("fontSize.body")[0],
            lineHeight: "1.7",
            h2: {
              fontSize: "1.6em",
              lineHeight: "1.25",
              marginTop: "2em",
              marginBottom: ".75em",
            },
            h3: { fontSize: "1.25em", lineHeight: "1.35" },
            "h2, h3, h4": { scrollMarginTop: "1.5rem" },
            p: { marginTop: "0", marginBottom: "1.25em" },
            a: {
              fontWeight: "inherit",
              textDecorationThickness: "1px",
              textUnderlineOffset: ".2em",
              textDecorationSkipInk: "auto",
            },
            "a:hover": { textDecorationThickness: "2px" },
            "code, pre": { fontFamily: theme("fontFamily.mono").join(",") },
            code: { fontWeight: "400", overflowWrap: "anywhere" },
            "code::before, code::after": { content: "none" },
            pre: {
              fontSize: ".875em",
              lineHeight: "1.7",
              borderRadius: ".5rem",
              overflowX: "auto",
            },
            "pre code": { overflowWrap: "normal" },
            blockquote: { fontStyle: "normal", fontWeight: "400" },
            table: {
              display: "block",
              width: "100%",
              overflowX: "auto",
              fontSize: ".875em",
            },
            "th, td": { minWidth: "8rem" },
            img: { borderRadius: ".375rem" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
