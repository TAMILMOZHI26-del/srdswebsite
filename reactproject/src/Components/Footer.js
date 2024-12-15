import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@wellbeingtool.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook">🌐</a>
            <a href="#twitter" aria-label="Twitter">🌐</a>
            <a href="#linkedin" aria-label="LinkedIn">🌐</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Workplace Well-Being Tool. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
