/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#CC0000' ,
        'secondary': '#343434'
      }
    },
  },
  plugins: [],
}

