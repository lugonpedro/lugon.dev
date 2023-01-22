import React from "react";
import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";

import embala from "@/assets/projects/embala.jpg";
import erasus from "@/assets/projects/erasus.png";
import festivaltf from "@/assets/projects/festivaltf.png";

type Props = {};

export default function Projects({}: Props) {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: "Embala",
      description: t("projects.desc1"),
      image: embala,
      alt: "Embala",
      link: "https://play.google.com/store/apps/details?id=com.embala.user",
    },
    {
      title: "Erasus",
      description: t("projects.desc2"),
      image: erasus,
      alt: "Erasus",
      link: "https://www.erasus.com.br/",
    },
    {
      title: "Festival Transfeminista",
      description: t("projects.desc3"),
      image: festivaltf,
      alt: "Festival Transfeminista",
      link: "https://github.com/1ugon/festivaltf",
    },
  ];

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
      className="h-screen flex relative flex-col text-center md:text-left justify-center space-y-16 mx-auto items-center"
    >
      <h3 className="pageTitle">{t("projects.title")}</h3>

      <div
        className="relative w-full flex overflow-x-scroll
       overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-green/20 scrollbar-thumb-green"
        id="container"
      >
        {projects.map((project: Project) => (
          <div
            key={project.title}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center space-y-3 p-10 justify-center md:p-44 xl:max-h-[50vh] xl:justify-between xl:flex-row"
          >
            <motion.img
              initial={{ opacity: 0, y: -200 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.image.src}
              className="object-cover w-52 h-44 md:w-96 md:h-72 xl:w-screen xl:h-96 xl:object-contain"
              alt={project.alt}
            />
            <div className="xl:px-4">
              <a href={project.link} title="Link">
                <h4 className="uppercase font-bold text-md text-center md:text-xl xl:text-2xl underline hover:text-neon duration-300 md:w-max">
                  {project.title}
                </h4>
              </a>
              <p className="text-sm text-center md:text-left md:text-md xl:text-xl">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-10 md:gap-20">
        <button onClick={scrollLeft} className="text-4xl md:text-6xl">
          <AiOutlineLeft className="w-full h-full" />
        </button>
        <button onClick={scrollRight} className="text-4xl md:text-6xl">
          <AiOutlineRight />
        </button>
      </div>

      <div className="w-full h-[500px] absolute top-[20%] bg-green/10 left-0 -skew-y-12"></div>
    </motion.div>
  );
}
