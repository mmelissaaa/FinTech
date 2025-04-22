import React, { useState } from "react";
import "./Forex.css";

const Forex = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const popularPairs = [
    { pair: "EUR/USD", rate: "1.0875", change: "+0.15%" },
    { pair: "GBP/USD", rate: "1.2635", change: "-0.22%" },
    { pair: "USD/JPY", rate: "149.30", change: "+0.45%" },
    { pair: "AUD/USD", rate: "0.6575", change: "+0.18%" },
  ];

  return (
    <div className="forex-container">
      <header className="forex-header">
        <h1>Forex Trading</h1>
        <p>Your Gateway to Foreign Exchange Markets</p>
      </header>

      <nav className="forex-nav">
        <button
          className={`nav-btn ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`nav-btn ${activeTab === "types" ? "active" : ""}`}
          onClick={() => setActiveTab("types")}
        >
          Types
        </button>
        <button
          className={`nav-btn ${activeTab === "trends" ? "active" : ""}`}
          onClick={() => setActiveTab("trends")}
        >
          Trends
        </button>
        <button
          className={`nav-btn ${activeTab === "getStarted" ? "active" : ""}`}
          onClick={() => setActiveTab("getStarted")}
        >
          Get Started
        </button>
        <button
          className={`nav-btn ${activeTab === "prosCons" ? "active" : ""}`}
          onClick={() => setActiveTab("prosCons")}
        >
          Pros & Cons
        </button>
      </nav>

      <main className="forex-content">
        {activeTab === "overview" && (
          <div className="overview-section">
            <h2>What is Forex Trading?</h2>
            <p>
              Forex (Foreign Exchange) trading is the global marketplace for
              exchanging national currencies. It's the largest and most liquid
              financial market in the world, with an average daily trading
              volume exceeding $6.6 trillion.
            </p>

            <div className="live-rates">
              <h3>Popular Currency Pairs</h3>
              <div className="rates-grid">
                {popularPairs.map((pair) => (
                  <div key={pair.pair} className="rate-card">
                    <h4>{pair.pair}</h4>
                    <p className="rate">{pair.rate}</p>
                    <span
                      className={`change ${
                        pair.change.includes("+") ? "positive" : "negative"
                      }`}
                    >
                      {pair.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "types" && (
          <div className="types-section">
            <h2>Types of Forex Markets</h2>

            <div className="market-type">
              <h3>Spot Forex</h3>
              <p>
                Immediate buying and selling of currency pairs at current market
                rates.
              </p>
            </div>

            <div className="market-type">
              <h3>Forwards Market</h3>
              <p>
                Contracts to buy/sell currencies at predetermined future rates.
              </p>
            </div>

            <div className="market-type">
              <h3>Futures Market</h3>
              <p>
                Standardized contracts traded on exchanges for future currency
                delivery.
              </p>
            </div>

            <div className="market-type">
              <h3>Swap Market</h3>
              <p>
                Simultaneous buying and selling of currencies with different
                delivery dates.
              </p>
            </div>
          </div>
        )}

        {activeTab === "trends" && (
          <div className="trends-section">
            <h2>Current Forex Trends 2024</h2>

            <div className="trend-item">
              <h3>Digital Currency Impact</h3>
              {/* <p>
                Increasing influence of cryptocurrencies and CBDCs on
                traditional forex markets.
              </p> */}
            </div>

            <div className="trend-item">
              <h3>Automated Trading</h3>
              {/* <p>Rising adoption of AI and algorithmic trading strategies.</p> */}
            </div>

            <div className="trend-item">
              <h3>Mobile Trading</h3>
              {/* <p>
                Growing preference for mobile-based trading platforms and apps.
              </p> */}
            </div>

            <div className="trend-item">
              <h3>Economic Policies</h3>
              {/* <p>
                Impact of central bank policies and interest rate decisions on
                currency values.
              </p> */}
            </div>
          </div>
        )}

        {activeTab === "getStarted" && (
          <div className="get-started-section">
            <h2>How to Get Started with Forex Trading</h2>

            <div className="steps">
              <div className="step">
                <h3>1. Education</h3>
                <p>
                  Learn forex basics, technical analysis, and risk management
                  strategies.
                </p>
              </div>

              <div className="step">
                <h3>2. Choose a Broker</h3>
                <p>
                  Select a regulated forex broker with competitive spreads and
                  reliable platform.
                </p>
              </div>

              <div className="step">
                <h3>3. Practice Account</h3>
                <p>
                  Start with a demo account to practice without risking real
                  money.
                </p>
              </div>

              <div className="step">
                <h3>4. Start Small</h3>
                <p>
                  Begin with small trades and gradually increase as you gain
                  experience.
                </p>
              </div>

              <div className="step">
                <h3>5. Develop Strategy</h3>
                <p>
                  Create and test your trading strategy based on your goals and
                  risk tolerance.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "prosCons" && (
          <div className="pros-cons-section">
            <div className="pros">
              <h2>Advantages</h2>
              <ul>
                <li>24/5 Market Access</li>
                <li>High Liquidity</li>
                <li>Low Transaction Costs</li>
                <li>Leverage Opportunities</li>
                <li>Two-Way Trading (Buy/Sell)</li>
                <li>Global Market Access</li>
                <li>Multiple Trading Strategies</li>
              </ul>
            </div>

            <div className="cons">
              <h2>Disadvantages</h2>
              <ul>
                <li>High Volatility Risk</li>
                <li>Leverage Risks</li>
                <li>Complex Market Forces</li>
                <li>Emotional Stress</li>
                <li>Requires Constant Learning</li>
                <li>Time Commitment</li>
                <li>Potential for Significant Losses</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Forex;
