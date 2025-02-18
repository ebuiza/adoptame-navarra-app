import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        qs: ['Quicksand', 'sans-serif'],
      },
      colors: {
        'rosa-oscuro': '#FCC1D1',
        'rosa-claro': '#FFF4F4',
        'fucsia-oscuro': '#DD174E',
        'rosa-gris': '#F5E7EB',
        'verde-claro': '#A3D9A5',
        'negro' :'#362D2D',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;