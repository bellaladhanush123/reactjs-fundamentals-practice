import { useState } from "react";

function App() {
  const [likeButton, setLikeButton] = useState(0);

  function onChange() {
    setLikeButton((prevLikes) => prevLikes + 1);
  }

  return (
    <div>
      <h1>Likes: {likeButton}</h1>
      <button onClick={onChange}>Like</button>
    </div>
  );
}

export default App;