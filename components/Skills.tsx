import React from "react";

import { motion } from "framer-motion";
import Skill from "./Skill";
import { skills } from "@/data/data";
import { useTranslation } from "react-i18next";

type Props = {};

export default function Skills({}: Props) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 3 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col text-center md:text-left max-w-7xl px-10 justify-center mx-auto items-center space-y-4 md:space-y-16"
    >
      <h3 className="pageTitle">{t("skills.title")}</h3>

      <div className="grid grid-cols-3 gap-2 md:gap-4 md:grid-cols-4 xl:gap-8">
        {skills.map((skill) => (
          <Skill
            image={skill.image.src}
            title={skill.title}
            key={skill.title}
          />
        ))}
      </div>
    </motion.div>
  );
}
