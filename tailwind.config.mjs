/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // Default padding
          sm: "3rem",      // Small screens
          md: "1rem",      // Medium screens
          lg: "1rem",      // Large screens
        },
      },
    },
  },
  plugins: [],
};
