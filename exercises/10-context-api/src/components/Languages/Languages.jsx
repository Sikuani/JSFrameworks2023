// Import what you need from React here
import { useContext } from "react";
// Import "TranslatorContext"
import { TranslatorContext } from "../../contexts/TranslatorContext";

function Languages() {
  /**
   * You will need to add something here. This component should be similar to the "CreateAccount" component in the first context API exercise.
   * @see exercises/08a-context-api/src/App.jsx
   * @see solutions/08a-context-api/App.solutions.jsx
   */

  const { setTraslator } = useContext(TranslatorContext);

  return (
    <>
      {/**
       * Modify the button so that when it is clicked, it will change the language in state to "en". For help,
       * @see exercises/08a-context-api/src/App.jsx
       * @see solutions/08a-context-api/App.solutions.jsx
       */}
      <button
        type="button"
        className="btn btn-link btn-sm"
        onClick={() => setTraslator("en")}
      >
        English
      </button>
      |
      {/**
       * Modify the button so that when it is clicked, it will change the language in state to "es".
       */}
      <button
        type="button"
        className="btn btn-link btn-sm"
        onClick={() => setTraslator("es")}
      >
        Español
      </button>
    </>
  );
}

export default Languages;
