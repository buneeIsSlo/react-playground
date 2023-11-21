/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': '768px'
    },
    fontFamily: {
      'poppins': ['poppins', 'system-ui'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        primary: {
          cyan: "hsl(180, 66%, 49%)",
          violet: "hsl(257, 27%, 26%)"
        },
        secondary: {
          red: "hsl(0, 87%, 67%)"
        },
        neutral: {
          100: "hsl(0, 0%, 75%)",
          200: "hsl(257, 7%, 63%)",
          300: "hsl(255, 11%, 22%)",
          400: "hsl(260, 8%, 14%)",
        }
      },
      backgroundImage: {
        'form-bg-mobile': "url('/src/assets/images/bg-shorten-mobile.svg')",
        'boost-bg-mobile': "url('/src/assets/images/bg-boost-mobile.svg')",
        'form-bg-desktop': "url('/src/assets/images/bg-boost-desktop.svg')",
        'boost-bg-desktop': "url('/src/assets/images/bg-boost-desktop.svg')",
      }
    },
  },
  plugins: [],
}

