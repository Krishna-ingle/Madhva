import React from 'react';
import '../assets/styles/Hero.css';

const Hero = () => {
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
            <button className="btn-primary">Just 1 Minute</button>
            <p className="hero-login">
              One minute to share your needs. A smarter solution for your business
              {/* <a href="#login">Log in</a> */}
            </p>
          </div>
        </div>

         <div className="hero-video">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="hero-video-player"
          >
            <source src="/videos/Animation1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>


        <h1 class="margin">hiiii</h1>
        <div className="hero-video2">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="hero-video-player"
          >
            <source src="/videos/Animation2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;