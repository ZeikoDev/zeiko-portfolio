/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        rule: token("rule"),
        fg: token("fg"),
        "fg-2": token("fg-2"),
        blue: token("blue"),
        "blue-block": token("blue-block"),
      },
      fontFamily: {
        sans: ["Archivo", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1312px",
        measure: "68ch",
      },
    },
  },
};
