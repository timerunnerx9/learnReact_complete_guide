import { useRef } from "react";

export default function NewProjectForm({ setState, projects, setProjects, setSelectedProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function resetFields(){
    titleRef.current.value='';
    descriptionRef.current.value='';
    dueDateRef.current.value=null;
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const titleValue = titleRef.current.value;
    const desriptValue = descriptionRef.current.value;
    const dateValue = dueDateRef.current.value;
    if(!titleValue || titleValue ==="" || 
    !desriptValue || desriptValue===""||
    !dateValue || dateValue===""){
      return;
    }

    setProjects( [...projects, {
      title: titleValue,
      description: desriptValue,
      dueDate: dateValue,
      tasks: []
    }]);

    setSelectedProject(titleRef.current.value);

    resetFields();

    setState('100')
    
  };

  function handleCancel(){
    setState('000');
  }

  return (
    <div>
      <form className="mt-4 " onSubmit={handleSubmit}>
        <menu className="flex items-center justify-end gap-4 my-4">
          <button className="text-stone-800 hover:text-stone-950" onClick={handleCancel}>
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSubmit}
          >
            Save
          </button>
        </menu>

        <label className="text-sm font-bold uppercase text-stone-500">
          Title
          <input
            ref={titleRef}
            id="title"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="text"
            requred
          />
        </label>

        <label className="text-sm font-bold uppercase text-stone-500">
          Description
          <textarea
            ref={descriptionRef}
            id="description"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="text"
            requred
          />
        </label>

        <label className="text-sm font-bold uppercase text-stone-500">
          Due Date
          <input
            id="dueDate"
            ref={dueDateRef}
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="date"
            requred
          />
        </label>
      </form>
    </div>
  );
}
