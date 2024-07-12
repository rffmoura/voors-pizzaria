/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: { 'primary': '#FF5B00', 'secondary': '#F4F4F4', 'tertiary': "#7B3000" }
    },
  },
  plugins: [],
}

