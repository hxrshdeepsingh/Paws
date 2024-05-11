import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "purple-light": {
        extend: "light",
        colors: {
          background: "#ffffff",
          foreground: "#000",
          primary: {
            50: "#010a06",
            100: "#520F83",
            200: "#01130d",
            300: "#021d13",
            400: "#02261a",
            500: "#033020",
            600: "#09865a",
            700: "#0edd94",
            800: "#52f4bb",
            900: "#a9f9dd",
            DEFAULT: "#033020",
            foreground: "#ffffff",
          },
          focus: "#07FFA8",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },

    },
  })],
};
