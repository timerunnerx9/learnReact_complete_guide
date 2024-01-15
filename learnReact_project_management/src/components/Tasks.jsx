export default function Tasks() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

      <div className="flex items-center gap-4">
        <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button> Add Task </button>
      </div>

      <div>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          <li className="flex justify-between my-4">
            test1
            <button className="text-stone-700 hover:text-red-500">
              Delete
            </button>
          </li>
          <li className="flex justify-between my-4">test2</li>
        </ul>
      </div>
    </div>
  );
}
