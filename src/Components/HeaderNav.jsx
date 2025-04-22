import React, { useState } from "react";
import { Search, User, Phone } from "lucide-react";
import "./HeaderNav.css";

const HeaderNav = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="header-nav">
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo/Website Name */}
          <div className="nav-logo">
            <span className="logo-text">FinTech</span>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="search-icon">
                <Search size={20} />
              </div>
            </div>
          </div>

          {/* Navigation Options */}
          <div className="nav-options">
            <button className="nav-button">
              <Phone className="button-icon" size={20} />
              <span>Contact</span>
            </button>

            <div className="nav-divider"></div>

            <div className="auth-buttons">
              <button className="nav-button">
                <User className="button-icon" size={20} />
                <span>Login</span>
              </button>
              <button className="register-button">Register</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
