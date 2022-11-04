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
        lightgray: 'rgba(234, 234, 235, 1)',
        mediumgray: 'rgba(148, 152, 164, 1)',
        darkgray: 'rgba(91, 95, 98, 1)',
        'bright-neutral': 'rgba(250, 248, 237, 1)',
        'very-dark-blue': 'rgba(45, 49, 52, 1)',
        'filter-dark': 'rgba(0, 0, 0, 0.3)',
      },
      transitionProperty: {
        textdecoration: 'text-decoration-color'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ],
}