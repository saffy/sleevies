/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: {
            50: '#fef2f3',
            100: '#fde6e8',
            200: '#fad1d6',
            300: '#f7aab4',
            400: '#f2787e',
            500: '#f2404f', // Folly - main coral red
            600: '#e11d42', // Darker for accessibility
            700: '#be123c',
            800: '#9f1239',
            900: '#881337',
          },
          secondary: {
            50: '#f7f7f2',
            100: '#eeede5',
            200: '#dddbc9',
            300: '#c8c5a8',
            400: '#b1ae81', // Sage - main color
            500: '#9fa078',
            600: '#8a8763',
            700: '#716d52',
            800: '#5c5944',
            900: '#4c4839',
          },
          accent: {
            50: '#f8f8f8',
            100: '#eeeeee',
            200: '#dcdcdc',
            300: '#b8b8b8',
            400: '#8d8d8d',
            500: '#6b6b6b',
            600: '#515a47', // Ebony - dark olive
            700: '#444b4b', // Outer space - charcoal
            800: '#420c14', // Chocolate cosmos - burgundy
            900: '#2d0509',
          },
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
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
  plugins: [],
}