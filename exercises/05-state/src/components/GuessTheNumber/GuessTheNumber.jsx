import React, { useState } from "react";

function GuessTheNumber() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );

  function generateRandomNumber() {
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
  }

  function handleInputChange(event) {
    setGuess(event.target.value);
  }

  function handleGuessSubmit(event) {
    event.preventDefault();

    if (!guess || isNaN(guess) || guess < 1 || guess > 10) {
      setMessage("Please enter a valid number between 1 and 10.");
      return;
    }

    if (Number(guess) < randomNumber) {
      setMessage(`Too low! The correct number was ${randomNumber}.`);
    } else if (Number(guess) > randomNumber) {
      setMessage(`Too high! The correct number was ${randomNumber}.`);
    } else {
      setMessage("Correct! You win!");
    }

    setGuess("");
    generateRandomNumber();
  }

  const handleRestartGame = (e) => {
    e.preventDefault();

    setGuess("");
    setMessage("");
    generateRandomNumber();
  };

  return (
    <div>
      <form onSubmit={handleGuessSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleInputChange}
          min={1}
          max={10}
        />
        <button onClick={handleGuessSubmit}>Submit Guess</button>
        <p>{message}</p>
        <button onClick={handleRestartGame}>Restart Game</button>
      </form>
    </div>
  );
}

export default GuessTheNumber;
