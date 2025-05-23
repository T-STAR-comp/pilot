import { motion } from "framer-motion";
import styles from "./styles/styles.module.css";

const HeroSection = (props) => {
    return (
        <motion.div 
            className={styles.heroContainer}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <motion.div 
                className={styles.heroContent}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
                <h1 className={styles.heroTitle}>
                    <motion.span 
                        className={styles.pilotText}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        Welcome
                    </motion.span> 
                </h1>
                <p className={styles.heroSubtitle}>
                    Malawi's premier investor platform. Connect with brokers, execute trades, and take control of your financial future.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;
