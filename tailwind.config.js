/** @type {import("tailwindcss").Config} */
export default {
  content: {
    relative: true,
    files: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: "#1A4B84",
        primaryLight: "#3E8CC7",
        primaryBg: "#EAF4FB",
        textDark: "#1F2D3D",
      },
    },
  },
  plugins: [],
};
