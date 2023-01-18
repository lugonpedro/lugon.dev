import React from "react";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";
import { experiences } from "@/data/data";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      className="h-screen flex flex-col justify-evenly mx-auto px-10 max-w-7xl md:px-0 md:max-w-full"
      initial={{ opacity: 0 }}
      transition={{ duration: 3 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="pageTitle">Experiência</h3>

      <div className="">
        <div className="w-full">
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
              <div className="w-full px-12 md:px-0" key={exp.place}>
                <h4 className="font-bold text-xl md:text-2xl">{exp.header}</h4>
                <p className="text-sm md:text-md">{exp.place}</p>
                <p className="text-md md:text-xl">{exp.desc}</p>
                <p className="text-sm md:text-md mt-4">{exp.date}</p>
              </div>
            ))}
          </Chrono>
        </div>
      </div>
    </motion.div>
  );
}
