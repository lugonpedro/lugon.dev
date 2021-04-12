import abservar from "../assets/abservar.png";
import autoescola from "../assets/autoescola.png";
import mate from "../assets/mate.png";
import onichan from "../assets/onichan.png";
import lugbot from "../assets/lugbot.png";

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
    slang: "autoescola",
    title: "Auto Escola",
    description:
      "Site de auto escola feito através do curso React Profissional ministrado pelo professor Bruno Nardini",
    image: autoescola,
    summary:
      "Site exemplo de auto escola para mostrar o conhecimento aprendido em React e CSS",
    link: "https://react-pro-taupe.vercel.app/",
    source: "https://github.com/1ugon/react-pro",
  },
  {
    id: 3,
    slang: "onichan",
    title: "Bot Onichan",
    description: "Bot de Discord que mostra informações do My Anime List",
    image: onichan,
    imagealt: "Onichan Bot",
    summary:
      "Bot de Discord feito com o Discord JS integrando também a API jikan-node que faz conexão com o My Anime List, sendo capaz de pegar perfis de usuários, animes, mangás, personagens, pessoas, e muitas coisas mais. Projeto open source feito por pura diversão e vontade de aprender tecnologias novas! Caso queira implementar features e participar do projeto entre em contato comigo pelas redes sociais ou o formulário do site.",
    link:
      "https://discord.com/oauth2/authorize?client_id=805520334111375410&scope=bot&permissions=8",
    source: "https://github.com/1ugon/bot-onichan",
  },
  {
    id: 4,
    slang: "abservar",
    title: "Abservar",
    description:
      "Site portfólio feito em React para agregar ao trabalho do cliente",
    image: abservar,
    imagealt: "Site Abservar",
    summary:
      "Site de portfólio feito em React e CSS puro, criado com o intuito de agregar ao trabalho do cliente e reunir locais virtuais de trabalhos do mesmo.",
    link: "https://abservar-1ugon.vercel.app/",
    source: "https://github.com/1ugon/abservar",
  },
  {
    id: 5,
    slang: "lugbot",
    title: "Lug Bot",
    description: "Bot de Discord que avisa sempre que minha live entra ao vivo",
    image: lugbot,
    imagealt: "Lug Bot",
    summary:
      "Bot de Discord feito com o Discord JS integrado a API da Twitch.tv que recebe quando minha live fica ao vivo e avisa no servidor. Projeto open source feito por pura diversão, facilitação e vontade de aprender tecnologias novas!",
    link:
      "https://discord.com/oauth2/authorize?client_id=809327272381120533&scope=bot&permissions=8",
    source: "https://github.com/1ugon/lugbot",
  },
];

export const useProject = (slang) => {
  return projects.find((p) => p.slang === slang);
};
