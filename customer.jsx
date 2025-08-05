import React, { useState } from 'react';
import './customer.css';

const CustomerCare = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer care message:", formData);
    setSubmitted(true);
  };

  return (
    <div className="customer-care-container">
      <div className="customer-care-box">
        <h1 className="title">Customer Care</h1>
        <p className="subtitle">
          We're here to help you with your questions, concerns, and feedback.
        </p>

        <div className="info-section">
          <p><strong>Email:</strong> support@yourwebsite.com</p>
          <p><strong>Phone:</strong> +1-234-567-890</p>
          <p><strong>Working Hours:</strong> Mon–Fri, 9:00 AM – 6:00 PM</p>
        </div>

        <hr className="divider" />

        {submitted ? (
          <p className="thank-you">Thanks for reaching out! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label>Your Message:</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CustomerCare;
