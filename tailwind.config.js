/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#0F172A',
        muted:   '#64748B',
        subtle:  '#94A3B8',
        surface: '#F8FAFC',
        border:  '#E2E8F0',
      },
    },
  },
  plugins: [],
}