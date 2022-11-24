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
        viewportBg4: "url('/src/images/stadium11.png')",
        stadium2: "url('/src/images/stadium2.webp')",
        hex1: "url('/src/images/Polyslice5.svg')",
      },
    },
  },
  plugins: [],
};
