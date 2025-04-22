import React from "react";
import { Lock } from "lucide-react";
import "./Discover.css";

const Discover = () => {
  return (
    <div id="discover" className="discover-container">
      {/* Left side - Illustration */}
      <div className="discover-illustration">
        <div className="background-dots">
          <div className="dot dot-blue"></div>
          <div className="dot dot-yellow"></div>
          <div className="dot dot-red"></div>
          <div className="dot dot-green"></div>
        </div>

        <div className="content-card">
          {/* Placeholder image */}
          <div className="placeholder-image"></div>

          {/* Bar chart */}
          <div className="bar-chart">
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
            <div className="bar bar-4"></div>
          </div>

          {/* Text lines */}
          <div className="text-lines">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
          </div>
        </div>

        {/* Lock icon */}
        <div className="lock-icon">
          <Lock size={24} />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="discover-content">
        <div className="content-header">
          <h3 className="subtitle">Personalised Access</h3>
          <h2 className="title">
            Get features such as OCR scanning of receipts
          </h2>
        </div>

        <p className="description">
          You can easily scan your payment receipts and save them as spendings.
          Also you get personalised tips and discount offers on your dashboard.
        </p>

        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default Discover;
