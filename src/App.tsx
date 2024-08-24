import { AnimationEnter } from "./animations/enter";
import { Experiences } from "./sections/experiences";
import { Header } from "./sections/header";
import { Projects } from "./sections/projects";
import { Skills } from "./sections/skills";

function App() {
  const screenWidth = window.innerWidth;

  return (
    <div className="bg-background min-h-screen min-w-screen">
      <div className="text-primary max-w-4xl mx-auto p-8">
        <Header />
        <AnimationEnter delay={1.5}>
          <Skills />
        </AnimationEnter>
        <AnimationEnter delay={2.0}>
          <Projects />
        </AnimationEnter>
        <AnimationEnter delay={screenWidth >= 768 ? 2.5 : 0}>
          <Experiences />
        </AnimationEnter>
      </div>
    </div>
  );
}

export default App;
