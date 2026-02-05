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
          justify-content: flex-start; /* Keeps it aligned to your left-side preference */
        }

        .status-container {
          width: 100%;
          max-width: 550px; 
          font-family: sans-serif;
          background: #fff;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          box-sizing: border-box; /* Ensures padding doesn't break width */
        }

        .status-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          gap: 10px;
        }

        .status-header h2 {
          margin: 0;
          font-size: clamp(1rem, 4vw, 1.2rem); /* Responsive font size */
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
          margin: 40px 0 15px 0; /* Extra top margin for the pulse ring */
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

        .dots-container {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          z-index: 10;
          pointer-events: none;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: #22c55e;
          border-radius: 50%;
          border: 2px solid #22c55e;
          box-sizing: border-box;
          transition: background 0.4s ease;
        }

        .dot.active {
          background: #22c55e;
          border-color: #22c55e;
        }

        .dot-current {
          position: relative;
        }

        .dot-current::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #22c55e;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: ping 1.5s infinite;
          background: rgba(105, 218, 92, 0.2);
        }

        @keyframes ping {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
        }

        .labels-row {
          display: flex;
          justify-content: space-between;
          color: #9ca3af;
          font-weight: bold;
          font-size: clamp(0.55rem, 2.5vw, 0.7rem); /* Shrinks on small screens */
          text-transform: uppercase;
          letter-spacing: 0.05em;
          gap: 4px;
        }

        .label-active {
          color: #111;
          transition: color 0.4s ease;
        }

        /* Responsive Fix for Mobile */
        @media (max-width: 480px) {
          .status-container {
            padding: 16px;
          }
          .progress-wrapper {
            margin-top: 30px;
          }
          .labels-row {
            letter-spacing: 0; /* More space for text */
          }
        }
      `}</style>

      <div className="status-container">
        <div className="status-header">
          <h2>Our Work in Progress</h2>
          <span className="phase-badge">{steps[adjustedStep]}</span>
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

          <div className="dots-container">
            {steps.map((_, index) => {
              const isFilled = index < adjustedStep || (index === adjustedStep && isAnimationFinished);
              const showPulse = index === adjustedStep && isAnimationFinished;

              return (
                <div 
                  key={index} 
                  className={`dot ${isFilled ? 'active' : ''} ${showPulse ? 'dot-current' : ''}`}
                />
              );
            })}
          </div>
        </div>

        <div className="labels-row">
          {steps.map((step, index) => {
             const isLabelActive = index < adjustedStep || (index === adjustedStep && isAnimationFinished);
             return (
              <span key={index} className={isLabelActive ? 'label-active' : ''}>
                {step}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;