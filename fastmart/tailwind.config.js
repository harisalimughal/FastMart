/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        acad: ['Afacad', 'sans-serif'],  // Afacad for global use
        rubikMono: ['Rubik Mono One', 'sans-serif'],  // Rubik Mono One for logo
      },
    },
  },
  plugins: [],
};
