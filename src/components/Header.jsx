import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-sm border-b border-gray-200"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8">
            <img src="/sleevies-logo.svg" alt="Sleevies" className="w-full h-full" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Sleevies</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
            Patterns
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
            Tutorials
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
            Community
          </a>
        </nav>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors"
        >
          Get Started
        </motion.button>
      </div>
    </motion.header>
  )
}