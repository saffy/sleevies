import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeSelector() {
  const { theme, currentTheme, isDarkMode, changeTheme, toggleDarkMode, availableThemes } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white dark:bg-gray-800 rounded-full shadow-lg border dark:border-gray-700 p-3 hover:shadow-xl transition-shadow"
          title="Choose Theme"
        >
          <svg 
            className="w-5 h-5 text-gray-600 dark:text-gray-300" 
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
              className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border dark:border-gray-700 p-4 min-w-[200px]"
            >
              {/* Dark Mode Toggle */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b dark:border-gray-700">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleDarkMode}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <motion.div
                    className="absolute w-5 h-5 bg-white rounded-full top-0.5 shadow-md"
                    animate={{ x: isDarkMode ? 22 : 2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>

              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Choose Theme</h3>
              <div className="space-y-2">
                {Object.entries(availableThemes).map(([key, themeOption]) => (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      changeTheme(key)
                      setIsOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      currentTheme === key
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ 
                            backgroundColor: key === 'sleevies' 
                              ? '#420c14' 
                              : key === 'sleevies_muted'
                              ? '#2f1e20'
                              : '#320d18' // sleevies_cool
                          }}
                        />
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ 
                            backgroundColor: key === 'sleevies' 
                              ? '#f2404f' 
                              : key === 'sleevies_muted'
                              ? '#b67c81'
                              : '#c63154' // sleevies_cool
                          }}
                        />
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ 
                            backgroundColor: key === 'sleevies' 
                              ? '#b1ae81' 
                              : key === 'sleevies_muted'
                              ? '#a1a091'
                              : '#a0856e' // sleevies_cool
                          }}
                        />
                      </div>
                      <span>{themeOption.name}</span>
                    </div>
                  </motion.button>
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