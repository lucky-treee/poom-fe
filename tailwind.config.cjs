/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        'md-reverse': [
          '0 -4px 3px rgba(0, 0, 0, 0.07)',
          '0 -2px 2px rgba(0, 0, 0, 0.06)',
        ],
      },
    },
    colors: {
      ...colors,
      primary: '#53B860',
      'primary-hover': '#4FA55A',
    },
  },
  plugins: [],
};
