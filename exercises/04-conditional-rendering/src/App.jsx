import "./App.css";
import AccordionSection from "./components/AccordionSection";

function App() {
  return (
    <div class="ui styled accordion">{/* Write code here */}
      <div class="title active">
        <i class="dropdown icon"></i>
        Why would anyone use React2?
      </div>
      <div class="content active">
        <p class="transition visible">
          One of the main benefits of using React JS is its potential to reuse
          components. It saves time for developers as they don't have to write various
          codes for the same features. Furthermore, if any changes are made in any
          particular part, it will not affect other parts of the application.
        </p>
      </div>
    
      <div class="title">
        <i class="dropdown icon"></i>
        What is React in simple terms?
      </div>
      <div class="content">
        <p class="transition hidden">
          The Best Guide to Know What Is React [Updated] React is a JavaScript-based
          UI development library. Facebook and an open-source developer community run
          it. Although React is a library rather than a language, it is widely used in
          web development. The library first appeared in May 2013 and is now one of
          the most commonly used frontend libraries for web development.
        </p>
      </div>
    </div>
  );
};

export default App;
