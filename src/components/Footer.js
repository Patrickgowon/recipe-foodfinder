// components/Footer.jsx
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} RecipeFinder. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;