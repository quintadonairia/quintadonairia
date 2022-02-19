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
        olive: "#808000",
        burgundy: "#800020",
        tan: "#D2B48C",
        merino: "#FBF8F4",
      },
    },
  },
  plugins: [],
};
