/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        underline: {
          "0%": { "background-size": "0 6px " },
          "100%": { "background-size": "100% 6px" },
        },
      },
      animation: {
        underline: "underline 1s ease-in-out .2s forwards",
      },
    },
    colors: {
      green: "#4EE1A0",
      gray: "#D9D9D9",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
