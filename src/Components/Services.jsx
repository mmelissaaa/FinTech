import React from "react";
import "./Services.css";

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Services = () => {
  const plans = [
    {
      name: "Personal Advisor",
      tier: "Basic",
      price: "0",
      period: "/month",
      description: "Perfect for individuals starting their financial journey",
      features: [
        "Basic financial planning",
        "Monthly budget review",
        "Investment basics guidance",
        "Email support",
        "Basic financial tools access",
      ],
      storage: "Digital storage: 1GB",
      support: "Response time: 24h",
      access: "Mobile app access",
      button: "Start Free",
      highlight: false,
    },
    {
      name: "Business Advisor",
      tier: "Premium",
      price: "199",
      period: "/month",
      description: "For businesses requiring comprehensive financial guidance",
      features: [
        "Advanced financial planning",
        "Weekly consultation calls",
        "Tax optimization strategy",
        "Cash flow management",
        "Custom financial modeling",
      ],
      storage: "Digital storage: 50GB",
      support: "Response time: 2h",
      access: "Full platform access",
      button: "Get Started",
      highlight: true,
    },
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Financial Advisory Services</h1>
        <p>Expert guidance for your financial success</p>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`plan-card ${
              plan.highlight ? "plan-card-highlighted" : ""
            }`}
          >
            {plan.highlight && <div className="popular-badge">Popular</div>}
            <div className="plan-header">
              <h2 className="plan-title">{plan.name}</h2>
              <div className="plan-pricing">
                <span className="price">${plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
            </div>
            <div className="plan-content">
              <ul className="features-list">
                {plan.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="check-icon">
                      <CheckIcon />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="plan-specs">
                <p>{plan.storage}</p>
                <p>{plan.support}</p>
                <p>{plan.access}</p>
              </div>
            </div>
            <div className="plan-footer">
              <button
                className={`plan-button ${
                  plan.highlight ? "button-highlighted" : ""
                }`}
              >
                {plan.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
