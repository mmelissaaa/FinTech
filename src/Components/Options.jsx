import React, { useState } from "react";
import "./Options.css";

const Options = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navigationItems = [
    { id: "overview", label: "Overview" },
    { id: "types", label: "Types" },
    { id: "trends", label: "Trends" },
    { id: "getStarted", label: "Get Started" },
    { id: "prosCons", label: "Pros & Cons" },
  ];

  return (
    <div className="options-container">
      <header className="options-header">
        <h1>Options Trading</h1>
        <p>Master the art of options trading with our comprehensive guide</p>
      </header>

      <nav className="options-nav">
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

      <div className="options-content">
        {activeSection === "overview" && (
          <section>
            <h2>Options Trading Overview</h2>
            <p>
              Options are financial derivatives that give buyers the right, but
              not the obligation, to buy or sell an underlying asset at a
              predetermined price within a specific time period.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <h4>Daily Options Volume</h4>
                <div className="stat">32.4M</div>
                <div className="change positive">+12.5% YoY</div>
              </div>
              <div className="stat-card">
                <h4>Average Premium</h4>
                <div className="stat">$4.25</div>
                <div className="change positive">+3.2% MTD</div>
              </div>
              <div className="stat-card">
                <h4>Put/Call Ratio</h4>
                <div className="stat">0.84</div>
                <div className="change negative">-0.05 WoW</div>
              </div>
            </div>
          </section>
        )}

        {activeSection === "types" && (
          <section>
            <h2>Types of Options</h2>
            <div className="type-grid">
              <div className="type-card">
                <h3>Call Options</h3>
                <p>
                  Right to buy an asset at a strike price. Profitable when
                  market price exceeds strike price plus premium.
                </p>
              </div>
              <div className="type-card">
                <h3>Put Options</h3>
                <p>
                  Right to sell an asset at a strike price. Profitable when
                  market price falls below strike price minus premium.
                </p>
              </div>
              <div className="type-card">
                <h3>American Options</h3>
                <p>Can be exercised at any time before expiration date.</p>
              </div>
              <div className="type-card">
                <h3>European Options</h3>
                <p>Can only be exercised on the expiration date.</p>
              </div>
            </div>
          </section>
        )}

        {activeSection === "trends" && (
          <section>
            <h2>Current Market Trends</h2>
            <div className="trend-items">
              <div className="trend-item">
                <h3>Increased Retail Participation</h3>
                {/* <p>
                  Retail traders now account for 25% of options trading volume,
                  up from 15% in previous years.
                </p> */}
              </div>
              <div className="trend-item">
                <h3>Growth in Weekly Options</h3>
                {/* <p>
                  Weekly options contracts have seen a 45% increase in trading
                  volume year-over-year.
                </p> */}
              </div>
              <div className="trend-item">
                <h3>Rise of Options on ETFs</h3>
                {/* <p>
                  ETF options trading has grown by 30% as investors seek broader
                  market exposure.
                </p> */}
              </div>
            </div>
          </section>
        )}

        {activeSection === "getStarted" && (
          <section>
            <h2>Getting Started with Options</h2>
            <div className="steps">
              <div className="step">
                <h3>1. Education</h3>
                <p>
                  Learn the fundamentals of options trading, including
                  terminology, strategies, and risk management.
                </p>
              </div>
              <div className="step">
                <h3>2. Practice Account</h3>
                <p>
                  Start with a paper trading account to practice without risking
                  real money.
                </p>
              </div>
              <div className="step">
                <h3>3. Broker Selection</h3>
                <p>
                  Choose a reliable broker with good options trading tools and
                  reasonable fees.
                </p>
              </div>
              <div className="step">
                <h3>4. Start Small</h3>
                <p>
                  Begin with simple strategies like covered calls or
                  cash-secured puts.
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
                <li>Lower capital requirement than stock trading</li>
                <li>Potential for higher percentage returns</li>
                <li>Can profit in any market direction</li>
                <li>Excellent for hedging portfolios</li>
                <li>Limited downside risk for buyers</li>
              </ul>
            </div>
            <div className="cons">
              <h2>Disadvantages</h2>
              <ul>
                <li>Complex strategies can be risky</li>
                <li>Time decay works against buyers</li>
                <li>Requires more education and experience</li>
                <li>Can lose entire investment amount</li>
                <li>Higher transaction costs</li>
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Options;
