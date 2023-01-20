import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type Props = {};

export default function Projects({}: Props) {
  function scrollRight() {
    let width = window.innerWidth;
    document.getElementById("container")!.scrollLeft += width;
  }

  function scrollLeft() {
    let width = window.innerWidth;
    document.getElementById("container")!.scrollLeft -= width;
  }

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
        id="container"
      >
        {projects.map((project: Project) => (
          <div
            key={project.title}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center space-y-3 p-10 justify-center md:p-44 xl:max-h-[70vh]"
          >
            <motion.img
              initial={{ opacity: 0, y: -200 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.image.src}
              className="w-44 h-44 object-cover md:w-72 md:h-72 xl:w-[50%] xl:h-[100%]"
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
      <div className="flex flex-row items-center justify-center gap-10 md:gap-20">
        <button onClick={scrollLeft} className="text-4xl md:text-6xl">
          <AiOutlineLeft />
        </button>
        <button onClick={scrollRight} className="text-4xl md:text-6xl">
          <AiOutlineRight />
        </button>
      </div>

      <div className="w-full h-[500px] absolute top-[20%] bg-green/10 left-0 -skew-y-12"></div>
    </motion.div>
  );
}
