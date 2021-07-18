import React from "react";

import { FaRegSadTear } from "react-icons/fa";

import styles from "../styles/Error404.module.css";

import MetaTags from "react-meta-tags";

function Error404() {
  return (
    <>
      <MetaTags>
        <title>404</title>
        <meta name="description" content="Página não encontrada" />
      </MetaTags>
      <div className={styles.container}>
        <FaRegSadTear size={200} color="var(--green)" />
        <h1>404</h1>
        <p>Página não encontrada</p>
      </div>
    </>
  );
}

export default Error404;
