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
      }
    },
  },
  plugins: [],
}

