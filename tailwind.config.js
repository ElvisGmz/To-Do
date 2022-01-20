module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        averia: ["Averia Sans Libre", 'sans-serif'],
      },
      minHeight: {
        'screen-nav': 'var(--screen-nav)',
      },
      maxHeight: {
        'screen-nav': 'var(--screen-nav)',
      },
    },
  },
  plugins: [],
  variants: {
    spacing: ["responsive", "hover", "focus", "active", "group-hover"],
  },
}
