import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import { Parallax } from "@react-spring/parallax";
function App() {
  return (
    <Parallax className="mx-auto bg-gray-700 text-white" pages={5}>
      <Introduction />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </Parallax>
  );
}
export default App;
