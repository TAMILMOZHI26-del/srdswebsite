import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OTP.css'; // Import the CSS file

const OTP = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = () => {
    alert('OTP Verified Successfully!');
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <h2 className="otp-title">Enter OTP</h2>
        <input
          type="text"
          value={otp}
          onChange={handleChange}
          placeholder="Enter your OTP"
          className="otp-input"
        />
        <Link to="/Signup" className="otp-link">
          <button
            onClick={handleVerify}
            className="otp-button"
          >
            Verify
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OTP;
