import LandingPage from "./components/LandingPage";
import RenderingProject from "./components/RenderingProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        <RenderingProject/>
        {/* <LandingPage/> */}
      </main>
    </>
  );
}

export default App;
