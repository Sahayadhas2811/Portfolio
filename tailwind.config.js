export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#8b5cf6',
        ink: '#07130f',
        paper: '#f8f6ee',
        line: '#d7d2c7'
      },
      fontFamily: {
        sans: ['Inter', 'Sora', 'Avenir', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        neon: '0 0 40px rgba(139,92,246,0.35)'
      }
    }
  },
  plugins: []
}
