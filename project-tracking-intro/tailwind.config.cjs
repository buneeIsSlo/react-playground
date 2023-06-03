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
      },
      fontFamily: {
        "barlow": ["Barlow", "sans-serif"],
        "barlow-condensed": ["'Barlow Condensed'", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        "scale-down": 'scaleDown 1s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleDown: {
          '0%': { transform: "scale(1.05)" },
          '100%': { transform: "scale(1)" },
        }
      }
    },
  },
  plugins: [],
}
