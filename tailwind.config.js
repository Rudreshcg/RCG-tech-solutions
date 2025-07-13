/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { // Make sure custom colors are defined if you rely on them frequently
        // Example: 'gold-custom': '#bfa055',
      },
    },
  },
  plugins: [],
};