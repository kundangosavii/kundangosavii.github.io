/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
        fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'TASA Orbiter', 'ui-serif', 'serif'],
        display: ['Anton', 'TASA Orbiter', 'Inter', 'Montserrat'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        orbiter: ['TASA Orbiter', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}