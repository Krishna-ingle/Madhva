import React from 'react';
import '../assets/styles/DiscoveryCard.css'; // Shared CSS file
import designImg from '../assets/images/DesignCardimg.jpg';

const DesignCard = ({onNext}) => {

  return (
    <div className="phase-card-container design-phase">
      <div className="bg-sunburst"></div>

      <div className="phase-card-content">
        {/* Left Side: Visual Assets */}
        <div className="image-section">
          <div className="main-image-wrapper">
            <img src={designImg} alt="Design Phase" className="main-image" />
            <div className="status-note blue-note">
              <span className="check-icon">✓</span> Design Direction Confirmed
            </div>
          </div>
          
          <div className="floating-doc design-doc">
            <h3>Style Selection</h3>
            <ul className="doc-list">
              <li><span >Primary</span> Brand Colors</li>
              <li><span >Layout</span> Grid Approved</li>
              <li><span >Custom</span> UI Elements</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="text-section">
          <span className="phase-tag design-tag">Phase 2</span>
          <h2 className="phase-title">Design Selection & Customization</h2>
          
          <div className="phase-body">
            <p>Based on the gathered requirements, we present carefully selected design templates and layout options. In this phase, the client:</p>
            <ul className="requirement-list">
              <li>Reviews available design directions</li>
              <li>Selects the most suitable layout</li>
              <li>Confirms required customizations</li>
              <li>Approves branding, colors, and structure</li>
            </ul>
          </div>

          <div className="outcome-box">
            <p>A finalized design direction with confirmed customization requirements. This phase ensures visual clarity before development begins.</p>
          </div>

        <button className="cta-button" onClick={onNext}>Next Phase</button>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;