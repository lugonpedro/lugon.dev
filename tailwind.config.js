/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: "#0E0F19",
      violet: "#5F5AA2",
      green: "#57886C",
      pearl: "#E8DCC5",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
