// PersonalLoans.jsx
import React, { useState } from "react";
import "./PersonalLoans.css";

const PersonalLoans = () => {
  const [activeTab, setActiveTab] = useState("definition");
  const [activeLoanType, setActiveLoanType] = useState("unsecured");

  const loanTypes = {
    unsecured: {
      title: "Unsecured Personal Loans",
      description: "Loans that don't require collateral",
      features: [
        "No collateral required",
        "Higher interest rates",
        "Faster approval process",
        "Based on creditworthiness",
      ],
    },
    secured: {
      title: "Secured Personal Loans",
      description: "Loans backed by collateral",
      features: [
        "Requires collateral (e.g., home equity)",
        "Lower interest rates",
        "Longer approval process",
        "Less emphasis on credit score",
      ],
    },
    consolidation: {
      title: "Debt Consolidation Loans",
      description: "Designed to combine existing debts",
      features: [
        "Combines multiple debts",
        "Potentially lower overall interest",
        "Single monthly payment",
        "Structured repayment plan",
      ],
    },
  };

  const eligibilityRequirements = [
    {
      category: "Credit Score",
      requirements: [
        "Excellent: 720-850",
        "Good: 690-719",
        "Fair: 630-689",
        "Poor: Below 630",
      ],
    },
    {
      category: "Income",
      requirements: [
        "Steady employment history",
        "Minimum income requirements vary",
        "Debt-to-income ratio below 43%",
        "Proof of regular income",
      ],
    },
    {
      category: "Documentation",
      requirements: [
        "Government-issued ID",
        "Proof of address",
        "Recent pay stubs",
        "Tax returns",
      ],
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Pre-Qualification",
      description: "Check initial offers without affecting credit score",
    },
    {
      step: 2,
      title: "Application",
      description: "Submit formal application with required documentation",
    },
    {
      step: 3,
      title: "Verification",
      description: "Lender verifies information and documents",
    },
    {
      step: 4,
      title: "Approval",
      description: "Loan terms are finalized and presented",
    },
    {
      step: 5,
      title: "Funding",
      description: "Funds are disbursed to your account",
    },
  ];

  return (
    <div className="personal-loans">
      <h1 className="main-title">Personal Loans Guide</h1>

      {/* Navigation Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "definition" ? "active" : ""}`}
          onClick={() => setActiveTab("definition")}
        >
          Definition
        </button>
        <button
          className={`tab ${activeTab === "types" ? "active" : ""}`}
          onClick={() => setActiveTab("types")}
        >
          Loan Types
        </button>
        <button
          className={`tab ${activeTab === "features" ? "active" : ""}`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`tab ${activeTab === "eligibility" ? "active" : ""}`}
          onClick={() => setActiveTab("eligibility")}
        >
          Eligibility
        </button>
        <button
          className={`tab ${activeTab === "application" ? "active" : ""}`}
          onClick={() => setActiveTab("application")}
        >
          Application
        </button>
        <button
          className={`tab ${activeTab === "proscons" ? "active" : ""}`}
          onClick={() => setActiveTab("proscons")}
        >
          Pros & Cons
        </button>
      </div>

      {/* Content Sections */}
      <div className="content">
        {/* Definition Section */}
        {activeTab === "definition" && (
          <div className="section">
            <h2>What is a Personal Loan?</h2>
            <div className="definition-card">
              <p>
                A personal loan is an unsecured loan that provides borrowers
                with a lump sum of money to use for various purposes. These
                loans typically have fixed interest rates and regular monthly
                payments over a set term.
              </p>
              <div className="common-uses">
                <h3>Common Uses:</h3>
                <ul>
                  <li>Debt consolidation</li>
                  <li>Home improvements</li>
                  <li>Major purchases</li>
                  <li>Emergency expenses</li>
                  <li>Wedding costs</li>
                  <li>Medical bills</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Loan Types Section */}
        {activeTab === "types" && (
          <div className="section">
            <h2>Types of Personal Loans</h2>
            <div className="loan-types">
              {Object.keys(loanTypes).map((type) => (
                <div
                  key={type}
                  className={`loan-type-card ${
                    activeLoanType === type ? "active" : ""
                  }`}
                  onClick={() => setActiveLoanType(type)}
                >
                  <h3>{loanTypes[type].title}</h3>
                  <p>{loanTypes[type].description}</p>
                  <ul>
                    {loanTypes[type].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Section */}
        {activeTab === "features" && (
          <div className="section">
            <h2>Loan Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Loan Amounts</h3>
                <div className="amount-range">
                  <span>$1,000</span>
                  <div className="range-bar"></div>
                  <span>$50,000</span>
                </div>
                <p>Actual amounts vary by lender and creditworthiness</p>
              </div>

              <div className="feature-card">
                <h3>Interest Rates</h3>
                <div className="rate-ranges">
                  <div className="rate-item">
                    <span>Excellent Credit</span>
                    <span>6-12%</span>
                  </div>
                  <div className="rate-item">
                    <span>Good Credit</span>
                    <span>13-18%</span>
                  </div>
                  <div className="rate-item">
                    <span>Fair Credit</span>
                    <span>19-24%</span>
                  </div>
                  <div className="rate-item">
                    <span>Poor Credit</span>
                    <span>25-36%</span>
                  </div>
                </div>
              </div>

              <div className="feature-card">
                <h3>Repayment Terms</h3>
                <div className="term-options">
                  <div className="term">
                    <span className="term-length">12 months</span>
                    <span className="term-note">
                      Shortest term, highest payments
                    </span>
                  </div>
                  <div className="term">
                    <span className="term-length">36 months</span>
                    <span className="term-note">Most common term</span>
                  </div>
                  <div className="term">
                    <span className="term-length">60 months</span>
                    <span className="term-note">
                      Lower payments, more interest
                    </span>
                  </div>
                  <div className="term">
                    <span className="term-length">84 months</span>
                    <span className="term-note">Longest term available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Eligibility Section */}
        {activeTab === "eligibility" && (
          <div className="section">
            <h2>Eligibility Requirements</h2>
            <div className="eligibility-grid">
              {eligibilityRequirements.map((category, index) => (
                <div key={index} className="eligibility-card">
                  <h3>{category.category}</h3>
                  <ul>
                    {category.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Application Process Section */}
        {activeTab === "application" && (
          <div className="section">
            <h2>Application Process</h2>
            <div className="application-steps">
              {applicationSteps.map((step) => (
                <div key={step.step} className="step-card">
                  <div className="step-number">{step.step}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pros & Cons Section */}
        {activeTab === "proscons" && (
          <div className="section">
            <h2>Pros & Cons</h2>
            <div className="proscons-grid">
              <div className="pros-card">
                <h3>Advantages</h3>
                <ul>
                  <li>Fixed interest rates and payments</li>
                  <li>Quick access to funds</li>
                  <li>No collateral needed for unsecured loans</li>
                  <li>Flexible use of funds</li>
                  <li>Potential for lower rates than credit cards</li>
                  <li>Helps build credit history</li>
                </ul>
              </div>
              <div className="cons-card">
                <h3>Disadvantages</h3>
                <ul>
                  <li>Higher rates for poor credit</li>
                  <li>Potential origination fees</li>
                  <li>Risk of over-borrowing</li>
                  <li>Impact on credit from applications</li>
                  <li>Fixed payment obligations</li>
                  <li>Potential prepayment penalties</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalLoans;
