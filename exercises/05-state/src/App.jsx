import "./App.css";
// Import LessText here
import LessText from "./components/LessText/LessText";

// Import CharacterCount here
import { CharacterCount } from "./components/CharacterCount/CharacterCount";

//Import GuessTheNumber
import GuessTheNumber from "./components/GuessTheNumber/GuessTheNumber";

import TemperatureConverter from "./components/TemperatureConverter";

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        {/* Add LessText with props here */}

        <div>
          <LessText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nisl sapien, at tincidunt leo posuere sed. Sed eu nisi in elit pulvinar feugiat. Fusce vitae turpis purus. Vestibulum eu consequat turpis."
            maxLength={50}
          />
        </div>
      </div>

      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          {/* Add CharacterCount here */}
          <CharacterCount />
        </div>
      </div>
      <div className="container">
        <h1 className="h3">Challenge 3 - Guessing The Number</h1>
        {/* Add GuessingTheNumber here */}
        <GuessTheNumber />
      </div>

      <div>
        <TemperatureConverter />
      </div>
    </>
  );
}

export default App;
