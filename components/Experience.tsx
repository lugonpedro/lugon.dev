import React from "react";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";
import { experiences } from "@/data/data";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 tracking-[4px] text-green text-2xl uppercase font-bold">
        Experiência
      </h3>

      <motion.div
        className="w-full"
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Chrono
          items={experiences}
          mode="HORIZONTAL"
          cardPositionHorizontal="TOP"
          theme={{
            primary: "#56cc77",
            secondary: "#3423a6",
            cardBgColor: "#3423a6",
            cardForeColor: "#56cc77",
            titleColor: "white",
            titleColorActive: "#56cc77",
          }}
          buttonTexts={{
            first: "Primeiro",
            last: "Último",
            next: "Próximo",
            previous: "Anterior",
          }}
          classNames={{
            card: "experienceCard",
          }}
        >
          {experiences.map((exp: Experience) => (
            <div className="w-full px-6 md:px-0" key={exp.place}>
              <h4 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                {exp.header}
              </h4>
              <p className="text-sm md:text-md xl:text-xl">{exp.place}</p>
              <p className="text-xl md:text-2xl xl:text-3xl">{exp.desc}</p>
              <p className="text-sm md:text-md xl:text-xl mt-4">{exp.date}</p>
            </div>
          ))}
        </Chrono>
      </motion.div>
    </motion.div>
  );
}
