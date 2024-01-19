import LandingPage from "./components/LandingPage";
import RenderingProject from "./components/RenderingProject";
import Sidebar from "./components/Sidebar";
import NewProjectForm from "./components/NewProjectForm";
import {useState} from 'react';

function App() {

  const [currState, setState] = useState('100');

  const [projects, setProjects] = useState([{

    title: 'test title 4',
    description: 'test description 4',
    date: '1/15/2024',
    tasks: ['task1','task2', 'task3']
  },{

    title: 'test title 2',
    description: 'test description 2',
    date: '1/15/2024',
    tasks: ['task1','task2']
  },{
    
    title: 'test title 1',
    description: 'test description',
    date: '1/15/2024',
    tasks: ['task1']
  }]);

  const [selectedProject, setSelectedProject] = useState('test title 1');


  const addNewProject = () =>{
    
  }

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
