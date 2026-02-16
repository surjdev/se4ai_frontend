/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kku-gold': '#FF99FF',      // สีทอง มข.
        'kku-maroon': '#51a1cf',    // สีแดงเลือดหมู มข.
      },
    },
  },
  plugins: [],
}