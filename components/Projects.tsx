import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/data";
import { AiOutlineLink } from "react-icons/ai";

type Props = {};

export default function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 tracking-[4px] text-green text-2xl uppercase font-bold">
        Projetos
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll
       overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-green/20 scrollbar-thumb-green"
      >
        {projects.map((project: Project) => (
          <div
            key={project.title}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={project.image.src}
              className="w-52 h-52 object-cover md:w-64 md:h-64 xl:w-80 xl:h-80"
            />
            <h4 className="uppercase font-bold text-2xl text-center md:text-3xl xl:text-4xl">
              {project.title}
            </h4>
            <p className="text-md text-center md:text-left md:text-xl xl:text-2xl">
              {project.description}
            </p>
            <a
              href={project.link}
              className="flex flex-row justify-center items-center border border-green rounded-md px-8 py-2 hover:bg-green duration-300 hover:text-neon font-bold"
            >
              <AiOutlineLink className="mr-2" size={20} />
              Link
            </a>
          </div>
        ))}
      </div>

      <div className="w-full h-[500px] absolute top-[20%] bg-green/10 left-0 -skew-y-12"></div>
    </motion.div>
  );
}
