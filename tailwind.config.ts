import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1420",
        "ink-soft": "#161E2C",
        paper: "#F6F7F4",
        "paper-soft": "#ECEEE9",
        accent: {
          DEFAULT: "#1B7A72",
          light: "#2C9A90",
          dark: "#125A54",
        },
        amber: {
          DEFAULT: "#E3A23B",
        },
        muted: "#64707B",
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
