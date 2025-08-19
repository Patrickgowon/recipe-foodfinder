// components/Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo" onClick={closeMobileMenu}>
          RecipeFinder
        </h1>
        <div className="mobile-menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#featured" className="nav-links" onClick={closeMobileMenu}>
              Featured
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMobileMenu}>
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;