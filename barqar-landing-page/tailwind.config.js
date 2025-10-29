/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        barqar: {
          blue: '#00455B',
          green: '#B7D436',
          black: '#00000A',
          grey: '#333333',
        }
      },
      fontFamily: {
        cabin: ['Cabin', 'sans-serif'],
      },
      fontWeight: {
        'headline': '700',
        'body': '500',
      }
    },
  },
  plugins: [],
}

