/** @type {import('tailwindcss').Config} */
const {join } = require('path');
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   content: [join(__dirname, 'src/**/*.{js,ts,jsx,tsx}')],
//   plugins: [require('daisyui')],
// };