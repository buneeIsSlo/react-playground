/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          "tomato": "hsl(0, 100%, 68%)",
          "maritime-blue": "hsl(230, 29%, 20%)",
          "mysterious-night": "hsl(230, 11%, 40%)",
          "grey": "hsl(231, 7%, 65%)",
          "light-grey": "hsl(207, 33%, 95%)"
        }
      }
    },
  },
  plugins: [],
}
