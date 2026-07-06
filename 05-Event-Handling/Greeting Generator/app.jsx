import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Click the button");

  return (
    <div>
      <h2>{message}</h2>

      <button onClick={() => setMessage("Hello Dhanush!")}>
        Hello
      </button>

      <br />
      <br />

      <button onClick={() => setMessage("Good Morning Dhanush!")}>
        Good Morning
      </button>

      <br />
      <br />

      <button onClick={() => setMessage("Good Night Dhanush!")}>
        Good Night
      </button>
    </div>
  );
}

export default App;