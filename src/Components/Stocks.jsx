import { motion } from 'framer-motion';
import React from 'react';
import './Stocks.css';

const Stocks = () => {
  return (
    <center><div className="stocks-container">
      <header className="stocks-header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore Stocks
        </motion.h1>
        <p className="stocks-description">
          <center>Discover top stocks and insights to enhance your investment portfolio.</center>
        </p>
      </header>

      <div className="stocks-content">
        <motion.div
          className="stock-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://wallpaperaccess.com/full/2927375.png"
            alt="Top Performing Stocks"
            className="stock-image"
          />
          <h2 className="stock-title">Top Performing Stocks</h2>
          <p className="stock-text">
            Get insights on the top-performing stocks in the market.
          </p>
        </motion.div>

        <motion.div
          className="stock-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDkwfHxzdG9ja3xlbnwwfHx8fDE2OTgyNzI5MzI&ixlib=rb-1.2.1&q=80&w=400"
            alt="Stock Market Analysis"
            className="stock-image"
          />
          <h2 className="stock-title">Stock Market Analysis</h2>
          <p className="stock-text">
            Stay updated with detailed market analysis and reports.
          </p>
        </motion.div>

        <motion.div
          className="stock-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDQ2fHxzdG9ja3xlbnwwfHx8fDE2OTgyNzI5MzI&ixlib=rb-1.2.1&q=80&w=400"
            alt="Investment Strategies"
            className="stock-image"
          />
          <h2 className="stock-title">Investment Strategies</h2>
          <p className="stock-text">
            Learn the best strategies to grow your stock investments.
          </p>
        </motion.div>
      </div>
    </div></center>
  );
};

export default Stocks;
