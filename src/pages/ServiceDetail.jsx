import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import '../assets/styles/ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // 1. Color Map to keep design consistent with your Services Grid
  const colorMap = {
    'cross-development': '#00A82D',
    'android-development': '#3DDC84',
    'web-development': '#61DAFB',
    'desktop-software': '#6C7FFF',
    'ui-ux-design': '#F24E1E',
    'backend-dev': '#6DB33F',
    'full-stack-custom': '#00A82D'
  };

  // 2. Your provided data
  const serviceInfo = {
    'cross-development': {
      badge: 'ENTERPRISE SOLUTION',
      title: 'Premium Native Development',
      subtitle: 'High-performance native experiences for the Apple ecosystem.',
      overview: 'We don’t just build apps; we engineer premium digital experiences. Our iOS development process follows strict Apple App Store standards to ensure security, speed, and reliability.',
      features: ['Swift & SwiftUI Excellence', 'Apple Watch & TV Integration', 'In-App Purchase Systems', 'Biometric Security'],
      ctaTitle: 'Ready to start?',
      ctaText: 'Schedule a 15-minute discovery call with our technical lead.',
      ctaButton: 'Book a Meeting'
    },
    'android-development': {
      badge: 'MODERN APPLICATION SOLUTION',
      title: 'Premium Android Development',
      subtitle: 'Powerful Android applications built for speed and scalability.',
      overview: 'Our Android solutions are designed to deliver seamless user experience with modern UI and optimized performance across all Android devices.',
      features: ['Kotlin & Modern Android UI', 'Play Store Compliance', 'Performance Optimization', 'Secure Authentication'],
      ctaTitle: 'Ready to start?',
      ctaText: 'Discuss your Android app idea with our expert team.',
      ctaButton: 'Book a Meeting'
    },
    'web-development': {
      badge: 'ENTERPRISE SOLUTION',
      title: 'Premium Web Application Development',
      subtitle: 'Scalable and interactive web solutions for modern businesses.',
      overview: 'We create fast, secure, and visually rich web applications that work seamlessly across devices and browsers.',
      features: ['Responsive UI Design', 'High-Speed Performance', 'SEO Friendly Structure', 'Secure Web Architecture'],
      ctaTitle: 'Ready to start?',
      ctaText: 'Let’s build a powerful web solution for your business.',
      ctaButton: 'Book a Meeting'
    },
    'desktop-software': {
      badge: 'ENTERPRISE SOLUTION',
      title: 'Desktop Software Development',
      subtitle: 'Modern desktop applications for Windows and Mac.',
      overview: 'We develop secure and reliable desktop software with modern UI and enterprise-level performance.',
      features: ['Windows Compatibility', 'Offline Data Support', 'System Integration', 'Secure Local Storage'],
      ctaTitle: 'Ready to start?',
      ctaText: 'Build your custom desktop application with us.',
      ctaButton: 'Book a Meeting'
    },
    'ui-ux-design': {
      badge: 'DESIGN SOLUTION',
      title: 'UI / UX Design Services',
      subtitle: 'User-centered designs that convert and engage.',
      overview: 'Our design process focuses on usability, clarity, and visual harmony to ensure the best user experience.',
      features: ['Wireframes & Prototypes', 'Figma Design Systems', 'User Flow Optimization', 'Brand Consistency'],
      ctaTitle: 'Ready to start?',
      ctaText: 'Create a stunning user experience for your product.',
      ctaButton: 'Book a Meeting'
    },
    'backend-dev': {
      badge: 'ENTERPRISE SOLUTION',
      title: 'Backend Development',
      subtitle: 'Secure and scalable backend architecture.',
      overview: 'We engineer backend systems that power applications with speed, security, and reliability.',
      features: ['REST & Secure APIs', 'Authentication & Authorization', 'Database Optimization', 'Cloud Deployment'],
      ctaTitle: 'Ready to start?',
      ctaText: 'Build a strong backend foundation for your product.',
      ctaButton: 'Book a Meeting'
    },
    'full-stack-custom': {
      badge: 'CUSTOM SOLUTION',
      title: 'Custom Software Development',
      subtitle: 'Tailor-made digital solutions for your business.',
      overview: 'We design and build complete software systems customized to your business needs and workflows.',
      features: ['Frontend + Backend Integration', 'Business Process Automation', 'Scalable Architecture', 'Long-term Support'],
      ctaTitle: 'Ready to start?',
      ctaText: 'Let’s build a solution tailored for your business.',
      ctaButton: 'Start Your Project'
    }
  };

  // 3. Fallback logic
  const data = serviceInfo[serviceId] || serviceInfo['cross-development'];
  const themeColor = colorMap[serviceId] || '#00A82D';

  return (
    <div className="detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Back to Services
        </button>

        <div className="detail-hero">
          <div className="hero-text">
            {/* Dynamic Badge Background Color */}
            <span className="detail-tag" style={{ background: themeColor }}>
              {data.badge}
            </span>
            <h1 className="detail-title">{data.title}</h1>
            <p className="detail-tagline">{data.subtitle}</p>
          </div>
        </div>

        <div className="detail-grid">
          <div className="detail-main">
            <h3>Overview</h3>
            <p className="overview-text">{data.overview}</p>
            
            <div className="feature-list">
              {data.features.map((f, i) => (
                <div key={i} className="feature-item">
                  <FiCheckCircle style={{ color: themeColor }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-sidebar">
            <div className="cta-box">
              <h4>{data.ctaTitle}</h4>
              <p>{data.ctaText}</p>
              <button 
                className="sidebar-btn" 
                style={{ background: themeColor }}
                onClick={() => navigate('/processdealpage')} // Navigates to your form
              >
                {data.ctaButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;