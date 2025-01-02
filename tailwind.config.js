/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'stroke': '0 0 2px #000, 0 0 2px #000', // Define stroke-like shadow
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwindcss-textshadow')
  ],
}

