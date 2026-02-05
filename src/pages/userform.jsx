import React, { useState } from 'react';
import '../assets/styles/UserformPage.css';

const UserFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    projectType: '',
    traffic: '',
    city: '',
    pages: '',
    softwareConversion: '',
    timeline: '',
    description: '' // 1. Added description to state
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Thank you! Madhava Global will contact you soon.");
  };

  return (
    <section className="form-section">
      <div className="container form-container">
        <div className="form-header">
          <h1 className="form-headline">Let’s Build Something Powerful for Your Business</h1>
          <p className="form-subtext">
            At Madhava Global, we focus on delivering premium digital solutions at highly affordable rates.
            Answer a few quick questions and we’ll suggest the best solution for your business.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="main-form">
          {/* ... (Previous form groups remain the same) */}
          <div className="form-group">
            <label>Your Name?</label>
            <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Your Email Address? <span className="optional-text">(Optional)</span></label>
            <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Your mobile number?</label>
            <input type="tel" name="mobile" placeholder="10-digit mobile number" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>What are you planning to build?</label>
            <select name="projectType" onChange={handleChange} required>
              <option value="">Select one</option>
              <option value="website">Business Website</option>
              <option value="mobile-app">Mobile Application</option>
              <option value="web-app">Web Application (Software)</option>
              <option value="custom">Custom Software</option>
              <option value="uiux">UI / UX Design Only</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>

          <div className="form-group">
            <label>Your current business traffic per day?</label>
            <select name="traffic" onChange={handleChange}>
              <option value="0-50">0 – 50 visitors</option>
              <option value="50-200">50 – 200 visitors</option>
              <option value="200-500">200 – 500 visitors</option>
              <option value="500+">500+ visitors</option>
            </select>
          </div>

          <div className="form-group">
            <label>Your current city?</label>
            <input type="text" name="city" placeholder="Enter your city" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>How many screens/pages are you planning?</label>
            <select name="pages" onChange={handleChange}>
              <option value="1-3">1 – 3 screens</option>
              <option value="4-6">4 – 6 screens</option>
              <option value="7-10">7 – 10 screens</option>
              <option value="10+">More than 10</option>
            </select>
          </div>

          <div className="form-group">
            <label>Do you want to convert your business into software?</label>
            <select name="softwareConversion" onChange={handleChange}>
              <option value="full">Yes, I want a full system</option>
              <option value="automation">Only basic automation</option>
              <option value="just-web">No, just a website</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>

          <div className="form-group">
            <label>What is your preferred timeline?</label>
            <select name="timeline" onChange={handleChange}>
              <option value="1w">1 week</option>
              <option value="2w">2 weeks</option>
              <option value="1m">1 month</option>
              <option value="flex">Flexible</option>
            </select>
          </div>

          {/* 2. Added Project Description Group */}
          <div className="form-group full-width">
            <label>Reference And Additional Details (Optional)</label>
            <textarea 
              name="description" 
              placeholder="You may share a reference website, app, competitor link, or any extra information that can help us better understand your requirement" 
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="form-submit-btn">Send My Request</button>
        </form>
      </div>
    </section>
  );
};

export default UserFormPage;