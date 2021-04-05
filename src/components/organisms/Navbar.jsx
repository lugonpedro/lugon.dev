import React, { useState } from "react";

import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

import "../../styles/Navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <nav className="container">
      <button className="button" onClick={handleClick}>
        {clicked ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>
      <div className={clicked ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="SectionAbout"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => {
                handleClick();
              }}
            >
              SOBRE
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
              onClick={() => {
                handleClick();
              }}
            >
              HABILIDADES
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
              onClick={() => {
                handleClick();
              }}
            >
              PROJETOS
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
              onClick={() => {
                handleClick();
              }}
            >
              EXPERIÊNCIA
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
