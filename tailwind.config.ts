/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5722", // Adjust to your theme color
        accent: "#ffc166", // Secondary gradient color
        secondary: "#ffab91",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
