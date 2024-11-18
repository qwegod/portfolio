import About from "./components/about";
import Education from "./components/education";
import Languages from "./components/languages";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Title from "./components/title";

function App() {
  return (
    <div className="flex justify-center items-center overflow-hidden bg-[#1E201E] h-screen w-screen">
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex w-[425px] flex-wrap">
            <Title />
            <Languages />
            <About />
            <div className="m-2 bg-[#373A40] h-[150px] w-[150px] rounded-xl" />
          </div>
          <Skills />
        </div>
        <div className="flex">
          <Projects />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
