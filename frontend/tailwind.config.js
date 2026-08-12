export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#6C5CE7",
        secondary: "#00D4FF",
        dark: "#050505",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};
