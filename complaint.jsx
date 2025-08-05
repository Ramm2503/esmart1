import React, { useState } from 'react';
import './complaint.css';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderId: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you'd send formData to a backend here
    console.log('Complaint submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="complaint-container">
      <div className="complaint-box">
        <h2 className="complaint-title">Customer Complaint Form</h2>
        {submitted ? (
          <p className="thank-you">Thank you for your feedback! We will get back to you shortly.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Order ID (if applicable):</label>
            <input
              type="text"
              name="orderId"
              value={formData.orderId}
              onChange={handleChange}
            />

            <label>Complaint:</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit Complaint</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ComplaintForm;
