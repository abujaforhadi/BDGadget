/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#9538E2', 
        customGray: '#F6F6F6',   
      },
    },
  },
  plugins: [require('daisyui')],
}
