const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        light: "#FCFAF8",
        dark: "#151414",
        olive: "#6E6E0C",
        burgundy: "#810E2B",
        gold: "#B88F14",
      },
    },
  },
  plugins: [],
};
