import React from 'react'

export default function MeasurementTips(): React.JSX.Element {
  return (
    <div className="mt-6 p-4 bg-orange-50 rounded-lg">
      <h4 className="font-medium text-orange-800 mb-2">📏 How to Measure</h4>
      <ul className="text-sm text-orange-700 space-y-1">
        <li>• <strong>Shoulder to Elbow: </strong>
            Measure from the top of your shoulder down to your elbow</li>
        <li>• <strong>Shoulder to Wrist: </strong>
            With your hand placed on your hip, so your arm is bent,
            measure from shoulder all the way down to your wrist bone</li>
        <li>• Keep the measuring tape against the outside of your arm</li>
        <li>• Have someone help you measure for best accuracy</li>
      </ul>
    </div>
  )
}