export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fitrah-bg': '#DDD6CC',
        'fitrah-main-text': '#2D3436',
        'fitrah-dark-green': '#1E2F23',
        'fitrah-accent': '#E1AD01',
        'fitrah-soft-grey': '#ECECEC',
      },
       fontFamily: {
      cairo: ['Cairo', 'sans-serif'],
      tajawal: ['Tajawal', 'sans-serif'],
   },
    },
  },
  plugins: [],
}