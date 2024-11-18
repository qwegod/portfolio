/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        left: "borderblur 5s infinite, left 1.5s ease",
        right: "borderblur 5s infinite, right 1.5s ease",
        rightgradient: "rightgradient 5s ease infinite",
      },
      keyframes: {
        left: {
          "0%": { transform: 'translateX(-100px)' },
          "50%": { transform: 'translateX(20px)' },
          "100%": { transform: 'translateX(0px)' },
        },
        right: {
          "0%": { transform: 'translateX(100px)' },
          "50%": { transform: 'translateX(-20px)' },
          "100%": { transform: 'translateX(0px)' },
        },
        borderblur: {
          '0%': { boxShadow: '0px 0px 25px 5px rgba(112, 70, 175, 0.62)' },
          '50%': { boxShadow: '0px 0px 25px 5px rgba(225, 71, 148, 0.62)' },
          '100%': { boxShadow: '0px 0px 25px 5px rgba(112, 70, 175, 0.62)' },
        },
      }
    },
  },
  plugins: [],
}