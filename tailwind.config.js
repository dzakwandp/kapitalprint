/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily:{
      'body': ['Montserrat']
    },
    extend: {
      colors:{
        transparent: 'transparent',
        'black': '#1a1a1a',
        'light-black': '#60686a',
        'aqua': '#719192',
        'soft-brown': '#dfcdc3'
      }
    },
  },
  plugins: [],
}
