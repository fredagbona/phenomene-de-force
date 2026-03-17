import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#161616",
        primary: {
          DEFAULT: "#FF4500",
          hover: "#E63E00",
          glow: "rgba(255, 69, 0, 0.35)",
        },
        secondary: "#A0A0A0",
      },
      fontFamily: {
        title: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-roboto)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,1) 100%)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
