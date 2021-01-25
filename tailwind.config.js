module.exports = {
  purge: ['./src/pages/**/*.ts', './src/pages/**/*.tsx', './src/components/**/*.ts', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '375px',
    },
    colors: {
      main: '#174DE5',
      green: '#5CB940',
      red: '#E51718',
      white: '#FFF',
      gray: {
        light: '#F8F9FD',
        DEFAULT: '#B4B4B4',
        dark: '#7E7E7E',
      },
      black: '#1c1a1a',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
