import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMessageCircle, FiArrowRight } from 'react-icons/fi';
import '../assets/styles/Contact.css';

const Contact = () => {
  // Replace with your actual WhatsApp number (include country code)
  const whatsappNumber = "919876543210"; 
  const emailAddress = "hello@madhavastudios.com";

  return (
    <section id="contact" className="contact-evernote">
      <div className="container">
        <div className="contact-header-modern">
          <h2 className="modern-h2">Let’s build something great</h2>
          <p className="modern-p">Choose the most convenient way to reach us.</p>
        </div>

        {/* UX Improvement: Quick Action Buttons */}
        <div className="quick-actions-container">
          <motion.a 
            href={`https://wa.me/${whatsappNumber}?text=Hi Madhava Studios, I'm interested in a project!`}
            target="_blank"
            rel="noopener noreferrer"
            className="action-card whatsapp"
            whileHover={{ y: -5 }}
          >
            <FiMessageCircle className="action-icon" />
            <span>Chat on WhatsApp</span>
            <FiArrowRight />
          </motion.a>

          <motion.a 
            href={`mailto:${emailAddress}`}
            className="action-card email"
            whileHover={{ y: -5 }}
          >
            <FiMail className="action-icon" />
            <span>Send an Email</span>
            <FiArrowRight />
          </motion.a>
        </div>

        {/* Standard Form for Detailed Project Specs */}
        <div className="contact-form-wrapper">
          <h3 className="form-sub-title">Or send a detailed brief</h3>
          <form className="evernote-form">
            <div className="form-group-modern">
              <label>Full Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group-modern">
              <label>Project Details</label>
              <textarea rows="4" placeholder="Briefly describe your goals..."></textarea>
            </div>
            <button className="evernote-btn">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;