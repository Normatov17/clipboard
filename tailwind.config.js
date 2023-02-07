/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        strongCyan: 'hls (171, 66%, 44%)',
        lightblue: 'hls (233, 100%, 69%)',
        darkGrayishBlue: 'hls (210, 10%, 33%)',
        grayishBlue: 'hls (201, 11%, 66%)',
      },
      fontFamily: {
        snas: ['Bai Jamjuree', 'sans-serif']
      },
    },
  },
  plugins: [],
}
