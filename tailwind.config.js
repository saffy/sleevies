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
        sleevies: {
          // Main Sleevies: ["#420c14","#f2404f","#b1ae81","#515a47","#444b4b"]
          main: {
            burgundy: '#420c14',
            coral: '#f2404f', 
            sage: '#b1ae81',
            olive: '#515a47',
            charcoal: '#444b4b',
          },
          // Muted Sleevies: ["#2f1e20","#b67c81","#a1a091","#52554e","#464949"]
          muted: {
            burgundy: '#2f1e20',
            coral: '#b67c81',
            sage: '#a1a091', 
            olive: '#52554e',
            charcoal: '#464949',
          },
          // Cool Sleevies: ["#320d18","#c63154","#a0856e","#504a3e","#45393a"]
          cool: {
            burgundy: '#320d18',
            coral: '#c63154',
            sage: '#a0856e',
            olive: '#504a3e', 
            charcoal: '#45393a',
          },
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Ovo', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
}