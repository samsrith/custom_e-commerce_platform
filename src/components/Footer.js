import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a leading e-commerce platform dedicated to providing high-quality products at the best prices.
            Discover a seamless shopping experience with us.
          </p>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Shop All Categories</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get the latest updates on new products and upcoming sales.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Social Media & Payment Options */}
      <div className="footer-bottom">
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
        <div className="payment-options">
          <img src="visa-logo.png" alt="Visa" />
          <img src="mastercard-logo.png" alt="Mastercard" />
          <img src="paypal-logo.png" alt="PayPal" />
          <img src="amex-logo.png" alt="Amex" />
        </div>
        <p>© 2025 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
