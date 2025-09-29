// Sleevies Color Palette - Centralized color definitions
// These colors are now properly defined in tailwind.config.js
// This file serves as documentation and can be imported for JavaScript usage

export const diagramColors = {
  // Bright, high-contrast colors optimized for readability across all themes
  shoulder: '#F2404F',  // Bright red - clearly visible on light and dark backgrounds
  elbow: '#EC4899',     // Bright pink - distinct from red and green
  wrist: '#059669',     // Bright green - accessible green shade
}

export const brandColors = {
  // Core Sleevies brand colors
  coral: '#F2404F',     // Primary brand coral/red
  pink: '#EC4899',      // Secondary brand pink
  green: '#059669',     // Accent green
  orange: '#ea580c',    // Warm orange accent
}

// Tailwind class mappings - these classes are defined in tailwind.config.js
export const tailwindClasses = {
  // Diagram colors (available as Tailwind utilities)
  diagramShoulder: 'stroke-diagram-shoulder fill-diagram-shoulder',
  diagramElbow: 'stroke-diagram-elbow fill-diagram-elbow', 
  diagramWrist: 'stroke-diagram-wrist fill-diagram-wrist',
  
  // Brand colors (available as Tailwind utilities)
  sleeviesCoral: 'bg-sleevies-coral text-sleevies-coral border-sleevies-coral',
  sleeviesPink: 'bg-sleevies-pink text-sleevies-pink border-sleevies-pink',
  sleeviesGreen: 'bg-sleevies-green text-sleevies-green border-sleevies-green',
  sleeviesOrange: 'bg-sleevies-orange text-sleevies-orange border-sleevies-orange',
}

// Usage examples:
// import { diagramColors, tailwindClasses } from './styles/color-palette'
// 
// JavaScript usage:
// style={{ backgroundColor: diagramColors.shoulder }}
//
// Tailwind usage (recommended):
// className="stroke-diagram-shoulder fill-diagram-shoulder"
// className={tailwindClasses.diagramShoulder}