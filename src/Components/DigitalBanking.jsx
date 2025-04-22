import React from 'react';
import { 
  LineChart, 
  BarChart2, 
  Users, 
  MessageSquareText,
  ChevronRight
} from 'lucide-react';
import './DigitalBanking.css';

const DigitalBanking = () => {
  const features = [
    {
      title: 'Smart Budgeting & Expense Tracking',
      description: 'AI-powered insights into your spending habits with personalized recommendations',
      icon: <LineChart className="feature-icon" />,
      action: () => console.log('Smart Budgeting clicked')
    },
    {
      title: 'Gold Price Prediction',
      description: 'Personalized gold price predictions based on market trends and your investment goals',
      icon: <BarChart2 className="feature-icon" />,
      action: () => console.log('Investment Portfolios clicked')
    },
    {
      title: 'Credit Card Fraud Detection',
      description: 'Real-time analysis of transactions to detect suspicious activities',
      icon: <Users className="feature-icon" />,
      action: () => console.log('Fraud Detection clicked')
    },
    {
      title: '24/7 AI Customer Support',
      description: 'Instant assistance for all your banking queries',
      icon: <MessageSquareText className="feature-icon" />,
      action: () => console.log('Customer Support clicked')
    }
  ];

  return (
    <div className="digital-banking">
      <div className="container">
        <header className="header">
          <h1 className="title">Digital Banking</h1>
          <p className="subtitle">
            Experience the future of banking with our AI-powered solutions
          </p>
        </header>

        <div className="features-grid">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={feature.action}
              className="feature-button"
            >
              <div className="feature-header">
                <span className="icon-wrapper">
                  {feature.icon}
                </span>
                <span className="feature-title">{feature.title}</span>
              </div>
              <p className="feature-description">
                {feature.description}
              </p>
              <div className="access-feature">
                <span>Access Feature</span>
                <ChevronRight className="chevron-icon" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalBanking;