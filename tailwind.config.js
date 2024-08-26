/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "hsl(171, 14%, 35%)", // Replace 'customColor' with your desired name
        customGreen: "hsla(172, 95%, 18%, 1)",
        customFontSize: "clamp(1.875rem, 1.301rem + 2.449vw, 3.95rem)",
      },
      fontFamily: {
        customTitleFont: ["var(--titleFont)"],
      },
      borderRadius: {
        "custom-4-5rem": "4.5rem",
      },
    },
  },
  plugins: [],
};
