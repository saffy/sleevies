import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import PatternWizard from './components/PatternWizard'
import DaisyThemeSelector from './components/DaisyThemeSelector'

function App(): React.JSX.Element {
  const [showWizard, setShowWizard] = useState<boolean>(false)

  if (showWizard) {
    return (
      <div className="min-h-screen bg-base-200">
        <DaisyThemeSelector />
        <div className="container mx-auto px-4 py-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowWizard(false)}
            className="mb-6 flex items-center space-x-2 text-base-content hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Home</span>
          </motion.button>
          <PatternWizard />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-200">
      <DaisyThemeSelector />
      <div className="container mx-auto px-4 py-8">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-heading font-normal text-base-content mb-4">
            Sleevies
          </h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Create beautiful, printable sewing patterns with guided visual tools
          </p>
        </motion.header>

        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-base-100 rounded-lg shadow-lg p-8">
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block mb-6"
              >
                <div className="w-24 h-24 bg-linear-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                  <svg 
                    className="w-12 h-12 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" 
                    />
                  </svg>
                </div>
              </motion.div>
              
              <h2 className="text-3xl font-heading font-normal text-base-content mb-4">
                Ready to Create
              </h2>
              <p className="text-base-content/70 mb-8">
                Your pattern generation journey starts here. This modern, responsive application 
                will guide you through creating professional sewing patterns.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowWizard(true)}
                className="btn btn-primary btn-lg rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  )
}

export default App