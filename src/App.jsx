import { ExistingCourses } from "./Components/ExistingsCourses";
import { HeroComponents } from "./Components/HeroComponents";
import { NavBar } from "./Components/Navbar";
import { NewCourses } from "./Components/NewCourses";

function App() {
  return (
    <div className="text-center">
      <NavBar />
      <HeroComponents />
      <NewCourses />
      <ExistingCourses />
    </div>
  );
}

export default App;
