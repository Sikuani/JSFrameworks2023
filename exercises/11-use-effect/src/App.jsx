// Import useEffect here
import { useEffect, useState } from "react";
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
// import Axios (or use Fetch)

function App() {
  /**
   * Set up your state
   */
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // if it's true, data is loading, otherwise data loaded
  const [error, setError] = useState(false);
  const [newQuote, setNewQuote] = useState("");

  /**
   * Make an AJAX call with the useEffect hook
   */

  useEffect(() => {
    // code to execute
    setIsLoading(true);
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data); //setQuote send info to quote
      })
      .catch((error) => setError(true))
      .finally(setIsLoading(false));
  }, [newQuote]); //dependencies array, use to put states (quote, isLoading), if I don't use.. the bucle is infinite.

  return (
    <div className="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div className="container">
        {/* Display a loading message */}
        {isLoading && <p>Loading...</p>}
        {/* Display an error message if the API fails */}
        {error && <p>Oops! there is an error</p>}

        <blockquote
          id="quote"
          className="blockquote bg-dark text-white border-0 mb-4"
        >
          {/* Complete me */}
          {quote} {/* ALWAYS HAVE TO USE BRACES TO JS CODE */}
        </blockquote>
        <button
          className="quoteButton"
          onClick={() => setNewQuote(newQuote + 1)}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
