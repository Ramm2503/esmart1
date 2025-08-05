import React from "react";
import './privacy.css';
import Products from './product';
const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-box">
        <h1 className="privacy-title">Privacy Policy</h1>

        <p>
          At <strong>[Your Website Name]</strong>, we value your trust and are committed to
          protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard
          your personal data when you visit or make a purchase from our website.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>Name, email address, and contact number</li>
          <li>Shipping and billing address</li>
          <li>Payment details (handled securely via third-party gateways)</li>
          <li>Account login credentials (hashed and encrypted)</li>
          <li>Browsing data like IP address, browser type, and device info</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Process and fulfill your orders</li>
          <li>Communicate with you about your account or orders</li>
          <li>Respond to your inquiries and provide support</li>
          <li>Send promotional offers (opt-out available)</li>
          <li>Improve our website and services</li>
        </ul>

        <h2>3. Third-Party Services</h2>
        <p>
          We may use trusted third-party services such as payment gateways and analytics providers.
          They have access only to necessary data and are obligated to protect it.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Cookies help us improve your experience. You can disable cookies through your browser
          settings, but some features may not work properly.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We keep your data only as long as necessary. You may request data deletion by contacting
          our support team.
        </p>

        <h2>6. Security</h2>
        <p>
          We implement strict security measures including SSL encryption. While we strive to keep
          your data safe, no system is 100% secure.
        </p>

        <h2>7. Children’s Privacy</h2>
        <p>
          Our site is not intended for children under 13. We do not knowingly collect information
          from children. Please contact us if a child has shared data.
        </p>

        <h2>8. Your Rights</h2>
        <ul>
          <li>Access, update, or delete your data</li>
          <li>Withdraw consent at any time</li>
          <li>Opt-out of marketing emails</li>
        </ul>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this policy as needed. Changes will be posted here with a new date.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          For questions or requests, please contact us at:
          <br />
          <strong>Email:</strong> support@yourwebsite.com
          <br />
          <strong>Phone:</strong> +1-234-567-890
        </p>

        <p className="updated">Last updated: April 30, 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
