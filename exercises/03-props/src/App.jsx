<<<<<<< HEAD
import "./App.css";
// import something here
import Welcome from "./components/Welcome/Welcome";
import Heading from "./components/Heading/Heading";

function App() {
  return (
  <div className="App">
      <Welcome name="Jamal" /> {/* Renders "Hello Jamal" */}
      <Welcome /> {/* Renders "Hello user" */}
      <Heading>Welcome to my React App!</Heading>
  </div>
  );
};
=======
import './App.css';

import { Heading } from './components/Heading/Heading';
import { Welcome } from './components/Heading/welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Heading>Welcome to my React App</Heading>
      <Welcome name="Ariadna" />
      <Welcome />
    </div>
  );
}
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb

export default App;
