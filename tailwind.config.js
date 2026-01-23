/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
      },
      colors: {
        brand: {
          pink: "#EF5DA8", // Color rosa de MIPIEL
        }
      }
    },
  },
  plugins: [],
}