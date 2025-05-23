import styles from './styles/styles.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerHeading}>Explore</h3>
                    <a href="#">Home</a>
                    <a href="#">Markets</a>
                    <a href="#">News</a>
                    <a href="#">Portfolio</a>
                </div>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerHeading}>Company</h3>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">Press</a>
                </div>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerHeading}>Support</h3>
                    <a href="#">Contact</a>
                    <a href="#">Help Center</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerHeading}>Stay Connected</h3>
                    <p>Email: support@pilot.mw</p>
                    <p>Phone: +265 999 000 000</p>
                    <p>Blantyre, Malawi</p>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>Powered by <span className={styles.oasis}>Oasis</span> &copy; {new Date().getFullYear()} — All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
