/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,tsx,jsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0b",
          900: "#0f1115",
          800: "#131620",
          700: "#171a24",
        },
        neon: {
          500: "#a78bfa", // soft purple
          600: "#8b5cf6",
          700: "#7c3aed",
          900: "#4c1d95",
        },
        accent: {
          400: "#22d3ee", // cyan pop
          500: "#06b6d4",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.35)",
      },
      animation: {
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 0.35 },
          "50%": { opacity: 0.65 },
        },
      },
    },
  },
  plugins: [],
};
