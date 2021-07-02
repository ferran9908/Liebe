module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Gothic A1"'],
      },
      colors: {
        night: "#151515",
        dusk: "#202022",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
