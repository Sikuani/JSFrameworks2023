import React, { useState } from "react";

export function CharacterCount() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const characterCount = text.length;

  return (
    <div>
      <textarea rows={4} cols={50} value={text} onChange={handleChange} />
      <p>Character Count: {characterCount}</p>
    </div>
  );
}
