/** @type {import('postcss').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {},   // ← NEW
    autoprefixer: {},
  },
};