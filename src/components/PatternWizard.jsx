import { motion } from 'framer-motion'
import { useState } from 'react'
import ArmDiagram from './ArmDiagram'
import MeasurementTips from './MeasurementTips'
import SleeveCapStep from './SleeveCapStep.jsx'

const steps = [
  { id: 1, title: 'Arm Measurements', description: 'Enter your arm measurements' },
  { id: 2, title: 'Sleeve Cap', description: 'Set sleeve cap dimensions' },
  { id: 3, title: 'Customization', description: 'Customize your pattern' },
  { id: 4, title: 'Generate', description: 'Create your pattern' },
]

export default function PatternWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [units, setUnits] = useState('inches')
  const [measurements, setMeasurements] = useState({
    shoulderToElbow: '',
    shoulderToWrist: ''
  })
  
  const [sleeveCapMeasurements, setSleeveCapMeasurements] = useState({
    measurementType: 'bust', // 'bust' or 'manual'
    bust: '',
    sleeveCapWidth: '',
    sleeveCapHeight: ''
  })

  // Validation functions
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
  
  // Get default measurements from placeholders if none entered
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

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Pattern Type Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-normal text-base-content mb-2">Basic Sleeve Pattern</h2>
        <p className="text-base-content/70">Create a classic fitted sleeve pattern with custom measurements</p>
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
                    ? 'bg-primary text-primary-content'
                    : 'bg-base-300 text-base-content'
                }`}
              >
                {step.id}
              </motion.div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 w-16 mx-4 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-base-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <h2 className="text-2xl font-heading font-normal text-base-content">
            {steps[currentStep - 1].title}
          </h2>
          <p className="text-base-content/70">{steps[currentStep - 1].description}</p>
        </div>
      </div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-base-100 rounded-lg shadow-lg p-8 mb-6"
      >
        {currentStep === 1 && <MeasurementsStep units={units} setUnits={setUnits} measurements={measurements} setMeasurements={setMeasurements} workingMeasurements={getWorkingMeasurements()} />}
        {currentStep === 2 && <SleeveCapStep units={units} sleeveCapMeasurements={sleeveCapMeasurements} setSleeveCapMeasurements={setSleeveCapMeasurements} armMeasurements={getWorkingMeasurements()} />}
        {currentStep === 3 && <CustomizationStep units={units} setUnits={setUnits} />}
        {currentStep === 4 && <GenerateStep />}
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className={`btn ${
            currentStep === 1
              ? 'btn-disabled'
              : 'btn-outline'
          }`}
        >
          Previous
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (currentStep === 1 && !canProceedFromStep1()) return
            if (currentStep === 2 && !canProceedFromStep2()) return
            setCurrentStep(Math.min(4, currentStep + 1))
          }}
          disabled={
            currentStep === 4 || 
            (currentStep === 1 && !canProceedFromStep1()) ||
            (currentStep === 2 && !canProceedFromStep2())
          }
          className={`btn ${
            currentStep === 4 || 
            (currentStep === 1 && !canProceedFromStep1()) ||
            (currentStep === 2 && !canProceedFromStep2())
              ? 'btn-disabled'
              : 'btn-primary'
          }`}
        >
          Next
        </motion.button>
      </div>
    </div>
  )
}


function MeasurementsStep({ units, setUnits, measurements, setMeasurements, workingMeasurements }) {
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
    <form>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-heading font-semibold">Enter Your Measurements</h3>
        
        {/* Unit Toggle */}
        <div className="flex items-center space-x-3">
          <span className={`text-sm ${units === 'inches' ? 'text-primary font-medium' : 'text-base-content/60'}`}>
            Inches
          </span>
          <input 
            type="checkbox" 
            className="toggle toggle-primary" 
            checked={units === 'cm'}
            onChange={() => setUnits(units === 'inches' ? 'cm' : 'inches')}
          />
          <span className={`text-sm ${units === 'cm' ? 'text-primary font-medium' : 'text-base-content/60'}`}>
            CM
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column - Input fields */}
        <div className="space-y-6">
          <div>
            <label htmlFor="shoulderToElbow" className="block text-sm font-medium text-gray-700 mb-2">
              Shoulder to Elbow ({units})
            </label>
            <input
              id="shoulderToElbow"
              name="shoulderToElbow"
              type="number"
              value={measurements.shoulderToElbow}
              onChange={(e) => handleMeasurementChange('shoulderToElbow', e.target.value)}
              className="w-full px-3 py-2 border border-base-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary"
              placeholder={placeholders[units].shoulderToElbow}
              step="0.1"
            />
            <p className="text-xs text-base-content/60 mt-1">
              Measure from the top of your shoulder to your elbow
            </p>
          </div>
          
          <div>
            <label htmlFor="shoulderToWrist" className="block text-sm font-medium text-gray-700 mb-2">
              Shoulder to Wrist ({units})
            </label>
            <input
              id="shoulderToWrist"
              name="shoulderToWrist"
              type="number"
              value={measurements.shoulderToWrist}
              onChange={(e) => handleMeasurementChange('shoulderToWrist', e.target.value)}
              className="w-full px-3 py-2 border border-base-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary"
              placeholder={placeholders[units].shoulderToWrist}
              step="0.1"
            />
            <p className="text-xs text-base-content/60 mt-1">
              Measure from the top of your shoulder to your wrist
            </p>
          </div>
        </div>
        
        {/* Right column - Visual diagram */}
        <div>
          <ArmDiagram 
            shoulderToElbow={workingMeasurements.shoulderToElbow}
            shoulderToWrist={workingMeasurements.shoulderToWrist}
            units={units}
          />
        </div>
      </div>

      <MeasurementTips />
    </form>
  )
}

function CustomizationStep({ units, setUnits }) {
  const [easeType, setEaseType] = useState('regular')
  const [customNegativeEase, setCustomNegativeEase] = useState('')
  const [showStretchGuide, setShowStretchGuide] = useState(false)
  const easeOptions = units === 'inches' 
    ? [
        { value: 'fitted', label: 'Fitted (0-1 inches)', description: 'Close-fitting with minimal ease' },
        { value: 'regular', label: 'Regular (1-2 inches)', description: 'Comfortable fit with standard ease' },
        { value: 'loose', label: 'Loose (2-3 inches)', description: 'Relaxed fit with generous ease' },
        { value: 'stretch', label: 'Stretch Fabric (Negative ease)', description: 'For knits and stretch fabrics' }
      ]
    : [
        { value: 'fitted', label: 'Fitted (0-2.5 cm)', description: 'Close-fitting with minimal ease' },
        { value: 'regular', label: 'Regular (2.5-5 cm)', description: 'Comfortable fit with standard ease' },
        { value: 'loose', label: 'Loose (5-7.5 cm)', description: 'Relaxed fit with generous ease' },
        { value: 'stretch', label: 'Stretch Fabric (Negative ease)', description: 'For knits and stretch fabrics' }
      ]

  const seamAllowanceOptions = units === 'inches'
    ? [
        { value: '0.375', label: '3/8 inch' },
        { value: '0.5', label: '1/2 inch' },
        { value: '0.625', label: '5/8 inch' }
      ]
    : [
        { value: '1', label: '1 cm' },
        { value: '1.5', label: '1.5 cm' },
        { value: '2', label: '2 cm' }
      ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-heading font-semibold">Customize Your Pattern</h3>
        
        {/* Unit Toggle */}
        <div className="flex items-center space-x-3">
          <span className={`text-sm ${units === 'inches' ? 'text-primary font-medium' : 'text-base-content/60'}`}>
            Inches
          </span>
          <input 
            type="checkbox" 
            className="toggle toggle-primary" 
            checked={units === 'cm'}
            onChange={() => setUnits(units === 'inches' ? 'cm' : 'inches')}
          />
          <span className={`text-sm ${units === 'cm' ? 'text-primary font-medium' : 'text-base-content/60'}`}>
            CM
          </span>
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Ease Amount
            </label>
            <div className="relative group ml-2">
              <svg 
                className="w-4 h-4 text-gray-400 cursor-help hover:text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="m9,9 2.5,0 0,7M13,6.5c0,0.83 -0.67,1.5 -1.5,1.5s-1.5,-0.67 -1.5,-1.5 0.67,-1.5 1.5,-1.5 1.5,0.67 1.5,1.5" strokeWidth="2" />
              </svg>
              <div className="invisible group-hover:visible absolute z-10 w-64 p-2 mt-1 text-xs text-white bg-gray-800 rounded-md shadow-lg -translate-x-1/2 left-1/2">
                <strong>Ease:</strong> Extra room added to a garment beyond your body measurements. Positive ease = looser fit, negative ease = tighter fit (for stretch fabrics).
                <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>
            </div>
          </div>
          <select 
            className="w-full px-3 py-2 border border-base-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary"
            value={easeType}
            onChange={(e) => setEaseType(e.target.value)}
          >
            {easeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          {easeType === 'stretch' && (
            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Negative Ease Percentage
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="0"
                  max="50"
                  step="1"
                  value={customNegativeEase}
                  onChange={(e) => setCustomNegativeEase(e.target.value)}
                  className="w-20 px-2 py-1 border border-base-300 rounded-sm focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="15"
                />
                <span className="text-sm text-gray-600">%</span>
              </div>
              <p className="text-xs text-base-content/60 mt-1">
                Enter the percentage of negative ease for your stretch fabric (typically 10-25%)
              </p>
            </div>
          )}
          
          <p className="text-xs text-base-content/60 mt-1">
            Choose "Stretch Fabric" for knits, jersey, or any fabric with stretch
          </p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Seam Allowance
          </label>
          <select className="w-full px-3 py-2 border border-base-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary">
            {seamAllowanceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="text-xs text-base-content/60 mt-1">
            Amount of extra fabric added around the pattern for sewing
          </p>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-orange-50 rounded-lg">
          <h4 className="font-medium text-orange-800 mb-2">🧵 Fabric Tips</h4>
          <ul className="text-sm text-orange-700 space-y-1">
            <li>• <strong>Woven fabrics:</strong> Choose Fitted, Regular, or Loose ease</li>
            <li>• <strong>Stretch fabrics:</strong> Select "Stretch Fabric" for negative ease</li>
            <li>• <strong>Seam allowance:</strong> 5/8" (1.5cm) is standard for most garments</li>
          </ul>
        </div>

        {easeType === 'stretch' && (
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-green-800">📐 How to Test Your Fabric Stretch</h4>
              <motion.button
                onClick={() => setShowStretchGuide(!showStretchGuide)}
                className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-medium">
                  {showStretchGuide ? 'Hide Guide' : 'Show Guide'}
                </span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: showStretchGuide ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
            </div>
            
            {showStretchGuide && (
              <motion.div 
                className="space-y-4 text-sm text-green-700"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
              <div>
                <h5 className="font-semibold mb-2">Step 1: Measure Fabric Stretch Percentage</h5>
                <ol className="space-y-1 ml-4">
                  <li>1. Cut a 10cm (4") square of your fabric</li>
                  <li>2. Mark the relaxed width (should be 10cm)</li>
                  <li>3. Stretch the fabric gently until snug (don't overstretch)</li>
                  <li>4. Measure the stretched width (e.g., 21cm)</li>
                  <li>5. Calculate: (stretched ÷ relaxed) × 100 = stretch % (21÷10 = 210%)</li>
                </ol>
              </div>

              <div>
                <h5 className="font-semibold mb-2">Step 2: Calculate Maximum Negative Ease</h5>
                <p>Maximum negative ease = (relaxed ÷ stretched) × 100</p>
                <p className="text-xs">Example: 10÷21 = 47% maximum negative ease</p>
              </div>

              <div>
                <h5 className="font-semibold mb-2">Step 3: Audition Your Fabric 🎭</h5>
                <ol className="space-y-1 ml-4">
                  <li>1. Wrap unstretched fabric around your arm, mark the circumference</li>
                  <li>2. Wrap stretched fabric around your arm at comfortable tension</li>
                  <li>3. Calculate: ((unstretched - stretched) ÷ unstretched) × 100 = negative ease %</li>
                  <li>4. Check that fabric doesn't go see-through or feel too tight</li>
                  <li>5. Use this percentage (typically 10-25%, not the maximum)</li>
                </ol>
              </div>

              <div className="bg-green-100 p-3 rounded-sm mt-3">
                <p className="font-medium text-green-900 mb-1">💡 Pro Tips:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Don't use maximum stretch - aim for 50-70% of maximum</li>
                  <li>• Test stretch in the direction you'll be sewing (crosswise for sleeves)</li>
                  <li>• Consider fabric recovery - does it bounce back after stretching?</li>
                  <li>• Start conservative with negative ease and adjust in future garments</li>
                </ul>
              </div>
              </motion.div>
            )}
          </div>
        )}
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
        className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-heading font-semibold mb-4">Generating Your Pattern...</h3>
      <p className="text-gray-600">
        We're creating your custom sleeve pattern based on your measurements and preferences.
        This will just take a moment!
      </p>
    </div>
  )
}