import React from "react";
import styles from "./styles/stockCard.module.css";

const StockCard = ({ stock, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <button className={styles.backBtn} onClick={onClose}>
          ← Back
        </button>
        <h2>{stock.symbol} - {stock.name}</h2>
        <p><strong>Price:</strong> MK {stock.price.toFixed(2)}</p>
        <p><strong>Change:</strong> {stock.change >= 0 ? "+" : ""}{stock.change.toFixed(2)}%</p>
        <p><strong>Volume:</strong> {stock.volume}</p>

        <div className={styles.actions}>
          <button className={styles.actionBtn}>Buy</button>
          <button className={styles.actionBtn}>Sell</button>
          <button className={styles.actionBtn}>Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
