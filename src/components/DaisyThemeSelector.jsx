import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import {PaintBrushIcon} from "@heroicons/react/24/solid/index.js";

export default function DaisyThemeSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('sleevies')

  const themes = [
    { 
      name: 'Default', 
      value: 'sleevies', 
      colors: [
        { bg: 'bg-red-900', label: 'Primary' },
        { bg: 'bg-sleevies-coral', label: 'Coral' },
        { bg: 'bg-yellow-600', label: 'Accent' }
      ]
    },
    { 
      name: 'Muted', 
      value: 'sleevies-muted', 
      colors: [
        { bg: 'bg-stone-800', label: 'Primary' },
        { bg: 'bg-rose-400', label: 'Muted' },
        { bg: 'bg-stone-400', label: 'Neutral' }
      ]
    },
    { 
      name: 'Cool', 
      value: 'sleevies-cool', 
      colors: [
        { bg: 'bg-slate-800', label: 'Primary' },
        { bg: 'bg-pink-500', label: 'Cool' },
        { bg: 'bg-amber-600', label: 'Accent' }
      ]
    },
    { 
      name: 'Dark', 
      value: 'sleevies-dark', 
      colors: [
        { bg: 'bg-gray-800', label: 'Dark' },
        { bg: 'bg-emerald-400', label: 'Primary' },
        { bg: 'bg-rose-400', label: 'Accent' }
      ]
    },
  ]

  // Set initial theme and listen for changes
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'sleevies'
    setCurrentTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName)
    document.documentElement.setAttribute('data-theme', themeName)
    localStorage.setItem('theme', themeName)
    setIsOpen(false)
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-circle btn-ghost bg-base-100 shadow-lg border border-base-300"
          title="Choose Theme"
        >
          <PaintBrushIcon className="h-5 w-5" />
        </motion.button>

        {/* Theme Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 bg-base-100 rounded-lg shadow-xl border border-base-300 p-4 min-w-[200px]"
            >
              <h3 className="text-sm font-medium text-base-content mb-3">Choose Theme</h3>
              <div className="space-y-2">
                {themes.map((theme) => (
                  <motion.label
                    key={theme.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition-colors hover:bg-base-200 ${
                      currentTheme === theme.value ? 'bg-base-200' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="theme-controller"
                      className="theme-controller radio radio-primary radio-sm"
                      value={theme.value}
                      checked={currentTheme === theme.value}
                      onChange={() => handleThemeChange(theme.value)}
                    />
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {theme.colors.map((colorObj, index) => (
                          <div 
                            key={index}
                            className={`w-3 h-3 rounded-full ${colorObj.bg}`}
                            title={colorObj.label}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-base-content">{theme.name}</span>
                    </div>
                  </motion.label>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click outside to close */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-[-1]" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  )
}