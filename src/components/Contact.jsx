import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMessageCircle, FiArrowRight } from 'react-icons/fi';
import '../assets/styles/Contact.css';
import { style } from 'framer-motion/client';

const Contact = () => {
  const whatsappNumber = "919637393819";
  const emailAddress = "inglekrishna05@gmail.com";

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    details: ''
  });

  // NEW: State for Handling API Status
  const [alert, setAlert] = useState({ show: false, message: '', isSuccess: true });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showAlert = (message, isSuccess = true) => {
    setAlert({ show: true, message, isSuccess });
    setTimeout(() => setAlert({ show: false, message: '', isSuccess: true }), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      showAlert("Please enter a valid 10-digit mobile number.", false);
      return;
    }

    setIsSubmitting(true);

    // Mapping fields to the API format provided by your friend
    const apiPayload = {
      name: formData.fullName, // Mapping fullName to name
      email: formData.email,
      mobile: formData.mobile,
      projectType: "General Inquiry", // Default for this form
      businessTraffic: "N/A",
      city: "N/A",
      screens: "N/A",
      softwareConversion: "N/A",
      timeline: "N/A",
      referenceDetails: formData.details // Mapping details to referenceDetails
    };

    try {
      const response = await fetch('https://madhavaglobal.onrender.com/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiPayload),
      });

      const result = await response.json();

      if (result.success) {
        showAlert("Thank you! Your inquiry has been received.");
        setFormData({ fullName: '', email: '', mobile: '', details: '' });
      } else {
        showAlert(result.message || "Something went wrong.", false);
      }
    } catch (error) {
      // Check for the CORS issue we discussed earlier
      if (error.message === "Failed to fetch") {
        showAlert("Network error or CORS block. Please check backend settings.", false);
      } else {
        showAlert("Failed to send request. Try again later.", false);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-evernote">
      {/* CUSTOM NOTIFICATION MODAL */}
      {alert.show && (
        <div className={`custom-alert ${alert.isSuccess ? 'success' : 'error'}`}>
          <div className="alert-content">
            <span className={alert.isSuccess ? 'icon-success' : 'icon-error'}>
              {alert.isSuccess ? '✔' : '✖'}
            </span>
            <p>{alert.message}</p>
          </div>
        </div>
      )}

      <div className="contact-container">
        <div className="contact-header-modern">
          <h2 className="modern-h2">Let’s build something great</h2>
          <p className="modern-p">Choose the most convenient way to reach us.</p>
        </div>

        <div className="quick-actions-container">
          <motion.a
            href={`https://wa.me/${whatsappNumber}?text= Hi Madhava Global, I'm interested, Can you please share the further project details.`}
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
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Project Inquiry&body=Hi Madhava Global, I'm interested in a project. Please share further details.`}
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

            <button
              type="submit"
              className="evernote-btn"
              disabled={isSubmitting}
              style={{ backgroundColor: isSubmitting ? '#94a3b8' : '' }}
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
            </button>




            {/* <button
              type="button"
              onClick={() => showAlert("Testing Success Message", false)}
              style={{ marginTop: '20px', padding: '10px', background: '#ccc' }}
            >
              Test Notification
            </button> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;