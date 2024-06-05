/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-arrow': "url('/assets/images/png/arrow.png')",
      }),
      backgroundPosition: {
        '5-50': '5% 50%',
      },
      backgroundSize: {
        '15px': '15px',
      },
    },
  },
  plugins: [],
};
