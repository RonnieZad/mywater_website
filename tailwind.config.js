/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  plugins: {
    tailwindcss: {}, // <- add this
    'postcss-preset-env': {},
  },
}

const konstaConfig = require('konsta/config');

// wrap your config with konstaConfig
module.exports = konstaConfig({
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
  theme: {
    extend: {
      buttonColor: {
        'primary-blue': 'rgb(11, 93, 130)',
      },
      backgroundColor: {
        'primary-blue': 'rgb(11, 93, 130)',

      },
      
      textColor: {
        'primary-blue': 'rgb(11, 93, 130)',
      }
    },
  },
  darkMode: 'class',
});


