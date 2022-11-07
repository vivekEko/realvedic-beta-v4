/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helveticaLight: ["HelveticaLight", "sans-serif"],
        helveticaRegular: ["HelveticaRegular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
