/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        swape: {
          black: "#111111",
          charcoal: "#1B1B1B",
          cream: "#F8F7F4",
          white: "#FFFFFF",
          gold: "#B89B5E",
          "gold-dark": "#94783F",
          text: "#1A1A1A",
          muted: "#77736C",
          border: "#E8E5DF",
          success: "#58745A",
          danger: "#A85C5C",
        },
      },

      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },

      boxShadow: {
        luxury:
          "0 20px 60px rgba(17, 17, 17, 0.08)",

        soft:
          "0 10px 40px rgba(17, 17, 17, 0.06)",
      },

      borderRadius: {
        luxury: "24px",
      },
    },
  },

  plugins: [],
};