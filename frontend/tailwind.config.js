/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure it scans your components
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      },
      colors: {
        pink: '#FFC7D4',
        blue: '#0395CC',
        orange: '#FA912C',
        red: '#F53029',
      },
    },
  },
  plugins: [],
}
