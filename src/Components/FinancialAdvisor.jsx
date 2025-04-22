import React, { useState } from "react";

const FinancialAdvisor = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [loans, setLoans] = useState(0);
  const [emi, setEmi] = useState(0);
  const [advice, setAdvice] = useState("");
  const [savingPlan, setSavingPlan] = useState("");
  const [investmentTips, setInvestmentTips] = useState("");

  const calculateFinancialHealth = () => {
    const monthlySavings = income - expenses - emi;
    const debtToIncomeRatio = (emi / income) * 100;

    if (monthlySavings < 0) {
      setAdvice(
        "You are living beyond your means. Reduce expenses and increase income."
      );
    } else if (debtToIncomeRatio > 30) {
      setAdvice(
        "High debt-to-income ratio. Consider consolidating loans or increasing income."
      );
    } else {
      setAdvice("Good financial health. Continue saving and investing.");
    }

    // Personalized saving plan
    const savingPercentage = 0.2; // 20% of monthly income
    const monthlySavingAmount = income * savingPercentage;
    setSavingPlan(`Save ₹${monthlySavingAmount} per month`);

    // Investment tips
    if (loans > 0) {
      setInvestmentTips("Pay off high-interest loans before investing.");
    } else if (monthlySavings > 5000) {
      setInvestmentTips(
        "Consider investing in low-risk mutual funds or index funds."
      );
    } else {
      setInvestmentTips("Start with a liquid fund or savings account.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "income":
        setIncome(parseInt(value));
        break;
      case "expenses":
        setExpenses(parseInt(value));
        break;
      case "loans":
        setLoans(parseInt(value));
        break;
      case "emi":
        setEmi(parseInt(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="financial-advisor">
      <h1>Financial Advisor</h1>
      <form>
        <div className="input-group">
          <label>Monthly Income:</label>
          <input
            type="number"
            name="income"
            value={income}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label>Monthly Expenses:</label>
          <input
            type="number"
            name="expenses"
            value={expenses}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label>Total Loans:</label>
          <input
            type="number"
            name="loans"
            value={loans}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label>Monthly EMI:</label>
          <input
            type="number"
            name="emi"
            value={emi}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={calculateFinancialHealth}>
          Get Financial Advice
        </button>
      </form>
      <div className="advice-section">
        <h2>Financial Advice:</h2>
        <p>{advice}</p>
        <h2>Personalized Saving Plan:</h2>
        <p>{savingPlan}</p>
        <h2>Investment Tips:</h2>
        <p>{investmentTips}</p>
      </div>
    </div>
  );
};

export default FinancialAdvisor;
