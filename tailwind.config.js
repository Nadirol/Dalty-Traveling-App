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
        'blur-light-yellow': 'rgba(250, 248, 237, 0.2)',
        'medium-yellow': 'rgba(255, 212, 130, 1)',
        'orange': 'rgba(246, 111, 77, 1)',
        'dark-orange': 'rgba(226, 75, 37, 1)',
        'bright-neutral': 'rgba(250, 248, 237, 1)',
        'light-gray': 'rgba(234, 234, 235, 1)',
        'semi-light-gray': 'rgba(222, 222, 227, 1)',
        'regular-gray': 'rgba(147, 149, 151, 1)',
        'mediumgray': 'rgba(148, 152, 164, 1)',
        'semi-dark-gray': 'rgba(103, 106, 108, 1)',
        'dark-gray': 'rgba(91, 95, 98, 1)',
        'very-dark-blue': 'rgba(45, 49, 52, 1)',
        'filter-dark': 'rgba(0, 0, 0, 0.3)',
        'filter-very-dark': 'rgba(0, 0, 0, 0.6)',
        'blue': 'rgb(51,102,204)',
        'green': 'rgba(80, 206, 80, 1)',
      },
      transitionProperty: {
        'textdecoration': 'text-decoration-color'
      },
      boxShadow: {
        'card': '0px 24px 36px rgba(192, 188, 161, 0.32)',
        'card-bold': '0px 24px 36px rgba(192, 188, 161, 0.68)',
        'image': '0 0 50px rgba(0, 0, 0, 0.3)',
        'image-lg': '3px 5px 10px rgba(0, 0, 0, 0.2)',
        'image-xl': '6px 10px 20px rgba(0, 0, 0, 0.3)',
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
        'discover-search-form': 'min(900px, 80%)',
        'contact-form': 'min(450px, 80%)',
        'screen-card': 'calc(100vw - 1.5rem)',
      },
      screens: {
        '-xl': { 'max': '1279px' } ,
        '-md': { 'max': '767px' } ,
        '-xs': { 'max': '300px' } ,
      },
      keyframes: {
        'fade-in': {
          '0%': { 'opacity': 0, transform: 'translateY(15%)' },
          '100%': { 'opacity': 1, transform: 'translateY(0)' }
        },
        'pop': {
          '50%': { 'transform': 'scale(1.1)'},
          '100%': { 'transform': 'scale(1)' },
        },
        'pop-reversed': {
          '50%': { 'transform': 'scale(1.1)'},
          '100%': { 'transform': 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'pop': 'pop 0.4s ease-out',
        'pop-reversed': 'pop-reversed 0.4s ease-out',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ],
}