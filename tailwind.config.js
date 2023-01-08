/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "green-500": "#55AE44",
        "secondary-color":"#16A8E1"
      },
      fontFamily: {
        'rubik': "Rubik",
      },
      screens:{
        'sm': '576px',
        'xs': '360px',
      },
      colors: {
        'brand-color': '#55AE44',
      },

    }
   
  },
  plugins: [],
};
