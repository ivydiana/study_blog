/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        card: "rgb(var(--card-solid) / <alpha-value>)",
        tag: "rgb(var(--tag) / <alpha-value>)"
      },
      boxShadow: {
        card: "0 18px 40px rgba(74, 52, 35, 0.06)",
        cardHover: "0 22px 48px rgba(74, 52, 35, 0.1)"
      },
      borderRadius: {
        card: "28px"
      },
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Text",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        serif: [
          "Cormorant Garamond",
          "Iowan Old Style",
          "Palatino Linotype",
          "Book Antiqua",
          "Georgia",
          "serif"
        ]
      }
    }
  },
  plugins: []
};
