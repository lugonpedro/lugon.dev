import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import lugonImage from "@/assets/lugon.jpg";

type Props = {};

export default function About({}: Props) {
  const { t } = useTranslation("");

  return (
    <motion.div
      className="h-screen flex flex-col justify-center px-10 mx-auto max-w-7xl space-y-16"
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="pageTitle">{t("about.title")}</h3>

      <div className="flex flex-col text-center items-center md:flex-row md:text-left">
        <motion.img
          src={lugonImage.src}
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-96 xl:h-96"
        />
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm space-y-10 px-0 md:px-10 md:text-base">
            {t("about.text")}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
