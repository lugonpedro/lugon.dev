import React from "react";
import { motion } from "framer-motion";

import lugonImage from "@/assets/lugon.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      className="h-screen flex flex-col max-w-7xl px-10 justify-evenly mx-auto"
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="pageTitle">Sobre</h3>

      <div className="flex flex-col text-center items-center md:flex-row md:text-left">
        <motion.img
          src={lugonImage.src}
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-96 xl:h-96"
        />

        <div className="space-y-10 px-0 md:px-10">
          <p className="text-sm md:text-base">
            Eu sou o Pedro 👋, também conhecido como Lugon (que é meu sobrenome
            de fato), nasci em Brasília, Distrito Federal e tive minha primeira
            experiência com programação em 2017 usando Java na faculdade, desde
            então mexi com OOP, HTML, CSS, JavaScript, PHP e um pouco de Python,
            já no inicio de 2020 terminei meu primeiro grande projeto sozinho,
            passei a estudar TDD e Design Patterns e me senti livre para começar
            no mercado de trabalho 🚀, desde então procuro conhecer, estudar e
            praticar tecnologias novas que me tragam desempenho e praticidade ao
            resolver problemas!
          </p>
        </div>
      </div>
    </motion.div>
  );
}
