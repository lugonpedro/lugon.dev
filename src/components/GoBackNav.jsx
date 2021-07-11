import React from "react";

import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "../styles/GoBackNav.module.css";

function GoBackNav() {
  return (
    <>
      <div className={styles.container}>
        <Link to="/">
          <FaArrowLeft color="black" className={styles.goBack} />
        </Link>
      </div>
    </>
  );
}

export default GoBackNav;
