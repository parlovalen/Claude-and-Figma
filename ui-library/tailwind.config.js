/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand
        brand: {
          DEFAULT: "#0072ce",
          hover: "#005ba5",
          yellow: "#e2e11b",
          "yellow-hover": "#eeed76",
        },
        // Text
        navy: "#002e52",
        // Grays (maps to design system steel tones)
        steel: {
          DEFAULT: "#8a939a",   // text-secondary
          dark: "#464f56",      // disabled text on disabled bg
          light: "#bcc1c6",     // border-default, disabled-bg
          lighter: "#a3aab0",   // border-disabled
        },
        // Danger / error
        danger: "#900b09",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
