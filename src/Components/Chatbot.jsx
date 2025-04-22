import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const FinanceChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! I'm your financial assistant. I can help you with investments, budgeting, retirement, credit, taxes, insurance, cryptocurrency, real estate, and more. What would you like to know?",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const financialResponses = {
    investment: {
      keywords: [
        "invest",
        "stock",
        "bond",
        "portfolio",
        "market",
        "etf",
        "mutual fund",
        "dividend",
      ],
      response:
        "Here's comprehensive investment guidance:\n\n1. Investment Strategy:\n   • Diversify across asset classes\n   • Consider low-cost index funds\n   • Reinvest dividends\n   • Monitor market trends\n\n2. Risk Management:\n   • Assess your risk tolerance\n   • Use dollar-cost averaging\n   • Maintain emergency funds\n\n3. Common Investment Types:\n   • Stocks: Individual company ownership\n   • Bonds: Government/corporate debt\n   • ETFs: Diversified, traded like stocks\n   • Mutual Funds: Professionally managed portfolios",
    },
    budgeting: {
      keywords: [
        "budget",
        "save",
        "saving",
        "spend",
        "spending",
        "expense",
        "income",
        "money",
        "cash",
      ],
      response:
        "Essential budgeting strategies:\n\n1. 50/30/20 Rule:\n   • 50% for needs\n   • 30% for wants\n   • 20% for savings/debt\n\n2. Practical Steps:\n   • Track all expenses\n   • Use budgeting apps\n   • Set automatic transfers\n   • Review monthly statements\n\n3. Emergency Fund:\n   • Aim for 3-6 months of expenses\n   • Keep in accessible account\n   • Replenish after using",
    },
    cryptocurrency: {
      keywords: [
        "crypto",
        "bitcoin",
        "ethereum",
        "blockchain",
        "digital currency",
        "btc",
        "eth",
      ],
      response:
        "Important cryptocurrency considerations:\n\n1. Investment Approach:\n   • Start small and research thoroughly\n   • Understand blockchain technology\n   • Use reputable exchanges\n\n2. Risk Factors:\n   • High volatility\n   • Regulatory changes\n   • Security concerns\n\n3. Best Practices:\n   • Use secure wallets\n   • Diversify holdings\n   • Keep private keys safe\n   • Consider cold storage",
    },
    realEstate: {
      keywords: [
        "real estate",
        "property",
        "mortgage",
        "rent",
        "house",
        "apartment",
        "reit",
      ],
      response:
        "Real estate investment guide:\n\n1. Property Investment:\n   • Evaluate location carefully\n   • Calculate all costs\n   • Consider maintenance\n   • Research market trends\n\n2. Financing Options:\n   • Traditional mortgages\n   • FHA loans\n   • Investment property loans\n   • REITs for passive income\n\n3. Risk Management:\n   • Property insurance\n   • Tenant screening\n   • Emergency repairs fund",
    },
    personalFinance: {
      keywords: ["salary", "raise", "negotiate", "career", "job", "income"],
      response:
        "Personal finance optimization:\n\n1. Income Growth:\n   • Negotiate salaries effectively\n   • Develop valuable skills\n   • Explore side hustles\n   • Network professionally\n\n2. Career Development:\n   • Set clear goals\n   • Track achievements\n   • Build industry connections\n\n3. Financial Planning:\n   • Create multiple income streams\n   • Invest in self-development\n   • Plan for career transitions",
    },
    financialPlanning: {
      keywords: ["plan", "goal", "future", "wealth", "net worth"],
      response:
        "Comprehensive financial planning:\n\n1. Short-term Goals (1-3 years):\n   • Build emergency fund\n   • Pay off high-interest debt\n   • Start investment accounts\n\n2. Medium-term Goals (3-10 years):\n   • Home ownership\n   • Career advancement\n   • Education funding\n\n3. Long-term Goals (10+ years):\n   • Retirement planning\n   • Estate planning\n   • Wealth transfer strategies",
    },
  };

  const calculateRelevanceScore = (input, keywords) => {
    const words = input.toLowerCase().split(" ");
    return keywords.reduce((score, keyword) => {
      if (input.toLowerCase().includes(keyword.toLowerCase())) {
        score += keyword.split(" ").length; // Multi-word keywords get higher scores
      }
      return score;
    }, 0);
  };

  const getResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    let bestResponse = null;
    let highestScore = 0;

    // Check each category for matching keywords and calculate relevance
    for (const category in financialResponses) {
      const score = calculateRelevanceScore(
        lowercaseInput,
        financialResponses[category].keywords
      );
      if (score > highestScore) {
        highestScore = score;
        bestResponse = financialResponses[category].response;
      }
    }

    // Custom responses for specific questions
    if (lowercaseInput.includes("hello") || lowercaseInput.includes("hi")) {
      return "Hello! How can I help you with your financial questions today?";
    }

    if (lowercaseInput.includes("thank")) {
      return "You're welcome! Is there anything else you'd like to know about personal finance?";
    }

    // Return best matching response or default if no good match
    return highestScore > 0
      ? bestResponse
      : "I can help you with various financial topics including:\n\n" +
          "• Investments & Trading\n" +
          "• Budgeting & Saving\n" +
          "• Cryptocurrency\n" +
          "• Real Estate\n" +
          "• Personal Finance\n" +
          "• Financial Planning\n\n" +
          "Please ask a specific question about any of these topics!";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: inputText }]);
    setInputText("");

    // Simulate bot typing with variable delay based on response length
    setIsTyping(true);
    const response = getResponse(inputText);
    const typingDelay = Math.min(1000 + response.length / 10, 2000);

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text: response }]);
      setIsTyping(false);
    }, typingDelay);
  };

  return (
    <>
      <button
        className={`chat-toggle-btn ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen(true)}
      >
        Chat with Financial Assistant
      </button>

      <div className={`chat-window ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <h3 className="chat-header-title">Financial Assistant</h3>
          <button className="close-button" onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              <div className="message-content">
                {message.text.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <div className="message-content typing">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask a financial question..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default FinanceChatbot;
