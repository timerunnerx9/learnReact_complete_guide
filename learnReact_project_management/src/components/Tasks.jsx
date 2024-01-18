import { useState, useRef } from "react";

export default function Tasks({ projects, setProjects, currProject }) {
  const addTaskBox = useRef();
  const [currTasks, setCurrTasks] = useState(currProject.tasks);

  function handleRemove(event, task) {
    setCurrTasks((prevCurrTasks) => {
      const newCurrTasks = prevCurrTasks.filter(
        (eachTask) => eachTask !== task
      );

      // const updatedCurrProject = {
      //   ...currProject,
      //   tasks: newCurrTasks,
      // };

      // const updatedProjects = projects.map((project) => {
      //   return project === currProject ? updatedCurrProject : project;
      // });

      // setProjects((prevProjects) => {
      //   return updatedProjects;
      // });
      updateProjectHelper(projects, setProjects,newCurrTasks,currProject);

      return newCurrTasks;
    });
  }

  function handleAddTask(){
    const newTaskValue = addTaskBox.current.value;
    console.log(newTaskValue);
    if(!newTaskValue){
      return;
    }

    setCurrTasks((prevCurrTasks)=>{
      console.log(addTaskBox.current.value);

      const newCurrTasks = [...prevCurrTasks, newTaskValue];
   

      updateProjectHelper(projects, setProjects,newCurrTasks,currProject);
      
      return newCurrTasks;
    
  })
  addTaskBox.current.value = "";
  console.log(addTaskBox.current.value);
  

  }

   function updateProjectHelper(projects, setProjects, newCurrTasks,currProject){
      const updatedCurrProject = {
        ...currProject,
        tasks: newCurrTasks,
      };

      const updatedProjects = projects.map((project) => {
        return project === currProject ? updatedCurrProject : project;
      });

      setProjects((prevProjects) => {
        return updatedProjects;
      });


   }

  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

      <div className="flex items-center gap-4">
        <input ref={addTaskBox} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button onClick={handleAddTask}> Add Task </button>
      </div>

      <div>
        <ol className="p-4 mt-8 rounded-md bg-stone-100">
          {currTasks.map((task) => (
            <li className="flex justify-between my-4" key={task}>
              {task}

              <button
                onClick={(e) => handleRemove(e, task)}
                className="text-stone-700 hover:text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
