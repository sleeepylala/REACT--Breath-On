/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        outline: "0 0 0 10px rgba(255, 255, 255, 0.5)", // Modifica i valori a seconda dell'effetto desiderato
      },
      colors: {
        // Definisci i colori per la modalità light
        primary: "#5EA9BE",
        secondary: "#FFDDD3",
        textColor: "#36454F",
        // Definisci i colori per la modalità dark
        darkPrimary: "#3C8499",
        darkSecondary: "#5EA9BE",
        darkTextColor: "#FFFFFF",
        darkTextColor2: "#FFDDD3",
      },
      fontFamily: {
        "petit-formal-script": ["Petit Formal Script", "cursive"],
        petrona: ["Petrona", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
