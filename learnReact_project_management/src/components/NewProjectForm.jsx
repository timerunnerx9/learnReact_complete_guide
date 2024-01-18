import { useRef } from "react";

export default function NewProjectForm({ setState, projects, setProjects }) {
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

    setProjects( [...projects, {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      tasks: []
    }]);

    resetFields();
    
  };

  return (
    <div>
      <form className="mt-4 " onSubmit={handleSubmit}>
        <menu className="flex items-center justify-end gap-4 my-4">
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
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
          />
        </label>

        <label className="text-sm font-bold uppercase text-stone-500">
          Description
          <textarea
            ref={descriptionRef}
            id="description"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="text"
          />
        </label>

        <label className="text-sm font-bold uppercase text-stone-500">
          Due Date
          <input
            id="dueDate"
            ref={dueDateRef}
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="date"
          />
        </label>
      </form>
    </div>
  );
}
