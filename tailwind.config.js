import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          50: "#effbff",
          100: "#def5ff",
          200: "#b6eeff",
          300: "#76e3ff",
          400: "#2ed6ff",
          500: "#0dcbfd",
          600: "#009cd2",
          700: "#007daa",
          800: "#00698c",
          900: "#075673",
          950: "#04374d",
        },
      },
    },
  },
  plugins: [nextui()],
};
