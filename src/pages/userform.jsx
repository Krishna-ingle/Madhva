import React, { useState } from 'react';
import '../assets/styles/UserformPage.css';

const UserFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    projectType: '',
    traffic: '0-50 visitors', // Default matches API example
    city: '',
    pages: '1-3 screens',    // Default matches API example
    softwareConversion: 'Yes, I want a full system',
    timeline: '1 week',
    description: ''
  });

  // State for Custom Alert
  const [alert, setAlert] = useState({ show: false, message: '', isSuccess: true });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlert = (message, isSuccess = true) => {
    setAlert({ show: true, message, isSuccess });
    // Auto hide after 4 seconds
    setTimeout(() => setAlert({ show: false, message: '', isSuccess: true }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      showAlert("Please enter a valid 10-digit mobile number.", false);
      return;
    }

    setIsSubmitting(true);

    // Mapping local state to API format
    const apiPayload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      projectType: formData.projectType,
      businessTraffic: formData.traffic, // API expects businessTraffic
      city: formData.city,
      screens: formData.pages,           // API expects screens
      softwareConversion: formData.softwareConversion,
      timeline: formData.timeline,
      referenceDetails: formData.description // API expects referenceDetails
    };

    try {
      const response = await fetch('https://madhavaglobal.onrender.com/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiPayload),
      });
      console.log("API Response Status:", response.status);
      const result = await response.json();
      console.log(result);
      if (result.success) {
        showAlert("Thank you! Your request has been submitted successfully.");
        // Clear form
        setFormData({
          name: '', email: '', mobile: '', projectType: '', 
          traffic: '0-50 visitors', city: '', pages: '1-3 screens', 
          softwareConversion: 'Yes, I want a full system', timeline: '1 week', description: ''
        });
      } else {
        showAlert(result.message || "Submission failed. Please try again.", false);
      }
    } catch (error) {
      showAlert("Network error. Please check your connection.", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="form-section">
      {/* CUSTOM ALERT MODAL */}
      {alert.show && (
        <div className={`custom-alert ${alert.isSuccess ? 'success' : 'error'}`}>
          <div className="alert-content">
            <span className="alert-icon">{alert.isSuccess ? 'Right' : 'Wrong'}</span>
            <p>{alert.message}</p>
          </div>
        </div>
      )}

      <div className="container form-container">
        <div className="form-header">
          <h1 className="form-headline">Let’s Build Something Powerful for Your Business</h1>
          <p className="form-subtext">
            At Madhava Global, we focus on delivering premium digital solutions at highly affordable rates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="main-form">
          <div className="form-group">
            <label>Your Name?</label>
            <input type="text" name="name" value={formData.name} placeholder="Enter your name" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Your Email Address? <span className="optional-text">(Optional)</span></label>
            <input type="email" name="email" value={formData.email} placeholder="Enter your email" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Your mobile number?</label>
            <input type="tel" name="mobile" value={formData.mobile} placeholder="10-digit mobile number" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>What are you planning to build?</label>
            <select name="projectType" value={formData.projectType} onChange={handleChange} required>
              <option value="">Select one</option>
              <option value="Business Website">Business Website</option>
              <option value="Mobile Application">Mobile Application</option>
              <option value="Web Application">Web Application (Software)</option>
              <option value="Custom Software">Custom Software</option>
            </select>
          </div>

          <div className="form-group">
            <label>Business traffic per day?</label>
            <select name="traffic" value={formData.traffic} onChange={handleChange}>
              <option value="0-50 visitors">0 – 50 visitors</option>
              <option value="50-200 visitors">50 – 200 visitors</option>
              <option value="200-500 visitors">200 – 500 visitors</option>
              <option value="500+ visitors">500+ visitors</option>
            </select>
          </div>

          <div className="form-group">
            <label>Your current city?</label>
            <input type="text" name="city" value={formData.city} placeholder="Enter your city" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Screens/pages planned?</label>
            <select name="pages" value={formData.pages} onChange={handleChange}>
              <option value="1-3 screens">1 – 3 screens</option>
              <option value="4-6 screens">4 – 6 screens</option>
              <option value="10+ screens">More than 10</option>
            </select>
          </div>

          <div className="form-group">
            <label>Convert business into software?</label>
            <select name="softwareConversion" value={formData.softwareConversion} onChange={handleChange}>
              <option value="Yes, I want a full system">Yes, I want a full system</option>
              <option value="Only basic automation">Only basic automation</option>
              <option value="No, just a website">No, just a website</option>
            </select>
          </div>

          <div className="form-group">
            <label>Preferred timeline?</label>
            <select name="timeline" value={formData.timeline} onChange={handleChange}>
              <option value="1 week">1 week</option>
              <option value="2 weeks">2 weeks</option>
              <option value="1 month">1 month</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Additional Details (Optional)</label>
            <textarea 
              name="description" 
              value={formData.description}
              placeholder="Share reference links or competitor ideas..." 
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send My Request"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserFormPage;