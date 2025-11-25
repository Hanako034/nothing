/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #ddeefe 33.33%, #f3f6fb 33.33%)',
      }
    }
  },
  plugins: [],
}

