import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import profileIcon from "@/assets/profile.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Language from "./Language";

type Props = {};

export default function Header({}: Props) {
  const { t } = useTranslation();

  const [text, count] = useTypewriter({
    words: ["Front-end", "Back-end", "Mobile", "Fullstack Javascript"],
    delaySpeed: 1000,
    loop: true,
  });

  return (
    <header className="h-screen flex flex-col space-y-8 items-center justify-center text-center relative">
      <Language />
      <motion.img
        src={profileIcon.src}
        alt="Pedro Lugon Image"
        className="rounded-full h-32 w-32 mx-auto object-cover border-green border-4 md:h-44 md:w-44 xl:h-60 xl:w-60"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      />
      <div className="w-full px-20">
        <h2 className="uppercase text-xl text-green pb-2 font-bold md:text-3xl xl:text-4xl">
          Pedro Lugon
        </h2>
        <p className="text-md font-bold md:text-2xl xl:text-3xl">
          <span>{text}</span>
          <Cursor cursorColor="#56cc77" />
        </p>
        <motion.div
          className="p-10"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
          <ul className="flex items-center justify-evenly text-sm uppercase flex-col gap-4 md:flex-row md:justify-center md:text-md xl:text-xl">
            <li className="headerIcon">
              <a href="#about">{t("nav.about")}</a>
            </li>
            <li className="headerIcon">
              <a href="#experience">{t("nav.experience")}</a>
            </li>
            <li className="headerIcon">
              <a href="#skills">{t("nav.skills")}</a>
            </li>
            <li className="headerIcon">
              <a href="#projects">{t("nav.projects")}</a>
            </li>
            <li className="headerIcon">
              <a href="#contact">{t("nav.contact")}</a>
            </li>
          </ul>
        </motion.div>
      </div>
    </header>
  );
}
