import React, { useState } from "react";
import "./BusinessLoans.css";

const BusinessLoans = () => {
  const [activeTab, setActiveTab] = useState("definition");
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(6.5);
  const [showResult, setShowResult] = useState(false);

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 1200;
    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return monthlyPayment.toFixed(2);
  };

  const calculateTotalPayment = () => {
    return (calculateMonthlyPayment() * loanTerm).toFixed(2);
  };

  return (
    <div className="loans-container">
      <div className="loans-card">
        <div className="card-header">
          <h1 className="card-title">Business Loan Solutions</h1>
          <div className="alert">
            Explore our comprehensive business loan solutions designed to fuel
            your business growth
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs-list">
            <button
              className={`tab-button ${
                activeTab === "definition" ? "active" : ""
              }`}
              onClick={() => setActiveTab("definition")}
            >
              Definition
            </button>
            <button
              className={`tab-button ${
                activeTab === "calculator" ? "active" : ""
              }`}
              onClick={() => setActiveTab("calculator")}
            >
              Calculator
            </button>
            <button
              className={`tab-button ${activeTab === "types" ? "active" : ""}`}
              onClick={() => setActiveTab("types")}
            >
              Types
            </button>
            <button
              className={`tab-button ${
                activeTab === "features" ? "active" : ""
              }`}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
            <button
              className={`tab-button ${
                activeTab === "requirements" ? "active" : ""
              }`}
              onClick={() => setActiveTab("requirements")}
            >
              Requirements
            </button>
            <button
              className={`tab-button ${activeTab === "pros" ? "active" : ""}`}
              onClick={() => setActiveTab("pros")}
            >
              Pros
            </button>
            <button
              className={`tab-button ${activeTab === "cons" ? "active" : ""}`}
              onClick={() => setActiveTab("cons")}
            >
              Cons
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "definition" && (
              <div className="definition-content">
                <section className="content-section">
                  <h3>What is a Business Loan?</h3>
                  <p>
                    A business loan is a financial product that provides
                    companies with funding for various business purposes. It's a
                    formal agreement between a lender and a business where the
                    lender provides capital that must be repaid with interest
                    over a specified period.
                  </p>
                </section>

                <section className="content-section">
                  <h3>Common Uses</h3>
                  <ul>
                    <li>Starting a new business venture</li>
                    <li>Expanding business operations</li>
                    <li>Purchasing inventory or equipment</li>
                    <li>Managing cash flow</li>
                    <li>Hiring and training staff</li>
                    <li>Marketing and advertising campaigns</li>
                    <li>Refinancing existing debt</li>
                  </ul>
                </section>

                <section className="content-section">
                  <h3>Key Terms</h3>
                  <div className="key-terms">
                    <p>
                      <strong>Principal:</strong> The original loan amount
                      borrowed
                    </p>
                    <p>
                      <strong>Interest Rate:</strong> The cost of borrowing,
                      expressed as a percentage
                    </p>
                    <p>
                      <strong>Term:</strong> The period over which the loan must
                      be repaid
                    </p>
                    <p>
                      <strong>Collateral:</strong> Assets pledged to secure the
                      loan
                    </p>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "calculator" && (
              <div className="calculator-content">
                <div className="input-group">
                  <label>Loan Amount ($)</label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    min="1000"
                    max="5000000"
                  />
                </div>

                <div className="input-group">
                  <label>Loan Term (months)</label>
                  <input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    min="12"
                    max="360"
                  />
                </div>

                <div className="input-group">
                  <label>Interest Rate (%)</label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    min="1"
                    max="30"
                    step="0.1"
                  />
                </div>

                <button
                  className="calculate-button"
                  onClick={() => setShowResult(true)}
                >
                  Calculate
                </button>

                {showResult && (
                  <div className="result-summary">
                    <h3>Loan Summary:</h3>
                    <p>Monthly Payment: ${calculateMonthlyPayment()}</p>
                    <p>Total Payment: ${calculateTotalPayment()}</p>
                    <p>
                      Total Interest: $
                      {(calculateTotalPayment() - loanAmount).toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "types" && (
              <div className="types-content">
                <section className="loan-type">
                  <h3>Term Loans</h3>
                  <p>
                    Traditional loans with fixed monthly payments over a set
                    period. Best for established businesses with good credit
                    history.
                  </p>
                </section>

                <section className="loan-type">
                  <h3>SBA Loans</h3>
                  <p>
                    Government-backed loans with competitive rates and longer
                    repayment terms. Perfect for small businesses looking to
                    expand.
                  </p>
                </section>

                <section className="loan-type">
                  <h3>Equipment Financing</h3>
                  <p>
                    Specific loans for purchasing business equipment. The
                    equipment serves as collateral for the loan.
                  </p>
                </section>

                <section className="loan-type">
                  <h3>Line of Credit</h3>
                  <p>
                    Flexible borrowing option that allows you to draw funds as
                    needed. Ideal for managing cash flow and unexpected
                    expenses.
                  </p>
                </section>
              </div>
            )}

            {activeTab === "features" && (
              <div className="features-content">
                <section className="feature">
                  <h3>Flexible Terms</h3>
                  <p>
                    Choose from various repayment terms ranging from 1 to 30
                    years based on your business needs.
                  </p>
                </section>

                <section className="feature">
                  <h3>Competitive Rates</h3>
                  <p>
                    Access competitive interest rates based on your business
                    credit profile and market conditions.
                  </p>
                </section>

                <section className="feature">
                  <h3>Multiple Uses</h3>
                  <p>
                    Freedom to use funds for various business purposes including
                    expansion, inventory, or equipment.
                  </p>
                </section>

                <section className="feature">
                  <h3>Quick Processing</h3>
                  <p>
                    Streamlined application process with quick approval and
                    disbursement timelines.
                  </p>
                </section>
              </div>
            )}

            {activeTab === "requirements" && (
              <div className="requirements-content">
                <section className="requirement-section">
                  <h3>Basic Requirements</h3>
                  <ul>
                    <li>Minimum 2 years in business</li>
                    <li>Credit score of 640 or higher</li>
                    <li>Annual revenue of $100,000+</li>
                    <li>No recent bankruptcies or defaults</li>
                  </ul>
                </section>

                <section className="requirement-section">
                  <h3>Required Documents</h3>
                  <ul>
                    <li>Business tax returns (last 2 years)</li>
                    <li>Personal tax returns (last 2 years)</li>
                    <li>Bank statements (last 6 months)</li>
                    <li>Business plan</li>
                    <li>Financial projections</li>
                  </ul>
                </section>
              </div>
            )}

            {activeTab === "pros" && (
              <div className="pros-content">
                <h3>Advantages of Business Loans</h3>
                <ul className="pros-list">
                  <li>Quick access to capital for growth opportunities</li>
                  <li>Build business credit history</li>
                  <li>Tax-deductible interest payments</li>
                  <li>Maintain full ownership of your business</li>
                  <li>Flexible use of funds</li>
                  <li>Predictable monthly payments</li>
                  <li>
                    Potential for lower interest rates compared to credit cards
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "cons" && (
              <div className="cons-content">
                <h3>Disadvantages of Business Loans</h3>
                <ul className="cons-list">
                  <li>
                    Regular payment obligations regardless of business
                    performance
                  </li>
                  <li>May require collateral</li>
                  <li>Can be difficult to qualify for</li>
                  <li>Potential for high interest rates based on risk</li>
                  <li>May require personal guarantee</li>
                  <li>Long application and approval process</li>
                  <li>Risk of losing assets if unable to repay</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoans;
