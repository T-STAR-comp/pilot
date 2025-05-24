// components/Portfolio.jsx

import React, { useState } from 'react';
import styles from './styles/Potfolio.module.css';
import Footer from '../footer/footer';

const Portfolio = ({ balance, activeTrades, investmentSummary, transactions, close }) => {
  const [selectedTradeIndex, setSelectedTradeIndex] = useState(null);

  const toggleTradeOptions = (index) => {
    setSelectedTradeIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleCloseTrade = (trade) => {
    alert(`Closing trade for ${trade.stockName} (${trade.symbol})`);
    // Implement your logic for closing a trade
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Portfolio Overview</h2>
          <button className={styles.closeButton} onClick={close}>×</button>
        </div>

        {/* Current Balance */}
        <section className={styles.section}>
          <h3>Current Balance</h3>
          <p className={styles.balanceAmount}>MK {balance.toFixed(2)}</p>
        </section>

        {/* Active Trades */}
        <section className={styles.section}>
          <h3>Active Trades</h3>
          <div className={styles.tradeList}>
            {activeTrades.map((trade, index) => (
              <div key={index} className={styles.tradeItemWrapper}>
                <div
                  className={styles.tradeItem}
                  onClick={() => toggleTradeOptions(index)}
                >
                  <span>{trade.stockName} ({trade.symbol})</span>
                  <span>{trade.quantity} shares</span>
                  <span>MK {trade.currentValue.toFixed(2)}</span>
                </div>

                {selectedTradeIndex === index && (
                  <div className={styles.tradeOptions}>
                    <button onClick={() => handleCloseTrade(trade)}>Close Trade</button>
                    <button onClick={() => {setSelectedTradeIndex(null)}} >Close Option</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Investment Summary */}
        <section className={styles.section}>
          <h3>Investment Summary</h3>
          <div className={styles.summaryGrid}>
            <div>
              <p>Total Invested</p>
              <p>MK {investmentSummary.totalInvested.toFixed(2)}</p>
            </div>
            <div>
              <p>Returns</p>
              <p>MK {investmentSummary.returns.toFixed(2)}</p>
            </div>
            <div>
              <p>Profit/Loss</p>
              <p>MK {investmentSummary.profitLoss.toFixed(2)}</p>
            </div>
          </div>
        </section>

        {/* Recent Transactions */}
        <section className={styles.section}>
          <h3>Recent Transactions</h3>
          <ul className={styles.transactionsList}>
            {transactions.map((txn, index) => (
              <li key={index} className={styles.transactionItem}>
                <span>{txn.date}</span>
                <span>{txn.type}</span>
                <span>{txn.stockName} ({txn.symbol})</span>
                <span>{txn.quantity} shares</span>
                <span>MK {txn.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Charts Section Placeholder */}
        <section className={styles.section}>
          <h3>Portfolio Distribution</h3>
          <div className={styles.chartPlaceholder}>[Chart Placeholder]</div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
