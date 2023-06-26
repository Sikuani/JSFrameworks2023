import React, { useState } from "react";

function LessText({ text, maxLength }) {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? (
        <>
          {text.slice(0, maxLength)}
          <button onClick={toggleTruncate}>Read More</button>
        </>
      ) : (
        <>
          {text}
          <button onClick={toggleTruncate}>Read Less</button>
        </>
      )}
    </div>
  );
}

export default LessText;
