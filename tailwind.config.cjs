/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'fondo1' : '#fffbef'
      },
      backgroundColor:{
        'fondo2' : '#013662'
      }
    },
  },
  plugins: [],
}
