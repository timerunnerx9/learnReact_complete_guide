import LandingPage from "./components/LandingPage";
import RenderingProject from "./components/RenderingProject";
import Sidebar from "./components/Sidebar";
import NewProjectForm from "./components/NewProjectForm";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        {/* <RenderingProject/> */}
        {/* <LandingPage/> */}
        <NewProjectForm/>
      </main>
    </>
  );
}

export default App;
