import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        suhaai: {
          gold: "#F4B942",
          amber: "#F8D77C",
          cream: "#FFF8ED",
          green: "#12355B",
          blue: "#12355B",
          ink: "#2B2B2B",
          soft: "#FFFDF8",
          accent: "#5B8C5A"
        }
      },
      boxShadow: {
        soft: "0 18px 55px rgba(18, 53, 91, 0.13)"
      }
    }
  },
  plugins: []
};

export default config;
