import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
      xl: '1400px',
    },
    extend: {
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateX(0)'
          },
          '45%': {
            transform: 'translateX(0)'
          },
          '55%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        },
      },
      animation: {
        slideIn: 'slideIn 6s infinite',
      },
      colors: {
        mainbg: "#ffffff",
        object: "#ff8214",
        black: "#000000",
        smallbg: "#f6a192",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          lg: '80px',
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
