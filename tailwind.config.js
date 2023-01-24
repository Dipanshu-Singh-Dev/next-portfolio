/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: ["burtons"],
        poppins: ["poppins"],
      },
    },
  },
  plugins: [],
  input: "./styles/globals.css",
  output: "./static/tailwind.css",
};
