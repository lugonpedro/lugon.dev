import Head from "next/head";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-background overflow-x-hidden h-screen scrollbar-thin scrollbar-track-green/20 scrollbar-thumb-green">
      <Head>
        <title>Pedro Lugon</title>
      </Head>

      <section id="header">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
