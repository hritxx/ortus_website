import { color } from "framer-motion";

const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      golden: "#FFD700",
      p1: "#2EF2FF",
      p2: "#3C52D9",
      p3: "#C8EA80",
      p4: "#EAEDFF",
      p5: "#C4CBF5",
      s1: "#080D27",
      s2: "#0C1838",
      s3: "#334679",
      s4: "#1959AD",
      s5: "#263466",
      black: {
        DEFAULT: "#000000",
        100: "#05091D",
      },
    },
    borderRadius: {
      "4xl": "2.5rem",
    },
    fontFamily: {
      sans: ["Mona Sans", ...defaultTheme.fontFamily.sans],
      display: [
        ["Mona Sans", ...defaultTheme.fontFamily.sans],
        {
          fontVariationSettings: '"wdth" 125',
        },
      ],
    },
  },
};
export const plugins = [];
