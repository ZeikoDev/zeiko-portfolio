/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060d18",
          900: "#0a1628",
          800: "#0f1f36",
          700: "#152642",
          600: "#1c3254",
          500: "#243d66",
        },
        accent: {
          DEFAULT: "#2E8BFF",
          light: "#5BA8FF",
          dark: "#1E6FD9",
          glow: "rgba(46, 139, 255, 0.15)",
          muted: "rgba(46, 139, 255, 0.08)",
        },
        text: {
          primary: "#E8EDF5",
          secondary: "#8B9AB8",
          muted: "#7C8DB0",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        heading: ["Sora", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        section: "120px",
      },
      maxWidth: {
        content: "1200px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
};
