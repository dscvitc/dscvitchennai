/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Rich Black": "#040404",
        Silver: "#C1C1C1",
        Cultured: "#F6F6F6",
        White: "#FFFFFF",
        Azure: "#4285F4",
        Mango: "#FCBC04",
        "Green Pigment": "#34A853",
        Cinnabar: "#EB4335",
      },
    },
  },
  plugins: [],
};
