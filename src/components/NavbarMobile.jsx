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

import { Link } from "react-scroll";

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
                <Link
                  activeClass="active"
                  to="SectionAbout"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>
                    <FaUserAlt size={30} />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="SectionSkills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>
                    <FaListAlt size={30} />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="SectionProjects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>
                    <FaPencilRuler size={30} />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="SectionExperience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
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
