/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackMain : "#222222",
        greenMain : "#008374",
        orangeMain : "#f85a40",
        lightGreen: "#008c7c",
        lighterGreen: "#009887"
      },
     
    },
  },
  plugins: [],
}
