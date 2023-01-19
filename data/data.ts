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
    desc: "Atuando no desenvolvimento web e mobile em projetos para diversos clientes, sempre alinhando e propondo ideias e considerações de maneira assertiva e transparente, para que o resultado ficasse de acordo com suas necessidades.",
    date: "(Janeiro/2021 - Abril/2022)",
  },
  {
    title: "2021",
    header: "Javascript Fullstack",
    place: "Embala",
    desc: "Atuo no desenvolvimento de soluções no ramo de coleta seletiva de embalagens recicláveis, ajudando a cooperativa e os usuários que buscam um mundo mais sustentável a atingirem os seus objetivos.",
    date: "(Junho/2021 - Atual)",
  },
  {
    title: "2022",
    header: "C# .NET Júnior",
    place: "OpenPort",
    desc: "Atuando no solucionamento de problemas e dificuldades nos processos de sistema em gestão portuária.",
    date: "(Fevereiro/2022 - Setembro/2022)",
  },
  {
    title: "2022",
    header: "Javascript Fullstack",
    place: "",
    desc: "Atuo na área de Desenvolvimento Web, de forma a trazer conforto e produtividade para toda a equipe na nossa plataforma.",
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
    title: "Embala",
    description:
      "Aplicativos feitos em React Native que se intercomunicam através do Firebase entre usuários e cooperativas, facilitando o processo de coleta de embalagens recicláveis",
    image: embala,
    alt: "Embala - Coleta de Recicláveis",
    link: "https://play.google.com/store/apps/details?id=com.embala.user",
  },
  {
    title: "Erasus",
    description:
      "Site feito em React + CSS modularizado para dar destaque ao curso online do ex jogador profissional de League of Legends",
    image: onichan,
    alt: "Erasus Curso Jungle Pro",
    link: "https://www.erasus.com.br/",
  },
  {
    title: "Mate",
    description:
      "Aplicativo feito em React Native para o Trabalho de Conclusão de Curso na faculdade UDF, que possui o intuito de facilitar o encontro entre passageiros e motoristas de ônibus e vans escolares, com sistema de rotas e notas",
    image: mate,
    alt: "Monitoramento Automatizado de Transporte Escolar",
    link: "https://github.com/1ugon/Mate",
  },
  {
    title: "Festival Transfeminista",
    description:
      "Site interativo para festival feito em React, com o intuito de agregar valor ao festival que ocorre em Coimbra e precisava de um espaço online por questões pandêmicas.",
    image: festivaltf,
    alt: "Festival Transfeminista",
    link: "https://github.com/1ugon/festivaltf",
  },
];
