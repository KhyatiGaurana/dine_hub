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
        background: "var(--background)",
        foreground: "var(--foreground)",
        peach:"#f4e9dd",
        burnt_orange:"#d35e17",
        rust:"#742d00",
        salmon:"#faaf86",
        ochre:"#f2ae1c",
      },
      fontFamily:{
        monoton: "var(--font-monoton)",
        chicle: "var(--font-chicle)",
        yellowtail:"var(--font-yellowtail)",
        youngSerif:"var(--font-youngserif)",
      }
    },
  },
  
  plugins: [],
};
export default config;
