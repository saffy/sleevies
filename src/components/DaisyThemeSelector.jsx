import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function DaisyThemeSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('sleevies')

  const themes = [
    { name: 'Sleevies', value: 'sleevies', colors: ['#420c14', '#f2404f', '#b1ae81'] },
    { name: 'Sleevies Muted', value: 'sleevies-muted', colors: ['#2f1e20', '#b67c81', '#a1a091'] },
    { name: 'Sleevies Cool', value: 'sleevies-cool', colors: ['#320d18', '#c63154', '#a0856e'] },
    { name: 'Silk Variant', value: 'silk-variant', colors: ['#3b3b49', '#3b3b49', '#3b3b49'] },
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
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h2a2 2 0 012 2v12a4 4 0 01-2 2H9m6 0a4 4 0 004-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4z" 
            />
          </svg>
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
                        {theme.colors.map((color, index) => (
                          <div 
                            key={index}
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: color }}
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