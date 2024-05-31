import React, { useState } from 'react';
import '../styles/WelcomeBanner.css';
import Popup from './Popup';

const WelcomeBanner = () => {
    const [display, setDisplay] = useState(false);

    const handleClick = () =>{
        setDisplay(!display)
    }
  return (
    <div className="welcome-banner">
      <div className="banner-content">
        <h1>Welcome to QRGen</h1>
        <p>Your one-stop solution for generating QR codes from URLs.</p>
        <button className="get-started-btn" onClick={handleClick}>Get Started</button>
      </div>

      {display && (
            <Popup close={() => {setDisplay(!display);}} />
      )}
    </div>
  );
};

export default WelcomeBanner;
