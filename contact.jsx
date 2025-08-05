import React from 'react';
import './contact.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1 className="contact-title">Contact Information</h1>
        <p className="contact-description">
          We'd love to hear from you. Reach out to us through the information below.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <h3>📞 Phone</h3>
            <p>+91 6383658427</p>
          </div>

          <div className="contact-item">
            <h3>🏠 Address</h3>
            <p>Domino's Opposite nearby Axis Bank building ,kalavasal bypass , Madurai-04</p>
          </div>

          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>Smart123@gmail.com</p>
          </div>

          <div className="contact-item">
            <h3>🕑 Working Hours</h3>
            <p>Monday – Friday: 9:00 AM to 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
