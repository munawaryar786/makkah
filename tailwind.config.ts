import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#064e3b",
        charcoal: "#14352f",
        gold: "#f5c518",
        "gold-soft": "#ffe27a",
        ivory: "#fffdf4",
        linen: "#f4faef",
        taupe: "#647067"
      },
      boxShadow: {
        premium: "0 22px 70px rgba(6, 78, 59, 0.16)",
        glow: "0 18px 45px rgba(245, 197, 24, 0.24)"
      },
      fontFamily: {
        display: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        body: ["Inter", "Manrope", "Segoe UI", "Arial", "sans-serif"]
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, transparent, #f5c518, transparent)"
      }
    }
  },
  plugins: []
};

export default config;
