import {
  Activity,
  BarChart2,
  BookOpen,
  DollarSign,
  Search,
  TrendingDown,
  TrendingUp,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import "./Smeter.css";

const FinanceDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [stockData, setStockData] = useState([
    {
      name: "AAPL",
      price: 178.42,
      change: +2.31,
      volume: "23.5M",
      details: { marketCap: "2.8T", pe: "28.5", dividend: "0.65%" },
    },
    {
      name: "GOOGL",
      price: 142.56,
      change: -1.24,
      volume: "15.2M",
      details: { marketCap: "1.8T", pe: "24.2", dividend: "0%" },
    },
    {
      name: "AMZN",
      price: 178.92,
      change: +3.45,
      volume: "18.7M",
      details: { marketCap: "1.9T", pe: "60.8", dividend: "0%" },
    },
    {
      name: "MSFT",
      price: 412.64,
      change: +1.78,
      volume: "20.1M",
      details: { marketCap: "2.9T", pe: "35.2", dividend: "0.8%" },
    },
    {
      name: "TSLA",
      price: 185.27,
      change: -2.15,
      volume: "25.3M",
      details: { marketCap: "586B", pe: "44.3", dividend: "0%" },
    },
    {
      name: "META",
      price: 498.19,
      change: +4.23,
      volume: "16.9M",
      details: { marketCap: "1.2T", pe: "33.7", dividend: "0%" },
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStockData((prevData) =>
        prevData.map((stock) => ({
          ...stock,
          price: +(stock.price + (Math.random() - 0.5) * 0.5).toFixed(2),
          change: +(stock.change + (Math.random() - 0.5) * 0.2).toFixed(2),
        }))
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const highlightTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stockData.length);
    }, 3000);
    return () => clearInterval(highlightTimer);
  }, [stockData.length]);

  const sectors = [
    { name: "Technology", performance: "+2.4%", trend: "up", volume: "245M" },
    { name: "Healthcare", performance: "-0.8%", trend: "down", volume: "180M" },
    { name: "Finance", performance: "+1.2%", trend: "up", volume: "210M" },
    { name: "Energy", performance: "+3.1%", trend: "up", volume: "195M" },
    {
      name: "Real Estate",
      performance: "-1.5%",
      trend: "down",
      volume: "150M",
    },
    { name: "Consumer", performance: "+0.9%", trend: "up", volume: "165M" },
  ];

  const articles = [
    {
      title: "Market Analysis: Tech Stocks Soar",
      time: "2h ago",
      tags: ["Technology", "Markets"],
    },
    {
      title: "Global Markets: Asian Stocks Rally",
      time: "4h ago",
      tags: ["Global", "Asia"],
    },
    {
      title: "Cryptocurrency Update: Bitcoin Surges",
      time: "6h ago",
      tags: ["Crypto", "Bitcoin"],
    },
    {
      title: "Federal Reserve Hints at Rate Changes",
      time: "8h ago",
      tags: ["Economy", "Fed"],
    },
  ];

  const showStockDetails = (stock) => {
    const content = (
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{stock.name} Stock Details</h2>
          <button
            onClick={() => setShowPopup(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="font-medium text-gray-600">Current Price</div>
            <div className="text-2xl font-bold">${stock.price}</div>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="font-medium text-gray-600">Change</div>
            <div
              className={`text-2xl font-bold ${
                stock.change > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {stock.change > 0 ? "+" : ""}
              {stock.change}%
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="font-medium text-gray-600">Volume</div>
            <div className="text-2xl font-bold">{stock.volume}</div>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="font-medium text-gray-600">Market Cap</div>
            <div className="text-2xl font-bold">{stock.details.marketCap}</div>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="font-medium text-gray-600">P/E Ratio</div>
            <div className="text-2xl font-bold">{stock.details.pe}</div>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="font-medium text-gray-600">Dividend Yield</div>
            <div className="text-2xl font-bold">{stock.details.dividend}</div>
          </div>
        </div>
      </div>
    );
    setPopupContent(content);
    setShowPopup(true);
  };

  return (
    <div className="dashboard-container relative">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <DollarSign className="text-green-500" size={24} />
          <h1>FinDash</h1>
        </div>
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search stocks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </nav>

      <div className="dashboard-grid">
        {/* Stock-O-Meter Section */}
        <div className="dashboard-card stock-meter">
          <div className="card-header">
            <Activity className="text-green-500" />
            <h2>Stock-O-Meter</h2>
          </div>
          <div className="stocks-container">
            {stockData
              .filter((stock) =>
                stock.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((stock, index) => (
                <div
                  key={stock.name}
                  className={`stock-card ${
                    index === currentIndex ? "active-stock" : ""
                  } cursor-pointer hover:bg-gray-50`}
                  onClick={() => showStockDetails(stock)}
                >
                  <div className="stock-info">
                    <span className="stock-name">{stock.name}</span>
                    <span className="stock-volume">{stock.volume}</span>
                  </div>
                  <div className="stock-price">
                    <span className="price-value">${stock.price}</span>
                    <span
                      className={`price-change ${
                        stock.change > 0 ? "positive" : "negative"
                      }`}
                    >
                      {stock.change > 0 ? (
                        <TrendingUp size={20} />
                      ) : (
                        <TrendingDown size={20} />
                      )}
                      {Math.abs(stock.change)}%
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Market Sectors Section */}
        <div className="dashboard-card sectors">
          <div className="card-header">
            <BarChart2 className="text-green-500" />
            <h2>Market Sectors</h2>
          </div>
          <div className="sectors-grid">
            {sectors.map((sector) => (
              <div key={sector.name} className="sector-card glass-effect">
                <div className="sector-info">
                  <span className="sector-name">{sector.name}</span>
                  <span className="sector-volume">{sector.volume}</span>
                </div>
                <div className={`sector-performance ${sector.trend}`}>
                  {sector.performance}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News Feed Section */}
        <div className="dashboard-card news-feed">
          <div className="card-header">
            <BookOpen className="text-green-500" />
            <h2>Latest Updates</h2>
          </div>
          <div className="news-container">
            {articles.map((article, index) => (
              <div key={index} className="news-item">
                <div className="news-content">
                  <h3>{article.title}</h3>
                  <span className="news-time">{article.time}</span>
                </div>
                <div className="news-tags">
                  {article.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceDashboard;
