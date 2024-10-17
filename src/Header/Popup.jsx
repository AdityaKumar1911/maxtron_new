import React, { useState, useEffect } from "react";
import "./Popup.css"; // External CSS for the popup

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close popup function
  const closePopup = () => {
    setIsOpen(false);
  };

  // UseEffect hook to trigger popup after 10 seconds (10000 ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // 10 seconds delay

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <img
              src="/path-to-your-image.png" // Replace with the correct path to your image
              alt="Popup Ad"
              className="popup-image"
            />
            <p>Join our WhatsApp channel for updates!</p>
            <button className="join-btn">Join Now</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
