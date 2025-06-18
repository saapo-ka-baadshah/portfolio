/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#03045e",
        Secondary: "#0077b6",
        Tertiery: "#00b4d8",
        Quaternery: "#90e0ef",
        Quinery: "#caf0f8",
        BackgroundPrimary: "#f8fafc"
      }
    },
  },
  plugins: [],
}