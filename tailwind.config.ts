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
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        loading: 'loading 0.4s ease-in-out infinite',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#1f2937", // Dark gray similar to gray-800
        secondary: {
          DEFAULT: "#111827", // Even darker gray, similar to gray-900
          foreground: "#e5e7eb", // Light gray similar to gray-200
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#374151", // Muted gray similar to gray-700
          foreground: "#d1d5db", // Light gray similar to gray-300
        },
        accent: {
          DEFAULT: "#14b8a6", // Teal shade, more muted and cohesive with the dark gray tones
          hover: "#0d9488",   // Darker teal for hover effect
        },
        popover: {
          DEFAULT: "#1f2937", // Dark gray similar to gray-800
          foreground: "#e5e7eb", // Light gray similar to gray-200
        },
        card: {
          DEFAULT: "#111827", // Dark gray similar to gray-900
          foreground: "#e5e7eb", // Light gray similar to gray-200
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        loading: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config