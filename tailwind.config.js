const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "Fraunces",
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        background: {
          default: "hsl(var(--color-background-default))",
          inverse: "hsl(var(--color-background-inverse))",
          strong: "hsl(var(--color-background-strong))",
          subtle: "hsl(var(--color-background-subtle))",
          brand: "hsl(var(--color-background-brand))",
        },
        foreground: {
          default: "hsl(var(--color-foreground-default))",
          inverse: "hsl(var(--color-foreground-inverse))",
          strong: "hsl(var(--color-foreground-strong))",
          subtle: "hsl(var(--color-foreground-subtle))",
          brand: "hsl(var(--color-foreground-brand))",
        },
        border: {
          default: "hsl(var(--color-border-default))",
          inverse: "hsl(var(--color-border-inverse))",
          strong: "hsl(var(--color-border-strong))",
          subtle: "hsl(var(--color-border-subtle))",
          brand: "hsl(var(--color-border-brand))",
        },
        light: "#FCFAF8",
        dark: "#151414",
        olive: "#6E6E0C",
        burgundy: "#810E2B",
        gold: "#B88F14",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
