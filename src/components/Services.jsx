import React from 'react';
import { FiMonitor, FiSmartphone, FiScissors } from 'react-icons/fi';
import { FaApple, FaWindows, FaChrome, FaFirefoxBrowser, FaSafari } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import '../assets/styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <FiMonitor />,
      title: 'Desktop',
      description: 'Get the power of Madhava on your desktop.',
      linkText: 'Release Notes',
      buttons: [
        { text: 'Download for Mac', icon: <FaApple /> },
        { text: 'Download for Windows', icon: <FaWindows /> }
      ],
      iconColor: '#6C7FFF'
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile',
      description: 'Stay organized and productive even on the go.',
      buttons: [
        { text: 'App Store', icon: <FaApple />, isBlack: true }, // Permanent Black
        { text: 'Google Play', icon: <IoLogoGooglePlaystore /> }
      ],
      iconColor: '#E084FF'
    },
    {
      icon: <FiScissors />,
      title: 'Web Clipper Extension',
      description: 'Clip what you see with a click.',
      browsers: [
        { name: 'Chrome', icon: <FaChrome /> },
        { name: 'Firefox', icon: <FaFirefoxBrowser /> },
        { name: 'Safari', icon: <FaSafari /> }
      ],
      iconColor: '#00A82D'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="services-title">Build something amazing with us</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-top" style={{ color: service.iconColor }}>
                {service.icon}
              </div>
              <h3 className="card-heading">{service.title}</h3>
              <p className="card-para">{service.description}</p>
              
              {service.linkText && (
                <div className="link-wrapper">
                  <a href="#portfolio" className="text-link">{service.linkText}</a>
                </div>
              )}

              {service.buttons && (
                <div className="button-stack">
                  {service.buttons.map((btn, bIdx) => (
                    <button 
                      key={bIdx} 
                      className={`action-btn ${btn.isBlack ? 'permanent-black' : 'hover-black'}`}
                    >
                      <span className="btn-logo">{btn.icon}</span>
                      {btn.text}
                    </button>
                  ))}
                </div>
              )}

              {service.browsers && (
                <div className="browser-row">
                  {service.browsers.map((br, rIdx) => (
                    <div key={rIdx} className="browser-item">
                      <span className="br-logo">{br.icon}</span>
                      <span className="br-name">{br.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;