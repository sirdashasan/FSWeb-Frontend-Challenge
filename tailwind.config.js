/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
      },
      colors: {
        "special-blue": "#4731D3",
        "special-green": "#CBF281",
        darkmodeRight: "#1A210B",
        lightmodeRight: "#CBF281",
        darkmodeLeft: "#171043",
        lightmodeLeft: "#4731D3",
      },
    },
  },
  plugins: [],
};
