/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          400: '#DFFF00',
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
