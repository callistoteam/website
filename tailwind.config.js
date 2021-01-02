module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'special-blue': '#5045cd',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
