import React from "react";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>Signin</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="signin-button">
            Signin
          </button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;