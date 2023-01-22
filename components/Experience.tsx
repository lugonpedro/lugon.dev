import React from "react";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";
import { useTranslation } from "react-i18next";

type Props = {};

export default function Experience({}: Props) {
  const { t } = useTranslation();

  const experiences: Experience[] = [
    {
      title: "2021",
      header: "Javascript Fullstack",
      place: "Freelancer",
      desc: t("experience.desc1"),
      date: t("experience.date1"),
    },
    {
      title: "2021",
      header: "Javascript Fullstack",
      place: "Embala",
      desc: t("experience.desc2"),
      date: t("experience.date2"),
    },
    {
      title: "2022",
      header: "C# .NET Júnior",
      place: "OpenPort",
      desc: t("experience.desc3"),
      date: t("experience.date3"),
    },
    {
      title: "2022",
      header: "Javascript Fullstack",
      place: "",
      desc: t("experience.desc4"),
      date: t("experience.date4"),
    },
  ];

  return (
    <motion.div
      className="h-screen flex flex-col justify-center mx-auto max-w-7xl space-y-4 md:space-y-16 md:px-0 md:max-w-full"
      initial={{ opacity: 0 }}
      transition={{ duration: 3 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="pageTitle">{t("experience.title")}</h3>

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
            allowDynamicUpdate={true}
          >
            {experiences.map((experience) => (
              <div className="w-full px-6 md:px-0" key={experience.place}>
                <h4 className="font-bold text-xl md:text-2xl">
                  {experience.header}
                </h4>
                <p className="text-sm md:text-md">{experience.place}</p>
                <p className="text-md md:text-xl">{experience.desc}</p>
                <p className="text-sm md:text-md mt-4">{experience.date}</p>
              </div>
            ))}
          </Chrono>
        </div>
      </div>
    </motion.div>
  );
}
