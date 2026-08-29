import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// ── EmailJS / Web3Forms config ───────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = 'a41a1a0d-ca8d-487b-8809-0682d60c503f'; // TODO: confirm/replace
const EMAILJS_SERVICE_ID = 'service_0rpkocm'; 
const EMAILJS_TEMPLATE_ID = 'template_bwebe79'; 
const EMAILJS_PUBLIC_KEY = 'PloJ6Ao8Pyr65PBks'; 

const UserFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    projectType: '',
    traffic: '0-50 visitors',
    city: '',
    pages: '1-3 screens',
    softwareConversion: 'Yes, I want a full system',
    timeline: '1 week',
    description: '',
  });

  const [alert, setAlert] = useState({ show: false, message: '', isSuccess: true });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlert = (message, isSuccess = true) => {
    setAlert({ show: true, message, isSuccess });
    setTimeout(() => setAlert({ show: false, message: '', isSuccess: true }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      showAlert('Please enter a valid 10-digit mobile number.', false);
      return;
    }

    setIsSubmitting(true);

    try {
      // 1) Send the lead to Madhava Global via Web3Forms
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Madhava Global project request',
          from_name: 'Madhava Global Website',
          name: formData.name || 'Not provided',
          email: formData.email || 'Not provided',
          mobile: formData.mobile || 'Not provided',
          projectType: formData.projectType || 'Not provided',
          businessTraffic: formData.traffic,
          city: formData.city || 'Not provided',
          screens: formData.pages,
          softwareConversion: formData.softwareConversion,
          timeline: formData.timeline,
          referenceDetails: formData.description || 'Not provided',
        }),
      });
      const data = await res.json();

      if (data.success) {
        // 2) Send the user an acknowledgment mail — only if they gave an email
        if (formData.email.trim()) {
          try {
            await emailjs.send(
              EMAILJS_SERVICE_ID,
              EMAILJS_TEMPLATE_ID,
              { name: formData.name || 'there', email: formData.email },
              { publicKey: EMAILJS_PUBLIC_KEY }
            );
          } catch (ackErr) {
            console.error('Ack email failed:', ackErr);
          }
        }

        showAlert('Thanks! Madhava Global team will contact you shortly.');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          projectType: '',
          traffic: '0-50 visitors',
          city: '',
          pages: '1-3 screens',
          softwareConversion: 'Yes, I want a full system',
          timeline: '1 week',
          description: '',
        });
      } else {
        showAlert(data.message || 'Submission failed. Please try again.', false);
      }
    } catch (error) {
      showAlert('Network error. Please check your connection.', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  // REDUCED BORDER RADIUS: changed rounded-xl to rounded-md
  const selectClass =
    'w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-colors';
  const inputClass = selectClass;
  const labelClass = 'block text-sm font-medium text-gray-700 mb-2';

  return (
    <section className="relative bg-[#F6F2EA] py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let&rsquo;s Build Something Powerful for Your Business
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            At Madhava Global, we focus on delivering premium digital solutions at highly affordable rates.
          </p>
        </div>

        {/* REDUCED BORDER RADIUS: changed rounded-3xl to rounded-lg */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Your Name?</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              Your Email Address? <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Your mobile number?</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              placeholder="10-digit mobile number"
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>What are you planning to build?</label>
            <select name="projectType" value={formData.projectType} onChange={handleChange} required className={selectClass}>
              <option value="">Select one</option>
              <option value="Business Website">Business Website</option>
              <option value="Mobile Application">Mobile Application</option>
              <option value="Web Application">Web Application (Software)</option>
              <option value="Custom Software">Custom Software</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Business traffic per day?</label>
            <select name="traffic" value={formData.traffic} onChange={handleChange} className={selectClass}>
              <option value="0-50 visitors">0 – 50 visitors</option>
              <option value="50-200 visitors">50 – 200 visitors</option>
              <option value="200-500 visitors">200 – 500 visitors</option>
              <option value="500+ visitors">500+ visitors</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Your current city?</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              placeholder="Enter your city"
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Screens/pages planned?</label>
            <select name="pages" value={formData.pages} onChange={handleChange} className={selectClass}>
              <option value="1-3 screens">1 – 3 screens</option>
              <option value="4-6 screens">4 – 6 screens</option>
              <option value="10+ screens">More than 10</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Convert business into software?</label>
            <select name="softwareConversion" value={formData.softwareConversion} onChange={handleChange} className={selectClass}>
              <option value="Yes, I want a full system">Yes, I want a full system</option>
              <option value="Only basic automation">Only basic automation</option>
              <option value="No, just a website">No, just a website</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Preferred timeline?</label>
            <select name="timeline" value={formData.timeline} onChange={handleChange} className={selectClass}>
              <option value="1 week">1 week</option>
              <option value="2 weeks">2 weeks</option>
              <option value="1 month">1 month</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>Additional Details (Optional)</label>
            <textarea
              name="description"
              value={formData.description}
              placeholder="Share reference links or competitor ideas..."
              onChange={handleChange}
              rows="3"
              className={inputClass}
            />
          </div>

          {/* CUSTOM INLINE ALERT PLACED HERE */}
          {alert.show && (
            <div className="md:col-span-2 flex justify-center mt-2">
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

          <div className="md:col-span-2 mt-2">
            {/* REDUCED BORDER RADIUS: changed rounded-full to rounded-md */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white font-medium rounded-md py-3.5 hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send My Request'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserFormPage;