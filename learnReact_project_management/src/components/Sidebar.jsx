import Projects from "./Projects";

export default function Sidebar({ setState, projects, setSelectedProject }) {
  const handleOnClick = (event, param) => {
    setState((prevState) => {
      return param;
    });
  };

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <button
        className="mb-8 font-bold uppercase md:text-xl text-stone-200 hover:text-stone-500"
        onClick={(e) => handleOnClick(e, "000")}
      >
        YOUR PROJECTS{" "}
      </button>

      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={(e) => handleOnClick(e, "001")}
      >
        +Add Project
      </button>

      <Projects
        projects={projects}
        setState={setState}
        setSelectedProject={setSelectedProject}
      />
    </aside>
  );
}
