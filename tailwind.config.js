/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A4B84",        // Premium medical blue
        primaryLight: "#3E8CC7",   // Lighter blue
        primaryBg: "#EAF4FB",      // Very light background blue
        textDark: "#1F2D3D"        // Premium dark grey
      },
    },
  },
  plugins: [],
};
