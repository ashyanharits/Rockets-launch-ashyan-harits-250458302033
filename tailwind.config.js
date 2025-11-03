/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html","./src/js/*.js"], // cari class di folder src
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(min-aspect-ratio: 1/2)' },
      },
      Keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '10%': { transform: 'scaleY(1)' },
        },  
      },
      Animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  }, 
  plugins: [],
}
