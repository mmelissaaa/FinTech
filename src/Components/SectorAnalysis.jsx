// SectorAnalysis.jsx
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./SectorAnalysis.css";

const SectorAnalysis = () => {
  const [selectedSector, setSelectedSector] = useState(null);

  // Sample data - replace with actual API data
  const sectorData = [
    {
      name: "Technology",
      performance: 28.5,
      marketCap: 125,
      volatility: "Medium",
      trends: [
        "AI and Machine Learning Integration",
        "Cloud Computing Expansion",
        "Cybersecurity Enhancement",
      ],
    },
    {
      name: "Healthcare",
      performance: 15.2,
      marketCap: 95,
      volatility: "Low",
      trends: [
        "Telemedicine Growth",
        "Biotech Innovation",
        "Digital Health Records",
      ],
    },
    {
      name: "Finance",
      performance: 22.1,
      marketCap: 110,
      volatility: "Medium",
      trends: [
        "Digital Banking",
        "Blockchain Integration",
        "Fintech Solutions",
      ],
    },
    {
      name: "Energy",
      performance: 18.7,
      marketCap: 85,
      volatility: "High",
      trends: ["Renewable Energy", "Smart Grid Technology", "Energy Storage"],
    },
    {
      name: "Consumer",
      performance: 12.4,
      marketCap: 78,
      volatility: "Low",
      trends: [
        "E-commerce Growth",
        "Personalized Marketing",
        "Sustainable Products",
      ],
    },
  ];

  const formatPerformance = (value) => `${value}%`;
  const formatMarketCap = (value) => `$${value}B`;

  const getVolatilityClass = (volatility) => {
    switch (volatility.toLowerCase()) {
      case "high":
        return "high";
      case "medium":
        return "medium";
      case "low":
        return "low";
      default:
        return "";
    }
  };

  return (
    <div className="sector-analysis">
      <h1 className="main-title">Sector Analysis</h1>

      {/* Performance by Sector */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">📊 Performance by Sector</h2>
        </div>
        <div className="card-content">
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sectorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" stroke="#333" />
                <YAxis stroke="#333" tickFormatter={formatPerformance} />
                <Tooltip
                  formatter={formatPerformance}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e0e0e0",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="performance"
                  fill="#2E8B57"
                  name="Performance"
                  onClick={(data) => setSelectedSector(data.name)}
                  cursor="pointer"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="sector-metrics">
            {sectorData.map((sector) => (
              <div
                key={sector.name}
                className={`sector-metric-card ${
                  selectedSector === sector.name ? "selected" : ""
                }`}
                onClick={() => setSelectedSector(sector.name)}
              >
                <div className="sector-metric-header">
                  <h3>{sector.name}</h3>
                  <span
                    className={`volatility-badge ${getVolatilityClass(
                      sector.volatility
                    )}`}
                  >
                    {sector.volatility}
                  </span>
                </div>
                <div className="sector-metric-details">
                  <div className="metric">
                    <span className="metric-label">Performance</span>
                    <span className="metric-value">
                      {formatPerformance(sector.performance)}
                    </span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Market Cap</span>
                    <span className="metric-value">
                      {formatMarketCap(sector.marketCap)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sector Trends */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">🔄 Sector Trends</h2>
        </div>
        <div className="card-content">
          <div className="trends-container">
            {sectorData.map((sector) => (
              <div
                key={sector.name}
                className={`trend-card ${
                  selectedSector === sector.name ? "selected" : ""
                }`}
              >
                <div className="trend-header">
                  <h3>{sector.name}</h3>
                  <span className="trend-subtitle">Emerging Trends</span>
                </div>
                <ul className="trend-list">
                  {sector.trends.map((trend, index) => (
                    <li key={index} className="trend-item">
                      <span className="trend-bullet">•</span>
                      {trend}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorAnalysis;
