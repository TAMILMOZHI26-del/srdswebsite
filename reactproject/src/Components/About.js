// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import  './About.css';


const App = () => {
  const handleClose = () => {
    console.log('Close button clicked');
  };

  return (
    <Router>
      <div className="main-container">
        {/* Close Button */}
        <button className="close-button" onClick={handleClose}>
          &times; {/* HTML entity for multiplication sign (X) */}
        </button>

        {/* LAST CHANCE text */}
        <h1 className="app-name">LAST CHANCE</h1>

        {/* Navigation Bar */}
        <div className="navigation">
          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link to="/whatwedo" className="nav-link">WHAT WE DO</Link>
          <Link to="/theaterart" className="nav-link">THEATER ART</Link>
          <Link to="/whoweare" className="nav-link">WHO WE ARE</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </div>

        {/* Buttons for Donate and Take Action */}
        <div className="button-container">
          <button className="action-button donate">Donate Now</button>
          <button className="action-button take-action">Take Action</button>
        </div>

        {/* Social Media Links */}
        <div className="social-media-container">
          <div className="social-media-item">
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
              <span className="social-text">Facebook</span>
            </a>
          </div>
          <div className="social-media-item">
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
              <span className="social-text">Twitter</span>
            </a>
          </div>
          <div className="social-media-item">
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              <span className="social-text">Instagram</span>
            </a>
          </div>
          <div className="social-media-item">
            <a href="https://youtube.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
              <span className="social-text">YouTube</span>
            </a>
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/theaterart" element={<TheaterArt />} />
          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

// Components

const About = () => (
  <div>
    <h2>About Us</h2>
    <p>This is the About section. We focus on XYZ.</p>
  </div>
);

const WhatWeDo = () => (
  <div>
    <h2>What We Do</h2>
    <p>This section describes our core activities and goals.</p>
  </div>
);

const TheaterArt = () => (
  <div>
    <h2>Theater Art</h2>
    <p>We engage in various theater arts, supporting local talents.</p>
  </div>
);

const WhoWeAre = () => (
  <div>
    <h2>Who We Are</h2>
    <p>Get to know more about our team and our mission.</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact Us</h2>
    <p>You can reach us via email or phone.</p>
  </div>
);

export default App;
