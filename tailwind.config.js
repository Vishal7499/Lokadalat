// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Scan all JS, JSX, TS, and TSX files inside the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex-sans-condensed': ['"IBM Plex Sans Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
