/* SKILLS IMAGES */
import html from "@/assets/skills/html5.png";
import css from "@/assets/skills/css3.png";
import java from "@/assets/skills/java.png";
import js from "@/assets/skills/js.png";
import ts from "@/assets/skills/ts.png";
import csharp from "@/assets/skills/csharp.png";
import react from "@/assets/skills/react.png";
import next from "@/assets/skills/next.png";
import node from "@/assets/skills/node.png";
import mysql from "@/assets/skills/mysql.png";
import mongo from "@/assets/skills/mongo.png";
import tailwind from "@/assets/skills/tailwind.png";

/* PROJECTS IMAGES */
import mate from "@/assets/projects/mate.png";
import onichan from "@/assets/projects/onichan.png";
import festivaltf from "@/assets/projects/festivaltf.png";
import embala from "@/assets/projects/embala.png";

export const experiences: Experience[] = [
  {
    title: "2021",
    header: "Javascript Fullstack",
    place: "Freelancer",
    desc: "Fazia tanto desenvolvimento web quanto mobile, sempre focado no ecosistema React, de acordo com o que meu cliente desejasse, propunha ideias e considerações sobre o projeto, para que ficasse de acordo com suas necessidades",
    date: "(Janeiro/2021 - Abril/2022)",
  },
  {
    title: "2021",
    header: "Javascript Fullstack",
    place: "Embala",
    desc: "Procuro solucionar uma necessidade sobre coleta seletiva de embalagens recicláveis, ajudando a cooperativa e os usuários que gostariam de fazer parte de um mundo mais sustentável",
    date: "(Junho/2021 - Atual)",
  },
  {
    title: "2022",
    header: "C# .NET Júnior",
    place: "OpenPort",
    desc: "Ajudava a solucionar problemas e criar saídas nas dificuldades dos sistemas de gestão portuária pré criados pela empresa",
    date: "(Fevereiro/2022 - Setembro/2022)",
  },
  {
    title: "2022",
    header: "Javascript Fullstack",
    place: "23 Games",
    desc: "",
    date: "(Julho/2022 - Atual)",
  },
];

export const skills: Skill[] = [
  {
    title: "HTML",
    image: html,
  },
  {
    title: "CSS",
    image: css,
  },
  {
    title: "Java",
    image: java,
  },
  {
    title: "JavaScript",
    image: js,
  },
  {
    title: "TypeScript",
    image: ts,
  },
  {
    title: "C#",
    image: csharp,
  },
  {
    title: "React",
    image: react,
  },
  {
    title: "Next",
    image: next,
  },
  {
    title: "Node",
    image: node,
  },
  {
    title: "SQL",
    image: mysql,
  },
  {
    title: "MongoDB",
    image: mongo,
  },
  {
    title: "Tailwindcss",
    image: tailwind,
  },
];

export const projects: Project[] = [
  {
    title: "Mate",
    description:
      "Aplicativo feito em React Native para TCC na UDF, possui o intuito de facilitar o encontro entre passageiros e motoristas de ônibus e vans escolares.",
    image: mate,
    alt: "App Monitoramento Automatizado de Transporte Escolar",
    link: "https://github.com/1ugon/Mate",
  },
  {
    title: "Bot Onichan",
    description:
      "Bot de Discord feito com o Discord JS que faz conexão com o My Anime List, sendo capaz de pegar perfis de usuários, animes, mangás e muito mais.",
    image: onichan,
    alt: "Onichan Bot",
    link: "https://github.com/1ugon/bot-onichan",
  },
  {
    title: "Festival Transfeminista",
    description:
      "Site interativo para festival feito em React, com o intuito de agregar valor ao festival que ocorre em Coimbra e precisava de um espaço online por questões pandêmicas.",
    image: festivaltf,
    alt: "Festival Transfeminista",
    link: "https://github.com/1ugon/festivaltf",
  },
  {
    title: "Embala",
    description:
      "Aplicativos que se intercomunicam, entre usuário e cooperativa, facilitando a coleta de embalagens recicláveis.",
    image: embala,
    alt: "Embala",
    link: "https://play.google.com/store/apps/details?id=com.embala.user",
  },
];
