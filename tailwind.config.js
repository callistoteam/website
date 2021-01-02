module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'ch-pink': '#FFE1E1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
