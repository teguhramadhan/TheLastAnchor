/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Jalur untuk folder app (Next.js App Router)
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Tambahkan ini jika kamu pakai folder src

    // Jalur untuk folder components
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Tambahkan ini jika komponen ada di src/components

    // Tambahkan jalur lain jika kamu punya folder khusus
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Share Tech Mono"', "monospace"],
        condensed: ['"Barlow Condensed"', "sans-serif"],
        sans: ["Barlow", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#0e0f0e",
          2: "#141614",
          3: "#1a1d19",
          4: "#202320",
        },
        bdr: { DEFAULT: "#252825", 2: "#303530", 3: "#3a3f3a" },
        ink: { DEFAULT: "#d4d8cc", 2: "#8a8f82", 3: "#555a4f", 4: "#383d33" },
        lime: { DEFAULT: "#90b83a", dim: "#5a7820", glow: "#b8e050" },
        amber: { craft: "#c8862a", bright: "#f0a840" },
      },
    },
  },
  plugins: [],
};
