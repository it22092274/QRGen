import React from 'react';
import '../styles/HowToUseSection.css';
import { FaSearch, FaPaintBrush, FaDownload } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

const HowToUseSection = () => {
  return (
    <section className="how-to-use-section">
      <div className="how-to-use-content">
        <h2>How to Use QRGen</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon search-icon">
              <FaSearch />
            </div>
            <div className="step-info">
              <h3>Search</h3>
              <p>Enter the URL you want to convert into a QR code in the search bar.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-icon customize-icon">
              <FaPaintBrush />
            </div>
            <div className="step-info">
              <h3>Customize</h3>
              <p>Customize the design and appearance of your QR code to match your branding.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-icon download-icon">
              <FaDownload />
            </div>
            <div className="step-info">
              <h3>Download</h3>
              <p>Download your custom QR code in high-resolution formats for print or digital use.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
