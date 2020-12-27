module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
  },
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        orange: {
          500: "#ff3e00",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
