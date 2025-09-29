# Copilot Instructions for Sleevies

This file provides guidance to GitHub Copilot when working with the Sleevies repository.

## Project Overview

**Sleevies** is a React-based sewing pattern generator focused on creating custom sleeve patterns. The app uses a wizard-style interface to guide users through measurements and customizations to generate personalized sewing patterns.

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 
- **Styling**: Tailwind CSS v4 with daisyUI v5
- **Animations**: Framer Motion
- **Testing**: Vitest with React Testing Library and jsdom
- **E2E Testing**: Playwright
- **Linting**: ESLint with TypeScript and React rules

## Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production using Vite  
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint

# Type checking with TypeScript
npm run typecheck

# Run unit tests using Vitest
npm test

# Run tests with Vitest UI interface
npm test:ui

# Run Playwright e2e tests
npx playwright test
```

## Project Architecture

### Key Components

**App.jsx** - Main app component with conditional rendering:
- Controls state for `showWizard` toggle between home screen and pattern wizard  
- Handles landing page with animated intro using Framer Motion
- Includes `DaisyThemeSelector` for theme switching
- Routes to PatternWizard when user clicks "Get Started"

**PatternWizard.jsx** - Multi-step wizard for pattern creation with 4 main steps:
1. **Arm Measurements** - Shoulder-to-elbow, shoulder-to-wrist with unit conversion (inches/cm)
2. **Sleeve Cap** - Bust measurement or manual sleeve cap dimensions 
3. **Customization** - Ease settings, seam allowances, stretch fabric handling
4. **Generate** - Pattern creation (currently shows loading state)

**Other Components:**
- **ArmDiagram.jsx** - Visual measurement guide component
- **MeasurementTips.jsx** - Educational content about taking measurements
- **SleeveCapStep.jsx** - Dedicated step component for sleeve cap measurements
- **DaisyThemeSelector.jsx** - Theme switching interface
- **ThemeSelector.jsx** - Additional theme selection component

### State Management Patterns

- Use local component state with `useState` for measurements and wizard progression
- Implement measurement validation functions (`canProceedFromStep1`, `canProceedFromStep2`)
- Working measurements system using placeholders when user hasn't entered values
- Handle unit conversion between inches and centimeters throughout the app

## Coding Standards

### React Patterns
- Use functional components with hooks
- Prefer JSX syntax over TypeScript for React components
- Use conditional rendering for step-based UI flows
- Implement proper form validation before allowing progression

### State Management
- Use `useState` for local component state
- Maintain measurement validation logic in custom functions
- Store working measurements with fallback placeholders
- Handle unit conversions consistently across components

### TypeScript Usage
- Use TypeScript for configuration files (vite.config.js, playwright.config.ts)
- Prefer JSX for React components unless TypeScript types are essential
- Use proper typing for props and state when using TypeScript

## Theming System

### Available Themes
- **sleevies** (default): Light theme with warm burgundy/coral accent colors
- **sleevies muted**: Subtle, low-contrast light theme
- **sleevies cool**: Cool-toned light theme with blue/teal accents  
- **sleevies dark**: Dark theme with complementary dark palette

### Theme Implementation
```css
/* Theme definition in src/index.css */
@plugin "daisyui/theme" {
  name: "sleevies";
  default: true;
  prefersdark: false;
  color-scheme: light;
  /* CSS variables for all semantic colors */
}
```

### Custom Color Variables
```css
/* Available custom colors */
--color-main-burgundy, --color-muted-burgundy, --color-cool-burgundy
--color-main-coral, --color-muted-coral, --color-cool-coral
--color-main-sage, --color-muted-sage, --color-cool-sage
--color-main-olive, --color-muted-olive, --color-cool-olive
--color-main-charcoal, --color-muted-charcoal, --color-cool-charcoal
```

## Styling Conventions

### Tailwind CSS v4 Guidelines
- This project uses **Tailwind CSS v4** with the new `@import "tailwindcss"` syntax
- Custom themes defined directly in CSS using `@plugin "daisyui/theme"` blocks
- Custom CSS variables defined in `@theme` blocks for colors and animations
- Use utility classes and avoid creating separate CSS files
- Custom animations available: `--animate-fade-in`, `--animate-slide-up`, `--animate-bounce-gentle`

### daisyUI v5 Guidelines  
- This project uses **daisyUI v5** with custom themes: "sleevies", "sleevies muted", "sleevies cool", "sleevies dark"
- Theme switching implemented via `DaisyThemeSelector` component
- Use daisyUI component classes: `btn`, `card`, `badge`, `modal`, etc.
- Custom color palette defined with semantic CSS variables (--color-base-*, --color-primary-*, etc.)

### Design System & Color Palette
- **Custom Colors**: burgundy, coral, sage, olive, charcoal (each with main/muted/cool variants)
- **Typography**: Inter font family for body text, Ovo for headings
- **Semantic Colors**: Uses daisyUI semantic color system (primary, secondary, accent, neutral, etc.)
- **Responsive Design**: Grid layouts for measurement inputs and diagrams
- **Interactive Elements**: Framer Motion animations for buttons and page transitions

## Testing Guidelines

### Unit Testing with Vitest
- Test files should end with `.test.jsx` or `.test.tsx`
- Use React Testing Library for component testing
- Test setup file located at `src/test/setup.js`
- Focus on testing user interactions and validation logic

### E2E Testing with Playwright
- E2E tests located in `/e2e` directory
- Test critical user flows like the wizard progression
- Use proper selectors and wait for elements to be visible

### Testing Patterns
- Test measurement validation functions
- Verify step progression logic in the wizard
- Test unit conversion functionality
- Ensure responsive design works across different screen sizes

## Development Workflow

### Making Changes
- Run tests frequently during development: `npm test`
- Use the development server for immediate feedback: `npm run dev`
- Lint code before committing: `npm run lint`
- Type check when working with TypeScript: `npm run typecheck`

### Component Development
- Create reusable components in `/src/components`
- Follow existing patterns for props and state management
- Implement proper validation for user inputs
- Use consistent styling patterns with Tailwind CSS

## Key Implementation Notes

### Measurements and Units
- The app handles both metric (cm) and imperial (inches) units
- Implement conversion functions for consistent unit handling
- Validate measurements before allowing wizard progression
- Use placeholder values when measurements aren't entered

### Fabric and Pattern Features
- Stretch fabric support includes negative ease calculations
- Fabric testing guides for stretch fabric handling
- Seam allowance customization options
- Pattern generation is currently a placeholder (Generate step shows loading animation)

### User Experience
- Visual feedback with step progress indicators
- Interactive measurement diagrams for guidance
- Responsive design for various screen sizes
- Smooth animations using Framer Motion

### Performance Considerations
- Use Vite for fast development builds
- Optimize component re-renders in wizard steps
- Lazy load heavy components when appropriate

## File Organization

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts for state management
├── styles/             # Global styles and Tailwind config
├── test/               # Test setup and utilities
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## Common Patterns to Follow

### Component Structure Pattern
```jsx
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ComponentName() {
  const [state, setState] = useState(initialValue)
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="component-classes"
    >
      {/* Component content */}
    </motion.div>
  )
}
```

### Validation Functions
```jsx
const canProceedFromStep1 = () => {
  return measurements.shoulderToElbow && measurements.shoulderToWrist
}

