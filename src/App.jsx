import Header from "./Components/Header";
import Main from "./Components/Main";

function App({ skills, projects }) {
  return (
    <div className="wrapper">
      <Header />
      <Main skills={skills} projects={projects} />
    </div>
  );
}

export default App;
