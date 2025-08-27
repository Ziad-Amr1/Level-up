// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "var(--primary-dark)",
          blue: "var(--primary-blue)",
        },
        secondary: {
          dark: "var(--secondary-dark)",
        },
        accent: {
          gold: "var(--accent-gold)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        navbar: {
          scrolled: "var(--navbar-scrolled-bg)",
        },
      },
      borderRadius: {
        DEFAULT: "var(--border-radius)",
        sm: "var(--border-radius1)",
      },
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
      },
    },
  },
  plugins: [],
}