const canProceedFromStep2 = () => {
  if (sleeveCapMeasurements.measurementType === 'bust') {
    return sleeveCapMeasurements.bust
  } else {
    return sleeveCapMeasurements.sleeveCapWidth && sleeveCapMeasurements.sleeveCapHeight
  }
}
```

### Unit Conversion with Fallbacks
```jsx
const getWorkingMeasurements = () => {
  const placeholders = {
    inches: { shoulderToElbow: '13', shoulderToWrist: '24' },
    cm: { shoulderToElbow: '33', shoulderToWrist: '61' }
  }
  
  return {
    shoulderToElbow: measurements.shoulderToElbow || placeholders[units].shoulderToElbow,
    shoulderToWrist: measurements.shoulderToWrist || placeholders[units].shoulderToWrist
  }
}
```

### Step-based Navigation
```jsx
const steps = [
  { id: 1, title: 'Arm Measurements', description: 'Enter your arm measurements' },
  { id: 2, title: 'Sleeve Cap', description: 'Set sleeve cap dimensions' },
  // ... more steps
]

// Navigation with validation
<button 
  disabled={!canProceedFromStep1()} 
  onClick={() => setCurrentStep(2)}
  className="btn btn-primary"
>
  Next
</button>
```

### Framer Motion Animations
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="btn btn-primary"
>
  Click me
</motion.button>
```

## Debugging and Troubleshooting

- Use React Developer Tools for component inspection
- Check browser console for validation errors
- Test measurement calculations with various inputs
- Verify responsive design across different screen sizes
- Use Vitest UI for interactive test debugging: `npm run test:ui`

When working on this project, prioritize user experience, measurement accuracy, and responsive design while maintaining clean, testable code that follows React best practices.