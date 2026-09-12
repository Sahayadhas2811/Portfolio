export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        emerald: {
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
        },
        dark: {
          bg: '#07130f',
          soft: '#0d1d19',
          card: 'rgba(16, 29, 27, 0.7)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        light: {
          bg: '#f8f9fa',
          soft: '#ffffff',
          card: 'rgba(255, 255, 255, 0.85)',
          border: 'rgba(15, 23, 42, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        neon: '0 0 35px rgba(139, 92, 246, 0.35)',
        'neon-emerald': '0 0 35px rgba(16, 185, 129, 0.35)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
      },
      screens: {
        xs: '475px',
      }
    }
  },
  plugins: []
}

