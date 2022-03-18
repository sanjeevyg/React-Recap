module.exports = {
  content: ["./src/**/*.{html,js,jsx,tx,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
