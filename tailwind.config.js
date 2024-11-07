/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        sans: ['Inter', 'Hind Siliguri', 'sans-serif'],
      },
      keyframes: {
        slide: {
          '0%': { transform: "translateY(10px)" },
          '100%': { transform: "translateY(0)" },
        }
      },
      animation: {
        slide: 'slide 0.2s',
      },
    }
  },
  plugins: []
};