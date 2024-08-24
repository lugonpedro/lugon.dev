import { AnimationEnter } from "./animations/enter";
import { Experiences } from "./sections/experiences";
import { Header } from "./sections/header";
import { Projects } from "./sections/projects";

function App() {
  return (
    <div className="bg-background text-primary max-w-4xl mx-auto p-8 min-h-screen">
      <Header />
      <AnimationEnter delay={1.5}>
        <Projects />
      </AnimationEnter>
      <AnimationEnter delay={2}>
        <Experiences />
      </AnimationEnter>
    </div>
  );
}

export default App;
