import React, { useState, useEffect } from "react";
import styles from "./styles/stockCard.module.css";
import Executed from "./executed";

const StockCard = ({ stock, userData, onClose }) => {
  const [shares, setShares] = useState("");
  const [amount, setAmount] = useState("");
  const [showExecuted, setExecuted] = useState(false);
  const [tradeDetails, setTradeDetails] = useState({});
  const [mode, setMode] = useState("shares");

  useEffect(() => {
    const price = stock.price;

    if (mode === "shares") {
      const numericShares = parseFloat(shares);
      if (!isNaN(numericShares)) {
        setAmount((numericShares * price).toFixed(2));
      } else {
        setAmount("");
      }
    } else if (mode === "amount") {
      const numericAmount = parseFloat(amount);
      if (!isNaN(numericAmount)) {
        setShares((numericAmount / price).toFixed(2));
      } else {
        setShares("");
      }
    }
  }, [shares, amount, mode, stock.price]);

  const BuyExecution = (StockName, StockPrice, Shares, Amount) => {

        if (StockName && StockPrice && Shares && Amount) {

            if (userData.balance >= 100000) {
                setTradeDetails({
                status: "success",
                name: StockName,
                price: StockPrice,
                shares: Shares,
                amount: Amount,
                symbol: stock.symbol,
                time: new Date().toLocaleString(),
                });
                setExecuted(true);
            }

            if (userData.balance < 100000){
                setTradeDetails({
                    status: "bal"
                    });
                setExecuted(true);
            }
        }
    
        if (!Shares && !Amount) {
          setTradeDetails({
            status: "null"
          });
          setExecuted(true);
        }
  };

  const handleSharesChange = (e) => {
    setMode("shares");
    setShares(e.target.value);
  };

  const handleAmountChange = (e) => {
    setMode("amount");
    setAmount(e.target.value);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      {showExecuted && (
        <Executed
          success={true}
          tradeDetails={tradeDetails}
          onClose={() => setExecuted(false)}
        />
      )}

      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.drag_handle}></div>
        <button className={styles.backBtn} onClick={onClose}>
          ×
        </button>

        <h2>
          {stock.symbol} - {stock.name}
        </h2>
        <p>
          <strong>Price:</strong> MK {stock.price.toFixed(2)}
        </p>
        <p>
          <strong>Change:</strong> {stock.change >= 0 ? "+" : ""}
          {stock.change.toFixed(2)}%
        </p>
        <p>
          <strong>Volume:</strong> {stock.volume}
        </p>

        <div className={styles.tradeInputs}>
          <label htmlFor="shares">Number of Shares</label>
          <input
            type="number"
            id="shares"
            value={shares}
            onChange={handleSharesChange}
            placeholder="e.g. 10"
          />

          <label htmlFor="amount">Amount in Kwacha</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="e.g. 10000"
          />
        </div>

        <div className={styles.summary}>
          <p>
            <strong>Total:</strong> MK {parseFloat(amount || 0).toFixed(2)}
          </p>
          <p>
            <strong>Estimated Shares:</strong> {parseFloat(shares || 0).toFixed(2)}
          </p>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.actionBtn}
            onClick={() =>
              BuyExecution(stock.name, stock.price, shares, amount)
            }
          >
            Confirm Buy
          </button>
          <button className={styles.actionBtn}>Sell</button>
          <button className={styles.actionBtn}>Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
