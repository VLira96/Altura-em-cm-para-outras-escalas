/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cinza: {
          claro: '#CCCCCC',
          escuro: '#333333'
        }
      }
    },
  },
  plugins: [],
}