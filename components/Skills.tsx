import React from "react";

import { motion } from "framer-motion";
import Skill from "./Skill";
import { skills } from "@/data/data";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 tracking-[4px] text-green text-2xl uppercase font-bold">
        Habilidades
      </h3>

      <div className="grid grid-cols-3 gap-5 md:grid-cols-4">
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
