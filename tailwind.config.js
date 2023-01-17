/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#171738",
      lightBlue: "#1d1d46",
      green: "#56cc77",
      neon: "#3423a6",
      purple: "#2e1760",
      white: "#FFF",
      black: "#000",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
