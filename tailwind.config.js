/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["'Poppins', sans-serif"],
        goldman : ["'Goldman', sans-serif;"],
        montserrat: ["'Montserrat', sans-serif"],
        lato: ["'Lato', sans-serif;"]
      }
    },
  },
  plugins: [require("daisyui")],
}

