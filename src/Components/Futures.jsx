import React, { useState } from "react";
import "./Futures.css";

const Futures = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navigationItems = [
    { id: "overview", label: "Overview" },
    { id: "types", label: "Types" },
    { id: "trends", label: "Trends" },
    { id: "getStarted", label: "Get Started" },
    { id: "prosCons", label: "Pros & Cons" },
  ];

  return (
    <div className="futures-container">
      <header className="futures-header">
        <h1>Futures Trading</h1>
        <p>Explore the world of futures contracts and commodity trading</p>
      </header>

      <nav className="futures-nav">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`nav-btn ${activeSection === item.id ? "active" : ""}`}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="futures-content">
        {activeSection === "overview" && (
          <section>
            <h2>Futures Trading Overview</h2>
            <p>
              Futures contracts are standardized agreements to buy or sell a
              specific asset at a predetermined price on a future date. These
              instruments are essential for price discovery and risk management
              in global markets.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <h4>Daily Futures Volume</h4>
                <div className="stat">28.7M</div>
                <div className="change positive">+15.3% YoY</div>
              </div>
              <div className="stat-card">
                <h4>Average Contract Size</h4>
                <div className="stat">$142K</div>
                <div className="change positive">+5.8% MTD</div>
              </div>
              <div className="stat-card">
                <h4>Market Volatility</h4>
                <div className="stat">18.5</div>
                <div className="change negative">-2.3 WoW</div>
              </div>
            </div>
          </section>
        )}

        {activeSection === "types" && (
          <section>
            <h2>Types of Futures</h2>
            <div className="type-grid">
              <div className="type-card">
                <h3>Commodity Futures</h3>
                <p>
                  Contracts for physical goods like oil, gold, agricultural
                  products, and natural gas.
                </p>
              </div>
              <div className="type-card">
                <h3>Financial Futures</h3>
                <p>
                  Contracts based on financial instruments such as stock
                  indices, bonds, and currencies.
                </p>
              </div>
              <div className="type-card">
                <h3>E-mini Futures</h3>
                <p>
                  Smaller-sized contracts that provide more accessibility and
                  flexibility for traders.
                </p>
              </div>
              <div className="type-card">
                <h3>Micro Futures</h3>
                <p>
                  Even smaller contracts designed for retail traders with
                  limited capital.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeSection === "trends" && (
          <section>
            <h2>Current Market Trends</h2>
            <div className="trend-items">
              <div className="trend-item">
                <h3>ESG Futures Growth</h3>
                <p>
                  Environmental, Social, and Governance (ESG) futures have seen
                  a 75% increase in trading volume as sustainability becomes a
                  key focus.
                </p>
              </div>
              <div className="trend-item">
                <h3>Crypto Futures Expansion</h3>
                <p>
                  Cryptocurrency futures trading has expanded by 120% with more
                  institutions entering the market.
                </p>
              </div>
              <div className="trend-item">
                <h3>Micro Futures Adoption</h3>
                <p>
                  Retail participation has doubled with the introduction of
                  micro futures contracts across major indices.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeSection === "getStarted" && (
          <section>
            <h2>Getting Started with Futures</h2>
            <div className="steps">
              <div className="step">
                <h3>1. Understanding Basics</h3>
                <p>
                  Learn about contract specifications, margin requirements, and
                  settlement processes.
                </p>
              </div>
              <div className="step">
                <h3>2. Market Analysis</h3>
                <p>
                  Study fundamental and technical analysis specific to futures
                  markets.
                </p>
              </div>
              <div className="step">
                <h3>3. Choose Your Market</h3>
                <p>
                  Start with liquid markets and standard-sized or micro
                  contracts based on your capital.
                </p>
              </div>
              <div className="step">
                <h3>4. Risk Management</h3>
                <p>
                  Develop a solid risk management strategy including position
                  sizing and stop-loss orders.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeSection === "prosCons" && (
          <section className="pros-cons-section">
            <div className="pros">
              <h2>Advantages</h2>
              <ul>
                <li>High leverage opportunities</li>
                <li>Excellent liquidity in major markets</li>
                <li>Lower transaction costs than stocks</li>
                <li>24/5 trading in many markets</li>
                <li>Perfect for portfolio hedging</li>
              </ul>
            </div>
            <div className="cons">
              <h2>Disadvantages</h2>
              <ul>
                <li>Higher margin requirements</li>
                <li>Significant price volatility</li>
                <li>Complex contract specifications</li>
                <li>Risk of substantial losses</li>
                <li>Requires active management</li>
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Futures;
