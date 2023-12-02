/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        customWidth: "88.89%",
      },
      fontFamily: {
        NunitoSansRegular: ["NunitoSansRegular", "sans"],
        NunitoSansSemiBold: ["NunitoSansSemiBold", "sans"],
        NunitoSansExtraBold: ["NunitoSansExtraBold", "sans"],
      },
    },
  },
  plugins: [],
};
