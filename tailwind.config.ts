import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDiv: '#f5f5f5', // Exemplo de cor
          primary: '#333333',
          hover: '#666666',
      },
      screens: {
        'xs': '480px', // Extra small screens
        'sm': '640px', // Small screens (mobile)
        'md': '768px', // Medium screens (tablets)
        'lg': '1024px', // Large screens (laptops/desktops)
        'xl': '1280px', // Extra large screens
        '2xl': '1536px', // Extra extra large screens
      },      
    },
  },
  plugins: [],
};
export default config;
