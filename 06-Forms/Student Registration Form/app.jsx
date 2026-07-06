import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [rollno, setRollNo] = useState("");
  const [dept, setDept] = useState("");

  function onName(event) {
    setName(event.target.value);
  }

  function onRoll(event) {
    setRollNo(event.target.value);
  }

  function onDept(event) {
    setDept(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={onName}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Roll Number"
        onChange={onRoll}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Department"
        onChange={onDept}
      />

      <hr />

      <h2>Student Details</h2>

      <p>Name : {name}</p>
      <p>Roll Number : {rollno}</p>
      <p>Department : {dept}</p>
    </div>
  );
}

export default App;