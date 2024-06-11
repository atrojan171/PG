import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        '3xl': "1700px",
      }
    },
  },
  plugins: [],
} satisfies Config;