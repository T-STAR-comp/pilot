import styles from "./styles/styles.module.css";

const mseStockData = [
    { name: "National Bank", price: "MWK 1,250.00", change: "+2.1%" },
    { name: "FDH Bank", price: "MWK 30.50", change: "-0.8%" },
    { name: "Illovo Sugar", price: "MWK 510.00", change: "+1.5%" },
    { name: "Airtel Malawi", price: "MWK 51.20", change: "-1.2%" },
    { name: "Press Corporation", price: "MWK 2,000.00", change: "+3.0%" },
    { name: "Sunbird Tourism", price: "MWK 120.50", change: "-0.5%" },
    { name: "Standard Bank", price: "MWK 1,900.00", change: "+0.9%" },
];

const GridData = () => {
    return (
        <div className={styles.gridContainer}>
            {mseStockData.map((stock, index) => (
                <div key={index} className={styles.stockCard}>
                    <h3 className={styles.stockName}>{stock.name}</h3>
                    <p className={styles.stockPrice}>{stock.price}</p>
                    <p 
                        className={`${styles.stockChange} ${stock.change.startsWith('+') ? styles.positive : styles.negative}`}>
                        {stock.change}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default GridData;
