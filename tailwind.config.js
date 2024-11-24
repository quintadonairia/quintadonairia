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
        transparent: "transparent",
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
      fontSize: {
        "body-small-default": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
        "body-small-subtle": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
          },
        ],
        "body-medium-default": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "body-medium-subtle": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        "body-medium-strong": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],
        "body-large-default": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "body-large-subtle": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        "body-large-strong": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        "title-small-strong": [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "600",
            letterSpacing: "-0.02em",
          },
        ],
        "title-medium-strong": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "600",
            letterSpacing: "-0.02em",
          },
        ],
        "title-large-strong": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600",
            letterSpacing: "-0.02em",
          },
        ],
        "display-small-regular": [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "400",
            letterSpacing: "-0.02em",
          },
        ],
        "display-medium-strong": [
          "40px",
          {
            lineHeight: "48px",
            fontWeight: "600",
            letterSpacing: "-0.02em",
          },
        ],
        "display-large-strong": [
          "48px",
          {
            lineHeight: "56px",
            fontWeight: "600",
            letterSpacing: "-0.02em",
          },
        ],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
