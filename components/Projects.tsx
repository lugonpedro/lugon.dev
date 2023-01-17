import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/data";

type Props = {};

export default function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen flex relative flex-col text-center md:text-left justify-evenly mx-auto items-center"
    >
      <h3 className="pageTitle">Projetos</h3>

      <div
        className="relative w-full flex overflow-x-scroll
       overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-green/20 scrollbar-thumb-green"
      >
        {projects.map((project: Project) => (
          <div
            key={project.title}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-center p-20 md:p-44"
          >
            <motion.img
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src={project.image.src}
              className="w-44 h-44 object-cover md:w-64 md:h-64 xl:w-80 xl:h-80"
              alt={project.alt}
            />
            <a href={project.link} title="Link">
              <h4 className="uppercase font-bold text-md text-center md:text-xl xl:text-2xl underline hover:text-neon duration-300">
                {project.title}
              </h4>
            </a>
            <p className="text-sm text-center md:text-left md:text-md xl:text-xl">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full h-[500px] absolute top-[20%] bg-green/10 left-0 -skew-y-12"></div>
    </motion.div>
  );
}
