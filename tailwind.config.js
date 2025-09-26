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
  daisyui: {
    themes: [
      "light",
      "dark", 
      {
        sleevies: {
          "primary": "#f2404f",
          "secondary": "#b1ae81", 
          "accent": "#515a47",
          "neutral": "#444b4b",
          "base-100": "#ffffff",
          "base-200": "#f8f9fa",
          "base-300": "#e9ecef",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
        "sleevies-muted": {
          "primary": "#b67c81",
          "secondary": "#a1a091",
          "accent": "#52554e", 
          "neutral": "#464949",
          "base-100": "#fafafa",
          "base-200": "#f5f5f5",
          "base-300": "#e5e5e5",
          "info": "#3abff8",
          "success": "#36d399", 
          "warning": "#fbbd23",
          "error": "#f87272",
        },
        "sleevies-cool": {
          "primary": "#c63154",
          "secondary": "#a0856e",
          "accent": "#504a3e",
          "neutral": "#45393a", 
          "base-100": "#ffffff",
          "base-200": "#f8f9fa",
          "base-300": "#e9ecef",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23", 
          "error": "#f87272",
        },
        "tropical-light": {
          "base-100": "oklch(98% 0.005 50)",
          "base-200": "oklch(95% 0.008 45)", 
          "base-300": "oklch(90% 0.015 40)",
          "base-content": "oklch(25% 0.02 20)",
          "primary": "oklch(55% 0.2 15)",
          "primary-content": "oklch(98% 0.005 15)",
          "secondary": "oklch(60% 0.04 45)",
          "secondary-content": "oklch(98% 0.005 45)",
          "accent": "oklch(20% 0.08 10)",
          "accent-content": "oklch(95% 0.01 10)",
          "neutral": "oklch(35% 0.02 30)",
          "neutral-content": "oklch(90% 0.008 30)",
          "info": "oklch(65% 0.15 220)",
          "info-content": "oklch(98% 0.005 220)",
          "success": "oklch(65% 0.15 140)",
          "success-content": "oklch(98% 0.005 140)",
          "warning": "oklch(75% 0.2 70)",
          "warning-content": "oklch(25% 0.02 70)",
          "error": "oklch(60% 0.25 25)",
          "error-content": "oklch(98% 0.005 25)",
          "--rounded-box": "0.25rem",
          "--rounded-btn": "2rem",
          "--rounded-badge": "2rem",
          "--border-btn": "1.5px",
          "--noise": "1",
        },
      }
    ],
  },
}