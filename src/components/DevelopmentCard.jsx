import React from 'react';
import '../assets/styles/DiscoveryCard.css'; // Shared CSS file
import devImg from "../assets/images/DevelopmentcardImg.png"
const DevelopmentCard = ({onNext}) => {

  return (
    <div className="phase-card-container dev-phase">
      <div className="bg-sunburst"></div>

      <div className="phase-card-content">
        {/* Left Side: Technical Assets */}
        <div className="image-section">
          <div className="main-image-wrapper">
            <img src={devImg} alt="Development Phase" className="main-image" />
            <div className="status-note purple-note">
              <span className="check-icon">✓</span> 100% Functional Accuracy
            </div>
          </div>
          
          <div className="floating-doc dev-doc">
            <h3>Precision Engineering</h3>
            <ul className="doc-list">
              <li><span>Clean</span> Scalable Code</li>
              <li><span >Optimized</span> Performance</li>
              <li><span >Secure</span> Data Handling</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="text-section">
          <span className="phase-tag dev-tag">Phase 3</span>
          <h2 className="phase-title">Development & Precision Engineering</h2>
          
          <div className="phase-body">
            <p>Our development team crafts the complete solution using industry-standard practices. In this phase, we focus on:</p>
            <ul className="requirement-list">
              <li>Clean and scalable code</li>
              <li>Performance optimization</li>
              <li>Data security & Functional accuracy</li>
              <li>Cross-device compatibility</li>
            </ul>
          </div>

          <div className="outcome-box">
            <p>A fully functional project built with precision and technical excellence. This phase transforms the approved design into a working product.</p>
          </div>

          
          <button className="cta-button" onClick={onNext}>Next Phase</button>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentCard;