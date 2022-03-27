import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Follow me on the below social media!
            </p>
            <p className='footer-subscription-text'>
                You can unfollow at any time.
                </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your email"
                    className="footer-input" />
                    <Button buttonStyle="btn--outline" href="/" text="Subscribe!" />
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="social-icons">
                    <Link
                    className="social-icon-link instagram"
                    to="/external/instagram"
                    target="_blank"
                    aria-label="Instagram"
                    >
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link
                    className="social-icon-link youtube"
                    to="/external/youtube"
                    target="_blank"
                    aria-label="YouTube"
                    >
                        <i className="fab fa-youtube"></i>
                    </Link>
                    <Link
                    className="social-icon-link linkedin"
                    to="/external/linkedin"
                    target="_blank"
                    aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link
                    className="social-icon-link github"
                    to="/external/github"
                    target="_blank"
                    aria-label="GitHub"
                    >
                        <i className="fab fa-github"></i>
                    </Link>
                </div>
                <small className="website-rights">Adriel the Explorer © 2022</small>
            </div>
        </section>
    </div>
  )
}

export default Footer;