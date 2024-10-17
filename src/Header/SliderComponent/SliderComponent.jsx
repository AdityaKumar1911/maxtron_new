import React from "react";
import "./SliderComponent.css";
// import {
//   FaBatteryFull,
//   FaMotorcycle,
//   FaBolt,
//   FaTachometerAlt,
//   FaCogs,
//   FaGasPump,
//   FaShieldAlt,
//   FaWeightHanging,
// } from "react-icons/fa";

const ScooterCard = ({ name, image, details }) => {
  return (
    <div className="card-container">
      {/* Header Section */}
      <div className="card-header">
        <h2 className="scooter-name">{name}</h2>
        <div className="action-buttons">
          <button className="btn book-now">Book Now</button>
          <button className="btn test-ride">Test Ride</button>
        </div>
      </div>

      {/* Body Section */}
      <div className="card-body">
        {/* Left side (Image) */}
        <div className="scooter-image">
          <img src={image} alt="Scooter" className="image" />
        </div>

        {/* Right side (Details) */}
        <div className="details-container">
          <div className="details-grid">
            {details.map((detail, index) => (
              <div className="detail-item" key={index}>
                {detail.icon}
                <span>{detail.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="viewmore">
        <p>view more</p>
      </div>
    </div>
  );
};

export default ScooterCard;
