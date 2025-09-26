import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ColorPalette {
  bg: string
  bgDark: string
  text: string
  textLight: string
  border: string
  ring: string
  focusRing: string
  gradient: string
  gradientButton: string
  hover: string
}

interface Theme {
  name: string
  primary: ColorPalette
  secondary: ColorPalette
  accent?: ColorPalette
  background: string
}

interface ThemeContextValue {
  theme: Theme
  currentTheme: string
  isDarkMode: boolean
  changeTheme: (themeName: string) => void
  toggleDarkMode: () => void
  availableThemes: Record<string, Theme>
}

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const themes: Record<string, Theme> = {
  sleevies: {
    name: 'Sleevies',
    primary: {
      bg: 'bg-red-50',
      bgDark: 'bg-sleevies-main-coral',
      text: 'text-sleevies-main-coral',
      textLight: 'text-red-700',
      border: 'border-red-200',
      ring: 'ring-sleevies-main-coral',
      focusRing: 'focus:ring-sleevies-main-coral',
      gradient: 'from-sleevies-main-coral to-sleevies-main-sage',
      gradientButton: 'from-sleevies-main-coral to-sleevies-main-olive',
      hover: 'hover:bg-red-600',
    },
    secondary: {
        bg: 'bg-green-50',
        bgDark: 'bg-sleevies-main-sage',
        text: 'text-sleevies-main-sage',
        textLight: 'text-sleevies-main-olive',
        border: 'border-green-200',
        ring: 'ring-sleevies-main-sage',
        focusRing: 'focus:ring-sleevies-main-sage',
        hover: 'hover:bg-sleevies-main-olive',
        gradient: "",
        gradientButton: ""
    },
    accent: {
        bg: 'bg-gray-50',
        bgDark: 'bg-sleevies-main-charcoal',
        text: 'text-sleevies-main-charcoal',
        textLight: 'text-sleevies-main-burgundy',
        border: 'border-gray-200',
        ring: 'ring-sleevies-main-charcoal',
        focusRing: 'focus:ring-sleevies-main-charcoal',
        hover: 'hover:bg-sleevies-main-burgundy',
        gradient: "",
        gradientButton: ""
    },
    background: 'bg-linear-to-br from-red-50 to-green-50 dark:from-gray-900 dark:to-gray-800',
  },
  sleevies_muted: {
    name: 'Sleevies Muted',
    primary: {
      bg: 'bg-rose-50',
      bgDark: 'bg-sleevies-muted-coral',
      text: 'text-sleevies-muted-coral',
      textLight: 'text-rose-700',
      border: 'border-rose-200',
      ring: 'ring-sleevies-muted-coral',
      focusRing: 'focus:ring-sleevies-muted-coral',
      gradient: 'from-sleevies-muted-coral to-sleevies-muted-sage',
      gradientButton: 'from-sleevies-muted-coral to-sleevies-muted-olive',
      hover: 'hover:bg-rose-600',
    },
    secondary: {
        bg: 'bg-stone-50',
        bgDark: 'bg-sleevies-muted-sage',
        text: 'text-sleevies-muted-sage',
        textLight: 'text-sleevies-muted-olive',
        border: 'border-stone-200',
        ring: 'ring-sleevies-muted-sage',
        focusRing: 'focus:ring-sleevies-muted-sage',
        hover: 'hover:bg-sleevies-muted-olive',
        gradient: "",
        gradientButton: ""
    },
    accent: {
        bg: 'bg-neutral-50',
        bgDark: 'bg-sleevies-muted-charcoal',
        text: 'text-sleevies-muted-charcoal',
        textLight: 'text-sleevies-muted-burgundy',
        border: 'border-neutral-200',
        ring: 'ring-sleevies-muted-charcoal',
        focusRing: 'focus:ring-sleevies-muted-charcoal',
        hover: 'hover:bg-sleevies-muted-burgundy',
        gradient: "",
        gradientButton: ""
    },
    background: 'bg-linear-to-br from-rose-50 to-stone-50 dark:from-gray-900 dark:to-gray-800',
  },
  sleevies_cool: {
    name: 'Sleevies Cool',
    primary: {
      bg: 'bg-pink-50',
      bgDark: 'bg-sleevies-cool-coral',
      text: 'text-sleevies-cool-coral',
      textLight: 'text-pink-700',
      border: 'border-pink-200',
      ring: 'ring-sleevies-cool-coral',
      focusRing: 'focus:ring-sleevies-cool-coral',
      gradient: 'from-sleevies-cool-coral to-sleevies-cool-sage',
      gradientButton: 'from-sleevies-cool-coral to-sleevies-cool-olive',
      hover: 'hover:bg-pink-600',
    },
    secondary: {
        bg: 'bg-amber-50',
        bgDark: 'bg-sleevies-cool-sage',
        text: 'text-sleevies-cool-sage',
        textLight: 'text-sleevies-cool-olive',
        border: 'border-amber-200',
        ring: 'ring-sleevies-cool-sage',
        focusRing: 'focus:ring-sleevies-cool-sage',
        hover: 'hover:bg-sleevies-cool-olive',
        gradient: "",
        gradientButton: ""
    },
    accent: {
        bg: 'bg-gray-50',
        bgDark: 'bg-sleevies-cool-charcoal',
        text: 'text-sleevies-cool-charcoal',
        textLight: 'text-sleevies-cool-burgundy',
        border: 'border-gray-200',
        ring: 'ring-sleevies-cool-charcoal',
        focusRing: 'focus:ring-sleevies-cool-charcoal',
        hover: 'hover:bg-sleevies-cool-burgundy',
        gradient: "",
        gradientButton: ""
    },
    background: 'bg-linear-to-br from-pink-50 to-amber-50 dark:from-gray-900 dark:to-gray-800',
  },
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<string>('sleevies')
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const theme = themes[currentTheme]

  const changeTheme = (themeName: string) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName)
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Apply dark class to document element
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      currentTheme, 
      isDarkMode,
      changeTheme, 
      toggleDarkMode,
      availableThemes: themes 
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}