import { motion } from 'framer-motion';
import ArmDiagram from './ArmDiagram';

export default function SleeveCapStep({ units, sleeveCapMeasurements, setSleeveCapMeasurements, armMeasurements }) {
  const handleMeasurementChange = (field, value) => {
    setSleeveCapMeasurements(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const bustPlaceholders = {
    inches: '36',
    cm: '92'
  };

  const sleeveCapPlaceholders = {
    inches: { width: '14', height: '5' },
    cm: { width: '36', height: '13' }
  };

  return (
    <div>
      <h3 className="text-xl font-heading font-semibold mb-6">Sleeve Cap Measurements</h3>
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          Choose how you'd like to set your sleeve cap dimensions:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
              sleeveCapMeasurements.measurementType === 'bust' 
                ? 'border-orange-300 bg-orange-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleMeasurementChange('measurementType', 'bust')}
          >
            <div className="flex items-center mb-2">
              <input
                type="radio"
                checked={sleeveCapMeasurements.measurementType === 'bust'}
                onChange={() => {}}
                className="mr-2 text-primary"
              />
              <h4 className="font-medium">From Bust Measurement</h4>
            </div>
            <p className="text-sm text-gray-600">
              We'll calculate sleeve cap dimensions from your bust measurement (recommended)
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
              sleeveCapMeasurements.measurementType === 'manual' 
                ? 'border-orange-300 bg-orange-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleMeasurementChange('measurementType', 'manual')}
          >
            <div className="flex items-center mb-2">
              <input
                type="radio"
                checked={sleeveCapMeasurements.measurementType === 'manual'}
                onChange={() => {}}
                className="mr-2 text-primary"
              />
              <h4 className="font-medium">Manual Entry</h4>
            </div>
            <p className="text-sm text-gray-600">
              Enter sleeve cap width and height manually
            </p>
          </motion.div>
        </div>
        {sleeveCapMeasurements.measurementType === 'bust' ? (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bust ({units})
            </label>
            <input
              type="number"
              value={sleeveCapMeasurements.bust}
              onChange={e => handleMeasurementChange('bust', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-orange-500"
              placeholder={bustPlaceholders[units]}
              step="0.1"
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sleeve Cap Width ({units})
              </label>
              <input
                type="number"
                value={sleeveCapMeasurements.sleeveCapWidth}
                onChange={e => handleMeasurementChange('sleeveCapWidth', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                placeholder={sleeveCapPlaceholders[units].width}
                step="0.1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sleeve Cap Height ({units})
              </label>
              <input
                type="number"
                value={sleeveCapMeasurements.sleeveCapHeight}
                onChange={e => handleMeasurementChange('sleeveCapHeight', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                placeholder={sleeveCapPlaceholders[units].height}
                step="0.1"
              />
            </div>
          </div>
        )}
      </div>
      {/* Arm diagram visualization for step 2, with measurements passed in */}
      <ArmDiagram
        shoulderToElbow={armMeasurements.shoulderToElbow}
        shoulderToWrist={armMeasurements.shoulderToWrist}
        units={units}
        step={2} // for future custom visuals
      />
    </div>
  );
}

