import React from "react";
import "./MultipleOpt.css";

const MultipleOpt = () => {
  const articles = [
    {
      title: "Investment Strategies 2024",
      category: "INVESTMENT",
      author: "Financial Team",
      date: "Updated Oct 24, 2024",
      imagePath: "/api/placeholder/400/300",
      description:
        "Learn about modern investment approaches and market analysis techniques.",
    },
    {
      title: "Cryptocurrency Basics",
      category: "DIGITAL ASSETS",
      author: "Crypto Team",
      date: "Updated Oct 22, 2024",
      imagePath: "/api/placeholder/400/300",
      description:
        "Understanding blockchain and digital currency fundamentals.",
    },
    {
      title: "Tax Planning Essentials",
      category: "TAX STRATEGY",
      author: "Tax Planning Team",
      date: "Updated Oct 20, 2024",
      imagePath: "/api/placeholder/400/300",
      description: "Strategic approaches to optimize your tax planning.",
    },
    {
      title: "Wealth Building Guide",
      category: "WEALTH MANAGEMENT",
      author: "Investment Team",
      date: "Updated Oct 18, 2024",
      imagePath: "/api/placeholder/400/300",
      description: "Comprehensive guide to building and maintaining wealth.",
    },
  ];

  return (
    <div className="grid-container">
      {articles.map((article, index) => (
        <div key={index} className="card">
          <div className="card-image">
            <img src={article.imagePath} alt={article.title} />
          </div>
          <div className="card-content">
            <span className="category">{article.category}</span>
            <h2 className="title">{article.title}</h2>
            <p className="author-info">
              By {article.author} | {article.date}
            </p>
            <div className="description">
              <p>{article.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleOpt;
