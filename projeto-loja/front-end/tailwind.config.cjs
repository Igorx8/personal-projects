/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "text-smoke": "textsmoke 1000ms 3s forwards",
        "fade-out": "fadeout 1000ms 3s ease forwards",
      },
      keyframes: {
        textsmoke: {
          "0%": { transform: "opacity: 1" },
          "100%": {
            transform: "scale(2)",
            opacity: 0,
            "text-spacing": "1.5rem",
            display: "none",
          },
        },
        fadeout: {
          "0%": {
            opacity: 0,
          },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
