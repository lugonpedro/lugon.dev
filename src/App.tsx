import { Experiences } from "./sections/experiences";
import { Header } from "./sections/header";
import { Projects } from "./sections/projects";

function App() {
  return (
    <div className="bg-background text-primary">
      <Header />
      <Projects />
      <Experiences />
    </div>
  );
}

export default App;
