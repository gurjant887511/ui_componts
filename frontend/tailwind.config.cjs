module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        'xl': '24px',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-white/5',
    'backdrop-blur-xl',
    'from-gray-950',
    'via-indigo-900',
    'to-purple-800',
    'from-purple-500',
    'to-blue-500',
    'to-cyan-400',
    'animate-pulse',
  ]
}