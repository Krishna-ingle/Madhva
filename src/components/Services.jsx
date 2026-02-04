import React from 'react';
import { FiMonitor, FiSmartphone, FiGlobe, FiLayers, FiSettings, FiPackage, FiCpu } from 'react-icons/fi';
import { FaApple, FaChrome, FaFigma, FaRocket } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import '../assets/styles/Services.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'cross-development',
      icon: <FiSmartphone />,
      title: 'Mobile Application Native',
      description: 'Build cross-platform mobile apps with smooth performance and a single codebase for Android and iOS.',
      buttons: [
        { text: 'App Store', icon: <FaApple /> },
        { text: 'Google Play', icon: <IoLogoGooglePlaystore /> }
      ],
      iconColor: '#00A82D'
    },
    {
      id: 'android-development',
      icon: <FiSmartphone />,
      title: 'Mobile Application Android',
      description: 'Develop fast and reliable Android apps using modern design and native performance.',
      buttons: [
        { text: 'Android Portfolio', icon: <FaRocket /> },
        { text: 'Play Store Apps', icon: <IoLogoGooglePlaystore /> }
      ],
      iconColor: '#3DDC84'
    },
    {
      id: 'web-development',
      icon: <FiGlobe />,
      title: 'Web Application',
      description: 'Create responsive and interactive web apps with clean UI and scalable architecture.',
      browsers: [
        { name: 'Live Preview', icon: <BsFillLightningChargeFill /> },
        { name: 'Web Portfolio', icon: <FaChrome /> }
      ],
      iconColor: '#61DAFB'
    },
    {
      id: 'desktop-software',
      icon: <FiMonitor />,
      title: 'Desktop Software',
      description: 'Build secure and powerful desktop applications for Windows and Mac with modern interfaces.',
      buttons: [
        { text: 'View Desktop Apps', icon: <FiMonitor /> },
        { text: 'Request Demo', icon: <FiPackage /> }
      ],
      iconColor: '#6C7FFF'
    },
    {
      id: 'ui-ux-design',
      icon: <FiLayers />,
      title: 'UI / UX Design',
      description: 'Design user-friendly and visually appealing interfaces focused on usability and experience.',
      buttons: [
        { text: 'Design Portfolio', icon: <FaFigma /> },
        { text: 'UI Case Studies', icon: <FiLayers /> }
      ],
      iconColor: '#F24E1E'
    },
    {
      id: 'backend-dev',
      icon: <FiSettings />,
      title: 'Backend Development',
      description: 'Develop secure and scalable backend systems with APIs, authentication, and database integration.',
      buttons: [
        { text: 'Backend Projects', icon: <FiCpu /> },
        { text: 'API Samples', icon: <FiSettings /> }
      ],
      iconColor: '#6DB33F'
    },
    {
      id: 'full-stack-custom',
      icon: <FiPackage />,
      title: 'Custom Software',
      description: 'Create custom software solutions using React, Spring Boot, and MongoDB tailored to business needs.',
      buttons: [
        { text: 'Get Quote', icon: <MdCall /> },
        { text: 'Start Project', icon: <BsFillLightningChargeFill />, isBlack: true }
      ],
      iconColor: '#00A82D'
    }
  ];

  const handleCardClick = (id) => {
    window.scrollTo(0, 0);
    
    if (id === 'full-stack-custom') {
      navigate('/userform'); 
    } else {
      navigate(`/services/${id}`);
    }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Build something amazing with us</h2>
          <p className="services-subtitle">Enterprise-grade solutions tailored to your growth.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${service.id === 'full-stack-custom' ? 'highlight-card' : ''}`}
              onClick={() => handleCardClick(service.id)} 
              style={{ cursor: 'pointer' }}
            >
              <div className="service-icon-top" style={{ color: service.iconColor }}>
                {service.icon}
              </div>
              <h3 className="card-heading">{service.title}</h3>
              <p className="card-para">{service.description}</p>

              {service.buttons && (
                <div className="button-stack">
                  {service.buttons.map((btn, bIdx) => (
                    <button
                      key={bIdx}
                      className={`action-btn ${btn.isBlack ? 'permanent-black' : 'hover-black'}`}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents double navigation
                        handleCardClick(service.id);
                      }}
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