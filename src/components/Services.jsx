import React from 'react';
import { FiMonitor, FiSmartphone, FiCode, } from 'react-icons/fi';
import '../assets/styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <FiMonitor />,
      title: 'Desktop',
      description: 'Get the power of Madhava on your desktop.',
      link: 'Release Notes',
      buttons: [
        { text: 'Download for Mac', icon: '🍎' },
        { text: 'Download for Windows', icon: '🪟' }
      ],
      iconColor: '#6C7FFF'
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile',
      description: 'Stay organized and productive even on the go.',
      buttons: [
        { text: 'App Store', icon: '🍎' },
        { text: 'Google Play', icon: '▶️' }
      ],
      iconColor: '#E084FF'
    },
    {
      icon: <FiCode />,
      title: 'Web Clipper Extension',
      description: 'Clip what you see with a click.',
      browsers: [
        { name: 'Chrome', icon: '🌐' },
        { name: 'Firefox', icon: '🦊' },
        { name: 'Safari', icon: '🧭' }
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
              <div className="service-icon" style={{ color: service.iconColor }}>
                {service.icon}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              {service.link && (
                <a href="#" className="service-link">{service.link}</a>
              )}

              {service.buttons && (
                <div className="service-buttons">
                  {service.buttons.map((button, btnIndex) => (
                    <button key={btnIndex} className="service-button">
                      <span className="button-icon">{button.icon}</span>
                      {button.text}
                    </button>
                  ))}
                </div>
              )}

              {service.browsers && (
                <div className="service-browsers">
                  {service.browsers.map((browser, brIndex) => (
                    <button key={brIndex} className="browser-button">
                      <span className="browser-icon">{browser.icon}</span>
                      <span>{browser.name}</span>
                    </button>
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