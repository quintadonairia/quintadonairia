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
        "olive-500": "#787802",
        "olive-900": "#1B1B0E",
        "burgundy-500": "#800020",
        "tan-500": "#D2B48C",
        "tan-50": "#FBF8F4",
      },
    },
  },
  plugins: [],
};
