import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#b4cdff",
          300: "#8ab2ff",
          400: "#5b8eff",
          500: "#1d6bff",
          600: "#1457e6",
          700: "#1245b5",
          800: "#143d8a",
          900: "#15356a"
        }
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(29, 107, 255, 0.35)",
        soft: "0 20px 60px rgba(15, 23, 42, 0.12)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-40%)" },
          "100%": { transform: "translateX(40%)" }
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.8" }
        }
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        floaty: "floaty 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
