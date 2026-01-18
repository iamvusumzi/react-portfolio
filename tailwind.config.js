/** @type {import('tailwindcss').Config} */
export default {
  // 1. Crucial: Tell Tailwind which files to scan for utility usage.
  // This ensures your components and your index.css file are processed.
  content: [
    "./index.html",
    // Scans all JavaScript/TypeScript/React files in your src directory
    "./src/**/*.{js,ts,jsx,tsx}",
    // Scans your global CSS for @apply, @theme, and custom utilities
    "./src/index.css",
  ],

  // 2. Essential: Enable Dark Mode based on the 'dark' class on <html>
  darkMode: "class",

  theme: {
    // You can leave 'extend' empty or use it for any future customization
    extend: {},
  },
  plugins: [],
};
