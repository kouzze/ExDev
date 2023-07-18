/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        purplee: '#8D35C2',
        bluee: '#01B7CD'
      },
      fontFamily: {
        'ssans3': ['Source Sans 3', 'sans-serif'],
      },
      fontSize: {
        'custom-lg': '150px',
        'custom-title': '1.5rem',
      },
      width: {
        customimg: '50%',
      },
      maxWidth: {
        customimg: '20%',
        customnews: '40%',
      },
      maxHeight: {
        customimg: '20%',
      },
      margin: {
        customml: '30%',
      }
    },
  },
  plugins: [],
}
