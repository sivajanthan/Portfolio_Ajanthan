/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // sky-500
        secondary: "#8b5cf6", // violet-500
        dark: "#0f172a", // slate-900
        darker: "#020617", // slate-950
        card: "#1e293b", // slate-800
      }
    },
  },
  plugins: [],
}
