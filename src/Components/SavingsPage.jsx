import React, { useState } from 'react';
import { 
  PiggyBank, 
  Target, 
  Calculator, 
  BookOpen, 
  RefreshCw,
  ChevronRight
} from 'lucide-react';
import './SavingsPage.css';

const SavingsPage = () => {
  const [activeTab, setActiveTab] = useState('accounts');
  
  const savingsAccounts = [
    {
      name: "High-Yield Savings",
      rate: "4.50%",
      minBalance: "$0",
      monthlyFee: "$0"
    },
    {
      name: "Premium Savings",
      rate: "4.25%",
      minBalance: "$2,500",
      monthlyFee: "$5"
    },
    {
      name: "Student Savings",
      rate: "3.75%",
      minBalance: "$100",
      monthlyFee: "$0"
    }
  ];

  const savingsGoals = {
    emergency: { current: 5000, target: 10000, name: "Emergency Fund" },
    education: { current: 15000, target: 50000, name: "Education" },
    home: { current: 35000, target: 100000, name: "Home Down Payment" }
  };

  return (
    <div className="savings-container">
      <h1>Your Savings Dashboard</h1>
      
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'accounts' ? 'active' : ''}`}
          onClick={() => setActiveTab('accounts')}
        >
          <PiggyBank className="icon" />
          Accounts
        </button>
        <button 
          className={`tab ${activeTab === 'goals' ? 'active' : ''}`}
          onClick={() => setActiveTab('goals')}
        >
          <Target className="icon" />
          Goals
        </button>
        <button 
          className={`tab ${activeTab === 'budget' ? 'active' : ''}`}
          onClick={() => setActiveTab('budget')}
        >
          <Calculator className="icon" />
          Budget
        </button>
        <button 
          className={`tab ${activeTab === 'learn' ? 'active' : ''}`}
          onClick={() => setActiveTab('learn')}
        >
          <BookOpen className="icon" />
          Learn
        </button>
        <button 
          className={`tab ${activeTab === 'automatic' ? 'active' : ''}`}
          onClick={() => setActiveTab('automatic')}
        >
          <RefreshCw className="icon" />
          Auto-Save
        </button>
      </div>

      <div className="content">
        {activeTab === 'accounts' && (
          <div className="accounts-grid">
            {savingsAccounts.map((account) => (
              <div className="account-card" key={account.name}>
                <h3>{account.name}</h3>
                <div className="account-details">
                  <div className="detail-row">
                    <span>Interest Rate:</span>
                    <span className="rate">{account.rate}</span>
                  </div>
                  <div className="detail-row">
                    <span>Min Balance:</span>
                    <span>{account.minBalance}</span>
                  </div>
                  <div className="detail-row">
                    <span>Monthly Fee:</span>
                    <span>{account.monthlyFee}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'goals' && (
          <div className="goals-section">
            <h2>Savings Goals Progress</h2>
            {Object.entries(savingsGoals).map(([key, goal]) => (
              <div className="goal-item" key={key}>
                <div className="goal-header">
                  <span>{goal.name}</span>
                  <span className="amount">
                    ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ width: `${(goal.current / goal.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'budget' && (
          <div className="budget-section">
            <h2>Budget Calculator</h2>
            <div className="budget-form">
              <div className="form-group">
                <label>Monthly Income</label>
                <input type="number" placeholder="Enter your monthly income" />
              </div>
              <div className="form-group">
                <label>Monthly Expenses</label>
                <input type="number" placeholder="Enter your monthly expenses" />
              </div>
              <button className="calculate-btn">Calculate Savings Potential</button>
            </div>
          </div>
        )}

        {activeTab === 'learn' && (
          <div className="learn-grid">
            <div className="learn-card">
              <div className="learn-header">
                <h3>Saving Strategies 101</h3>
                <ChevronRight />
              </div>
              <p>Learn fundamental strategies for effective saving and building wealth.</p>
            </div>
            <div className="learn-card">
              <div className="learn-header">
                <h3>Emergency Fund Guide</h3>
                <ChevronRight />
              </div>
              <p>Why you need an emergency fund and how to build one effectively.</p>
            </div>
          </div>
        )}

        {activeTab === 'automatic' && (
          <div className="auto-save-section">
            <h2>Automatic Savings Setup</h2>
            <div className="auto-save-form">
              <div className="form-group">
                <label>Transfer Amount</label>
                <input type="number" placeholder="Enter amount" />
              </div>
              <div className="form-group">
                <label>Frequency</label>
                <select>
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <button className="setup-btn">Set Up Auto-Save</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavingsPage;