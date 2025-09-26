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
        "silk-variant": {
          "base-100": "oklch(97% 0.0035 67.78)",
          "base-200": "oklch(95% 0.0081 61.42)", 
          "base-300": "oklch(90% 0.0081 61.42)",
          "base-content": "oklch(40% 0.0081 61.42)",
          "primary": "oklch(23.27% 0.0249 284.3)",
          "primary-content": "oklch(94.22% 0.2505 117.44)",
          "secondary": "oklch(23.27% 0.0249 284.3)",
          "secondary-content": "oklch(73.92% 0.2135 50.94)",
          "accent": "oklch(23.27% 0.0249 284.3)",
          "accent-content": "oklch(88.92% 0.2061 189.9)",
          "neutral": "oklch(20% 0 0)",
          "neutral-content": "oklch(80% 0.0081 61.42)",
          "info": "oklch(80.39% 0.1148 241.68)",
          "info-content": "oklch(30.39% 0.1148 241.68)",
          "success": "oklch(83.92% 0.0901 136.87)",
          "success-content": "oklch(23.92% 0.0901 136.87)",
          "warning": "oklch(83.92% 0.1085 80)",
          "warning-content": "oklch(43.92% 0.1085 80)",
          "error": "oklch(75.1% 0.1814 22.37)",
          "error-content": "oklch(35.1% 0.1814 22.37)",
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