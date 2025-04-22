import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./MarketOverview.css";

const MarketOverview = () => {
  // Sample data - in a real app, this would come from an API
  const marketData = [
    { month: "Jan", stocks: 4000, bonds: 2400, commodities: 2400 },
    { month: "Feb", stocks: 4200, bonds: 2300, commodities: 2600 },
    { month: "Mar", stocks: 4100, bonds: 2500, commodities: 2800 },
    { month: "Apr", stocks: 4500, bonds: 2800, commodities: 2700 },
    { month: "May", stocks: 4800, bonds: 2700, commodities: 2900 },
    { month: "Jun", stocks: 5000, bonds: 2900, commodities: 3100 },
  ];

  const economicData = {
    gdp: { value: "3.2%", trend: "up" },
    unemployment: { value: "4.1%", trend: "down" },
    inflation: { value: "2.8%", trend: "up" },
    interestRate: { value: "5.25%", trend: "stable" },
  };

  const getTrendIcon = (trend) => {
    if (trend === "up") return "↑";
    if (trend === "down") return "↓";
    return "→";
  };

  return (
    <div className="market-overview">
      <h1 className="main-title">Market Overview</h1>

      {/* Market Trends Section */}
      <div className="card market-trends">
        <div className="card-header">
          <h2 className="card-title">📈 Current Market Trends</h2>
        </div>
        <div className="card-content">
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#333" />
                <YAxis stroke="#333" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e0e0e0",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="stocks"
                  stroke="#2E8B57"
                  strokeWidth={2}
                  name="Stocks"
                />
                <Line
                  type="monotone"
                  dataKey="bonds"
                  stroke="#98FB98"
                  strokeWidth={2}
                  name="Bonds"
                />
                <Line
                  type="monotone"
                  dataKey="commodities"
                  stroke="#3CB371"
                  strokeWidth={2}
                  name="Commodities"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Economic Indicators Section */}
      <div className="card economic-indicators">
        <div className="card-header">
          <h2 className="card-title">💹 Economic Indicators</h2>
        </div>
        <div className="card-content">
          <div className="indicators-grid">
            {Object.entries(economicData).map(([key, data]) => (
              <div key={key} className="indicator-card">
                <div className="indicator-content">
                  <div className="indicator-info">
                    <p className="indicator-label">
                      {key.charAt(0).toUpperCase() +
                        key.slice(1).replace(/([A-Z])/g, " $1")}
                    </p>
                    <h3 className="indicator-value">{data.value}</h3>
                  </div>
                  <span className={`trend-icon ${data.trend}`}>
                    {getTrendIcon(data.trend)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;
