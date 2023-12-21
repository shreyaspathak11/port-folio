// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav id="desktop-nav">
        <div className="logo">Shreyas Pathak</div>
        <div>
          <ul className="nav-links">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation (Hamburger Menu) */}
      <nav id="hamburger-nav">
        <div className="logo">Shreyas Pathak</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <a href="/about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="/experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="/projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
