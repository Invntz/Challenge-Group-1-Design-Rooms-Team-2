import React from 'react';
import './LandingPage.css';

const Landingpage = () => {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
        <div className="buttons">
          <button className="primary-btn">Lorem ipsum</button>
          <button className="secondary-btn">Learn More</button>
        </div>
        <div className="hero-shapes">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="shape-3"></div>
          <div className="shape-4"></div>
        </div>
      </section>

      <section className="features">
        <div className="feature-item">
          <div className="feature-shape"></div>
          <h2>Lorem ipsum dolor sit</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
          <div className="icon-container">
            <div className="icon">📦</div>
            <div className="icon">⚙️</div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-item">
          <div className="content-shape"></div>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="call-to-action">Call to Action</button>
        </div>
        <div className="content-item">
          <div className="content-shape"></div>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="call-to-action">Call to Action</button>
        </div>
        <div className="content-item">
          <div className="content-shape"></div>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="call-to-action">Purchase Now</button>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose us?</h2>
        <div className="reasons">
          <div className="reason">Lorem ipsum dolor sit amet.</div>
          <div className="reason">Lorem ipsum dolor sit amet.</div>
          <div className="reason">Lorem ipsum dolor sit amet.</div>
          <div className="reason">Lorem ipsum dolor sit amet.</div>
        </div>
      </section>

      <section className="footer-cta">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="cta-footer">Lorem Ipsum</button>
      </section>

      <footer>
        <div className="footer-content">
          <span>©2023 YourCompany</span>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>
          <div className="social-links">
            <a href="/">Facebook</a>
            <a href="/">Twitter</a>
            <a href="/">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landingpage;
