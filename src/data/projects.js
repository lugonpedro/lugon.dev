import mate from "../assets/mate.png";
import onichan from "../assets/onichan.png";
import festivaltf from "../assets/festivaltf.png";
import mercadodasestrelas from "../assets/mercadodasestrelas.png";

export const projects = [
  {
    id: 1,
    slang: "mate",
    title: "Mate",
    description:
      "Monitoramento Automatizado de Transporte Escolar e é um aplicativo feito em React Native para TCC na UDF, possui o intuito de facilitar o encontro entre passageiros e motoristas de ônibus e vans escolares, integra a API do Google Maps.",
    image: mate,
    imagealt: "App Monitoramento Automatizado de Transporte Escolar",
    link: "",
    source: "https://github.com/1ugon/Mate",
  },
  {
    id: 2,
    slang: "onichan",
    title: "Bot Onichan",
    description:
      "Bot de Discord feito com o Discord JS integrando também a API jikan-node que faz conexão com o My Anime List, sendo capaz de pegar perfis de usuários, animes, mangás, personagens, pessoas, e muitas coisas mais. Projeto open source feito por pura diversão e vontade de aprender tecnologias novas.",
    image: onichan,
    imagealt: "Onichan Bot",
    link: "https://discord.com/oauth2/authorize?client_id=805520334111375410&scope=bot&permissions=8",
    source: "https://github.com/1ugon/bot-onichan",
  },
  {
    id: 3,
    slang: "festivaltf",
    title: "Festival Transfeminista",
    description:
      "Site interativo para festival feito em React, de acordo com as necessidades e vontades do cliente, com o intuito de agregar valor ao festival que ocorre em Coimbra e precisava de um espaço online por questões pandêmicas.",
    image: festivaltf,
    imagealt: "Festival Transfeminista",
    link: "https://www.festivaltransfeminista.com/",
    source: "https://github.com/1ugon/festivaltf",
  },
  {
    id: 4,
    slang: "mercadodasestrelas",
    title: "Mercado das Estrelas",
    description:
      "Site de pedidos baseado em Star Wars, feito de acordo com as regras de negócio que foram pedidos, totalmente em React.",
    image: mercadodasestrelas,
    link: "",
    source: "https://github.com/1ugon/mercado-das-estrelas",
  },
];

export const useProject = (slang) => {
  return projects.find((p) => p.slang === slang);
};
