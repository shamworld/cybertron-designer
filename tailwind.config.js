const coderXColors = {
  primaryPurple: '#7950ed',
  darkPurple: '#6032ea',
  black80: '#a3a8b8',
  black60: '#80869d',
  black10: '#373d57',
  black5: '#2c3249',
  itemBlack: '#b7bac7',
  primaryBlack: '#15192c',
  white: '#fff',
  red: '#e93c51',
};

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
        'btn-bg': coderXColors.primaryPurple,
        'btn-hover-bg': coderXColors.darkPurple,
        'border': coderXColors.black10,
        'panel-bg': coderXColors.black5,
        'panel-hover-bg': coderXColors.black10,
        'main-bg': coderXColors.primaryBlack,
        'item-selected-bg': coderXColors.black10,
        'text': coderXColors.black80,
        'text-tips': coderXColors.black60,
        'text-hover': coderXColors.white,
        'error': coderXColors.red,
        'menu-icon-hover-bg': coderXColors.primaryPurple,
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
