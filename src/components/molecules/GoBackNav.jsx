import React from "react";

import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "../../styles/GoBackNav.module.css";

function GoBackNav() {
  return (
    <>
      <div className={styles.container}>
        <Link to="/">
          <FaArrowLeft size={30} color="black" />
        </Link>
      </div>
    </>
  );
}

export default GoBackNav;
