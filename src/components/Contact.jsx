import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMessageCircle, FiArrowRight } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import '../assets/styles/Contact.css';

// ── EmailJS / Web3Forms config ───────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = 'a41a1a0d-ca8d-487b-8809-0682d60c503f'; // TODO: confirm/replace
const EMAILJS_SERVICE_ID = 'service_0rpkocm';
const EMAILJS_TEMPLATE_ID = 'template_bwebe79'; // TODO: new template ID
const EMAILJS_PUBLIC_KEY = 'PloJ6Ao8Pyr65PBks';

const Contact = () => {
  const whatsappNumber = "919637393819";
  const emailAddress = "hello@madhvaglobal.in";

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    details: ''
  });

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

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      showAlert("Please enter a valid 10-digit mobile number.", false);
      return;
    }

    setIsSubmitting(true);

    try {
      // 1) Send the lead via Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Madhava Global contact inquiry',
          from_name: 'Madhava Global Website',
          name: formData.fullName || 'Not provided',
          email: formData.email || 'Not provided',
          mobile: formData.mobile || 'Not provided',
          projectType: 'General Inquiry',
          businessTraffic: 'N/A',
          city: 'N/A',
          screens: 'N/A',
          softwareConversion: 'N/A',
          timeline: 'N/A',
          referenceDetails: formData.details || 'Not provided',
        }),
      });

      const result = await response.json();

      if (result.success) {
        // 2) Ack mail — only if they gave an email
        if (formData.email.trim()) {
          try {
            await emailjs.send(
              EMAILJS_SERVICE_ID,
              EMAILJS_TEMPLATE_ID,
              { name: formData.fullName || 'there', email: formData.email },
              { publicKey: EMAILJS_PUBLIC_KEY }
            );
          } catch (ackErr) {
            console.error('Ack email failed:', ackErr);
          }
        }

        showAlert("Thanks! Madhava Global team will contact you shortly.");
        setFormData({ fullName: '', email: '', mobile: '', details: '' });
      } else {
        showAlert(result.message || "Something went wrong.", false);
      }
    } catch (error) {
      showAlert("Network error. Please check your connection.", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-evernote">
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

            {/* CUSTOM INLINE ALERT ADDED HERE */}
            {alert.show && (
              <div className="flex justify-center mb-4">
                <div
                  className={`flex items-center border rounded-md px-5 py-3 w-full max-w-[420px] ${
                    alert.isSuccess 
                      ? 'bg-[#E8F6EE] border-[#129457]' 
                      : 'bg-red-50 border-red-500'
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      alert.isSuccess ? 'text-[#0d6b3e]' : 'text-red-700'
                    }`}
                  >
                    {alert.message}
                  </span>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="evernote-btn"
              disabled={isSubmitting}
              style={{ backgroundColor: isSubmitting ? '#94a3b8' : '' }}
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
