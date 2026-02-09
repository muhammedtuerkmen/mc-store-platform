module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        midnight: "#0b0b0c",
        panel: "#1d1d20",
        panelSoft: "#242427",
        line: "rgba(255, 255, 255, 0.08)",
        accent: "#ff4fb4",
        accentSoft: "#ff7fd1",
        cobalt: "#3f6cf6",
        emerald: "#2bd57f",
        ember: "#f57c32",
        gold: "#f5c441",
        magenta: "#b547d1"
      },
      fontFamily: {
        display: ["Bungee", "cursive"],
        body: ["Rajdhani", "sans-serif"]
      },
      boxShadow: {
        tile: "0 20px 40px rgba(0, 0, 0, 0.35)",
        glow: "0 0 40px rgba(255, 79, 180, 0.28)",
        lift: "0 12px 24px rgba(0, 0, 0, 0.35)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 4s ease-in-out infinite"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
