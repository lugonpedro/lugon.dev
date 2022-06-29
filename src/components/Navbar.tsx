import React, { useState } from "react";

import styles from "../styles/Navbar.module.css";
import {
  FaUserAlt,
  FaListAlt,
  FaPencilRuler,
  FaHistory,
  FaBars,
} from "react-icons/fa";

import { AiFillCloseCircle } from "react-icons/ai";

import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const [navbarOpened, setNavbarOpened] = useState<boolean>(false);

  return (
    <nav className={styles.container}>
      <div className={styles.mainButton}>
        <Link to="" onClick={() => setNavbarOpened(!navbarOpened)}>
          <span>
            {navbarOpened ? (
              <AiFillCloseCircle size={30} />
            ) : (
              <FaBars size={30} />
            )}
          </span>
        </Link>
      </div>
      {navbarOpened && (
        <div className={styles.navbar}>
          <ul>
            <li>
              <Link smooth to="/#about">
                <span>
                  <FaUserAlt size={30} />
                </span>
              </Link>
            </li>
            <li>
              <Link smooth to="/#skills">
                <span>
                  <FaListAlt size={30} />
                </span>
              </Link>
            </li>
            <li>
              <Link smooth to="/#experience">
                <span>
                  <FaHistory size={30} />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
