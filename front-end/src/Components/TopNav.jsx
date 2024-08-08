import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './TopNav.css'; // Make sure to create this CSS file

function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="topnav">
      <div className="logo">
        <img src="/src/assets/Group 24.png" alt="Logo" className="logo-img" />
      </div>
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        {/* <Link to="/" className="nav-item">Home</Link> */}

        <a href="/marketplace">Marketplace</a>
        <a href="/drop">Drop</a>
        <a href="/design">Design</a>
        <a href="/sell">Sell</a>
        <a href="/plans">Plans</a>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className="action-buttons">
        <button className="btn-signin">Sign In</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </header>
  );
}

export default TopNav;
