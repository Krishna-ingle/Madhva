import React from 'react';
import '../assets/styles/DiscoveryCard.css';
import discoveryImg from '../assets/images/DiscoverMeetingImg.png'; // Replace with your image path

const DiscoveryCard = ({onNext}) => {
  return (
    <div className="phase-card-container">
      {/* Decorative background shape */}
      <div className="bg-sunburst"></div>

      <div className="phase-card-content">
        {/* Left Side: Images and Note */}
        <div className="image-section">
          <div className="main-image-wrapper">
            <img src={discoveryImg} alt="Discovery Phase" className="main-image" />
            <div className="status-note">
              <span className="check-icon">✓</span> Project roadmap aligned
            </div>
          </div>
          <div className="floating-doc">
            <h3>Requirement Analysis</h3>
            <ul className="doc-list">
              <li><span >Business</span> goals & expectations</li>
              <li><span >Workflow</span> mapping</li>
              <li><span >Target</span> audience research</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="text-section">
          <span className="phase-tag">Phase 1</span>
          <h2 className="phase-title">Discovery & Requirement Analysis</h2>
          
          <div className="phase-body">
            <p>We begin by understanding your business, goals, and expectations in detail. Our team gathers all essential requirements such as:</p>
            <ul className="requirement-list">
              <li>Type of solution needed (website, app, or software)</li>
              <li>Target audience & Business workflow</li>
              <li>Design preferences & Functional needs</li>
            </ul>
          </div>

          <div className="outcome-box">
            <p>A clear project roadmap and aligned understanding. This phase ensures we build the right solution from day one.</p>
          </div>

          <button className="cta-button"  onClick={onNext}>Next Phase</button>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryCard;