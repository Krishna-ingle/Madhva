import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMessageCircle, FiArrowRight } from 'react-icons/fi';
import '../assets/styles/Contact.css';

const Contact = () => {
  const whatsappNumber = "919579465525"; 
  const emailAddress = "inglekrishna05@gmail.com";

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    console.log("Form Submitted Successfully:", formData);
    alert("Thank you! Your request has been sent to Madhava Studios.");
    setFormData({ fullName: '', email: '', mobile: '', details: '' });
  };

  return (
    <section id="contact" className="contact-evernote">
      {/* Changed class to contact-container to prevent footer interference */}
      <div className="contact-container"> 
        <div className="contact-header-modern">
          <h2 className="modern-h2">Let’s build something great</h2>
          <p className="modern-p">Choose the most convenient way to reach us.</p>
        </div>

        <div className="quick-actions-container">
          <motion.a 
            href={`https://wa.me/${whatsappNumber}?text=Hi Madhava Global, I'm interested in a project!`}
            target="_blank"
            rel="noopener noreferrer"
            className="action-card whatsapp"
            whileHover={{ y: -2 }}
          >
            <div className="action-left">
               <FiMessageCircle className="action-icon" />
               <span>Chat on WhatsApp</span>
            </div>
            <FiArrowRight />
          </motion.a>

          <motion.a 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Project Inquiry&body=Hi Madhava Global,`}
            className="action-card email"
            whileHover={{ y: -2 }}
          >
            <div className="action-left">
              <FiMail className="action-icon" />
              <span>Send an Email</span>
            </div>
            <FiArrowRight />
          </motion.a>
        </div>

        <div className="contact-form-wrapper">
          <h3 className="form-sub-title">Or send a detailed brief</h3>
          
          <form className="evernote-form" onSubmit={handleSubmit}>
            <div className="form-group-modern">
              <label>Full Name <span className="black-star">*</span></label>
              <input 
                type="text" 
                name="fullName"
                placeholder="Your Name" 
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group-modern">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email"
                placeholder="Your Email Address" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group-modern">
              <label>Mobile Number <span className="black-star">*</span></label>
              <input 
                type="tel" 
                name="mobile"
                placeholder="Mobile Number" 
                value={formData.mobile}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group-modern">
              <label>Project Details <span className="black-star">*</span></label>
              <textarea 
                name="details"
                rows="4" 
                placeholder="Briefly describe your goals..."
                value={formData.details}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="evernote-btn">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;