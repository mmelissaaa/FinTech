import React from "react";
import "./Footer.css";
import { Lock, Plane, Headphones } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Banner */}

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-brand">
          <h3 className="logo">FinTech</h3>
          <div className="social-links">
            <h4>Find us in social media</h4>
            <div className="social-icons">
              <a href="https://instagram.com" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>COMMUNITY</h4>
            <ul>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/community">Community</a>
              </li>
              <li>
                <a href="/ideas">Ideas</a>
              </li>
              <li>
                <a href="/developers">Developers</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>COMPANY</h4>
            <ul>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/where-to-buy">Where to Buy</a>
              </li>
              <li>
                <a href="/resellers">Resellers</a>
              </li>
              <li>
                <a href="/influencers">Influencers</a>
              </li>
              <li>
                <a href="/affiliates">Affiliates</a>
              </li>
              <li>
                <a href="/media">Media</a>
              </li>
              <li>
                <a href="/contacts">Contacts & Imprint</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li>
                <a href="/warranty">Warranty</a>
              </li>
              <li>
                <a href="/declarations">Product Declarations</a>
              </li>
              <li>
                <a href="/terms">Terms of Use</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/cookie-policy">Cookie Policy</a>
              </li>
              <li>
                <a href="/cookie-settings">Cookie Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
