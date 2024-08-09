// Alejandro
import GoogleLogo from '../assets/google-logo-footer.svg';
import FooterLogo from '../assets/Group 24.png';
import './footer.css';
import { Link } from 'react-router-dom';

const getYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="google-partner">
        <img
          className="google-footer-logo"
          src={GoogleLogo}
          alt="Google Partner Logo"
        />
        <h3 className="footer-elements google-partner-txt">Google Partner</h3>
      </div>
      <div className="right-side-footer">
        <img
          className="footer-logo"
          src={FooterLogo}
          alt="INVNTZ Logo"
        />
        <div className="conditions-div">
          <h4 className="footer-elements footer-conditions"><Link className="footer-conditions" to="/">Terms and Conditions</Link></h4>
          <h4 className="footer-elements footer-conditions"><Link className="footer-conditions" to="/">About Us</Link></h4>
          <h4 className="footer-elements footer-conditions"><Link className="footer-conditions" to="/">Contact</Link></h4>
          <h4 className="footer-elements footer-conditions"><Link className="footer-conditions" to="/">Sustainability</Link></h4>
        </div>
        <p className="footer-elements copyright">
          Confidential and proprietary copyright © {getYear} by INVNTZ™. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
