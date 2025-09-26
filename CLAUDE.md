# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production using Vite
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm test` - Run tests using Vitest
- `npm test:ui` - Run tests with Vitest UI interface

## Project Architecture

**Sleevies** is a React-based sewing pattern generator focused on creating custom sleeve patterns. The app uses a wizard-style interface to guide users through measurements and customizations.

### Tech Stack
- **Frontend**: React 18 with Vite as build tool
- **Styling**: Tailwind CSS with custom animations and Framer Motion
- **Testing**: Vitest with React Testing Library and jsdom
- **Linting**: ESLint with React-specific rules

### Key Components Architecture

**App.jsx** - Main app component with conditional rendering between home screen and pattern wizard
- Controls state for `showWizard` toggle
- Handles landing page with animated intro
- Routes to PatternWizard when user clicks "Get Started"

**PatternWizard.jsx** - Multi-step wizard for pattern creation with 4 main steps:
1. **Arm Measurements** - Shoulder-to-elbow, shoulder-to-wrist with unit conversion (inches/cm)
2. **Sleeve Cap** - Bust measurement or manual sleeve cap dimensions 
3. **Customization** - Ease settings, seam allowances, stretch fabric handling
4. **Generate** - Pattern creation (currently shows loading state)

The wizard includes sophisticated validation logic preventing progression without required measurements, and maintains state for measurements across steps.

**ArmDiagram.jsx** - Visual measurement guide component
**MeasurementTips.jsx** - Educational content about taking measurements

### State Management Patterns
- Local component state with useState for measurements and wizard progression
- Measurement validation functions (`canProceedFromStep1`, `canProceedFromStep2`)
- Working measurements system using placeholders when user hasn't entered values
- Unit conversion handling between inches and centimeters

### Styling Conventions
- Tailwind CSS with custom animations defined in `tailwind.config.js`
- Framer Motion for component animations and interactions
- Color scheme: Purple/pink gradients for primary actions, blue/gray for secondary
- Responsive design with grid layouts for measurement inputs and diagrams

### Testing Setup
- Vitest configured with jsdom environment
- React Testing Library with jest-dom matchers
- Test setup file at `src/test/setup.js`

## Key Implementation Notes

- The app handles both metric and imperial units with conversion throughout
- Stretch fabric support includes negative ease calculations and fabric testing guides
- Pattern generation is currently a placeholder - the Generate step shows a loading animation
- Measurement validation ensures users can't proceed without required inputs
- Visual feedback includes step progress indicators and measurement diagrams
- When I mention daisyUI theming or ui library in a prompt, e.g "give me a light diasyUI 5 theme with tropical color palette." always use context7 mcp server.