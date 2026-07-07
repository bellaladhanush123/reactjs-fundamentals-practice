import { useState } from "react";

function App() {
  const [freeUser, setFreeUser] = useState(false);

  function toggle() {
    setFreeUser(!freeUser);
  }

  return (
    <div>
      <h1>
        Membership: {freeUser ? "Premium User" : "Free User"}
      </h1>

      <button onClick={toggle}>
        Upgrade Membership
      </button>
    </div>
  );
}

export default App;