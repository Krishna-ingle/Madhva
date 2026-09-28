import React from 'react';

export default function NetBillLogo({
  logoWidth = '100%',
  maxWidth = '500px',
  activeColor = '#000000', // Black for completed text and ball
  baseColor = '#B8B8B8',   // Light gray for unwritten text
  ballSize = 5.5,          // 11px diameter
  animationSpeed = '10s',   // 7 second total loop duration
}) {
  // The invisible master path dictates the exact X/Y coordinates of the moving ball.
  const masterPath = `
    M 25 80 L 25 25 L 65 80 L 65 25 
    Q 72 40 80 60 
    L 110 60 C 110 40 80 40 80 60 C 80 85 110 85 115 75 
    Q 122 55 130 35 
    L 130 80 Q 125 60 120 48 L 140 48 
    Q 147 35 155 25 
    L 155 80 Q 140 50 155 25 C 180 25 180 52 155 52 C 180 52 180 80 155 80 
    Q 175 60 195 48 
    L 195 80 Q 205 55 190 30 L 200 30 
    Q 195 25 215 25 
    L 215 80 
    Q 225 50 235 25 
    L 235 80
  `;

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-white overflow-hidden">
      <svg
        viewBox="0 0 260 110"
        width={logoWidth}
        style={{ maxWidth }}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ============================== */}
        {/* 1. Base Layer (Light Gray)       */}
        {/* ============================== */}
        <g 
          stroke={baseColor} 
          strokeWidth="11.5" 
          fill="none" 
          strokeLinecap="butt" 
          strokeLinejoin="round"
        >
          <path d="M 25 80 L 25 25 L 65 80 L 65 25" />
          <path d="M 80 60 L 110 60 C 110 40 80 40 80 60 C 80 85 110 85 115 75" />
          <path d="M 130 35 L 130 80 M 120 48 L 140 48" />
          <path d="M 155 25 L 155 80 M 155 25 C 180 25 180 52 155 52 C 180 52 180 80 155 80" />
          <path d="M 195 48 L 195 80 M 190 30 L 200 30" />
          <path d="M 215 25 L 215 80" />
          <path d="M 235 25 L 235 80" />
        </g>

        {/* ============================== */}
        {/* 2. Active Layer (Black Fills)  */}
        {/* ============================== */}
        <g 
          stroke={activeColor} 
          strokeWidth="11.5" 
          fill="none" 
          strokeLinecap="butt" 
          strokeLinejoin="round"
          opacity="0"
        >
          {/* Universal fade-out reset for all black letters at the end of the loop */}
          <animate attributeName="opacity" values="0; 1; 1; 0; 0" keyTimes="0; 0.001; 0.95; 0.96; 1" dur={animationSpeed} repeatCount="indefinite" />

          {/* N */}
          <path pathLength="100" strokeDasharray="100" strokeDashoffset="100" d="M 25 80 L 25 25 L 65 80 L 65 25">
            <animate attributeName="stroke-dashoffset" values="100; 100; 0; 0; 100" keyTimes="0; 0.001; 0.146; 0.95; 1" dur={animationSpeed} repeatCount="indefinite" />
          </path>
          
          {/* e */}
          <path pathLength="100" strokeDasharray="100" strokeDashoffset="100" d="M 80 60 L 110 60 C 110 40 80 40 80 60 C 80 85 110 85 115 75">
            <animate attributeName="stroke-dashoffset" values="100; 100; 0; 0; 100" keyTimes="0; 0.177; 0.281; 0.95; 1" dur={animationSpeed} repeatCount="indefinite" />
          </path>

          {/* t */}
          <path pathLength="100" strokeDasharray="100" strokeDashoffset="100" d="M 130 35 L 130 80 M 120 48 L 140 48">
            <animate attributeName="stroke-dashoffset" values="100; 100; 31; 31; 0; 0; 100" keyTimes="0; 0.316; 0.353; 0.381; 0.397; 0.95; 1" dur={animationSpeed} repeatCount="indefinite" />
          </path>

          {/* B */}
          <path pathLength="100" strokeDasharray="100" strokeDashoffset="100" d="M 155 25 L 155 80 M 155 25 C 180 25 180 52 155 52 C 180 52 180 80 155 80">
            <animate attributeName="stroke-dashoffset" values="100; 100; 62; 62; 0; 0; 100" keyTimes="0; 0.419; 0.464; 0.511; 0.585; 0.95; 1" dur={animationSpeed} repeatCount="indefinite" />
          </path>

          {/* i */}
          <path pathLength="100" strokeDasharray="100" strokeDashoffset="100" d="M 195 48 L 195 80 M 190 30 L 200 30">
            <animate attributeName="stroke-dashoffset" values="100; 100; 24; 24; 0; 0; 100" keyTimes="0; 0.627; 0.653; 0.695; 0.700; 0.95; 1" dur={animationSpeed} repeatCount="indefinite" />
          </path>

          {/* l 1 */}
          <path pathLength="100" strokeDasharray="100" strokeDashoffset="100" d="M 215 25 L 215 80">
            <animate attributeName="stroke-dashoffset" values="100; 100; 0; 0; 100" keyTimes="0; 0.711; 0.756; 0.95; 1" dur={animationSpeed} repeatCount="indefinite" />
          </path>

          {/* l 2 */}
          <path pathLength="100" strokeDasharray="100" strokeDashoffset="100" d="M 235 25 L 235 80">
            <animate attributeName="stroke-dashoffset" values="100; 100; 0; 0; 100" keyTimes="0; 0.804; 0.849; 0.95; 1" dur={animationSpeed} repeatCount="indefinite" />
          </path>
        </g>

        {/* ============================== */}
        {/* 3. The Tracing Ball            */}
        {/* ============================== */}
        <circle r={ballSize} fill={activeColor} opacity="0">
          <animateMotion
            dur={animationSpeed}
            repeatCount="indefinite"
            path={masterPath}
            keyPoints="0; 1; 1"
            keyTimes="0; 0.85; 1"
            calcMode="linear"
          />
          <animate
            attributeName="opacity"
            values="0; 1; 1; 0; 0"
            keyTimes="0; 0.001; 0.85; 0.86; 1"
            dur={animationSpeed}
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}