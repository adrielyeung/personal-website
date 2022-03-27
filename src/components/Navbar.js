import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = (() => setClick(!click));
  const closeMobileMenu = (() => setClick(false));

  const showButton = (() => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  });

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
          <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                Adriel the Explorer
                <img className="img-logo" src="/images/logo.jpg" alt="Adriel the Explorer" />
              </Link>
              
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
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
                {!button && (
                  <li className="nav-item">
                    <Button buttonStyle="btn--outline" href="/contact" text="Contact me" />
                  </li>
                )}
              </ul>
              {button && <Button buttonStyle="btn--outline" href="/contact" text="Contact me" />}
          </div>
      </nav>
    </>
  )
}

export default Navbar;