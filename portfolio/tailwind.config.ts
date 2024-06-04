import type { Config } from "tailwindcss";

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
    },
    screens: {
      'mobile': { 'max': '599px' },
      'sm': {'min': '600px'},
      'md': {'min': '768px',}, // Medium screens
      'lg': {'min': '1024px',}, // Large screens
      'xl': {'min': '1280px'} // Extra-large screens
    },
  },
  plugins: [],
};
export default config;
