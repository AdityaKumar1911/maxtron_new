import React, { useState } from "react";
import "./MobileMenu.css"; // Import your CSS for mobile styling

const MobileMenu = () => {
  // State to manage the visibility of the entire menu
  const [isMenuOpen, setMenuOpen] = useState(true);

  // States to manage collapse for each section
  const [isScootersOpen, setScootersOpen] = useState(false);
  const [isMotorcyclesOpen, setMotorcyclesOpen] = useState(false);
  const [isAccessoriesOpen, setAccessoriesOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isTechOpen, setTechOpen] = useState(false);
  const [isOwnershipOpen, setOwnershipOpen] = useState(false);

  // Toggles
  const toggleScooters = () => setScootersOpen(!isScootersOpen);
  const toggleMotorcycles = () => setMotorcyclesOpen(!isMotorcyclesOpen);
  const toggleAccessories = () => setAccessoriesOpen(!isAccessoriesOpen);
  const toggleCompany = () => setCompanyOpen(!isCompanyOpen);
  const toggleTech = () => setTechOpen(!isTechOpen);
  const toggleOwnership = () => setOwnershipOpen(!isOwnershipOpen);

  // Function to close the menu
  const closeMenu = () => setMenuOpen(false);

  if (!isMenuOpen) return null; // If menu is closed, return nothing

  return (
    <div className="mobile-menu-container">
      {/* Close button */}
      <button className="mobile-menu-close-M" onClick={closeMenu}>
        &times;
      </button>

      <div className="menu-section">
        <div className="menu-header" onClick={toggleScooters}>
          Scooters
        </div>
        {isScootersOpen && (
          <ul className="menu-list">
            <li>
              <a href="/m1">Maxtron M1</a>
            </li>
            <li>
              <a href="/m2">Maxtron M2</a>
            </li>
            <li>
              <a href="/m3">Maxtron M3</a>
            </li>
            <li>
              <a href="/m4">Maxtron M4</a>
            </li>
          </ul>
        )}
      </div>

      {/* <div className="menu-section">
        <div className="menu-header" onClick={toggleMotorcycles}>
          Motorcycles
        </div>
        {isMotorcyclesOpen && (
          <ul className="menu-list">
            <li>Roadster</li>
            <li>Roadster X</li>
            <li>Roadster Pro</li>
          </ul>
        )}
      </div> */}

      <div className="menu-section">
        <div className="menu-header" onClick={toggleAccessories}>
          Accessories
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-header" onClick={toggleCompany}>
          Our Company
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-header" onClick={toggleTech}>
          Tech & Design
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-header" onClick={toggleOwnership}>
          <a href="/dealer">Dealership</a>
        </div>
      </div>

      {/* Footer Buttons */}
      {/* <div className="menu-footer">
        <button className="sign-in-btn">Sign in</button>
        <button className="support-btn">Support</button>
      </div> */}
    </div>
  );
};

export default MobileMenu;
