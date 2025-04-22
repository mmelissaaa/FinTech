import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      {/* Animated Background */}
      <div className="matrix-background">
        {Array(100)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="matrix-dot"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 7}s`,
              }}
            />
          ))}
      </div>

      {/* Navigation */}
      {/* <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">Financify</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#discover">Discover</a>
          <a href="#services">Services</a>
        </div>

        <div className="nav-auth">
          <button className="btn btn-signup">Signup</button>
          <button className="btn btn-login">Login</button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">Managing Finances Made Easy</h1>
        <p className="hero-subtitle">
          Create a new account and keep a track record of all your finances,
          transactions and subscriptions.
        </p>
        <button className="btn btn-get-started">
          Get Started
          <span className="arrow">→</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
