import React from "react";
import "./VisionSection.css";

const VisionSection = () => {
  return (
    <div className="vision-container">
      <div className="vision-content">
        <h1 className="vision-title">Our Commitment to Financial Education</h1>

        <div className="vision-grid">
          {/* Mission Section */}
          <div className="vision-card">
            <div className="icon-wrapper">
              <div className="icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
            </div>
            <h2 className="cardtitle card-title" style={{ color: "#22c55e" }}>
              Our Mission
            </h2>
            <p className="card-text">
              To empower underserved communities through accessible financial
              education, providing clear explanations of financial concepts and
              practical advice for building sustainable wealth.
            </p>
          </div>

          {/* Vision Section */}
          <div className="vision-card">
            <div className="icon-wrapper">
              <div className="icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
            <h2 className="card-title" style={{ color: "#22c55e" }}>
              Our Vision
            </h2>
            <p className="card-text">
              A future where financial literacy is accessible to all, bridging
              the knowledge gap and creating pathways to financial independence
              for every community member.
            </p>
          </div>

          {/* Values Section */}
          <div className="vision-card">
            <div className="icon-wrapper">
              <div className="icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
            </div>
            <h2 className="card-title" style={{ color: "#22c55e" }}>
              Our Values
            </h2>
            <ul className="values-list">
              <li className="values-item">
                <span className="bullet"></span>
                Accessibility
              </li>
              <li className="values-item">
                <span className="bullet"></span>
                Education First
              </li>
              <li className="values-item">
                <span className="bullet"></span>
                Community Focus
              </li>
              <li className="values-item">
                <span className="bullet"></span>
                Transparency
              </li>
              <li className="values-item">
                <span className="bullet"></span>
                Empowerment
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
