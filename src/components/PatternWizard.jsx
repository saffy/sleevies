import { motion } from 'framer-motion'
import { useState } from 'react'
import ArmDiagram from './ArmDiagram'

const steps = [
  { id: 1, title: 'Measurements', description: 'Enter your measurements' },
  { id: 2, title: 'Customization', description: 'Customize your pattern' },
  { id: 3, title: 'Generate', description: 'Create your pattern' },
]

export default function PatternWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [units, setUnits] = useState('inches')
  const [measurements, setMeasurements] = useState({
    shoulderToElbow: '',
    shoulderToWrist: ''
  })

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Pattern Type Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Basic Sleeve Pattern</h2>
        <p className="text-gray-600">Create a classic fitted sleeve pattern with custom measurements</p>
      </div>

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
        {currentStep === 1 && <MeasurementsStep units={units} setUnits={setUnits} measurements={measurements} setMeasurements={setMeasurements} />}
        {currentStep === 2 && <CustomizationStep />}
        {currentStep === 3 && <GenerateStep />}
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
          onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
          disabled={currentStep === 3}
          className={`px-6 py-2 rounded-lg font-medium ${
            currentStep === 3
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


function MeasurementsStep({ units, setUnits, measurements, setMeasurements }) {
  const handleMeasurementChange = (field, value) => {
    setMeasurements(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const placeholders = {
    inches: { shoulderToElbow: '13', shoulderToWrist: '24' },
    cm: { shoulderToElbow: '33', shoulderToWrist: '61' }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Enter Your Measurements</h3>
        
        {/* Unit Toggle */}
        <div className="flex items-center space-x-3">
          <span className={`text-sm ${units === 'inches' ? 'text-purple-600 font-medium' : 'text-gray-500'}`}>
            Inches
          </span>
          <motion.button
            onClick={() => setUnits(units === 'inches' ? 'cm' : 'inches')}
            className={`relative w-12 h-6 rounded-full transition-colors ${units === 'inches' ? 'bg-gray-300' : 'bg-purple-500'}`}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute w-5 h-5 bg-white rounded-full top-0.5 shadow-md"
              animate={{ x: units === 'inches' ? 2 : 26 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </motion.button>
          <span className={`text-sm ${units === 'cm' ? 'text-purple-600 font-medium' : 'text-gray-500'}`}>
            CM
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column - Input fields */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Shoulder to Elbow ({units})
            </label>
            <input
              type="number"
              value={measurements.shoulderToElbow}
              onChange={(e) => handleMeasurementChange('shoulderToElbow', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder={placeholders[units].shoulderToElbow}
              step="0.1"
            />
            <p className="text-xs text-gray-500 mt-1">
              Measure from the top of your shoulder to your elbow
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Shoulder to Wrist ({units})
            </label>
            <input
              type="number"
              value={measurements.shoulderToWrist}
              onChange={(e) => handleMeasurementChange('shoulderToWrist', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder={placeholders[units].shoulderToWrist}
              step="0.1"
            />
            <p className="text-xs text-gray-500 mt-1">
              Measure from the top of your shoulder to your wrist
            </p>
          </div>
        </div>
        
        {/* Right column - Visual diagram */}
        <div>
          <ArmDiagram 
            shoulderToElbow={measurements.shoulderToElbow}
            shoulderToWrist={measurements.shoulderToWrist}
            units={units}
          />
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-800 mb-2">📏 How to Measure</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• <strong>Shoulder to Elbow:</strong> With your arm relaxed at your side, measure from the top of your shoulder down to your elbow</li>
          <li>• <strong>Shoulder to Wrist:</strong> Continue measuring from shoulder all the way down to your wrist bone</li>
          <li>• Keep the measuring tape straight along the outside of your arm</li>
          <li>• Have someone help you measure for best accuracy</li>
        </ul>
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