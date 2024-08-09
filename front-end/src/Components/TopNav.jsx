import { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="topnav">
      <div className="logo">
        <img src="/src/assets/Group 24.png" alt="Logo" className="logo-img" />
      </div>
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/marketplace" className="nav-item">Marketplace</Link>
        <Link to="/drop" className="nav-item">Drop</Link>
        <Link to="/design" className="nav-item">Design</Link>
        <Link to="/sell" className="nav-item">Sell</Link>
        <Link to="/plans" className="nav-item">Plans</Link>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className="action-buttons">
        
        <button className="btn-signin">Sign In</button>
        
        <Link  to="/signup" >
        <button className="btn-signup">Sign Up</button>
        </Link>
      </div>
    </header>
  );
}

export default TopNav;
