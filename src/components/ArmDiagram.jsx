import { motion } from 'framer-motion'

export default function ArmDiagram({ shoulderToElbow, shoulderToWrist, units }) {
  // Canvas dimensions - using viewBox for responsive scaling
  const canvasWidth = 100 // percentage-based
  const canvasHeight = 50 // percentage-based
  const armWidth = 8
  
  // Calculate positions as percentages
  const shoulderX = canvasWidth - 8
  const wristX = 8
  const armLength = shoulderX - wristX
  
  // Calculate elbow position based on measurements
  const calculateElbowX = () => {
    if (shoulderToElbow && shoulderToWrist && parseFloat(shoulderToWrist) > 0) {
      const elbowRatio = parseFloat(shoulderToElbow) / parseFloat(shoulderToWrist)
      if (!isNaN(elbowRatio) && elbowRatio > 0 && elbowRatio <= 1) {
        return shoulderX - (armLength * elbowRatio)
      }
    }
    // Default to 60% of arm length if no valid measurements
    return shoulderX - (armLength * 0.6)
  }
  
  const elbowX = calculateElbowX()
  
  const armCenterY = canvasHeight / 2

  return (
    <div className="bg-gray-50 rounded-lg p-6 border">
      <h4 className="text-sm font-medium text-gray-700 mb-4 text-center">
        Arm Measurement Visualization
      </h4>
      
      <svg 
        viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
        className="w-full h-auto mx-auto max-w-lg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background arm rectangle */}
        <rect
          x={wristX}
          y={armCenterY - armWidth/2}
          width={armLength}
          height={armWidth}
          fill="#E5E7EB"
          stroke="#D1D5DB"
          strokeWidth="0.5"
          rx="2"
        />
        
        {/* Shoulder line and label */}
        <line
          x1={shoulderX}
          y1={armCenterY - armWidth/2 - 3}
          x2={shoulderX}
          y2={armCenterY + armWidth/2 + 3}
          stroke="#EA580C"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <text
          x={shoulderX}
          y={armCenterY - armWidth/2 - 6}
          textAnchor="middle"
          fontSize="3"
          fontWeight="600"
          fill="#EA580C"
        >
          Shoulder
        </text>
        
        {/* Elbow line and label */}
        <line
          x1={elbowX}
          y1={armCenterY - armWidth/2 - 2.5}
          x2={elbowX}
          y2={armCenterY + armWidth/2 + 2.5}
          stroke="#16A34A"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
        <text
          x={elbowX}
          y={armCenterY - armWidth/2 - 5}
          textAnchor="middle"
          fontSize="3"
          fontWeight="600"
          fill="#EC4899"
        >
          Elbow
        </text>
        
        {/* Wrist line and label */}
        <line
          x1={wristX}
          y1={armCenterY - armWidth/2 - 3}
          x2={wristX}
          y2={armCenterY + armWidth/2 + 3}
          stroke="#059669"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <text
          x={wristX}
          y={armCenterY - armWidth/2 - 6}
          textAnchor="middle"
          fontSize="3"
          fontWeight="600"
          fill="#059669"
        >
          Wrist
        </text>
        
        {/* Measurement arrows and labels */}
        {shoulderToElbow && (
          <>
            <line
              x1={shoulderX}
              y1={armCenterY + armWidth/2 + 6}
              x2={elbowX}
              y2={armCenterY + armWidth/2 + 6}
              stroke="#16A34A"
              strokeWidth="0.2"
              markerEnd="url(#arrowhead-sage)"
              markerStart="url(#arrowhead-sage)"
            />
            <text
              x={(shoulderX + elbowX) / 2}
              y={armCenterY + armWidth/2 + 10}
              textAnchor="middle"
              fontSize="2.5"
              fill="#16A34A"
              fontWeight="500"
            >
              {shoulderToElbow} {units}
            </text>
          </>
        )}
        
        {shoulderToWrist && (
          <>
            <line
              x1={shoulderX}
              y1={armCenterY + armWidth/2 + 12}
              x2={wristX}
              y2={armCenterY + armWidth/2 + 12}
              stroke="#059669"
              strokeWidth="0.2"
              markerEnd="url(#arrowhead-green)"
              markerStart="url(#arrowhead-green)"
            />
            <text
              x={(shoulderX + wristX) / 2}
              y={armCenterY + armWidth/2 + 16}
              textAnchor="middle"
              fontSize="2.5"
              fill="#059669"
              fontWeight="500"
            >
              {shoulderToWrist} {units}
            </text>
          </>
        )}
        
        {/* Arrow markers */}
        <defs>
          <marker
            id="arrowhead-sage"
            markerWidth="1.5"
            markerHeight="1"
            refX="0.75"
            refY="0.5"
            orient="auto"
          >
            <polygon points="0 0, 1.5 0.5, 0 1" fill="#16A34A" />
          </marker>
          <marker
            id="arrowhead-green"
            markerWidth="1.5"
            markerHeight="1"
            refX="0.75"
            refY="0.5"
            orient="auto"
          >
            <polygon points="0 0, 1.5 0.5, 0 1" fill="#059669" />
          </marker>
        </defs>
      </svg>
      
      <div className="mt-4 text-center text-xs text-gray-500">
        The elbow position adjusts automatically based on your measurements
      </div>
    </div>
  )
}