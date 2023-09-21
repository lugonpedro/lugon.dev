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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="min-h-screen flex relative flex-col text-center justify-center mx-auto items-center space-y-4 px-10 md:space-y-16 md:text-left"
    >
      <h3 className="pageTitle">{t("projects.title")}</h3>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project: Project) => (
          <a
            className="max-w-sm bg-background border border-green rounded-lg text-pearl hover:bg-green/20 duration-300"
            key={project.title}
            title={project.title}
            href={project.link}
          >
            <motion.img
              className="rounded-t-lg object-cover w-full h-[250px]"
              src={project.image.src}
              alt={project.title}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                {project.title}
              </h5>
              <p className="mb-3 font-normal">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
