// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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

        // Gradient-friendly flat colors
        gradientStart: "var(--secondary-dark)",
        gradientMiddle: "var(--primary-dark)",
        gradientEnd: "var(--secondary-dark)",
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
      transitionProperty: {
        DEFAULT: "var(--transition)",
      },
      boxShadow: {
        gold: "0 4px 10px rgba(255, 215, 0, 0.3)",
        soft: "0 4px 20px rgba(0, 0, 0, 0.2)",
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backgroundSize: {
        'gradient-x': '200% 200%',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}
