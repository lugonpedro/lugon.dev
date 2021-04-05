import React from "react";

import { FaRegSadTear } from "react-icons/fa";

import GoBackNav from "../components/molecules/GoBackNav";

import styles from "../styles/Error404.module.css";

function Error404() {
  return (
    <>
      <GoBackNav />
      <div className={styles.container}>
        <FaRegSadTear size={200} color="var(--green)" />
        <h1>404</h1>
        <p>Página não encontrada</p>
      </div>
    </>
  );
}

export default Error404;
