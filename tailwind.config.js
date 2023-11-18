/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back': 'url(../public/background.jpg)',
      },
      backgroundColor: {
        'curtain': 'rgba(18,29,56,.88)',
        'curtain-light': 'rgba(18,29,56,.3)',
        'overlay': 'linear-gradient(180deg,rgba(18,29,56,.93) 0,rgba(18,29,56,.96) 70%,rgba(18,29,56,.99) 80%,#1e1e28 100%)'
      },
      transitionProperty: {
        'width': 'width'
      },
      transitionDelay: {
        '0': '.3s',
        '1': '.5s',
        '2': '.7s',
        '3': '.9s',
      },
      colors: {
        primary: {
          50: '#fff6e7',
          100: '#feedcf',
          200: '#fee3b8',
          300: '#fedaa0',
          400: '#fed188',
          500: '#fdc870',
          600: '#fdbf58',
          700: '#fdb541',
          800: '#fcac29',
          900: '#fca311',
        },
        secondary: {
          50: '#e8e9ec',
          100: '#d0d3d8',
          200: '#b9bcc5',
          300: '#a1a6b1',
          400: '#8a909e',
          500: '#727a8b',
          600: '#5b6477',
          700: '#434d64',
          800: '#2c3750',
          900: '#14213d',
        },
        tertiary: {
          900: '#9a031e'
        },
        yellow: '#fca311'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
