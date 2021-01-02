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
        'light-gray': '#f6f6f6',
        'wonder-bot': '#ef4444',
        'park-bot': '#8671b9',
        'school-bot': '#ff78fe',
        'kakao-bot': '#fae100',
        'kakao-brown': '#36181f'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
