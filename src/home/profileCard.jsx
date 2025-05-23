import React from 'react';
import styles from "./styles/profileCard.module.css";

const ProfileCard = ({ onClose }) => {

    const UserLogout = () => {
        sessionStorage.removeItem("LOG_STATE")
        window.location.reload()
    }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.profileCard_main_div}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className={styles.drag_handle}></div>

        <button className={styles.close_btn} onClick={onClose}>×</button>

        <div className={styles.profile_option}>View Profile</div>
        <div className={styles.profile_option}>Transaction History</div>
        <div className={styles.profile_option}>Link Broker</div>
        <div className={styles.profile_option}>Settings</div>
        <div className={styles.profile_option}>Help</div>

        <div className={styles.logout_button} onClick={UserLogout}>Log Out</div>
      </div>
    </div>
  );
};

export default ProfileCard;
