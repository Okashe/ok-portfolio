import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: '40rem',
      md: '48rem',
      lg: '60rem',
      xl:  '75rem'
      
     },
     fontFamily:{
      primary: "var(--font-jetbrainsMono)",
     },
    extend: {
      colors: {
        primary: "#1c1c22ef",
        secondary:"#001b3333",
        accent:{
          DEFAULT: '#00e187',
          hover: "#00ff99"
          // ',

          //#00ff99
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        orbit: {
          "0%": {
              transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
              transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
      },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

