import React from 'react'
import { motion } from 'framer-motion';
import ArmDiagram from './ArmDiagram';

interface SleeveCapStepProps {
  units: 'inches' | 'cm';
  sleeveCapMeasurements: {
    measurementType: 'bust' | 'manual';
    bust: string;
    sleeveCapWidth: string;
    sleeveCapHeight: string;
  };
  setSleeveCapMeasurements: (measurements: any) => void;
  armMeasurements: {
    shoulderToElbow: string;
    shoulderToWrist: string;
  };
}

export default function SleeveCapStep({ units, sleeveCapMeasurements, setSleeveCapMeasurements, armMeasurements }: SleeveCapStepProps): React.JSX.Element {
  const handleMeasurementChange = (field: string, value: string): void => {
    setSleeveCapMeasurements((prev: any) => ({
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
                id="measurementType-bust"
                name="measurementType"
                type="radio"
                value="bust"
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
                id="measurementType-manual"
                name="measurementType"
                type="radio"
                value="manual"
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
            <label htmlFor="bust" className="block text-sm font-medium text-gray-700 mb-2">
              Bust ({units})
            </label>
            <input
              id="bust"
              name="bust"
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
              <label htmlFor="sleeveCapWidth" className="block text-sm font-medium text-gray-700 mb-2">
                Sleeve Cap Width ({units})
              </label>
              <input
                id="sleeveCapWidth"
                name="sleeveCapWidth"
                type="number"
                value={sleeveCapMeasurements.sleeveCapWidth}
                onChange={e => handleMeasurementChange('sleeveCapWidth', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-orange-500"
                placeholder={sleeveCapPlaceholders[units].width}
                step="0.1"
              />
            </div>
            <div>
              <label htmlFor="sleeveCapHeight" className="block text-sm font-medium text-gray-700 mb-2">
                Sleeve Cap Height ({units})
              </label>
              <input
                id="sleeveCapHeight"
                name="sleeveCapHeight"
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

