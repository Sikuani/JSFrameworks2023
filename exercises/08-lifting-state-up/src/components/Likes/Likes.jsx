import React, { useState } from "react";

function Likes() {
  const [numberOfLikes, setLikes] = useState(0);
  return <Child numberOfLikes={numberOfLikes} setLikes={setLikes} />;
}

function Child({ numberOfLikes, setLikes }) {
  return (
    <div>
      <button onClick={() => setLikes(numberOfLikes + 1)}>
        {numberOfLikes} Likes
      </button>
    </div>
  );
}

export default Likes;
