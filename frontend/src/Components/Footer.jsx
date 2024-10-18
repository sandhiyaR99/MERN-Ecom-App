import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for internal navigation
import './Footer.css'; // Importing the CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Shop</h3>
          <Link to="/landing" className="footer-link">Shop Now</Link> {/* Using Link for internal navigation */}
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            Instagram
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            Facebook
          </a>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <Link to="/contact" className="footer-link">Contact Us</Link> {/* Using Link for internal navigation */}
          <Link to="/about" className="footer-link">About</Link> {/* Using Link for internal navigation */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
