import React, { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  function handleCelsiusChange(event) {
    const value = event.target.value;
    setCelsius(value);
    setFahrenheit(value ? celsiusToFahrenheit(value) : "");
  }

  function handleFahrenheitChange(event) {
    const value = event.target.value;
    setFahrenheit(value);
    setCelsius(value ? fahrenheitToCelsius(value) : "");
  }

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  return (
    <div className="bg-secondary text-white p-4 m-4">
      <h2>Temperature Converter</h2>
      <div>
        <label>Celsius:</label>
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </div>
      <div>
        <label>Fahrenheit:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
}

export default TemperatureConverter;
