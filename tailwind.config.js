// tailwind.config.js
module.exports = {
  content: [
    // Ensure your resume component path is listed here
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  
  // 1. SAFELIST: To prevent dynamic colors from being purged
  safelist: [
    { pattern: /(text|bg)-(cyan|green|orange|purple|pink)-(300|400|500)/, },
    'from-blue-500', 'to-cyan-500', 'from-purple-500', 'to-pink-500', 
    'from-green-500', 'to-emerald-500', 'from-orange-500', 'to-red-500', 
    'from-cyan-500', 'to-blue-500', 'from-purple-500', 'to-indigo-500',
  ],

  // 2. THEME EXTENSION: To define the animations and delays
  theme: {
    extend: {
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'fade-in': {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      transitionDelay: {
        '2000': '2s',
        '4000': '4s',
      },
    },
  },
  plugins: [],
}