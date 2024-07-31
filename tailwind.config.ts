import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ivory: {
          DEFAULT: "rgb(207, 217, 222)",
          hover: "rgba(29, 155, 240, 0.1)",
        },
        orange: {
          DEFAULT: "rgb(251, 169, 63)",
          hover: "rgb(245, 160, 55)",
        },
        blackBtn: {
          DEFAULT: "rgb(15,20,25)",
          modalBg: "rgba(15,20,25, 0.1)",
          hover: "rgba(15,20,25, 0.7)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
