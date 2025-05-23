import styles from "./styles/styles.module.css";
import { useEffect, useState } from "react";
import Loader from "../Animations/loader";
import Footer from "../footer/footer";
import ProfileCard from "./profileCard";
import StockCard from "./stockCard";
import TransactionHist from "./transactionHist"; // Import this at the top
import LinkBroker from "./linkBroker";

const initialStocks = [
  { symbol: "AIRTEL", name: "Airtel Malawi Plc", price: 127.95, change: -0.02, volume: "27,361" },
  { symbol: "BHL", name: "Blantyre Hotels Limited", price: 14.55, change: 0.0, volume: "55870" },
  { symbol: "FDHB", name: "FDH Bank Plc", price: 313.93, change: -0.01, volume: "16,302" },
  { symbol: "FMBCH", name: "FMB Capital Holdings Plc", price: 900.0, change: -10.35, volume: "100,000" },
  { symbol: "ICON", name: "Icon Properties Plc", price: 17.95, change: 0.0, volume: "110,962" },
  { symbol: "ILLOVO", name: "Illovo Sugar Limited", price: 1791.42, change: 0.0, volume: "1,400" },
  { symbol: "MPICO", name: "Malawi Property Investment Company", price: 19.0, change: 0.0, volume: "15200" },
  { symbol: "NBM", name: "National Bank of Malawi", price: 6200.14, change: 0.01, volume: "461" },
  { symbol: "NBS", name: "NBS Bank Limited", price: 341.0, change: -0.18, volume: "198,452" },
  { symbol: "NICO", name: "NICO Holdings", price: 776.43, change: -0.04, volume: "5,536" },
  { symbol: "NITL", name: "National Investment Trust Limited", price: 715.17, change: 0.02, volume: "466,900" },
  { symbol: "OMU", name: "Old Mutual Limited", price: 2500.01, change: 0.0, volume: "9520" },
  { symbol: "PCL", name: "Press Corporation Limited", price: 3999.99, change: 0.0, volume: "247" },
  { symbol: "STANDARD", name: "Standard Bank Malawi Limited", price: 9502.22, change: 0.02, volume: "26,680" },
  { symbol: "SUNBIRD", name: "Sunbird Tourism Limited", price: 345.01, change: 0.0, volume: "6580" },
  { symbol: "TNM", name: "Telekom Networks Malawi Limited", price: 23.0, change: 0.01, volume: "4,273" },
];

const Home = () => {
  const [user, setUser] = useState({
    name: "Samuel",
    balance: "MK 670,000",
    broker: "Cedar Capital"
  });
  const [LoaderState, SetLoaderState] = useState(false);
  const [stocks, setStocks] = useState(initialStocks);
  const [showBalance, setShowBalance] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showTransactionHist, setShowTransactionHist] = useState(false);
  const [showLinkBroker, setShowLinkBroker] = useState(false);




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

  if (LoaderState){
    return (
        <Loader/>
    )
  }

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
            <ProfileCard
                onClose={() => setShowProfileMenu(false)}
                showTransactionHistory={() => {
                setShowProfileMenu(false);
                setShowTransactionHist(true);
                }}
                showLinkBroker={()=>{
                setShowProfileMenu(false);
                setShowTransactionHist(false);
                setShowLinkBroker(true);
                }}
                LogOutLoader={()=> {
                    setShowBalance(true);
                }}
            />
        )}


        {showTransactionHist && (
            <TransactionHist onClose={() => setShowTransactionHist(false)} />
        )}

        {showLinkBroker && (
            <LinkBroker onClose={() => setShowLinkBroker(false)} />
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
