/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        montSerrat: ["Montserrat", "sans-serif"],
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
