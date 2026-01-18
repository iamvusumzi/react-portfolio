import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/index.css"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
