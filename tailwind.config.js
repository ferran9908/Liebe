module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Gothic A1"'],
      },
      colors: {
        "dark-theme": "#151515",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
