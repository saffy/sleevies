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
            50: '#fff7ed',
            100: '#ffedd5', 
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316', // Main orange
            600: '#ea580c', // Darker orange for accessibility
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          secondary: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0', 
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e', // Main sage green
            600: '#16a34a', // Darker green for accessibility  
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
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