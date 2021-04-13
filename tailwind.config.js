const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '30': '30px',
        '40': '40px',
        '300': '300px',
      },
      colors: {
        'primary-purple': '#7950ed',
        'hover-purple': '#6032ea'
      }
    },
  },
  variants: {
    extend: {},
    container: [],
  },
  corePlugins: {
    // ...
    container: false,
  },
  plugins: [],
}
