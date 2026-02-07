import React from 'react';
import '../assets/styles/PrivacyPolicy.css'; // Reusing the same CSS file for consistency
import Footer from './Footer';

const TermsAndConditions = () => {
  const sections = [
    { id: 'definitions', title: '1. Definitions' },
    { id: 'intellectual-property', title: '2. Intellectual Property' },
    { id: 'permitted-use', title: '3. Permitted Use' },
    { id: 'disclaimer', title: '4. Disclaimer' },
    { id: 'liability', title: '5. Limitation of Liability' },
    { id: 'governing-law', title: '6. Governing Law' },
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
            <h1>Terms and Conditions</h1>
            <p className="effective-date">Last Updated: January 1, 2026</p>
          </header>

          <section className="intro-text">
            <p>
              By using the Madhava Global website, you agree to be bound by the following Terms of Use Agreement. Continued use of the website constitutes your acceptance of, and agreement to comply with, these Terms.
            </p>
          </section>

          <hr className="divider" />

          <section id="definitions">
            <h2>1. Definitions</h2>
            <p>For clarity throughout these Terms:</p>
            <ul>
              <li><strong>“Madhava Global,” “we,” “us,” or “our”</strong> refers to Madhava Global and its affiliates.</li>
              <li><strong>“You” or “your”</strong> refers to any user, visitor, or viewer of the website.</li>
              <li><strong>“Website”</strong> refers to the Madhava Global platform and all related content.</li>
            </ul>
          </section>

          <section id="intellectual-property">
            <h2>2. Intellectual Property Rights</h2>
            <p>
              All content on this website, including text, graphics, logos, and code, is the property of Madhava Global. 
              You may view and print Content for <strong>personal, non-commercial use only</strong>.
            </p>
            <p>You may <strong>not</strong> reproduce, modify, or exploit any Content for commercial purposes without prior written consent.</p>
          </section>

          <section id="permitted-use">
            <h2>3. Permitted Use</h2>
            <p>
              Your use of this website is limited strictly to lawful, personal purposes. 
              Any unauthorized use of the website or its Content may violate applicable laws and result in legal action.
            </p>
          </section>

          <section id="disclaimer">
            <h2>4. Disclaimer</h2>
            <p>
              The Madhava Global website is provided on an <strong>“AS IS”</strong> basis. 
              We make no warranties regarding the accuracy, completeness, or availability of the Site. 
              Your use of the website is at your own risk.
            </p>
          </section>

          <section id="liability">
            <h2>5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Madhava Global shall not be liable for any damages arising from your use of the website. 
              This includes direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          <section id="governing-law">
            <h2>6. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of <strong>India</strong>. 
              Any disputes shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>

          <section id="contact" style={{marginRight:'40px', backgroundColor:'#00000'}}>
            <h2>7. Contact Information</h2>
            <p>For questions regarding these Terms of Use, please contact us:</p>
            <div className="contact-details">
              <p><strong>Address:</strong> Behind Trimurti Lawn, Sai Nagar, Hingna, Nagpur, Maharashtra - 441110, India</p>
              <p style={{ marginTop: '10px' }}><strong>Email:</strong> hello@madhavaglobal.in</p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;