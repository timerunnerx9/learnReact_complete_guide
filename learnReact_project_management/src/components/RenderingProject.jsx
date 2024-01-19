import Tasks from "./Tasks";
import {useState} from 'react'

export default function RenderingProject({setState, projects, setProjects, selectedProject}) {
  


  let currProject = projects.filter(project =>{
    return project.title === selectedProject
  })

  console.log(currProject);
  currProject = currProject[0];


  function handleDeleteProject(){
    

    setProjects(()=>{
      const updatedProjects = projects.filter((project)=>{
        return project.title !== selectedProject;
      })
      return updatedProjects;
    })
    setState('000')
  }

  
  return (
    <div className="w-[35rem] mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-stone-600 mb-2">
          {currProject.title}
        </h2>
        <button className="text-stone-700 hover:text-stone-950" onClick={handleDeleteProject}>
          Delete
        </button>
      </div>
      <p className="text-stone-400 mb-4">{currProject.dueDate}</p>
      <div>
        <p className="flex flex-col gap-1 my-4">{currProject.description}</p>
      </div>
      <header className="pb-4 mb-4 border-b-2 border-stone-300"> </header>
      <Tasks projects={projects} setProjects={setProjects} currProject={currProject}/>
    </div>
  );
}
