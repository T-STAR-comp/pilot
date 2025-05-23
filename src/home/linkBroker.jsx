import React, { useState } from "react";
import styles from "./styles/linkBroker.module.css";

const LinkBroker = ({ onClose }) => {
  const [selectedBroker, setSelectedBroker] = useState("");
  const [selectedServer, setSelectedServer] = useState("");
  const [accountId, setAccountId] = useState("");

  const brokers = [
    "Alliance Stockbrokers",
    "Cedar Capital",
    "Continental Capital",
    "Stockbrokers Malawi",
    "NBS Stockbrokers",
  ];

  const servers = [
    "SERVER__001__NTR",
    "SERVER__002__NTR",
    "SERVER__003__NTR",
    "SERVER__004__NTR",
    "SERVER__005__NTR"
  ];

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.LinkBroker_main_div}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.drag_handle}></div>
        <button className={styles.close_btn} onClick={onClose}>×</button>

        <h2 className={styles.heading}>Link Your Broker</h2>

        <div className={styles.form}>
          <label htmlFor="broker">Select Broker</label>
          <select
            id="broker"
            value={selectedBroker}
            onChange={(e) => setSelectedBroker(e.target.value)}
          >
            <option value="" disabled>Select a broker</option>
            {brokers.map((broker, index) => (
              <option key={index} value={broker}>{broker}</option>
            ))}
          </select>

          <label htmlFor="server">Select Server</label>
          <select
            id="server"
            value={selectedServer}
            onChange={(e) => setSelectedServer(e.target.value)}
          >
            <option value="" disabled>Select a server</option>
            {servers.map((server, index) => (
              <option key={index} value={server}>{server}</option>
            ))}
          </select>

          <label htmlFor="accountId">Broker Account ID</label>
          <input
            type="text"
            id="accountId"
            placeholder="Enter your broker account ID"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
          />

          <button className={styles.link_button}>Link Broker</button>
        </div>
      </div>
    </div>
  );
};

export default LinkBroker;
