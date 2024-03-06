/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5EA9BE",
        secondary: "#FFDDD3",
        textColor: "#222222",
      },
      fontFamily: {
        "petit-formal-script": ["Petit Formal Script", "cursive"],
        petrona: ["Petrona", "sans-serif"],
      },
    },
  },
  plugins: [],
};
