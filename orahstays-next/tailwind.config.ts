import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#090909",
        charcoal: "#141414",
        night: "#0E1726",
        ivory: "#F7F1E8",
        pearl: "#FFFDF8",
        champagne: "#C8A96A",
        sand: "#D9C7A3",
        bronze: "#9B7A45",
        emerald: "#0F3D36",
        teal: {
          DEFAULT: "#0D9488",
          dark: "#0F766E",
          light: "#CCFBF1",
          bg: "#F0FDFA",
        },
        coral: {
          DEFAULT: "#F97316",
          dark: "#EA580C",
          light: "#FFEDD5",
        },
        gold: {
          DEFAULT: "#D97706",
          light: "#FEF3C7",
        },
        ink: "#0F172A",
        slate: "#475569",
        mid: "#94A3B8",
        mist: "#F1F5F9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        card: "12px",
        "card-lg": "20px",
      },
      maxWidth: {
        shell: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
