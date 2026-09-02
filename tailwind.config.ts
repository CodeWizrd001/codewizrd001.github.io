import type { Config } from "tailwindcss";

const accents = [
  "mint",
  "leaf",
  "sand",
  "rose",
  "sky",
  "lime",
  "plum",
  "coral",
  "moss",
];

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  safelist: [
    ...accents.map((a) => `text-accent-${a}`),
    ...accents.map((a) => `bg-accent-${a}`),
    ...accents.map((a) => `bg-accent-${a}/10`),
    ...accents.map((a) => `bg-accent-${a}/20`),
    ...accents.map((a) => `border-accent-${a}`),
    ...accents.map((a) => `border-accent-${a}/40`),
    ...accents.map((a) => `ring-accent-${a}`),
    ...accents.map((a) => `shadow-accent-${a}/30`),
  ],
  theme: {
    extend: {
      colors: {
        // Base16-inspired palette carried over from the old terminal theme.
        ink: {
          950: "#05070b",
          900: "#0a0d14",
          800: "#101521",
          700: "#161c2c",
          600: "#1f2740",
        },
        accent: {
          mint: "#58d49f",
          leaf: "#53a148",
          sand: "#f0c674",
          rose: "#cc6666",
          sky: "#81b2be",
          lime: "#b5bd68",
          plum: "#b294bb",
          coral: "#de935f",
          moss: "#bbc690",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
