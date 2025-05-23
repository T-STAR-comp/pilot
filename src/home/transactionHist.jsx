import React from 'react';
import styles from "./styles/transHist.module.css";

const TransactionHist = ({ onClose }) => {
  // Dummy transaction data
  const dummyTransactions = [
    { date: "2025-05-01", type: "Buy", stock: "NBS", amount: 150000 },
    { date: "2025-05-03", type: "Sell", stock: "FDH", amount: 90000 },
    { date: "2025-05-04", type: "Buy", stock: "TNM", amount: -50000 },
    { date: "2025-05-07", type: "Sell", stock: "ILLOVO", amount: 200000 },
    { date: "2025-05-09", type: "Buy", stock: "NICO", amount: -25000 },
  ];

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.transactionHist_main_div}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.drag_handle}></div>
        <button className={styles.close_btn} onClick={onClose}>×</button>

        <h2 className={styles.heading}>Transaction History</h2>

        <div className={styles.action_buttons}>
          <button className={styles.action_btn}>Download PDF</button>
          <button className={styles.action_btn}>Delete History</button>
        </div>

        <div className={styles.transactions_container}>
          {dummyTransactions.map((tx, index) => (
            <div key={index} className={styles.transaction_item}>
              <div><strong>{tx.type}</strong> - {tx.stock}</div>
              <div
                className={
                  tx.amount < 0
                    ? styles.negative_amount
                    : styles.positive_amount
                }
              >
                MWK {Math.abs(tx.amount).toLocaleString()}
              </div>
              <div className={styles.date}>{tx.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHist;
