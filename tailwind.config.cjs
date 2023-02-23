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
      spacing: {
        13: '3.25rem', // 52px
        13.5: '3.375rem', // 54px
      },
    },
    colors: {
      ...colors,
      primary: '#53B860',
      'primary-hover': '#4FA55A',
      secondary: '#333333',
      text: '#333333',
      error: colors.red[500],
      active: colors.sky[500],
      link: colors.sky[500],
      placeholder: colors.gray[500],
      disabled: colors.gray[500],
      'border-gray': '#C5C5C5',
    },
  },
  plugins: [],
};
