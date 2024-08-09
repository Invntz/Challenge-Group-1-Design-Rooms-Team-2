import React, { useState } from 'react'; // Importing React and the useState hook for managing state.
import './Signup.css'; // Importing the CSS file for styling the component.
import SignUpImg from '../../assets/signup-image.jpg'; // Importing the signup image asset.
import { Link } from 'react-router-dom';
//Ming Chi,
// SignupForm component definition
const SignupForm = () => {
  // Defining the form data state using useState hook
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // State for storing validation errors
  const [errors, setErrors] = useState({});

  // Function to validate the form data
  const validateForm = () => {
    const newErrors = {};
    
    // Check if firstName is provided
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    
    // Check if lastName is provided
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    
    // Check if email is provided and valid
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    
    // Update the errors state
    setErrors(newErrors);
    
    // Return true if no errors, otherwise false
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the form data state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // If the form is valid, log the form data
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  // JSX to render the signup form
  return (
    <div className="signup-container">
      <div className="left-side">
        <div className="image-container">
          <img src={SignUpImg} alt="Sign Up" /> {/* Displaying the signup image */}
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
              {errors.firstName && <span className="error">{errors.firstName}</span>} {/* Display error if any */}
            </div>
            <div className="input-field">
              <input 
                type="text" 
                name="lastName" 
                placeholder="Last name" 
                value={formData.lastName} 
                onChange={handleChange} 
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>} {/* Display error if any */}
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
            {errors.email && <span className="error">{errors.email}</span>} {/* Display error if any */}
          </div>
          <Link to="/marketplace">
          <button type="submit">Sign up</button> </Link> {/* Submit button */}
          <div className="or-divider">OR</div>
          <div className="social-icons">
            {/* Links to social signup options */}
            <a href="/"><img src="src/assets/devicon_google.png" alt="Google" /></a>
            <a href="/"><img src="src/assets/logos_twitter.png" alt="Twitter" /></a>
            <a href="/"><img src="src/assets/logos_tiktok-icon.png" alt="TikTok" /></a>
            <a href="/"><img src="src/assets/mdi_email-open.png" alt="Email" /></a>
            <a href="/"><img src="src/assets/logos_facebook.png" alt="Facebook" /></a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm; // Exporting the component to be used in other parts of the application
