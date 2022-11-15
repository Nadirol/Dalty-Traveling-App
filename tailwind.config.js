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
        'light-yellow': 'rgba(250, 248, 237, 1)',
        'medium-yellow': 'rgba(255, 212, 130, 1)',
        'orange': 'rgba(246, 111, 77, 1)',
        'dark-orange': 'rgba(226, 75, 37, 1)',
        'light-gray': 'rgba(234, 234, 235, 1)',
        'mediumgray': 'rgba(148, 152, 164, 1)',
        'regular-gray': 'rgba(147, 149, 151, 1)',
        'semi-dark-gray': 'rgba(103, 106, 108, 1)',
        'dark-gray': 'rgba(91, 95, 98, 1)',
        'bright-neutral': 'rgba(250, 248, 237, 1)',
        'very-dark-blue': 'rgba(45, 49, 52, 1)',
        'filter-dark': 'rgba(0, 0, 0, 0.3)',
        'filter-very-dark': 'rgba(0, 0, 0, 0.6)',
      },
      transitionProperty: {
        'textdecoration': 'text-decoration-color'
      },
      boxShadow: {
        'card': '0px 24px 36px rgba(192, 188, 161, 0.32)',
        'card-bold': '0px 24px 36px rgba(192, 188, 161, 0.68)',
      },
      gridTemplateColumns: {
        'gallery': '270px 370px 170px 270px',
        'gallery-md': '135px 185px 85px 135px',
      },
      gridTemplateRows: {
        'gallery': '250px 13px 13px 250px',
        'gallery-md': '125px 13px 13px 125px',

      },
      width: {
        'container': 'min(1170px, 100% - 2rem)',
        'slider-container': 'min(1320px, 100%)',
        'search-form': 'min(500px, 90%)',
        'contact-form': 'min(450px, 80%)',
      },
      screens: {
        '-xl': { 'max': '1279px' } ,
        '-md': { 'max': '767px' } ,
        '-xs': { 'max': '300px' } ,
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ],
}