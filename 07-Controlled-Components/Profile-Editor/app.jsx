import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  function handleFunctionName(event) {
    setName(event.target.value);
  }

  function handleFunctionEmail(event) {
    setEmail(event.target.value);
  }

  function handleFunctionCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={handleFunctionName}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={handleFunctionEmail}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={handleFunctionCity}
      />

      <hr />

      <h1>Profile</h1>

      <h2>Name : {name}</h2>
      <h2>Email : {email}</h2>
      <h2>City : {city}</h2>
    </div>
  );
}

export default App;