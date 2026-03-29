/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../ui-library/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0072ce",
          hover: "#005ba5",
          yellow: "#e2e11b",
          "yellow-hover": "#eeed76",
        },
        navy: "#002e52",
        steel: {
          DEFAULT: "#8a939a",
          dark: "#464f56",
          light: "#bcc1c6",
          lighter: "#a3aab0",
        },
        danger: "#900b09",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
