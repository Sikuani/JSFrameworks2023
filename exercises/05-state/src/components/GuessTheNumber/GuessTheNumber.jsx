import React, { useState } from "react";

function GuessTheNumber() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [randomNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function handleInputChange(event) {
    setGuess(event.target.value);
  }

  function handleSubmit(event) {
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
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleInputChange}
          min={1}
          max={10}
        />
        <button type="submit">Submit Guess</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default GuessTheNumber;
