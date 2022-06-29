import React from "react";

import { FaRegSadTear } from "react-icons/fa";

import styles from "../styles/Error404.module.css";

export default function Error404() {
  return (
    <div className={styles.container}>
      <FaRegSadTear size={200} color="var(--green)" />
      <h1>404</h1>
      <p>Página não encontrada</p>
    </div>
  );
}
