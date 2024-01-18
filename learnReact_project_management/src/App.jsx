import LandingPage from "./components/LandingPage";
import RenderingProject from "./components/RenderingProject";
import Sidebar from "./components/Sidebar";
import NewProjectForm from "./components/NewProjectForm";
import {useState} from 'react';

function App() {

  const [currState, setState] = useState('100');

  const [projects, setProjects] = useState([{

    title: 'test title 4',
    description: 'test description',
    date: '1/15/2024',
    tasks: ['task1','task2', 'task3']
  },{

    title: 'test title 2',
    description: 'test description',
    date: '1/15/2024',
    tasks: ['task1','task2', 'task3']
  },{

    title: 'test title',
    description: 'test description',
    date: '1/15/2024',
    tasks: ['task1','task2', 'task3']
  }]);

  const [selectedProject, setSelectedProject] = useState('test title');




  const addNewProject = () =>{

  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar setState={setState} projects={projects} setSelectedProject={setSelectedProject}/>
        {(currState === '100' && selectedProject !== undefined) && <RenderingProject setState={setState} projects={projects} setProjects={setProjects} selectedProject={selectedProject}/>}
        {(currState !== '100' && currState !== '001') && <LandingPage setState={setState}/> }
        {(currState === '001') &&<NewProjectForm setState={setState} projects={projects} setProjects={setProjects} />}
      </main>
    </>
  );
}

export default App;
