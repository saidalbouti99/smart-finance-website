const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksans: ["Quicksand"],
        opensans: ["Open Sans"],
      },
    },
    colors: {
      primary: "#011627",
      secondary: "#FDFFFC",
      tertiary: "#1C1F35",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      teal: "#07beb8",
      orange: "#e08300",
      pink: {
        100: "#e72a8b",
      },
      green: {
        100: "#02676B",
        200: "#4C956C",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
    },
  },
  plugins: [],
};
