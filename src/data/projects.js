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
      "App que facilita o encontro de quem utiliza o transporte escolar",
    image: mate,
    imagealt: "App Monitoramento Automatizado de Transporte Escolar",
    summary:
      "Monitoramento Automatizado de Transporte Escolar e é um aplicativo feito em React Native para TCC na UDF, possui o intuito de facilitar o encontro entre passageiros e motoristas de ônibus e vans escolares, integra a API do Google Maps. Projeto atualmente arquivado.",
    link: "",
    source: "https://github.com/1ugon/Mate",
  },
  {
    id: 2,
    slang: "onichan",
    title: "Bot Onichan",
    description: "Bot de Discord que mostra informações do My Anime List",
    image: onichan,
    imagealt: "Onichan Bot",
    summary:
      "Bot de Discord feito com o Discord JS integrando também a API jikan-node que faz conexão com o My Anime List, sendo capaz de pegar perfis de usuários, animes, mangás, personagens, pessoas, e muitas coisas mais. Projeto open source feito por pura diversão e vontade de aprender tecnologias novas! Caso queira implementar features e participar do projeto entre em contato comigo pelas redes sociais ou o formulário do site.",
    link: "https://discord.com/oauth2/authorize?client_id=805520334111375410&scope=bot&permissions=8",
    source: "https://github.com/1ugon/bot-onichan",
  },
  {
    id: 3,
    slang: "festivaltf",
    title: "Festival Transfeminista",
    description: "Site interativo criado para festival online",
    image: festivaltf,
    imagealt: "Festival Transfeminista",
    summary:
      "Site interativo para festival feito em React, de acordo com as necessidades e vontades do cliente, com o intuito de agregar valor ao festival que ocorre em Coimbra e precisava de um espaço online por questões pandêmicas.",
    link: "https://www.festivaltransfeminista.com/",
    source: "https://github.com/1ugon/festivaltf",
  },
  {
    id: 4,
    slang: "mercadodasestrelas",
    title: "Mercado das Estrelas",
    description: "Site feito para processo seletivo em empresa.",
    image: mercadodasestrelas,
    summary:
      "Site de pedidos baseado em Star Wars, feito de acordo com as regras de negócio que foram pedidos, totalmente em React.",
    link: "https://mercado-das-estrelas.vercel.app/",
    source: "https://github.com/1ugon/mercado-das-estrelas",
  },
];

export const useProject = (slang) => {
  return projects.find((p) => p.slang === slang);
};
