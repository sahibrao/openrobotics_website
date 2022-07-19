

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        IBM : ['IBM Plex Sans'],
        Roboto : ['Roboto'],
      },
    },
  },
  plugins: [],
}