/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
      },
      colors: {
        "special-blue": "#4731D3",
        "special-green": "#CBF281",
      },
    },
  },
  plugins: [],
};
