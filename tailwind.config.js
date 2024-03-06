/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#152938",
        blue: "#304859",
        grey: "#BCCED9",
        text: "#7191A5",
        orange: "#fda214",
        blueHover: "#6395b8",
        orangeHover: "#ffb84a",
        footerGrey: "#dfe7ec",
        blackRgba: "rgba(0, 0, 0, 0.5)",
      },
      minHeight: {
        main: "100vh",
      },
      fontSize: {
        small: "15px",
      },
      borderRadius: {},
      fontFamily: {
        akinson: "'Atkinson Hyperlegible', sans-serif",
      },
      width: {
        available: "-webkit-fill-available",
      },
      screens: {
        large: "1440px",
      },
    },
  },
  plugins: [],
};
