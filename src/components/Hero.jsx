import React from 'react';
import '../assets/styles/Hero.css';
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    navigate('/userform');
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Crafting Digital Solution
          </h1>

          <p className="hero-description">
            Run your operations and grow your business with simple, powerful digital solutions in one place
          </p>

          <div className="hero-cta">
            <button className="btn-primary"
              onClick={handleNavigation}
            >Just 1 Minute</button>
            <p className="hero-login">
              One minute to share your needs. A smarter solution for your business
              {/* <a href="#login">Log in</a> */}
            </p>
          </div>
        </div>

        {/* Video Container 1 */}
        <div
          className="hero-video"
          onClick={() => {
            navigate('/project/smart-store');
            window.scrollTo(0, 0);
          }}
          style={{ cursor: 'pointer' }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video-player"
          >
            <source src="/videos/animationSmartStore1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h1 className="margin">hiiii</h1> {/* Changed 'class' to 'className' */}

        {/* Video Container 2 */}
        <div
          className="hero-video2"
          onClick={() => {
            navigate('/project/smart-store');
            window.scrollTo(0, 0);
          }}
          style={{ cursor: 'pointer' }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video-player"
          >
            <source src="/videos/animationSmartStore2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;