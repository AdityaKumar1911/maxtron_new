// src/Menu.js
import React from "react";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-section">
        <h3>Tech & Design</h3>
        <ul>
          <li>
            <a href="#">Software</a>
          </li>
          <li>
            <a href="#">Cell Tech</a>
          </li>
          <li>
            <a href="#">Manufacturing</a>
          </li>
          <li>
            <a href="#">Performance</a>
          </li>
          <li>
            <a href="#">Design</a>
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h3>Ownership</h3>
        <ul>
          <li>
            <a href="#">Electric Store</a>
          </li>
          <li>
            <a href="#">Hypercharger</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Referrals</a>
          </li>
          <li>
            <a href="#">Hyperservice</a>
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h3>Our Company</h3>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">News & Events</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>

      {/* <div className="menu-section">
        <h3>Account</h3>
        <ul>
          <li>
            <a href="#">Sign in</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Menu;
