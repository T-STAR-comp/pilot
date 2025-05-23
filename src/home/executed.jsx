import styles from "./styles/executed.module.css";

const Executed = ({ success, tradeDetails, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.executed_main_div} ${success ? styles.success : styles.failure}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close_btn} onClick={onClose}>×</button>

        {tradeDetails.status === "success" ? (
          <>
            <div className={styles.success_icon}></div>
            <h2 className={styles.title}>Trade Executed</h2>
            <div className={styles.details}>
              <p><strong>Stock:</strong> {tradeDetails.name} ({tradeDetails.symbol})</p>
              <p><strong>Shares Bought:</strong> {tradeDetails.shares}</p>
              <p><strong>Price Per Share:</strong> MK {parseFloat(tradeDetails.price).toFixed(2)}</p>
              <p><strong>Total Cost:</strong> MK {(tradeDetails.price * tradeDetails.shares).toFixed(2)}</p>
              <p><strong>Time:</strong> {tradeDetails.time}</p>
            </div>
            <button className={styles.ok_btn} onClick={onClose}>Done</button>
          </>
        ) : (
          null
        )}

        {tradeDetails.status === "null"? (
            <>
                <h2 className={styles.title}>Trade Failed ❌</h2>
                <p className={styles.errorMsg}>Some Contents are empty. Please fill all inputs and try again.</p>
                <button className={styles.ok_btn} onClick={onClose}>Close</button>
            </>
        ):
            null
        }

        {tradeDetails.status === "bal"? (
            <>
                <h2 className={styles.title}>Trade Failed ❌</h2>
                <p className={styles.errorMsg}>Insufficient funds. Please add funds to your account and try again.</p>
                <button className={styles.ok_btn} onClick={onClose}>Close</button>
            </>
        ):
            null
        }

      </div>
    </div>
  );
};

export default Executed;
