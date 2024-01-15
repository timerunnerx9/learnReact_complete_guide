export default function Projects() {
  const projects = ["test1", "test2"];

  let content = undefined;

  if (projects) {
    content = (
      <ul >
        {projects.map((project) => (
          <li key={`${project}`} className="flex justify-between my-4">
            <button className="text-stone-600 hover:text-stone-950">{project}</button>
          </li>
        ))}
      </ul>
    );
  }

  return <>{content}</>;
}
