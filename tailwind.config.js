/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#252525',
        secondary_background: '#1C1C1C',
        primary: '#3F3E3E',
        secondary: '#FFFFFF',
        green: '#A3F790',
        red: '#FF6969',
        leader: '#', // TODO It's a gradient 
        co_leader: '#ED03ED',
        elder: '#F2D305',
        member: '#13ABF1',
      }
    },
  },
  plugins: [],
}

