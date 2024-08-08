// LoginForm.jsx
import React, { useState } from 'react';
import './styles.css';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <img src="src/assets/girl.png" alt="Girl Image" className="big-image" />
      </div>
      <div className="login-details">
        <h2>Sign In</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username or Email:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <div className="password-input">
              <input type={showPassword ? 'text' : 'password'} id="password" name="password" required />
              <button type="button" className="toggle-password" onClick={togglePassword}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="forgot-password">
            <a href="#">Forget your password?</a>
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
          <div className="signup-link">
            <p><a href="#">Sign Up</a></p>
          </div>
          <div className="or-divider">
            <p><span>or</span></p>
          </div>
          <div className="session-options">
            <a href="#"><img src="src/assets/google.png" alt="Google" /></a>
            <a href="#"><img src="src/assets/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="src/assets/tiktok.png" alt="TikTok" /></a>
            <a href="#"><img src="src/assets/email.png" alt="Email" /></a>
            <a href="#"><img src="src/assets/facebook.png" alt="Facebook" /></a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
