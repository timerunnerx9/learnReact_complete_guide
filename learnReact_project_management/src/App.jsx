import LandingPage from "./components/LandingPage";
import RenderingProject from "./components/RenderingProject";
import Sidebar from "./components/Sidebar";
import NewProjectForm from "./components/NewProjectForm";
import {useState} from 'react';

function App() {

  const [currState, setState] = useState('000');

  const [projects, setProjects] = useState([]);

  const [selectedProject, setSelectedProject] = useState('');


  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar setState={setState} projects={projects} setSelectedProject={setSelectedProject}/>
        {(currState === '100' && selectedProject !== undefined) && <RenderingProject setState={setState} projects={projects} setProjects={setProjects} selectedProject={selectedProject}/>}
        {(currState !== '100' && currState !== '001') && <LandingPage setState={setState}/> }
        {(currState === '001') &&<NewProjectForm setState={setState} projects={projects} setProjects={setProjects} setSelectedProject={setSelectedProject}/>}
      </main>
    </>
  );
}

export default App;
