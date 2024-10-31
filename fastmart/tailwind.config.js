/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        acad: ['Afacad', 'sans-serif'],  
        rubikMono: ['Rubik Mono One', 'sans-serif'],  
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-scrollbar': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#888 #e0e0e0',
        },
        '.custom-scrollbar::-webkit-scrollbar': {
          'height': '12px', /* Increase the height to simulate margin */
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          'background': '#e0e0e0',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          'background-color': '#888',
          'border-radius': '10px',
          'border': '3px solid #e0e0e0', /* This creates a margin effect */
        },
      });
    },
  ],
};
