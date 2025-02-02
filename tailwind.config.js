/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mias: ['"MiasScribblings"', 'cursive'], // Font custom
        comic: ['"Comic Neue"', 'cursive'], // Tambahkan font Comic Neue
      },
      keyframes: {
        scrollBackground: {
          "0%": { backgroundPosition: "-800px 0px" },
          "100%": { backgroundPosition: "800px 0px" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        rotate180: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        "scroll-bg": "scrollBackground 5s linear infinite",
        fadeIn: "fadeIn 1s ease-in-out",
        "rotate-180": "rotate180 0.5s ease-in-out forwards", // Animasi rotasi 180 derajat
      },
    },
  },
  plugins: [],
};