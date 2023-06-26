import "./App.css"

// import something here
import Welcome from "./components/Welcome/Welcome";
import Heading from "./components/Heading/Heading";

function App() {
  return (
  <div className="App">
      <Welcome name="Jamal3" /> {/* Renders "Hello Jamal" */}
      <Welcome /> {/* Renders "Hello user" */}
      <Heading>Welcome to my React App!</Heading>
      <Heading>Welcome to my JS!</Heading>
  </div>
  );
};

export default App;
