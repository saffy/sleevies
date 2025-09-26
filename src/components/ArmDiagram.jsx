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
    <div className="bg-base-100 rounded-lg p-6 border border-base-300">
      <h4 className="text-sm font-medium text-base-content mb-4 text-center">
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
          className="fill-base-200 stroke-base-300"
          strokeWidth="0.5"
          rx="2"
        />
        
        {/* Shoulder line and label */}
        <line
          x1={shoulderX}
          y1={armCenterY - armWidth/2 - 3}
          x2={shoulderX}
          y2={armCenterY + armWidth/2 + 3}
          className="stroke-primary"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <text
          x={shoulderX}
          y={armCenterY - armWidth/2 - 6}
          textAnchor="middle"
          fontSize="3"
          fontWeight="600"
          className="fill-primary"
        >
          Shoulder
        </text>
        
        {/* Elbow line and label */}
        <line
          x1={elbowX}
          y1={armCenterY - armWidth/2 - 2.5}
          x2={elbowX}
          y2={armCenterY + armWidth/2 + 2.5}
          className="stroke-secondary"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
        <text
          x={elbowX}
          y={armCenterY - armWidth/2 - 5}
          textAnchor="middle"
          fontSize="3"
          fontWeight="600"
          className="fill-secondary"
        >
          Elbow
        </text>
        
        {/* Wrist line and label */}
        <line
          x1={wristX}
          y1={armCenterY - armWidth/2 - 3}
          x2={wristX}
          y2={armCenterY + armWidth/2 + 3}
          className="stroke-accent"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <text
          x={wristX}
          y={armCenterY - armWidth/2 - 6}
          textAnchor="middle"
          fontSize="3"
          fontWeight="600"
          className="fill-accent"
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
              className="stroke-secondary"
              strokeWidth="0.2"
              markerEnd="url(#arrowhead-secondary)"
              markerStart="url(#arrowhead-secondary)"
            />
            <text
              x={(shoulderX + elbowX) / 2}
              y={armCenterY + armWidth/2 + 10}
              textAnchor="middle"
              fontSize="2.5"
              className="fill-secondary"
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
              className="stroke-accent"
              strokeWidth="0.2"
              markerEnd="url(#arrowhead-accent)"
              markerStart="url(#arrowhead-accent)"
            />
            <text
              x={(shoulderX + wristX) / 2}
              y={armCenterY + armWidth/2 + 16}
              textAnchor="middle"
              fontSize="2.5"
              className="fill-accent"
              fontWeight="500"
            >
              {shoulderToWrist} {units}
            </text>
          </>
        )}
        
        {/* Arrow markers */}
        <defs>
          <marker
            id="arrowhead-secondary"
            markerWidth="1.5"
            markerHeight="1"
            refX="0.75"
            refY="0.5"
            orient="auto"
          >
            <polygon points="0 0, 1.5 0.5, 0 1" className="fill-secondary" />
          </marker>
          <marker
            id="arrowhead-accent"
            markerWidth="1.5"
            markerHeight="1"
            refX="0.75"
            refY="0.5"
            orient="auto"
          >
            <polygon points="0 0, 1.5 0.5, 0 1" className="fill-accent" />
          </marker>
        </defs>
      </svg>
      
      <div className="mt-4 text-center text-xs text-base-content/60">
        The elbow position adjusts automatically based on your measurements
      </div>
    </div>
  )
}