import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar.css"; // Include your styles here
import Products from "./Products";
import ScooterData from "./SliderComponent/ScooterData";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import Logo from "../images/Logos/MAXTRON_LOGO_FINAL_POPnMAXGREEN_(FORDARKBG).png";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // State to toggle dropdowns and mobile menu
  const [isScooterDropdownOpen, setScooterDropdownOpen] = useState(false);
  const [isMotorcycleDropdownOpen, setMotorcycleDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for the mobile menu
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768); // Check initial width

  // Functions to handle dropdown toggle
  const toggleScooterDropdown = () =>
    setScooterDropdownOpen(!isScooterDropdownOpen);
  const toggleMotorcycleDropdown = () =>
    setMotorcycleDropdownOpen(!isMotorcycleDropdownOpen);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Set mobile view if width <= 768px
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Disable scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  // Function to handle logo click and navigate to home
  const handleLogoClick = () => {
    navigate("/"); // Redirect to the homepage
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo" onClick={handleLogoClick}>
          <img src={Logo} alt="Maxtron Logo" />
        </div>

        {!isMobileView && ( // Show this part only in desktop view
          <>
            <div className="nav-item">
              <div
                className="dropdown"
                onMouseEnter={toggleScooterDropdown}
                onMouseLeave={toggleScooterDropdown}
              >
                <span className="nav-link">Scooters</span>
                {isScooterDropdownOpen && (
                  <div className="dropdown-content animated-dropdown">
                    <div className="dropnew">
                      {/* <a href="#scooter1">Scooter Model 1</a>
                      <a href="#scooter2">Scooter Model 2</a>
                      <a href="#scooter3">Scooter Model 3</a>
                      <a href="#scooter3">Scooter Model 4</a> */}
                      <ScooterData />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* <a id="offerHide" href="#offer" className="nav-link">
              Offer
            </a> */}
          </>
        )}
      </div>

      <div className="navbar-right">
        {!isMobileView && ( // Show this part only in desktop view
          <>
            <a id="InvestorHide" href="/dealer" className="nav-link">
              Dealership
            </a>
            <a href="/testride" className="nav-link">
              Test Ride
            </a>
            <a href="/sbooking" className="nav-link order-now">
              Book Now
            </a>
          </>
        )}

        {/* Always show this icon in both desktop and mobile views */}
        <div style={{ marginRight: "20px" }}>
          <a href="/testride" className="nav-link" style={{ color: "#00e676" }}>
            Test Ride
          </a>
        </div>
        <a href="#hdrmobmenu" className="nav-link" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </a>
      </div>

      {/* Show MobileMenu component if on mobile view */}
      {isMobileView && isMobileMenuOpen && <MobileMenu />}

      {/* Show the mobile dropdown menu content when the hamburger is clicked */}
      {isMobileMenuOpen && !isMobileView && (
        <div className="mobile-menu">
          {/* Mobile menu content */}
          <div className="mContent">
            <Products />
            <Menu />
          </div>

          {/* Blue backdrop at the bottom */}
          <div className="blue-backdrop"></div>

          <button onClick={toggleMobileMenu} className="mobile-menu-close">
            &times;
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
