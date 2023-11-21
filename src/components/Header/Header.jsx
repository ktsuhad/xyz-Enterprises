import React from "react";
import logo from "../../assets/logo.png";
import xyz from "../../assets/xyz.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <div className="triangle" />
      </div>
      <div className="header-content">
        <div className="logo-companyname">
          <img src={xyz} alt="xyz-logo" />
          <h6>XYZ Enterprises Pvt.Ltd</h6>
        </div>
        <div className="arrow-btn">
          <span class="material-symbols-outlined">expand_more</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
