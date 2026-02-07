import React from 'react';
import '../assets/styles/PrivacyPolicy.css';
import Footer from './Footer';

const PrivacyPolicy = () => {
  const sections = [
    { id: 'info-collect', title: '1. Information We Collect' },
    { id: 'use-info', title: '2. How We Use Information' },
    { id: 'cookies', title: '3. Cookies & Tracking' },
    { id: 'sharing', title: '4. Sharing of Information' },
    { id: 'security', title: '5. Data Security' },
    { id: 'rights', title: '6. Your Rights' },
    { id: 'contact', title: '7. Contact Us' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="privacy-page-wrapper">
      <div className="privacy-container">
        <aside className="privacy-sidebar">
          <h4>Content</h4>
          <ul>
            {sections.map((section) => (
              <li key={section.id} onClick={() => scrollToSection(section.id)}>
                {section.title}
              </li>
            ))}
          </ul>
        </aside>

        <main className="privacy-content">
          <header className="privacy-header">
            <h1>Privacy Policy</h1>
            <p className="effective-date">Effective Date: January 1, 2026</p>
          </header>

          <section className="intro-text">
            <p>
              Madhava Global (“<strong>Madhava Global</strong>,” “<strong>we</strong>,” “<strong>us</strong>,” or “<strong>our</strong>”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
            </p>
          </section>

          <hr className="divider" />

          <section id="info-collect">
            <h2>1. Information We Collect</h2>
            <h3>a. Personal Information</h3>
            <p>Information that you voluntarily provide, including but not limited to:</p>
            <ul>
              <li>Name, Email address, and Phone number</li>
              <li>Company or organization name and Job title</li>
              <li>Details submitted through contact forms or project inquiries</li>
            </ul>
            <h3>b. Non-Personal Information</h3>
            <p>Automatically collected information such as IP addresses, browser types, and referring URLs to improve user experience.</p>
          </section>

          <section id="use-info">
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for purposes including:</p>
            <ul>
              <li>Responding to project inquiries</li>
              <li>Improving website content and security</li>
              <li>Analyzing user behavior to enhance our digital solutions</li>
            </ul>
          </section>

          <section id="cookies">
            <h2>3. Cookies and Tracking Technologies</h2>
            <p>Our website uses cookies to understand user preferences and track performance. You can disable cookies in your browser, but some features may not function properly.</p>
          </section>

          <section id="sharing">
            <h2>4. Sharing of Information</h2>
            <p>Madhava Global does <strong>not sell or rent</strong> your personal information. We only share data with trusted service providers or when required by legal process.</p>
          </section>

          <section id="security">
            <h2>5. Data Security</h2>
            <p>We implement technical and physical security measures to protect your data. However, no method of internet transmission is 100% secure.</p>
          </section>

          <section id="rights">
            <h2>6. Your Rights and Choices</h2>
            <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact our data team.</p>
          </section>

          <section id="contact" className="contact-box">
            <h2>7. Contact Information</h2>
            <p>If you have questions regarding this policy:</p>
            <div className="contact-details">
              <p><strong>Madhava Global</strong></p>
              <p>Shegaon, Maharashtra, India</p>
              <p>contact@madhavaglobal.com</p>
            </div>
          </section>
        </main>
      </div>
      
        <Footer />
    </div>
  );
};

export default PrivacyPolicy;