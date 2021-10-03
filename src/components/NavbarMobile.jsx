import React, { useState } from "react";

import styles from "../styles/NavbarMobile.module.css";
import {
  FaBars,
  FaTimes,
  FaUserAlt,
  FaListAlt,
  FaPencilRuler,
  FaHistory,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function NavbarMobile() {
  const [showing, setShowing] = useState(false);

  return (
    <>
      <div className={styles.mainButton}>
        <span onClick={() => setShowing(!showing)}>
          {showing ? <FaTimes size={30} /> : <FaBars size={30} />}
        </span>
      </div>
      {showing && (
        <nav className={styles.container}>
          <div>
            <ul>
              <li>
                <Link to="/">
                  <span>
                    <FaUserAlt size={30} />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/skills">
                  <span>
                    <FaListAlt size={30} />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <span>
                    <FaPencilRuler size={30} />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/experience">
                  <span>
                    <FaHistory size={30} />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}

export default NavbarMobile;
