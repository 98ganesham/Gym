/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#CBD5E1",
        "gray-50": "#94A3B8",
        "gray-100": "#64748B",
        "gray-500": "#475569",
        "primary-50": "#38BDF8",
        "primary-100": "#0EA5E9",
        "primary-300": "#0284C7",
        "primary-500": "#0369A1",
        "secondary-400": "#C084FC",
        "secondary-500": "#3A855F",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 10%, #FFC837 80%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif",],
        roboto: ["Roboto", "sans-serif"],
      },
      content: {
        EmpowerText: "url('./assets/EmpowerText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",    
      
    },
  },
  plugins: [],
};