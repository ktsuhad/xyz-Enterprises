import React, { useState } from "react";
import "./Sidebar.css";
import profile from "../../assets/profile.jpg";

const SideBar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const handleMenuClick = (menu) => {
    setSelectedMenuItem(menu);
  };

  return (
    <div className="sidebar-container">
      <div className="profile">
        <img src={profile} alt="profile-image" />
        <div className="profile-content">
          <div className="profile-name-icon">
            <span className="profile-name">Ram Mohan</span>
            <span
              style={{ color: "#408fce" }}
              className="material-symbols-outlined"
            >
              chevron_right
            </span>
          </div>
          <span>rammohan2@gmail.com</span>
        </div>
      </div>
      <div className="side-menu-container">
        <div
          className={`side-menu ${
            selectedMenuItem === "Dashboard" ? "selected" : ""
          }`}
          onClick={() => handleMenuClick("Dashboard")}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span>Dashboard</span>
        </div>
        <div
          className={`side-menu ${
            selectedMenuItem === "Perks" ? "selected" : ""
          }`}
          onClick={() => handleMenuClick("Perks")}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span>Perks</span>
        </div>
        <div
          className={`side-menu ${
            selectedMenuItem === "Addons" ? "selected" : ""
          }`}
          onClick={() => handleMenuClick("Addons")}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span>Addons</span>
        </div>
        <div
          className={`side-menu ${
            selectedMenuItem === "FAQ" ? "selected" : ""
          }`}
          onClick={() => handleMenuClick("FAQ")}
        >
          <span className="material-symbols-outlined">quiz</span>
          <span>FAQ</span>
        </div>
        <div
          className={`side-menu ${
            selectedMenuItem === "Support" ? "selected" : ""
          }`}
          onClick={() => handleMenuClick("Support")}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span>Support</span>
        </div>
      </div>
      {/* Logout button */}
      <div className="logout">
        <span>Logout</span>
        <span className="material-symbols-outlined">power_settings_new</span>
      </div>
    </div>
  );
};

export default SideBar;
