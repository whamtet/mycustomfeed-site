const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'clj-green-light': '#A2DA5F',
      'clj-blue-light': '#97B3F8',
      'clj-blue': '#6180D2',
      'dark': '#2B2539',
      'pale-yellow': '#FFFEF7',
      'light-blue': '#B9ECFF',
      'light-red': '#FFB9B9',
      'th-gray': '#F0F0F0',
      'td-gray': '#FFFFFF',
      'td-border-gray': '#E5E5E5',
    }
  },
  plugins: [],
}
