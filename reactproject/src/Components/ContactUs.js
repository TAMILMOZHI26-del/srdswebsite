import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Background Circles */}
      <div className="background-circle circle-1"></div>
      <div className="background-circle circle-2"></div>

      {/* Left Section */}
      <div className="contact-left">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugiat
          dicta iusto reprehenderit eum nihil similique.
        </p>
        <div className="contact-details">
          <p><i className="fas fa-phone-alt"></i> + (123) 456 7890</p>
          <p><i className="fas fa-envelope"></i> contact@xyzwebsite.com</p>
          <p><i className="fas fa-map-marker-alt"></i> 11, Street 342, Abcd Fgh</p>
        </div>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>

      {/* Right Section */}
      <div className="contact-right">
        <form>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Your name" />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Email Address" />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type your message here"></textarea>

          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
