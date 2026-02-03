import React, { use } from 'react';
import '../assets/styles/DiscoveryCard.css'; // Shared CSS file
import DeployedImg  from '../assets/images/DeployedApplicationImg.png';
import { useNavigate } from 'react-router-dom';
const LaunchCard = () => {
 const navigate = useNavigate();
 const handleNavigate = () => {
  window.scrollTo(0, 0);
    navigate('/userform');
 }
  return (
    <div className="phase-card-container launch-phase">
      <div className="bg-sunburst"></div>

      <div className="phase-card-content">
        {/* Left Side: Delivery Assets */}
        <div className="image-section">
          <div className="main-image-wrapper">
            <img src={DeployedImg} alt="Launch Phase" className="main-image" />
            <div className="status-note green-note">
              <span className="check-icon"></span> Project Live & Deployed
            </div>
          </div>
          
          <div className="floating-doc launch-doc">
            <h3>Final Deployment</h3>
            <ul className="doc-list">
              <li><span>Approval</span> Client Confirmed</li>
              <li><span>Refined</span> Final Polishing</li>
              <li><span>Hosting</span> Live Environment</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="text-section">
          <span className="phase-tag launch-tag">Phase 4</span>
          <h2 className="phase-title">Preview, Feedback & Deployment</h2>
          
          <div className="phase-body">
            <p>We share the first complete preview of the project with the client. In this final stage, the client:</p>
            <ul className="requirement-list">
              <li>Reviews the full project thoroughly</li>
              <li>Provides constructive feedback</li>
              <li>Requests final refinements if needed</li>
            </ul>
            <p className="sub-text">After approval, we manage hosting and complete the live deployment.</p>
          </div>


          <div className="outcome-box">
            <p>A polished, client-approved solution successfully launched. This phase ensures 100% satisfaction before final delivery.</p>
          </div>

          
          <button className="cta-button" onClick={handleNavigate}>Next Phase</button>
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;