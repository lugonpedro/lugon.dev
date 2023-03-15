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
      className="h-screen flex flex-col justify-center mx-auto max-w-7xl relative space-y-4 md:space-y-16 md:px-0 md:max-w-full"
      initial={{ opacity: 0 }}
      transition={{ duration: 3 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="pageTitle">{t("experience.title")}</h3>

      <div className="w-full xl:max-w-7xl xl:self-center">
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
          allowDynamicUpdate={true}
        >
          {experiences.map((experience) => (
            <div className="w-full px-6 md:px-0" key={experience.key}>
              <h4 className="font-bold text-xl md:text-2xl">
                {experience.header}
              </h4>
              <p className="text-sm md:text-md">{experience.place}</p>
              <p className="text-md md:text-xl">{experience.desc}</p>
              <div className="flex flex-col items-start mt-2 md:flex-row md:items-center">
                {experience.techs.map((tech, index) => (
                  <p
                    className="text-sm md:text-md md:first:before:content-[''] md:first:before:mx-0 md:before:content-['-'] md:before:mx-1"
                    key={index}
                  >
                    {tech}
                  </p>
                ))}
              </div>
              <p className="text-sm md:text-md mt-4">{experience.date}</p>
            </div>
          ))}
        </Chrono>
      </div>
    </motion.div>
  );
}
