import React from "react";

import styles from "../../styles/Footer.module.css";

function Footer() {
  return (
    <div className="Footer">
      <div className={styles.container}>
        <p>Pedro Lugon © {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
