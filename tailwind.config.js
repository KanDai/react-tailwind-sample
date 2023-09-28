/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "scroll-down-line":
          "scroll-down-line 1.5s infinite",
      },
      keyframes: {
        "scroll-down-line": {
          "0%": {
            transform: "scale(1,0)",
            transformOrigin: "0 0",
          },
          "50%": {
            transform: "scale(1,1)",
            transformOrigin: "0 0",
          },
          "50.1%": {
            transform: "scale(1,1)",
            transformOrigin: "0 100%",
          },
          "100%": {
            transform: "scale(1,0)",
            transformOrigin: "0 100%",
          },
        },
      },
    },
  },
  plugins: [],
}

