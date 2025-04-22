import React from "react";
import Spline from "@splinetool/react-spline";
import { Shield, Gem, Globe, ChevronRight, PiggyBank } from "lucide-react";
import "./CreditCard.css";

export const CreditCard = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: "Enhanced Security",
      description:
        "Advanced fraud protection and real-time transaction monitoring",
    },
    {
      icon: <Gem size={24} />,
      title: "Premium Rewards",
      description: "Earn 2% cashback on all purchases, 3% on travel and dining",
    },
    {
      icon: <Globe size={24} />,
      title: "Global Acceptance",
      description: "No foreign transaction fees and worldwide ATM access",
    },
    {
      icon: <PiggyBank size={24} />,
      title: "Smart Savings",
      description: "Automatic categorization and spending insights",
    },
  ];

  return (
    <div className="page-container">
      {/* Hero Section with 3D Card */}
      <div className="hero-section">
        <div className="credit-card">
          <h1>Card Features</h1>
          <p style={{ color: "grey" }}>
            Unlock exclusive benefits and elevate your lifestyle with our
            premium credit card for discerning professionals.
          </p>
          <Spline scene="https://prod.spline.design/wHXygQegwZ023Nnb/scene.splinecode" />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-header">
          <h2 className="features-title">Premium Benefits</h2>
          <p className="features-subtitle">
            Experience unlimited possibilities with our premium credit card
            designed for modern professionals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-content">
                <div className="feature-icon-container">{feature.icon}</div>
                <div className="feature-text">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
                <ChevronRight size={24} className="chevron-icon" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-card">
            <h3 className="cta-title">Ready to get started?</h3>
            <p className="cta-description">
              Apply now and get approved instantly with our secure application
              process.
            </p>
            <button className="cta-button">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
