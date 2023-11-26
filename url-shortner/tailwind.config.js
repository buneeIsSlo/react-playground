/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "md": "768px",
      "lg": "1024px",
      "xl": "1200px",
      "2xl": "1700px",
    },
    fontFamily: {
      'poppins': ['poppins', 'system-ui'],
    },
    fontWeight: {
      "regular": 500,
      "bold": 700,
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
          violet: "hsl(257, 27%, 26%)",
          red: "hsl(0, 87%, 67%)",
        },
        neutral: {
          "n1": "hsl(0, 0%, 75%)",
          "n2": "hsl(257, 7%, 63%)",
          "n3": "hsl(255, 11%, 22%)",
          "n4": "hsl(260, 8%, 14%)",
        },
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

