module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '370px',    // Small mobile
        'sm': '640px',    // Standard mobile
        'md': '768px',    // Tablet  
        'lg': '1024px',   // Desktop
        'xl': '1280px',   // Large desktop
        '2xl': '1536px',  // Extra large
      },
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