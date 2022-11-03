/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif;",
        inter: "'Inter', sans-serif;",
        sen: "'Sen', sans-serif;"
      },
      colors: {
        ...colors,
        lightyellow: 'rgba(250, 248, 237, 1)',
        orange: 'rgba(246, 111, 77, 1)',
      },
      transitionProperty: {
        textdecoration: 'text-decoration-color'
      }
    },
  },
  plugins: [],
}