/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        viewportBg: "url('/src/images/stadium7.jpg')",
      },
    },
  },
  plugins: [],
};
