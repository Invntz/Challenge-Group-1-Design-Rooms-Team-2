import React, { useState } from 'react';
import './Signup.css';
// import SignUpImg from "./signUpImg.jpg"

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission, e.g., sending data to an API
      
    }
  };

  return (
    <div className="signup-container">
      <div className="left-side">
        <div className="logo">Invntz</div>
        <div className="navigation">
          <a href="/">Our Design Room</a>
          <a href="/">Join us today</a>
        </div>
        <div className="image-container">
          {/* <img src={SignUpImg} alt="Artwork" /> */}
        </div>
      </div>
      <div className="right-side">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <div className="input-group">
            <div className="input-field">
              <input 
                type="text" 
                name="firstName" 
                placeholder="First name" 
                value={formData.firstName} 
                onChange={handleChange} 
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="input-field">
              <input 
                type="text" 
                name="lastName" 
                placeholder="Last name" 
                value={formData.lastName} 
                onChange={handleChange} 
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          </div>
          <div className="input-field">
            <input 
              type="email" 
              name="email" 
              placeholder="Email address" 
              value={formData.email} 
              onChange={handleChange} 
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <button type="submit">Sign up</button>
          <div className="or-divider">OR</div>
          <div className="social-icons">
            <a href="/"><img src="path-to-google-icon.png" alt="Google" /></a>
            <a href="/"><img src="path-to-twitter-icon.png" alt="Twitter" /></a>
            <a href="/"><img src="path-to-tiktok-icon.png" alt="TikTok" /></a>
            <a href="/"><img src="path-to-email-icon.png" alt="Email" /></a>
            <a href="/"><img src="path-to-facebook-icon.png" alt="Facebook" /></a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
