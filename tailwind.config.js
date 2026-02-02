/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E5007E", // El nuevo Fucsia con más "punch"
        secondary: "#9F5FB1",
        foreground: "#2B2E35",
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
      },
    },
  },
  plugins: [],
}