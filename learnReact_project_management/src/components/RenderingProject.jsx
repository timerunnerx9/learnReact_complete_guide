import Tasks from "./Tasks";

export default function RenderingProject() {
  const tasks = [];

  return (
    <div className="w-[35rem] mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-stone-600 mb-2">
          Learning React
        </h2>
        <button className="text-stone-700 hover:text-stone-950">
          Delete
        </button>
      </div>
      <p className="text-stone-400 mb-4">1/15/2024</p>
      <div>
        <p className="flex flex-col gap-1 my-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <header className="pb-4 mb-4 border-b-2 border-stone-300"> </header>
      <Tasks/>
    </div>
  );
}
