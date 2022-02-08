module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
        'red': '#f96262',
        'red-pale': '#ce9797',
        'red-gray': '#413a3a',

        'grad-1a': '#ffffff',
        'grad-1b': '#fff5f5',
        'grad-2a': '#f8bfbf',
        'grad-2b': '#ee8c8c',
    },

    fontFamily: {
      'custom':['Josefin sans']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
