// TODO: consider porting to typescript
// Sleevies Color Palette - Favorite Colors Collection
// Colors identified and saved for easy reference without hex codes

export const favoriteColors = {
  // Primary favorites from current design
  orange: '#ea580c',        // bg-orange-600 equivalent
  brightPink: '#EC4899',    // Current elbow pink in arm diagram  
  coralRed: '#F2404F',      // Main Sleevies coral/red
  forestGreen: '#059669',   // Current wrist green in arm diagram
  
  // Color names for reference
  // Orange - warm, energetic
  // Pink - playful, vibrant  
  // Deep Orange - bold, confident
  // Green - natural, calming
}

// Tailwind class equivalents for quick reference
export const tailwindClasses = {
  orange: 'bg-orange-600',      // #ea580c
  brightPink: '#EC4899',        // Custom hex needed
  coralRed: '#F2404F',          // Custom hex needed  
  forestGreen: '#059669',       // Custom hex needed (emerald-600 is close)
}

// Usage examples:
// import { favoriteColors } from './styles/color-palette'
// style={{ backgroundColor: favoriteColors.orange }}
// or reference in Tailwind config for custom color classes