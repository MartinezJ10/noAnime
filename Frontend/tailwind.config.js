module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      grayBg: "#3B4252",
      grayDark: "#2E3440",
      contrast: "#88C0D0",
      text: "#E5E9F0",
      red: "#C0636B",
      lighGreen: "#BBDABB",
      lightBlue: "#6386AE",
    },
    fontFamily: {
      sans: ["'Poppins', sans-serif"],
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
