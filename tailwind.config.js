/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppinss: ["Poppins", "sans-serif"],
        Open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
