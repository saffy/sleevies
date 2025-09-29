/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom diagram colors that work across all themes 
        'diagram': {
          'shoulder': '#F2404F',  // Bright red for shoulder markers
          'elbow': '#EC4899',     // Bright pink for elbow markers  
          'wrist': '#059669',     // Bright green for wrist markers
        },
        // Sleevies brand colors from color-palette.js
        'sleevies': {
          'coral': '#F2404F',
          'pink': '#EC4899', 
          'green': '#059669',
          'orange': '#ea580c',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Ovo', 'serif'],
      },
    },
  },
  plugins: [
    // Note: DaisyUI is loaded via CSS @plugin directive in src/index.css
    // This ensures proper theme integration with the DaisyUI theme system
  ],
}