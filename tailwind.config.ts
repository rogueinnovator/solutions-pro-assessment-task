import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abhaya: ["Abhaya Libre", "serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        sansation: ["Sansation", "sans-serif"],
        "sansation-light": ["Sansation Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
