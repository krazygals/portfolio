/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          y2k: ['"Zen Dots"', "cursive"],
        },
      },
    },
    plugins: [],
  };
  