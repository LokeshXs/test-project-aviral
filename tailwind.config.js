module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_b2: "#ffffffb2" },
        black: { 900: "#000000", "900_7f": "#0000007f" },
        indigo: { 200: "#8ba3cb", 300: "#718ebf", A400_01: "#3857f5", "50_01": "#e5eef4", A700_01: "#1814f3" },
        blue: { 50: "#e7edff", A700: "#2d60ff" },
        gray: { 100: "#f4f6f9", 400: "#b1b1b1", 900: "#232323", "100_01": "#f3f3f5" },
        blue_gray: { 50: "#edf1f7", 800: "#343c6a" },
        teal: { 50: "#deeaf2", 300: "#41d4a8", "50_01": "#dfeaf2", A400: "#16dbcc" },
        orange: { 50: "#fff5d9" },
        red: { A200: "#ff4b4a" },
        cyan: { 50: "#dcfaf8" },
        pink: { A100: "#ff82ac" },
        light_blue_400: "#28adf8",
      },
      boxShadow: { xs: "4px 4px 18px -2px #e6e3e7cc" },
      fontFamily: { inter: "Inter", mont: "Mont", lato: "Lato" },
      backgroundImage: {
        gradient: "linear-gradient(135deg, #4c49ed,#0a06f4)",
        gradient1: "linear-gradient(180deg, #ffffff26,#ffffff26)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
