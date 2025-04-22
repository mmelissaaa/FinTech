import React from "react";
import "./FinanceVision.css";

const FinanceVision = () => {
  return (
    <div className="finance-container">
      {/* Left Section */}
      <div className="image-section">
        <img
          src="/api/placeholder/500/500"
          alt="Finance Illustration"
          className="finance-image"
        />
      </div>

      {/* Right Section */}
      <div className="content-section">
        <h1 className="main-title">Financial Wisdom Hub</h1>

        <div className="vision-cards">
          <div className="vision-card">
            <h2>Educational Resources</h2>
            <ul>
              <li>Interactive glossary of financial terms</li>
              <li>Video tutorials on basic concepts</li>
              <li>Step-by-step guides for beginners</li>
            </ul>
          </div>

          <div className="vision-card">
            <h2>Investment Guidance</h2>
            <ul>
              <li>Risk assessment tools</li>
              <li>Portfolio diversification strategies</li>
              <li>Market analysis and trends</li>
            </ul>
          </div>

          <div className="vision-card">
            <h2>Savings Strategies</h2>
            <ul>
              <li>Budgeting tools and calculators</li>
              <li>Emergency fund planning</li>
              <li>Goal-based savings programs</li>
            </ul>
          </div>

          <div className="vision-card">
            <h2>Personal Finance Tools</h2>
            <ul>
              <li>Expense tracking dashboard</li>
              <li>Debt management calculator</li>
              <li>Retirement planning simulator</li>
            </ul>
          </div>
        </div>

        <div className="disclaimer">
          * All financial advice is for educational purposes only. Please
          consult with a qualified financial advisor for personalized guidance.
        </div>
      </div>
    </div>
  );
};

export default FinanceVision;
