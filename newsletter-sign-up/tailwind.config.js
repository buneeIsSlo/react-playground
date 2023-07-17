import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          tomato: "hsl(4, 100%, 67%)",
        },
        secondary: {
          400: "hsl(234, 29%, 20%)",
          300: "hsl(235, 18%, 26%)",
          200: "hsl(231, 7%, 60%)",
          100: "hsl(0, 0%, 100%)"
        }
      },
      backgroundImage: {
        "illus-sm": "url('./src/assets/images/illustration-sign-up-mobile.svg')",
        "illus-lg": "url('./src/assets/images/illustration-sign-up-desktop.svg')",
      },
      screens: {
        'mobile': '375px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      animation: {
        popup: "popup 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
      },
      keyframes: {
        popup: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      }
    },
  },
  plugins: [],
}

