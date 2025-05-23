import styles from "./styles/styles.module.css";
import { useEffect, useState } from "react";
import Footer from "../footer/footer";
import ProfileCard from "./profileCard";
import StockCard from "./stockCard";

const initialStocks = [
  { symbol: "NBS", name: "NBS Bank Plc", price: 102.5, change: 1.35, volume: "1.2M" },
  { symbol: "FDH", name: "FDH Bank Plc", price: 85.0, change: -0.4, volume: "950K" },
  { symbol: "TNM", name: "TNM Plc", price: 18.75, change: 0.6, volume: "2.1M" },
  { symbol: "MPICO", name: "MPICO Plc", price: 25.1, change: 0.1, volume: "1.7M" },
  { symbol: "NICO", name: "NICO Holdings", price: 95.35, change: 0.95, volume: "890K" },
  { symbol: "SUNBIRD", name: "Sunbird Tourism", price: 145.0, change: -0.3, volume: "720K" },
  { symbol: "ILLOVO", name: "Illovo Sugar", price: 210.0, change: 0.15, volume: "1.3M" },
];

const Home = () => {
  const [user, setUser] = useState({
    name: "Samuel",
    balance: "MK 670,000",
    broker: "Cedar Capital"
  });
  const [stocks, setStocks] = useState(initialStocks);
  const [showBalance, setShowBalance] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => {
          const change = (Math.random() * 2 - 1).toFixed(2);
          const newPrice = (stock.price + parseFloat(change)).toFixed(2);
          return {
            ...stock,
            price: parseFloat(newPrice),
            change: parseFloat(change),
          };
        })
      );
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main_div}>
      <header className={styles.header}>
        <div>
          <div
            className={styles.profile_icon}
            onClick={() => setShowProfileMenu(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          </div>
        </div>

        {showProfileMenu && (
          <ProfileCard onClose={() => setShowProfileMenu(false)} />
        )}

        <div className={styles.user_details}>
          <p>Hello, <strong>{user.name}</strong></p>
          <p>
            Balance:{" "}
            {showBalance ? (
              <span className={styles.balance}>{user.balance}</span>
            ) : (
              <span className={styles.balance}>****</span>
            )}
          </p>
          <button
            className={styles.toggle_btn}
            onClick={() => setShowBalance((prev) => !prev)}
          >
            {showBalance ? "Hide" : "Show"} Balance
          </button>

          <p>
            Broker:{" "}
            {user.broker ? (
              <span className={styles.broker}>{user.broker}</span>
            ) : (
              <span className={styles.no_broker}>No broker selected</span>
            )}
          </p>

          {!user.broker && (
            <button className={styles.choose_broker_btn}>
              Choose Broker
            </button>
          )}
        </div>
      </header>

      <section className={styles.stocks_section}>
        <h2 className={styles.section_title}>Top MSE Stocks</h2>
        <div className={styles.stocks_grid}>
          {stocks.map((stock, index) => (
            <div
              key={index}
              className={styles.stock_card}
              onClick={() => setSelectedStock(stock)}
            >
              <h3>
                {stock.symbol} <span className={styles.company_name}>{stock.name}</span>
              </h3>
              <p className={styles.price}>MK {stock.price.toFixed(2)}</p>
              <p className={stock.change >= 0 ? styles.positive : styles.negative}>
                {stock.change >= 0 ? "+" : ""}
                {stock.change.toFixed(2)}%
              </p>
              <p className={styles.volume}>Vol: {stock.volume}</p>
            </div>
          ))}

          {selectedStock && (
            <StockCard
              stock={selectedStock}
              onClose={() => setSelectedStock(null)}
            />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
