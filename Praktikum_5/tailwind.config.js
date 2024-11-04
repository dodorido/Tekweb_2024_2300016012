/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "Poppins" : ['Poppins']
      },
      colors :{
        "biru" : '#2D76F9',
        "abu" : '#747474',
        "advantagesbg" : '#EEF4FF'
      }
    },
  },
  plugins: [],
}

