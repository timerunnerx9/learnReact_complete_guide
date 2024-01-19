export default function Projects({projects,setState, setSelectedProject}) {

  let content = undefined;

  function handleOnclick(projectTitle){
    
    setSelectedProject((prevSelectedProject)=>{
      return projectTitle;
    });

    setState('100');
    
  }


  if (projects) {
    content = (
      <ul >
        {projects.map((project) => (
          <li key={`${project.title}`} className="flex justify-between my-4">
            <button className="text-stone-600 hover:text-stone-950" onClick={()=>handleOnclick(project.title)}>{project.title}</button>
          </li>
        ))}
      </ul>
    );
  }

  return <>{content}</>;
}
