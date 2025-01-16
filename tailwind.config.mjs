/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amharic: ['"Noto Sans Ethiopic"', "sans-serif"], // Add a font for Amharic
      },
      colors: {
        primary: "#D32F2F", // Breaking news red
        secondary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
