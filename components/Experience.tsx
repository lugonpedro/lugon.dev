import React from "react";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";
import { useTranslation } from "react-i18next";

type Props = {};

export default function Experience({}: Props) {
  const { t } = useTranslation();

  const experiences: Experience[] = [
    {
      key: 1,
      title: "2021",
      header: "Javascript Fullstack",
      place: "Freelancer",
      desc: t("experience.desc1"),
      date: t("experience.date1"),
      techs: [
        "HTML",
        "CSS",
        "React",
        "React Native",
        "NodeJs",
        "Firebase",
        "MongoDB",
      ],
    },
    {
      key: 2,
      title: "2021",
      header: "Javascript Fullstack",
      place: "Embala",
      desc: t("experience.desc2"),
      date: t("experience.date2"),
      techs: ["HTML", "CSS", "React", "React Native", "Firebase"],
    },
    {
      key: 3,
      title: "2022",
      header: "C# .NET Júnior",
      place: "OpenPort",
      desc: t("experience.desc3"),
      date: t("experience.date3"),
      techs: ["HTML", "Javascript", "C#", "MySQL"],
    },
    {
      key: 4,
      title: "2022",
      header: "Javascript Fullstack",
      place: "23 Games",
      desc: t("experience.desc4"),
      date: t("experience.date4"),
      techs: ["HTML", "TailwindCSS", "React", "NodeJs", "MongoDB"],
    },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center mx-auto px-4 xl:max-w-[800px]"
      initial={{ opacity: 0 }}
      transition={{ duration: 3 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="pageTitle">{t("experience.title")}</h3>

      <ol className="relative border-l border-green">
        {experiences.reverse().map((experience) => (
          <li className="mb-10 ml-4" key={experience.key}>
            <div className="absolute w-3 h-3 bg-green rounded-full mt-1.5 -left-1.5 border border-pearl"></div>
            <time className="mb-1 text-sm font-normal leading-none text-pearl">
              {experience.date}
            </time>
            <h3 className="text-lg font-semibold text-pearl">
              {experience.header} - {experience.place}
            </h3>
            <p className="text-base font-normal text-pearl">
              {experience.desc}
            </p>
            <ul className="flex flex-col items-start mt-2 md:flex-row md:items-center">
              {experience.techs.map((tech, index) => (
                <li
                  className="text-pearl text-sm md:text-md md:first:before:content-[''] md:first:before:mx-0 md:before:content-['-'] md:before:mx-1"
                  key={index}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}
