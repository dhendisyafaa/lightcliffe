/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./component/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#D61C4E',
        'grey': '#8e8e8e',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
