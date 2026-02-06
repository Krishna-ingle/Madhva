import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectStatus = ({ currentStep }) => {
  const steps = ['Discovery', 'Design', 'Development', 'Deployment'];
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  const adjustedStep = currentStep - 1;
  const totalSegments = steps.length - 1;
  const progressPercentage = (adjustedStep / totalSegments) * 100;

  return (
    <div className="status-outer-wrapper">
      <style>{`
        .status-outer-wrapper {
          width: 100%;
          display: flex;
          justify-content: flex-start;
        }

        .status-container {
          width: 100%;
          max-width: 650px; 
          font-family: sans-serif;
          padding: 0px 50px;
        }

        .status-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 30px;
          gap: 40px;
        }

        .status-header h2 {
          margin: 0;
          font-size: clamp(1rem, 4vw, 1.2rem);
          color: #111;
        }

        .phase-badge {
          background: #f0fdf4;
          color: #16a34a;
          padding: 4px 12px;
          border-radius: 8px;
          font-weight: bold;
          font-size: 0.75rem;
          border: 1px solid #dcfce7;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .progress-wrapper {
          position: relative;
          width: 100%;
          height: 6px;
          background: #f3f4f6;
          border-radius: 10px;
          margin: 40px 0 45px 0; /* Increased bottom margin for labels */
        }

        .progress-fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: #22c55e;
          border-radius: 10px;
          z-index: 1;
        }

        .progress-fill::after {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* --- DOTS AND LABELS CONTAINER --- */
        .step-markers-container {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          transform: translateY(-50%);
          z-index: 10;
        }

        .step-marker {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 0; /* Anchor point */
          pointer-events: none;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: #f3f4f6;
          border-radius: 50%;
          border: 2px solid #e5e7eb;
          box-sizing: border-box;
          transition: background 0.4s ease, border-color 0.4s ease;
        }

        .dot.active {
          background: #22c55e;
          border-color: #22c55e;
        }

        .dot-current::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #22c55e;
          border-radius: 50%;
          animation: ping 1.5s infinite;
          background: rgba(105, 218, 92, 0.2);
          margin-top: -6px;
          margin-left: -6px;
        }

        @keyframes ping {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        /* --- LABEL ALIGNMENT FIX --- */
        .step-label {
          position: absolute;
          top: 25px; /* Distance below the dot */
          white-space: nowrap;
          text-align: center;
          color: #0f0f0f;
          font-weight: bold;
          font-size: clamp(0.6rem, 2.5vw, 0.75rem);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          transition: color 0.4s ease;
        }

        .label-active {
          color: #111;
        }

        @media (max-width: 480px) {
          .status-container { padding: 16px; }
          .progress-wrapper { margin-top: 30px; }
        }
      `}</style>

      <div className="status-container">
        <div className="status-header">
          <h2>Work in Progress</h2>
          {/* <span className="phase-badge">{steps[adjustedStep]}</span> */}
        </div>

        <div className="progress-wrapper">
          <motion.div 
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            onAnimationComplete={() => setIsAnimationFinished(true)}
            transition={{ 
              delay: 1.3, 
              duration: 2.5, 
              ease: "easeInOut" 
            }}
          />

          <div className="step-markers-container">
            {steps.map((step, index) => {
              const isFilled = index < adjustedStep || (index === adjustedStep && isAnimationFinished);
              const showPulse = index === adjustedStep && isAnimationFinished;
              const leftPosition = `${(index / totalSegments) * 100}%`;

              return (
                <div key={index} className="step-marker" style={{ left: leftPosition }}>
                  {/* The Dot */}
                 
                  <div className={`dot ${isFilled ? 'active' : ''} ${showPulse ? 'dot-current' : ''}`} />
                  
                  {/* The Label anchored to the dot center */}
                  <span className={`step-label ${isFilled ? 'label-active' : ''}`}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;