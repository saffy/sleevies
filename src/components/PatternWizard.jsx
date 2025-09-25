import { motion } from 'framer-motion'
import { useState } from 'react'

const steps = [
  { id: 1, title: 'Pattern Type', description: 'Choose what you want to create' },
  { id: 2, title: 'Measurements', description: 'Enter your measurements' },
  { id: 3, title: 'Customization', description: 'Customize your pattern' },
  { id: 4, title: 'Generate', description: 'Create your pattern' },
]

export default function PatternWizard() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step.id}
              </motion.div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 w-16 mx-4 ${
                    currentStep > step.id ? 'bg-purple-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {steps[currentStep - 1].title}
          </h2>
          <p className="text-gray-600">{steps[currentStep - 1].description}</p>
        </div>
      </div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-white rounded-lg shadow-lg p-8 mb-6"
      >
        {currentStep === 1 && <PatternTypeStep />}
        {currentStep === 2 && <MeasurementsStep />}
        {currentStep === 3 && <CustomizationStep />}
        {currentStep === 4 && <GenerateStep />}
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg font-medium ${
            currentStep === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Previous
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
          disabled={currentStep === 4}
          className={`px-6 py-2 rounded-lg font-medium ${
            currentStep === 4
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-purple-500 text-white hover:bg-purple-600'
          }`}
        >
          Next
        </motion.button>
      </div>
    </div>
  )
}

function PatternTypeStep() {
  const patternTypes = [
    { name: 'Basic Sleeve', image: '👔', description: 'Classic fitted sleeve pattern' },
    { name: 'Puff Sleeve', image: '👗', description: 'Voluminous romantic sleeve' },
    { name: 'Bell Sleeve', image: '🔔', description: 'Flared from elbow down' },
    { name: 'Cap Sleeve', image: '👕', description: 'Short, shoulder-covering sleeve' },
  ]

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">What type of sleeve would you like to create?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {patternTypes.map((type, index) => (
          <motion.div
            key={type.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-purple-300 hover:bg-purple-50 transition-colors"
          >
            <div className="text-4xl mb-2">{type.image}</div>
            <h4 className="font-semibold text-lg">{type.name}</h4>
            <p className="text-gray-600 text-sm">{type.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function MeasurementsStep() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Enter Your Measurements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Arm Length (inches)
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="24"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bicep Circumference (inches)
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="12"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Wrist Circumference (inches)
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="6"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Armpit Depth (inches)
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="8"
          />
        </div>
      </div>
    </div>
  )
}

function CustomizationStep() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Customize Your Pattern</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ease Amount
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>Fitted (0-1 inches)</option>
            <option>Regular (1-2 inches)</option>
            <option>Loose (2-3 inches)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Seam Allowance
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>3/8 inch</option>
            <option>1/2 inch</option>
            <option>5/8 inch</option>
          </select>
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-purple-500 focus:ring-purple-500"
            />
            <span className="ml-2 text-sm text-gray-700">Include cutting layout guide</span>
          </label>
        </div>
      </div>
    </div>
  )
}

function GenerateStep() {
  return (
    <div className="text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-4">Generating Your Pattern...</h3>
      <p className="text-gray-600">
        We're creating your custom sleeve pattern based on your measurements and preferences.
        This will just take a moment!
      </p>
    </div>
  )
}