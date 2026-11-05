import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        panel: "#111111",
        line: "#262626",
        muted: "#929292",
        accent: "#8cff00",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-space)", "Arial", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.075em",
      },
    },
  },
  plugins: [],
};

export default config;
