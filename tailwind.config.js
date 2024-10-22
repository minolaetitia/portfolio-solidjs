/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Inclure tes fichiers SolidJS ici
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Activer le dark mode basé sur la classe
  plugins: [require('daisyui')],
};
