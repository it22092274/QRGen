import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Popup.css'; // Import CSS file for styling

function Popup( {close} ) {
    const [originalUrl, setOriginalUrl] = useState('');
    const [qrCodeUrl, setQRCodeUrl] = useState('');
    const [name, setName] = useState('');
  
    const handleInputChange = (e) => {
      setOriginalUrl(e.target.value);
    };
    const handleInputChange2 = (e) => {
      setName(e.target.value);
    };

    const handleClose = () => {
        close();
    }
  
    const generateQRCode = async () => {
      try {
        const response = await axios.post('http://localhost:3000/generateQR', { url: originalUrl });
        setQRCodeUrl(response.data.qrCodeUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };
  
    const downloadQRCode = () => {
      if (qrCodeUrl) {
        const link = document.createElement('a');
        link.href = qrCodeUrl;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };
  
    return (
      <div className="popup-container">
        <button onClick={handleClose} className='close'>x</button>
        <div className="popup-content">
          <h1>Generate QR Code</h1>
          <input
            type="text"
            value={originalUrl}
            onChange={handleInputChange}
            placeholder="Enter URL"
          />
          <input
            type="text"
            value={name}
            onChange={handleInputChange2}
            placeholder="Enter name"
          />
          <button onClick={generateQRCode}>Generate</button>
          {qrCodeUrl && (
            <div className='download-section'>
              <h2>QR Code:</h2>
              <img src={qrCodeUrl} alt="QR Code" />
              <button onClick={downloadQRCode}>Download</button>
            </div>
          )}
        </div>
      </div>
    );
}

export default Popup;
