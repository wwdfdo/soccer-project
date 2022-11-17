/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        viewportBg: "url('/src/images/stadium7.jpg')",
        viewportBg2: "url('/src/images/stadium8.jpg')",
        viewportBg3: "url('/src/images/stadium4.jpeg')",
        stadium2: "url('/src/images/stadium2.webp')",
      },
    },
  },
  plugins: [],
};
