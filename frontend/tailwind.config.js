/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Deep blue
        secondary: '#10B981', // Green
        accent: '#F59E0B', // Yellow
      },
    },
  },
  plugins: [],
}