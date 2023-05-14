import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import { Parallax } from "@react-spring/parallax";
import CustomNavbar from "./components/subcomponents/navbar/CustomNavbar";
import StyledLine from "./components/subcomponents/timeline/StyledLine";
function App() {
  return (
    <div className="bg-gray-700">

      <div className={`
        absolute top-0 left-0 z-50 w-full
        bg-gradient-to-t from-transparent to-gray-700
      `}>
        <CustomNavbar />
      </div>
      <Parallax className="scroll-smooth mx-auto bg-gray-700 text-white" pages={5}>
        <Introduction />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </Parallax>
    </div >
  );
}
export default App;
