import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = (() => setClick(!click));
  const closeMobileMenu = (() => setClick(false));

  return (
    <>
      <nav className="navbar">
          <div className="navbar-container">
              <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
                Adriel the Explorer
                <img className="img-logo" src="/images/logo.jpg" alt="Adriel the Explorer" />
              </Link>
              
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/tech" className="nav-links" onClick={closeMobileMenu}>
                    Tech
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/music" className="nav-links" onClick={closeMobileMenu}>
                    Music
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/travel" className="nav-links" onClick={closeMobileMenu}>
                    Travel
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
          </div>
      </nav>
    </>
  )
}

export default Navbar;