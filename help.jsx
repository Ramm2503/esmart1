import React from 'react';
import './help.css';

const HelpPage = () => {
  return (
    <div className="help-container">
      <h1>Help & Support</h1>
      <p>Need assistance? We're here to help you every step of the way.</p>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>🔹 How do I place an order?</h3>
          <p>Browse products, add them to your cart, and proceed to checkout. You’ll receive order confirmation via email.</p>
        </div>
        <div className="faq-item">
          <h3>🔹 What payment methods are accepted?</h3>
          <p>We accept credit/debit cards, UPI, PayPal, and net banking.</p>
        </div>
        <div className="faq-item">
          <h3>🔹 How can I track my order?</h3>
          <p>Log in to your account and go to 'My Orders' to track your shipment.</p>
        </div>
        <div className="faq-item">
          <h3>🔹 Where can I find assembly tutorials?</h3>
          <p>Visit the "Guided Assembly" section from the main menu for step-by-step tutorials.</p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Support</h2>
        <p>If your question isn’t listed above, feel free to contact us:</p>
        <ul>
          <li>Email: support@yourbrand.com</li>
          <li>Phone: +91 98765 43210</li>
          <li>Live Chat: Available 10AM - 7PM IST</li>
        </ul>
      </section>
    </div>
  );
};

export default HelpPage;
