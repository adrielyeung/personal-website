import React from 'react';
import { Button } from './Button';
import './Header.css';

function Header() {
  return (
    <div className='header-container'>
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>Hello! I am Adriel, exploring tech, music, travel and more!</h1>
        <p>Follow my journey below!</p>
        <div className="header-btns">
            {/*
            <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                href="/"
                text="Contact me"
            />
            */}
            <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                href="/external/adrieltheexplorer"
                text="Explore"
            />
        </div>
    </div>
  )
}

export default Header;