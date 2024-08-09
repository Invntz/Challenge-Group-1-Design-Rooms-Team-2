/**OGUZHAN ERDOGAN */
import React, { useState } from 'react';
import './styles.css';
import girlImage from '../assets/girl.png';
import googleIcon from '../assets/google.png';
import twitterIcon from '../assets/twitter.png';
import tiktokIcon from '../assets/tiktok.png';
import emailIcon from '../assets/email.png';
import facebookIcon from '../assets/facebook.png';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }
    setError('');
    // Handle sign in logic here
  };

  return (
    <div className="sign-in-container">
      <div className="image-container">
        <img src={girlImage} alt="Stylish woman with headphones" />
      </div>
      <div className="form-container">
        <div className="form-content">
          <h2>Sign In</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username or Email:</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group password-container">
              <label htmlFor="password">Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <a href="#" className="forgot-password">Forgot your password?</a>
            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
          <p className="sign-up-link">Sign Up</p>
          <p>or</p>
          <div className="social-login">
            <img src={googleIcon} alt="Sign in with Google" />
            <img src={twitterIcon} alt="Sign in with Twitter" />
            <img src={tiktokIcon} alt="Sign in with TikTok" />
            <img src={emailIcon} alt="Sign in with Email" />
            <img src={facebookIcon} alt="Sign in with Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
