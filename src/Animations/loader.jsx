import styles from "./styles/styles.module.css";

const Loader = () => {
  return (
    <div className={styles.main_loader_div}>
      <div className={styles.loader_spinner}></div>
    </div>
  );
};

export default Loader;
