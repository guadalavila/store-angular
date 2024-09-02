/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E7F3EA",
          200: "#C2DFC9",
          300: "#9ECAAA",
          400: "#7AB58A",
          500: "#569F6B", // Base color, inspirado en el verde Monstera
          600: "#4A8D5F",
          700: "#3D774F",
          800: "#315F3F",
          900: "#24472E",
        },
      },
    },
  },
  plugins: [],
};
