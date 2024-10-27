/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // Tailwind will scan these files
  ],
  theme: {
    extend: {
      colors:{
        customColor:'#880808'
      }
    },
  },
  plugins: [],
};

