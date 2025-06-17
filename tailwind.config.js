/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'exo': ['Exo 2', 'sans-serif'],
        'audiowide': ['Audiowide', 'cursive'],
        'oxanium': ['Oxanium', 'cursive'],
      },
      colors: {
        'gaming-dark': '#0a0a0a',
        'gaming-darker': '#1a1a1a',
        'neon-blue': '#00d4ff',
        'neon-purple': '#b600ff',
        'neon-green': '#00ff88',
      },
      backgroundImage: {
        'gradient-gaming': 'linear-gradient(135deg, #00d4ff 0%, #b600ff 50%, #00ff88 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};