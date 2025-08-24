/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      colors: {
        'bg-main': '#121212',
        'bg-secondary': '#1e1e1e',
        'text-main': '#e0e0e0',
        'text-secondary': '#a0a0a0',
        'accent': '#60a5fa',
      }
    },
  },
  plugins: [],
}