/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#123F32',
          deep: '#164431',
          dark: '#0D2D24',
          light: '#1B5242',
        },
        gold: {
          DEFAULT: '#C5A65A',
          light: '#D8BC75',
          dark: '#A68940',
          muted: '#C5A65A',
        },
        sand: {
          50: '#FAFBF8',
          100: '#F7F8F4',
          200: '#EAECE4',
          300: '#DDE0D4',
        },
        charcoal: {
          DEFAULT: '#26332E',
          muted: '#4A5B54',
          dark: '#1A2320',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.02em',
        'wide-editorial': '0.12em',
        'widest-editorial': '0.2em',
      },
      lineHeight: {
        'tight-hero': '1.08',
      }
    },
  },
  plugins: [],
}
