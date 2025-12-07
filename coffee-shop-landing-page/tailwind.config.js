/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },

      textShadow: {
        mobile: '0px 0.91px 1.81px rgba(0,0,0,1)',
        tablet: '0px 1.43px 2.85px rgba(0,0,0,1)',
        desktop: '0px 2px 4px rgba(0,0,0,1)',
      },
    },
  },

  plugins: [
    // plugin para criar classes de text-shadow
    function ({ addUtilities, theme }) {
      const shadows = theme('textShadow');
      const utilities = {};

      for (const key in shadows) {
        utilities[`.text-shadow-${key}`] = {
          textShadow: shadows[key],
        };
      }

      addUtilities(utilities);
    },
  ],
};
